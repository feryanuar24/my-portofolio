<template>
  <!-- Main Container -->
  <div class="relative h-screen w-screen overflow-hidden bg-[#0a0a0a] font-syne text-[#e0e0e0]">
    <!-- Komponen 3D Wajah Anda di Tengah -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 z-0 h-screen w-screen -translate-x-1/2 -translate-y-1/2"
    >
      <!-- <FaceComponenet /> -->
    </div>

    <!-- Logo / Nama Kecil -->
    <div
      class="mix-blend-difference absolute left-1/2 top-8 z-10 -translate-x-1/2 text-xl font-extrabold tracking-[0.2em]"
    >
      FERYANUAR.
    </div>

    <!-- Navigasi Teks Besar (Maximalist Typography) -->
    <nav class="pointer-events-none absolute inset-0 z-10 h-full w-full">
      <!-- WHO: Top Left -->
      <h1
        class="w-3/4 pointer-events-auto absolute left-0 top-20 m-0 origin-top-left p-8 font-anton text-9xl uppercase leading-none text-[#e0e0e0] transition-all duration-500 ease-out hover:scale-105 hover:text-transparent hover:[-webkit-text-stroke:2px_#e0e0e0]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>

      <!-- WORKS: Top Right -->
      <h2
        class="pointer-events-auto absolute right-0 top-20 m-0 origin-top-right cursor-pointer p-8 font-anton text-8xl uppercase leading-none text-[#e0e0e0] transition-all duration-500 ease-out hover:scale-105 hover:text-transparent hover:[-webkit-text-stroke:2px_#e0e0e0]"
        @click="goToWork"
      >
        WORKS
      </h2>

      <!-- WHO: Top Left -->
      <h2
        class="pointer-events-auto absolute left-0 bottom-50 m-0 origin-top-left cursor-pointer p-8 font-anton text-8xl uppercase leading-none text-[#e0e0e0] transition-all duration-500 ease-out hover:scale-105 hover:text-transparent hover:[-webkit-text-stroke:2px_#e0e0e0]"
        @click="goToWho"
      >
        WHO
      </h2>

      <!-- I Like ... -->
      <div class="pointer-events-auto absolute right-0 bottom-50 m-0 origin-top-right p-8">
        <h2
          class="font-anton text-8xl uppercase leading-none text-[#e0e0e0] transition-all duration-500 ease-out hover:scale-105 hover:text-transparent hover:[-webkit-text-stroke:2px_#e0e0e0]"
        >
          {{ displayText }}
        </h2>
      </div>

      <!-- STACK: Bottom Left -->
      <h2
        class="pointer-events-auto absolute bottom-0 left-0 m-0 origin-bottom-left cursor-pointer p-8 font-anton text-8xl uppercase leading-none text-[#e0e0e0] transition-all duration-500 ease-out hover:scale-105 hover:text-transparent hover:[-webkit-text-stroke:2px_#e0e0e0]"
        @click="openModal('STACK')"
      >
        STACK
      </h2>

      <!-- HELLO: Bottom Right -->
      <h2
        class="pointer-events-auto absolute bottom-0 right-0 m-0 origin-bottom-right cursor-pointer p-8 font-anton text-8xl uppercase leading-none text-[#e0e0e0] transition-all duration-500 ease-out hover:scale-105 hover:text-transparent hover:[-webkit-text-stroke:2px_#e0e0e0]"
        @click="openModal('HELLO')"
      >
        HELLO
      </h2>
    </nav>

    <!-- Transisi Modal Fullscreen -->
    <transition name="slide-up">
      <div
        v-if="activeModal"
        class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-md text-[#e0e0e0]"
      >
        <!-- Tombol Close -->
        <button
          class="absolute right-10 top-10 bg-transparent text-2xl font-bold cursor-pointer transition-opacity duration-300 hover:opacity-50"
          @click="closeModal"
        >
          CLOSE [X]
        </button>

        <!-- Konten Modal -->
        <div class="text-center">
          <h2
            class="mb-5 font-anton text-[8rem] tracking-[5px] text-transparent [-webkit-text-stroke:2px_#e0e0e0]"
          >
            {{ activeModal }}
          </h2>
          <p class="text-xl">
            Konten detail untuk kategori {{ activeModal }} akan dirender di sini.
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import likesArray from '@/data/likes'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
// import FaceComponenet from '../components/FaceComponent.vue'

const router = useRouter()

const activeModal = ref<string | null>(null)
const displayText = ref(likesArray[0])

let mainIntervalId: ReturnType<typeof setInterval> | null = null
let scrambleIntervalId: ReturnType<typeof setInterval> | null = null
const randomCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+'

const openModal = (section: string) => {
  activeModal.value = section
}

const closeModal = () => {
  activeModal.value = null
}

const goToWork = () => {
  router.push({ name: 'Projects' })
}

const goToWho = () => {
  router.push({ name: 'About' })
}

const scrambleText = (newText: string) => {
  let iteration = 0

  clearInterval(scrambleIntervalId || 0)

  scrambleIntervalId = setInterval(() => {
    displayText.value = newText
      .split('')
      .map((letter, index) => {
        if (letter === ' ') return ' '

        if (index < iteration) {
          return newText[index]
        }

        return randomCharacters[Math.floor(Math.random() * randomCharacters.length)]
      })
      .join('')

    if (iteration >= newText.length) {
      clearInterval(scrambleIntervalId || 0)
    }

    iteration += 1 / 3
  }, 30)
}

onMounted(() => {
  let currentIndex = 0

  mainIntervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % likesArray.length
    scrambleText(likesArray[currentIndex] || '')
  }, 3500)
})

onUnmounted(() => {
  clearInterval(mainIntervalId || 0)
  clearInterval(scrambleIntervalId || 0)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Syne:wght@400;700;800&display=swap');

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(100%);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
