<template>
  <div ref="containerRef" class="face-tracker">
    <div v-if="status === 'loading'" class="face-tracker__status">Memuat model wajah...</div>
    <div v-else-if="status === 'error'" class="face-tracker__status face-tracker__status--error">
      Gagal memuat {{ modelUrl }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const props = defineProps({
  modelUrl: { type: String, default: '/assets/models/face.glb' },
  zoom: { type: Number, default: 1 },
  maxYaw: { type: Number, default: 28 },
  maxPitch: { type: Number, default: 16 },
  smoothing: { type: Number, default: 0.08 },
  trackTarget: { type: String, default: 'window' },
  invertYaw: { type: Boolean, default: false },
  invertPitch: { type: Boolean, default: false },
  yawOffset: { type: Number, default: 0 },
  backgroundColor: { type: String, default: 'transparent' },
})

const containerRef = ref<HTMLElement | null>(null)
const status = ref('loading')

let scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  resizeObserver: ResizeObserver | null = null
let model: THREE.Group | null = null
let headBone: THREE.Bone | null = null
let neckBone: THREE.Bone | null = null
let animationId: number | null = null

let targetYaw = 0
let targetPitch = 0
let currentYaw = 0
let currentPitch = 0
let baseYaw = 0
let lastPointerTime = 0

function degToRad(d: number) {
  return (d * Math.PI) / 180
}

function findBone(root: THREE.Object3D, pattern: RegExp): THREE.Bone | null {
  let found: THREE.Bone | null = null
  root.traverse((obj) => {
    if (!found && obj instanceof THREE.Bone && pattern.test(obj.name)) {
      found = obj
    }
  })
  return found
}

function frameModel(object3d: THREE.Object3D) {
  const box = new THREE.Box3().setFromObject(object3d)
  const size = box.getSize(new THREE.Vector3())
  const center = box.getCenter(new THREE.Vector3())

  object3d.position.x -= center.x
  object3d.position.y -= center.y
  object3d.position.z -= center.z

  const maxDim = Math.max(size.x, size.y, size.z) || 1
  const fovRad = degToRad(camera.fov)
  const fillRatio = 0.85 * props.zoom
  const distance = maxDim / fillRatio / (2 * Math.tan(fovRad / 2))

  camera.position.set(0, 0, distance)
  camera.near = Math.max(distance / 100, 0.01)
  camera.far = distance * 100
  camera.updateProjectionMatrix()
}

function updateTargetFromPointer(clientX: number, clientY: number) {
  let nx: number, ny: number
  if (props.trackTarget === 'element' && containerRef.value) {
    const rect = containerRef.value.getBoundingClientRect()
    nx = ((clientX - rect.left) / rect.width) * 2 - 1
    ny = ((clientY - rect.top) / rect.height) * 2 - 1
  } else {
    nx = (clientX / window.innerWidth) * 2 - 1
    ny = (clientY / window.innerHeight) * 2 - 1
  }
  const deadZone = 0.08
  const shape = (value: number) => {
    const direction = Math.sign(value)
    const magnitude = THREE.MathUtils.clamp((Math.abs(value) - deadZone) / (1 - deadZone), 0, 1)
    return direction * magnitude * magnitude * (3 - 2 * magnitude)
  }

  nx = shape(THREE.MathUtils.clamp(nx, -1, 1)) * (props.invertYaw ? -1 : 1)
  ny = shape(THREE.MathUtils.clamp(ny, -1, 1)) * (props.invertPitch ? -1 : 1)

  targetYaw = nx * degToRad(props.maxYaw)
  targetPitch = ny * degToRad(props.maxPitch)
}

function onPointerMove(e: PointerEvent) {
  lastPointerTime = performance.now()
  updateTargetFromPointer(e.clientX, e.clientY)
}

function onPointerLeaveWindow() {
  targetYaw = 0
  targetPitch = 0
}

function initThree() {
  const el = containerRef.value

  if (!el) return

  const width = el?.clientWidth || 1
  const height = el?.clientHeight || 1

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100)
  camera.position.set(0, 0, 3)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  if (props.backgroundColor !== 'transparent') {
    renderer.setClearColor(new THREE.Color(props.backgroundColor), 1)
  } else {
    renderer.setClearColor(0x000000, 0)
  }
  el?.appendChild(renderer.domElement)

  scene.add(new THREE.AmbientLight(0xffffff, 0.7))
  const key = new THREE.DirectionalLight(0xffffff, 1.4)
  key.position.set(1.5, 2, 3)
  scene.add(key)
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.5)
  fillLight.position.set(-2, 0.5, 1)
  scene.add(fillLight)
  const rim = new THREE.DirectionalLight(0xffffff, 0.6)
  rim.position.set(0, 1, -3)
  scene.add(rim)

  loadModel()

  resizeObserver = new ResizeObserver(() => handleResize())
  resizeObserver.observe(el)

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('pointerleave', onPointerLeaveWindow)

  animate()
}

function loadModel() {
  const loader = new GLTFLoader()
  loader.load(
    props.modelUrl,
    (gltf) => {
      model = gltf.scene
      baseYaw = degToRad(props.yawOffset)
      model.rotation.y = baseYaw // koreksi arah hadap dulu...
      scene.add(model)
      frameModel(model) // ...baru hitung ulang bounding box & posisikan di tengah

      headBone = findBone(model, /head/i)
      neckBone = findBone(model, /neck/i)

      status.value = 'ready'
    },
    undefined,
    (err) => {
      console.error('[FaceCursorTracker] gagal memuat model:', err)
      status.value = 'error'
    },
  )
}

function handleResize() {
  const el = containerRef.value
  if (!el || !renderer || !camera) return
  const width = el.clientWidth || 1
  const height = el.clientHeight || 1
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

function animate() {
  animationId = requestAnimationFrame(animate)

  const timeSincePointerMove = performance.now() - lastPointerTime
  const smoothing = timeSincePointerMove > 1200 ? props.smoothing * 0.65 : props.smoothing
  currentYaw += (targetYaw - currentYaw) * smoothing
  currentPitch += (targetPitch - currentPitch) * smoothing

  if (headBone) {
    headBone.rotation.y = currentYaw * 0.7
    headBone.rotation.x = currentPitch * 0.7
    if (neckBone) {
      neckBone.rotation.y = currentYaw * 0.3
      neckBone.rotation.x = currentPitch * 0.3
    }
  } else if (model) {
    model.rotation.y = baseYaw + currentYaw
    model.rotation.x = currentPitch
  }

  renderer.render(scene, camera)
}

function disposeScene() {
  if (!scene) return
  scene.traverse((obj) => {
    if (obj instanceof THREE.Mesh && obj.geometry) {
      obj.geometry.dispose()
    }
    if (obj instanceof THREE.Material) {
      const materials = Array.isArray(obj) ? obj : [obj]
      materials.forEach((m) => {
        Object.values(m).forEach((v) => {
          if (v && v instanceof THREE.Texture) {
            v.dispose()
          }
        })
        m.dispose()
      })
    }
  })
}

onMounted(() => {
  initThree()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId || 0)
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerleave', onPointerLeaveWindow)
  if (resizeObserver) resizeObserver.disconnect()
  disposeScene()
  if (renderer) {
    renderer.dispose()
    renderer.domElement.remove()
  }
})

watch(
  () => props.modelUrl,
  () => {
    if (model) scene.remove(model)
    status.value = 'loading'
    loadModel()
  },
)
</script>

<style scoped>
.face-tracker {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 320px;
}

.face-tracker :deep(canvas) {
  display: block;
  width: 100%;
  height: 100%;
}

.face-tracker__status {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui, sans-serif;
  font-size: 0.9rem;
  color: #8a8a8a;
  pointer-events: none;
}

.face-tracker__status--error {
  color: #d9534f;
}
</style>
