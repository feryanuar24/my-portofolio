<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { doc, getDoc } from 'firebase/firestore'
import type { DocumentData } from 'firebase/firestore'
import { db } from '../firebase'

const route = useRoute()
const router = useRouter()

const project = ref<DocumentData | null>(null)
const loading = ref(true)
const selectedImage = ref<string | null>(null)

const loadProject = async () => {
  const id = route.params.id as string | undefined
  if (!id) {
    project.value = null
    loading.value = false
    return
  }

  try {
    const refDoc = doc(db, 'projects', id)
    const snap = await getDoc(refDoc)

    if (snap.exists()) {
      project.value = snap.data()
    } else {
      project.value = null
    }
  } catch (error) {
    console.error('Error loading project:', error)
    project.value = null
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadProject()
})

function openLightbox(image: string) {
  selectedImage.value = image
}

function closeLightbox() {
  selectedImage.value = null
}
</script>

<template>
  <main
    class="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-6 transition-colors duration-300"
  >
    <div class="max-w-6xl mx-auto">
      <!-- Back Button -->
      <button
        @click="router.push('/projects')"
        class="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow hover:shadow-lg transform hover:-translate-x-1 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Projects
      </button>

      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-20">
        <div class="flex flex-col items-center gap-4">
          <svg
            class="animate-spin h-12 w-12 text-blue-600 dark:text-blue-400"
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
          <p class="text-gray-600 dark:text-gray-400 text-lg">Loading project details...</p>
        </div>
      </div>

      <!-- Not Found State -->
      <div v-else-if="!project" class="text-center py-20">
        <div
          class="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-red-600 dark:text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Project Not Found</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          The project you're looking for doesn't exist.
        </p>
        <button
          @click="router.push('/projects')"
          class="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
        >
          View All Projects
        </button>
      </div>

      <!-- Project Content -->
      <div v-else class="space-y-8">
        <!-- Project Header -->
        <article class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <!-- Hero Image -->
          <div class="relative aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden group">
            <img
              :src="project.thumbnail"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent">
              <div class="absolute bottom-8 left-8 right-8">
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">
                  {{ project.title }}
                </h1>
              </div>
            </div>
          </div>

          <!-- Project Description -->
          <div class="p-8 md:p-12">
            <div class="flex items-start gap-4 mb-6">
              <div
                class="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  About This Project
                </h2>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {{ project.description }}
                </p>
              </div>
            </div>
          </div>
        </article>

        <!-- Screenshots Gallery -->
        <article
          v-if="project.images && project.images.length"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div class="flex items-center gap-3 mb-8">
            <div
              class="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Screenshots</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(img, index) in project.images"
              :key="index"
              @click="openLightbox(img)"
              class="group relative aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <img
                :src="img"
                :alt="`Screenshot ${index + 1}`"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                loading="lazy"
              />
              <!-- Overlay -->
              <div
                class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Lightbox -->
    <div
      v-if="selectedImage"
      @click="closeLightbox"
      class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
    >
      <button
        @click.stop="closeLightbox"
        class="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <img
        :src="selectedImage"
        @click.stop
        class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        alt="Full size screenshot"
      />
    </div>
  </main>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>
