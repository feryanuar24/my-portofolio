<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useProfileStore } from '@/stores/profile'

const profileStore = useProfileStore()
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 300)
})
</script>

<template>
  <main
    class="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
  >
    <!-- Hero Section -->
    <Transition
      appear
      enter-active-class="transition-all duration-700 ease-out"
      enter-from-class="opacity-0 translate-y-8"
      enter-to-class="opacity-100 translate-y-0"
    >
      <section v-if="isVisible" class="relative overflow-hidden py-20 px-6 md:px-10">
        <!-- Background -->
        <div
          class="absolute top-0 left-0 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-pulse"
        ></div>
        <div
          class="absolute top-0 right-0 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-pulse [animation-delay:2s]"
        ></div>
        <div
          class="absolute bottom-0 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-pulse [animation-delay:4s]"
        ></div>

        <!-- Content -->
        <div class="relative max-w-6xl mx-auto">
          <!-- Profile Image -->
          <div class="flex justify-center mb-8">
            <div class="relative group">
              <div
                class="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"
              ></div>
              <img
                src="/images/avatars/profile.jpg"
                alt="Foto Profil"
                class="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl transform group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          <!-- Name and Address -->
          <Transition
            appear
            enter-active-class="transition-opacity duration-300 delay-150 ease-in-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
          >
            <h1
              v-if="isVisible"
              class="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4"
            >
              {{ profileStore.profile.name }}
            </h1>
          </Transition>
          <a
            :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profileStore.profile.address)}`"
            target="_blank"
            class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors delay-150 duration-300 ease-in-out text-center text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            {{ profileStore.profile.address }}
          </a>

          <!-- Contact Section -->
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <a
              :href="`tel:${profileStore.profile.phone}`"
              class="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-blue-600 dark:text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <span
                class="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition"
                >{{ profileStore.profile.phone }}</span
              >
            </a>

            <a
              :href="`mailto:${profileStore.profile.email}`"
              class="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-red-600 dark:text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span
                class="text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition"
                >{{ profileStore.profile.email }}</span
              >
            </a>

            <a
              :href="profileStore.profile.linkedin"
              target="_blank"
              class="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-blue-700 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
              <span
                class="text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition"
                >LinkedIn</span
              >
            </a>

            <a
              :href="profileStore.profile.github"
              target="_blank"
              class="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-800 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              <span
                class="text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition"
                >GitHub</span
              >
            </a>
          </div>
        </div>
      </section>
    </Transition>

    <!-- Professional Summary -->
    <section id="summary" class="py-16 px-6 md:px-10">
      <div class="max-w-4xl mx-auto">
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition duration-300"
        >
          <article>
            <h2
              class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
            >
              <span class="w-2 h-10 bg-linear-to-b from-blue-600 to-purple-600 rounded-full"></span>
              Professional Summary
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {{ profileStore.profile.summary }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Technical Skills -->
    <section class="py-16 px-6 md:px-10 bg-gray-50 dark:bg-gray-800/50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Technical Skills
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Web Development -->
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  class="size-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Web Development</h3>
            </div>
            <ul class="space-y-2">
              <li
                v-for="skill in profileStore.profile.skills.web"
                :key="skill"
                class="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                {{ skill }}
              </li>
            </ul>
          </article>

          <!-- Mobile Development -->
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Mobile Development</h3>
            </div>
            <ul class="space-y-2">
              <li
                v-for="skill in profileStore.profile.skills.mobile"
                :key="skill"
                class="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                {{ skill }}
              </li>
            </ul>
          </article>

          <!-- Desktop Development -->
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Desktop Development</h3>
            </div>
            <ul class="space-y-2">
              <li
                v-for="skill in profileStore.profile.skills.desktop"
                :key="skill"
                class="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                {{ skill }}
              </li>
            </ul>
          </article>

          <!-- Database -->
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Database</h3>
            </div>
            <ul class="space-y-2">
              <li
                v-for="skill in profileStore.profile.skills.db"
                :key="skill"
                class="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                {{ skill }}
              </li>
            </ul>
          </article>

          <!-- API Design -->
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">API Design</h3>
            </div>
            <ul class="space-y-2">
              <li
                v-for="skill in profileStore.profile.skills.api"
                :key="skill"
                class="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <span class="w-2 h-2 bg-yellow-500 rounded-full"></span>
                {{ skill }}
              </li>
            </ul>
          </article>

          <!-- Infrastructure -->
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 15a4 4 0 004 4h10a4 4 0 100-8 5.5 5.5 0 00-10.9 1.5"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Infrastructure</h3>
            </div>
            <ul class="space-y-2">
              <li
                v-for="skill in profileStore.profile.skills.infra"
                :key="skill"
                class="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <span class="w-2 h-2 bg-indigo-500 rounded-full"></span>
                {{ skill }}
              </li>
            </ul>
          </article>

          <!-- Version Control -->
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 md:col-span-2 lg:col-span-3"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 3v12a3 3 0 003 3h6m-9-3a3 3 0 100-6 3 3 0 000 6zm9 3a3 3 0 100-6 3 3 0 000 6z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Version Controls</h3>
            </div>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in profileStore.profile.skills.vsc"
                :key="skill"
                class="px-4 py-2 bg-linear-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-pink-800 dark:text-pink-300 rounded-full text-sm font-medium"
              >
                {{ skill }}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Professional Experience -->
    <section class="py-16 px-6 md:px-10">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Professional Experience
        </h2>

        <div class="space-y-8">
          <article
            v-for="(exp, index) in profileStore.profile.experiences"
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 border-l-4 border-blue-600"
          >
            <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ exp.position }}
                </h3>
                <p class="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                  {{ exp.company }}
                </p>
              </div>
              <span
                class="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mt-2 md:mt-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {{ exp.duration }}
              </span>
            </div>
            <ul class="space-y-3">
              <li
                v-for="(resp, idx) in exp.responsibilities"
                :key="idx"
                class="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6 text-green-500 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{{ resp }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="py-16 px-6 md:px-10 bg-gray-50 dark:bg-gray-800/50">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Education
        </h2>

        <article
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
        >
          <div class="flex items-start gap-6">
            <div
              class="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {{ profileStore.profile.educations[0]?.degree }}
              </h3>
              <p class="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-1">
                {{ profileStore.profile.educations[0]?.institution }}
              </p>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                {{ profileStore.profile.educations[0]?.duration }}
              </p>
              <div class="space-y-2">
                <p class="font-semibold text-gray-900 dark:text-white">Focus Areas:</p>
                <ul class="grid md:grid-cols-2 gap-2">
                  <li
                    v-for="(item, index) in profileStore.profile.educations[0]?.focus"
                    :key="index"
                    class="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Certifications -->
    <section class="py-16 px-6 md:px-10">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Certifications
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="(cert, index) in profileStore.profile.certifications"
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 group"
          >
            <div class="flex items-start justify-between mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {{ cert.title }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">{{ cert.issuer }}</p>
            <a
              :href="cert.link"
              target="_blank"
              class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition group-hover:gap-3"
            >
              View Certificate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>

    <!-- Project Highlights -->
    <section class="py-16 px-6 md:px-10 bg-gray-50 dark:bg-gray-800/50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Project Highlights
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <article
            v-for="(project, index) in profileStore.profile.projects"
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 group"
          >
            <div class="flex items-start gap-4 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6 text-white"
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
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ project.name }}</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              {{ project.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Additional Information -->
    <section class="py-16 px-6 md:px-10">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Additional Information
        </h2>

        <article
          class="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 md:p-12"
        >
          <ul class="space-y-4">
            <li
              v-for="(info, index) in profileStore.profile.additionals"
              :key="index"
              class="flex gap-4 text-white text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-6 shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>{{ info }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <!-- Footer CTA -->
    <section
      class="py-20 px-6 md:px-10 bg-linear-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
        <p class="text-xl text-gray-300 mb-8">
          Ready to bring your ideas to life? Get in touch and let's create something amazing!
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            :href="`mailto:${profileStore.profile.email}`"
            class="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            Send Me an Email
          </a>
          <a
            :href="profileStore.profile.linkedin"
            target="_blank"
            class="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
