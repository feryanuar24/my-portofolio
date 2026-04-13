<script setup lang="ts">
import { ref } from 'vue'
import { db } from '@/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useProfileStore } from '@/stores/profile'

const profileStore = useProfileStore()

const name = ref('')
const email = ref('')
const message = ref('')
const success = ref(false)
const isSubmitting = ref(false)

async function sendMessage() {
  isSubmitting.value = true
  try {
    await addDoc(collection(db, 'messages'), {
      name: name.value,
      email: email.value,
      message: message.value,
      created_at: new Date(),
    })
    success.value = true
    name.value = email.value = message.value = ''

    setTimeout(() => {
      success.value = false
    }, 5000)
  } catch (error) {
    console.error('Error sending message:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <main
    class="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-6 transition-colors duration-300"
  >
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1
          class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4"
        >
          Get In Touch
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Have a project in mind? Let's work together!
        </p>
      </div>

      <!-- Content -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Contact Form -->
        <article
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition duration-300"
        >
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span class="w-2 h-8 bg-linear-to-b from-blue-600 to-purple-600 rounded-full"></span>
            Send Me a Message
          </h2>

          <form @submit.prevent="sendMessage" class="space-y-6">
            <!-- Name Input -->
            <div>
              <label
                for="contact-name"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                v-model="name"
                type="text"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="John Doe"
                required
              />
            </div>

            <!-- Email Input -->
            <div>
              <label
                for="contact-email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                v-model="email"
                type="email"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="john@example.com"
                required
              />
            </div>

            <!-- Message Textarea -->
            <div>
              <label
                for="contact-message"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="contact-message"
                v-model="message"
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 resize-none"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span v-if="!isSubmitting" class="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                Send Message
              </span>
              <span v-else class="flex items-center justify-center gap-2">
                <svg
                  class="animate-spin h-5 w-5"
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
                Sending...
              </span>
            </button>
          </form>

          <!-- Success Message -->
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-2"
          >
            <div
              v-if="success"
              class="mt-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg flex items-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-green-600 dark:text-green-400"
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
              <p class="text-green-800 dark:text-green-300 font-medium">
                Message sent successfully! I'll get back to you soon.
              </p>
            </div>
          </Transition>
        </article>

        <!-- Contact Information -->
        <div class="space-y-6">
          <!-- Details Card -->
          <article
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition duration-300"
          >
            <h2
              class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
            >
              <span class="w-2 h-8 bg-linear-to-b from-blue-600 to-purple-600 rounded-full"></span>
              Contact Information
            </h2>

            <div class="space-y-4">
              <!-- Email -->
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-linear-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center shrink-0"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                  <a
                    :href="`mailto:${profileStore.profile.email}`"
                    class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {{ profileStore.profile.email }}
                  </a>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shrink-0"
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                  <a
                    :href="`tel:${profileStore.profile.phone}`"
                    class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {{ profileStore.profile.phone }}
                  </a>
                </div>
              </div>

              <!-- Location -->
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shrink-0"
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                  <a
                    :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profileStore.profile.address)}`"
                    target="_blank"
                    class="hover:text-blue-600 dark:hover:text-blue-400 text-gray-600 dark:text-gray-400 transition delay-150 duration-300 ease-in-out"
                  >
                    {{ profileStore.profile.address }}
                  </a>
                </div>
              </div>
            </div>
          </article>

          <!-- Social Links Card -->
          <article
            class="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition duration-300"
          >
            <h2 class="text-2xl font-bold text-white mb-4">Follow Me</h2>
            <p class="text-blue-100 mb-6">Let's connect on social media and stay in touch!</p>

            <div class="flex gap-4">
              <a
                :href="profileStore.profile.linkedin"
                target="_blank"
                class="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition duration-300 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
              <a
                :href="profileStore.profile.github"
                target="_blank"
                class="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition duration-300 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </main>
</template>
