<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'

interface Project {
  id: string
  thumbnail?: string
  title?: string
  description?: string
  screenshots?: string[]
  aspectClass?: string
}

const projects = ref<Project[]>([])
const loading = ref(false)

const aspectRatios = [
  'aspect-[4/3]',
  'aspect-[3/4]',
  'aspect-square',
  'aspect-video',
  'aspect-[16/10]',
]

onMounted(async () => {
  loading.value = true
  try {
    const querySnapshot = await getDocs(collection(db, 'projects'))
    projects.value = querySnapshot.docs.map((doc) => {
      const randomAspect = aspectRatios[Math.floor(Math.random() * aspectRatios.length)]

      return {
        id: doc.id,
        aspectClass: randomAspect,
        ...(doc.data() as Omit<Project, 'id'>),
      }
    })
  } catch (error) {
    console.error('Error loading projects:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <!-- Tema Main diterapkan di container terluar -->
  <main
    class="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-syne py-20 px-6 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16 space-y-4">
        <!-- Tema Secondary (Anton) untuk Judul -->
        <h1 class="text-5xl md:text-7xl uppercase tracking-wide font-anton text-[#e0e0e0]">
          My Projects
        </h1>
        <p class="text-lg md:text-xl text-gray-400 font-light">
          A collection of projects I've worked on
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-20">
        <div class="flex flex-col items-center gap-4">
          <svg
            class="animate-spin h-12 w-12 text-[#e0e0e0]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p class="text-gray-400 text-lg tracking-widest uppercase">Loading projects...</p>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else-if="projects.length === 0" class="text-center py-20">
        <div
          class="w-24 h-24 border border-gray-800 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 class="text-3xl font-anton text-[#e0e0e0] uppercase mb-2">No Projects Yet</h3>
        <p class="text-gray-500">Check back soon for new projects!</p>
      </div>

      <!-- Projects Gallery (Masonry Layout) -->
      <div v-else class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <router-link
          :to="'/project/' + project.id"
          v-for="project in projects"
          :key="project.id"
          class="block group break-inside-avoid bg-[#111111] border border-gray-900 overflow-hidden hover:border-gray-500 transition-all duration-500"
        >
          <!-- Project Thumbnail dengan Aspect Ratio Acak -->
          <div :class="['relative overflow-hidden bg-[#1a1a1a]', project.aspectClass]">
            <img
              :src="project.thumbnail"
              :alt="project.title || 'Project thumbnail'"
              class="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-60 transition duration-700 ease-in-out"
              loading="lazy"
            />

            <!-- Overlay Minimalis -->
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <span
                class="px-6 py-2 border border-[#e0e0e0] text-[#e0e0e0] font-anton uppercase tracking-widest text-sm bg-[#0a0a0a]/50 backdrop-blur-sm"
              >
                View Project
              </span>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-6">
            <h3
              class="text-2xl font-anton uppercase text-[#e0e0e0] mb-3 group-hover:text-white transition duration-300"
            >
              {{ project.title || 'Untitled Project' }}
            </h3>
            <p
              v-html="project.description || 'No description available'"
              class="text-gray-400 font-light text-sm line-clamp-3 leading-relaxed"
            ></p>
          </div>
        </router-link>
      </div>
    </div>
  </main>
</template>
