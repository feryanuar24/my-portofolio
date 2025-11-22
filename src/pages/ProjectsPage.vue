<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { db, collection, getDocs } from '../firebase'

interface Project {
  id: string
  thumbnail?: string
  title?: string
  description?: string
  screenshots?: string[]
}

const projects = ref<Project[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'projects'))
    projects.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Project, 'id'>),
    }))
  } catch (error) {
    console.error('Error loading projects:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main
    class="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-6 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1
          class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4"
        >
          My Projects
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          A collection of projects I've worked on
        </p>
      </div>

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
          <p class="text-gray-600 dark:text-gray-400 text-lg">Loading projects...</p>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else-if="projects.length === 0" class="text-center py-20">
        <div
          class="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-gray-400 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Projects Yet</h3>
        <p class="text-gray-600 dark:text-gray-400">Check back soon for new projects!</p>
      </div>

      <!-- Projects Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link
          :to="'/project/' + project.id"
          v-for="project in projects"
          :key="project.id"
          class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
        >
          <!-- Project Thumbnail -->
          <div class="relative overflow-hidden aspect-video bg-gray-200 dark:bg-gray-700">
            <img
              :src="project.thumbnail"
              :alt="project.title || 'Project thumbnail'"
              class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              loading="lazy"
            />
            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <div class="absolute bottom-4 left-4 right-4">
                <span class="inline-flex items-center gap-2 text-white font-semibold">
                  View Details
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-6">
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300"
            >
              {{ project.title || 'Untitled Project' }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 line-clamp-3">
              {{ project.description || 'No description available' }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
