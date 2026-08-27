<template>
  <div
    class="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#050505] font-syne text-white"
  >
    <!-- Judul Latar Belakang -->
    <h1
      class="absolute top-10 text-center font-anton text-6xl tracking-widest text-white/10 uppercase"
    >
      Core Arsenal
    </h1>

    <!-- 3D Scene Wrapper -->
    <!-- perspective-[1000px] adalah kunci utama agar elemen di dalamnya memiliki efek kedalaman 3D ruang -->
    <div
      class="carousel-scene relative flex h-full w-full cursor-grab items-center justify-center touch-none active:cursor-grabbing"
      @pointerdown="startDragging"
      @pointermove="dragCarousel"
      @pointerup="stopDragging"
      @pointercancel="stopDragging"
    >
      <!-- Poros Putar (Carousel Track) -->
      <!-- rotate-x-[-10deg] membuat cincin miring sedikit agar kedalamannya terlihat dari atas -->
      <div
        class="carousel-track relative flex h-44 w-72 items-center justify-center transform-3d [-webkit-transform-style:preserve-3d]"
        :style="trackStyle"
      >
        <!-- Daftar Tech Stack Anda -->
        <div
          v-for="(tech, index) in techStack"
          :key="index"
          class="carousel-item absolute flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-white/20 bg-black/50 px-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-900/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          :style="getCardStyle(index)"
        >
          <!-- Nama Stack -->
          <h2
            class="max-w-full wrap-break-word font-anton text-3xl uppercase tracking-wider text-transparent [-webkit-text-stroke:1px_#e0e0e0] group-hover:[-webkit-text-stroke:0px] group-hover:text-cyan-400"
          >
            {{ tech.name }}
          </h2>
          <!-- Kategori Stack -->
          <p class="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">
            {{ tech.category }}
          </p>
        </div>
      </div>
    </div>

    <!-- Instruksi Interaksi -->
    <p class="absolute bottom-10 animate-pulse text-xs tracking-[0.2em] text-white/30">
      [ HOLD AND SWIPE TO ROTATE ]
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed, onUnmounted, ref } from 'vue'

const techStack = ref([
  { name: 'Laravel/CI', category: 'Fullstack' },
  { name: 'TailwindCSS/Bootstrap', category: 'Frontend' },
  { name: 'React.js/Vue.js/Angular', category: 'Frontend' },
  { name: 'Next.js/Nuxt.js', category: 'Frontend' },
  { name: 'Kotlin/Jetpack Compose', category: 'Mobile' },
  { name: 'Flutter/React Native', category: 'MultiPlatform' },
  { name: 'Node.js/Express.js', category: 'Backend' },
  { name: 'C#/.NET', category: 'Backend' },
  { name: 'Go/Gin', category: 'Backend' },
  { name: 'Python/Django/Flask', category: 'Backend' },
  { name: 'SQL/NoSQL', category: 'Database' },
  { name: 'Docker/Kubernetes', category: 'Infrastructure' },
  { name: 'DevOps/MLOps/Cloud', category: 'Infrastructure' },
])

const rotation = ref(0)
const isDragging = ref(false)
let lastPointerX = 0
let lastPointerTime = 0
let rotationVelocity = 0
let momentumFrame: number | undefined

const trackStyle = computed(() => ({
  transform: `rotateX(-10deg) rotateY(${rotation.value}deg)`,
}))

const stopMomentum = () => {
  if (momentumFrame !== undefined) {
    cancelAnimationFrame(momentumFrame)
    momentumFrame = undefined
  }
}

const applyMomentum = () => {
  rotation.value += rotationVelocity
  rotationVelocity *= 0.95

  if (Math.abs(rotationVelocity) > 0.01) {
    momentumFrame = requestAnimationFrame(applyMomentum)
  } else {
    rotationVelocity = 0
    momentumFrame = undefined
  }
}

const startDragging = (event: PointerEvent) => {
  stopMomentum()
  isDragging.value = true
  lastPointerX = event.clientX
  lastPointerTime = event.timeStamp
  rotationVelocity = 0
  ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
}

const dragCarousel = (event: PointerEvent) => {
  if (!isDragging.value) return

  const elapsed = Math.max(event.timeStamp - lastPointerTime, 1)
  const distance = event.clientX - lastPointerX
  rotation.value += distance * 0.35
  rotationVelocity = (distance * 0.35) / elapsed
  lastPointerX = event.clientX
  lastPointerTime = event.timeStamp
}

const stopDragging = (event: PointerEvent) => {
  if (!isDragging.value) return

  isDragging.value = false
  const target = event.currentTarget as HTMLElement
  if (target.hasPointerCapture(event.pointerId)) {
    target.releasePointerCapture(event.pointerId)
  }
  stopMomentum()
  momentumFrame = requestAnimationFrame(applyMomentum)
}

onUnmounted(stopMomentum)

const getCardStyle = (index: number) => {
  const totalItems = techStack.value.length
  const angle = (360 / totalItems) * index

  return {
    transform: `rotateY(${angle}deg) translateZ(var(--carousel-radius))`,
  }
}
</script>

<style scoped>
.carousel-track {
  --carousel-radius: 620px;
}

.carousel-scene {
  perspective: 1000px;
}

/* Memastikan child dari elemen 3D juga di-render secara 3D */
.carousel-item {
  /* Backface visibility memastikan teks tidak terlihat terbalik saat berada di sisi belakang cincin */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

@media (max-width: 640px) {
  .carousel-track {
    --carousel-radius: 430px;
    height: 9.5rem;
    width: 13rem;
  }

  .carousel-item {
    padding-inline: 0.75rem;
  }
}
</style>
