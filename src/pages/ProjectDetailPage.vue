<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'

interface Project {
  id: string
  thumbnail?: string
  title?: string
  description?: string
  role?: string
  year?: string
  techStack?: string[]
  images?: string[]
}

const route = useRoute()
const router = useRouter()
const project = ref<Project | null>(null)
const loading = ref(true)

onMounted(async () => {
  loading.value = true
  try {
    const docRef = doc(db, 'projects', route.params.id as string)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      project.value = { id: docSnap.id, ...docSnap.data() } as Project
    } else {
      console.error('Project not found!')
    }
  } catch (error) {
    console.error('Error loading project details:', error)
  } finally {
    loading.value = false
  }
})

const goBack = () => {
  router.back()
}

// Referensi ke container scroll
const scrollContainer = ref<HTMLElement | null>(null)

// Variabel untuk logika drag-to-scroll
let isDown = false
let startX = 0
let scrollLeft = 0

const onMouseDown = (e: MouseEvent) => {
  isDown = true
  if (scrollContainer.value) {
    scrollContainer.value.classList.add('cursor-grabbing')
    startX = e.pageX - scrollContainer.value.offsetLeft
    scrollLeft = scrollContainer.value.scrollLeft
  }
}

const onMouseLeave = () => {
  isDown = false
  if (scrollContainer.value) {
    scrollContainer.value.classList.remove('cursor-grabbing')
  }
}

const onMouseUp = () => {
  isDown = false
  if (scrollContainer.value) {
    scrollContainer.value.classList.remove('cursor-grabbing')
  }
}

const onMouseMove = (e: MouseEvent) => {
  if (!isDown || !scrollContainer.value) return
  e.preventDefault() // Mencegah highlight teks/gambar bawaan browser saat ditarik
  const x = e.pageX - scrollContainer.value.offsetLeft
  const walk = (x - startX) * 2 // Angka 2 adalah kecepatan seret (bisa disesuaikan)
  scrollContainer.value.scrollLeft = scrollLeft - walk
}

// Fungsi untuk tombol panah (opsional)
const scrollByButton = (direction: 'left' | 'right') => {
  if (scrollContainer.value) {
    const scrollAmount = window.innerWidth * 0.5 // Geser sejauh setengah layar
    scrollContainer.value.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <!-- Custom selection color untuk memperkuat tema -->
  <main
    class="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-syne selection:bg-[#e0e0e0] selection:text-[#0a0a0a] overflow-x-hidden"
  >
    <!-- Loading State: Anti-mainstream glitchy text -->
    <div v-if="loading" class="h-screen w-full flex items-center justify-center">
      <h1
        class="font-anton text-6xl md:text-8xl uppercase animate-pulse tracking-widest text-transparent [-webkit-text-stroke:2px_#e0e0e0]"
      >
        Loading...
      </h1>
    </div>

    <!-- Content -->
    <div v-else-if="project" class="pb-24">
      <!-- Minimalist Nav -->
      <nav
        class="w-full p-6 flex justify-between items-center border-b border-gray-800 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50"
      >
        <button
          @click="goBack"
          class="cursor-pointer group flex items-center gap-4 font-anton text-xl uppercase tracking-widest hover:text-white transition-colors"
        >
          <span class="w-8 h-1 bg-[#e0e0e0] group-hover:w-12 transition-all duration-300"></span>
          Back to Archive
        </button>
        <div class="text-sm uppercase tracking-[0.3em] text-gray-500">
          {{ project.year || '202X' }}
        </div>
      </nav>

      <!-- Hero Section: Giant Typography -->
      <header class="px-6 pt-20 pb-12">
        <h1
          class="font-anton text-[15vw] leading-[0.8] uppercase tracking-tight text-[#e0e0e0] work-break-words hyphens-auto"
        >
          {{ project.title }}
        </h1>
      </header>

      <!-- Layout Asimetris: Gambar Utama & Dossier Metadata -->
      <section class="px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-gray-800 pt-8">
        <!-- Kolom Kiri: Thumbnail Raksasa -->
        <div class="lg:col-span-8 group relative overflow-hidden bg-[#111]">
          <img
            :src="project.thumbnail"
            :alt="project.title"
            class="w-full h-full object-cover min-h-[50vh] filter grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
          />
          <div
            class="absolute top-4 right-4 bg-[#0a0a0a] border border-gray-600 px-4 py-1 font-anton uppercase text-xs tracking-widest"
          >
            Fig. 01 — Cover
          </div>
        </div>

        <!-- Kolom Kanan: The "Dossier" -->
        <div class="lg:col-span-4 flex flex-col justify-between space-y-12">
          <!-- Description -->
          <div>
            <p
              v-html="project.description"
              class="text-2xl md:text-3xl font-light leading-snug"
            ></p>
          </div>
        </div>
      </section>

      <!-- Horizontal Filmstrip for Images -->
      <section v-if="project.images && project.images.length > 0" class="mt-32">
        <div class="px-6 mb-8 flex items-end justify-between border-b border-gray-800 pb-4">
          <h2
            class="font-anton text-4xl md:text-6xl uppercase tracking-wider text-transparent [-webkit-text-stroke:1px_#e0e0e0]"
          >
            Gallery / Index
          </h2>

          <!-- Custom Navigation Controls -->
          <div class="flex gap-4">
            <button
              @click="scrollByButton('left')"
              class="p-2 border border-gray-800 hover:border-[#e0e0e0] hover:bg-[#e0e0e0] hover:text-[#0a0a0a] transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button
              @click="scrollByButton('right')"
              class="p-2 border border-gray-800 hover:border-[#e0e0e0] hover:bg-[#e0e0e0] hover:text-[#0a0a0a] transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Scrollable Container dengan Mouse Events -->
        <div
          ref="scrollContainer"
          class="flex gap-8 overflow-x-auto px-6 pb-12 no-scrollbar cursor-grab active:cursor-grabbing"
          @mousedown="onMouseDown"
          @mouseleave="onMouseLeave"
          @mouseup="onMouseUp"
          @mousemove="onMouseMove"
        >
          <!-- Mencegah drag-and-drop bawaan browser pada gambar dengan pointer-events-none -->
          <div
            v-for="(img, index) in project.images"
            :key="index"
            class="shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] md:h-[70vh] bg-[#111] relative group border border-gray-900 select-none"
          >
            <img
              :src="img"
              :alt="'Screenshot ' + (index + 1)"
              draggable="false"
              class="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
            />
            <div
              class="absolute bottom-6 left-6 font-anton text-5xl text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] pointer-events-none"
            >
              0{{ index + 1 }}
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Error State -->
    <div v-else class="h-screen flex flex-col items-center justify-center gap-6">
      <h1 class="font-anton text-8xl text-red-500">404</h1>
      <p class="font-syne text-xl">Project Data Corrupted or Missing.</p>
      <button
        @click="goBack"
        class="mt-4 border border-[#e0e0e0] px-6 py-3 font-anton uppercase hover:bg-[#e0e0e0] hover:text-[#0a0a0a] transition-colors"
      >
        Return Home
      </button>
    </div>
  </main>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
