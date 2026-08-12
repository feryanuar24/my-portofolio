<template>
  <!-- Layar Utama, bisa diklik untuk mempercepat scene -->
  <div
    class="relative h-screen w-screen cursor-pointer overflow-hidden bg-[#050505] font-syne text-[#e0e0e0]"
    @click="nextScene"
  >
    <!-- Indikator Scene di Bawah (Progress / Skip Hint) -->
    <div
      class="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-4 opacity-30 transition-opacity hover:opacity-100 z-50"
    >
      <span class="text-[10px] tracking-widest text-white/50 uppercase"
        >Scene {{ currentScene + 1 }} / {{ scenes.length }}</span
      >
      <div class="flex gap-2">
        <div
          v-for="(scene, index) in scenes"
          :key="'dot-' + index"
          class="h-1 w-6 rounded-full transition-all duration-500"
          :class="index === currentScene ? 'bg-white' : 'bg-white/20'"
        ></div>
      </div>
      <span class="text-[10px] tracking-widest text-white/50 uppercase"
        >Click to Fast Forward ⏭</span
      >
    </div>

    <!-- Render Scene yang Sedang Aktif -->
    <!-- Penggunaan :key="currentScene" memaksa Vue memutar ulang animasi CSS setiap kali scene berganti -->
    <transition name="scene-fade" mode="out-in">
      <div :key="currentScene" class="absolute inset-0 h-full w-full">
        <div
          v-for="(credit, index) in scenes[currentScene]"
          :key="index"
          :class="['absolute opacity-0 animate-slow-fade-in', credit.position]"
          :style="{ animationDelay: credit.delay }"
        >
          <p class="mb-1 text-[10px] tracking-widest text-gray-500">
            {{ credit.kanji }}
          </p>
          <p class="mb-1 text-xs uppercase tracking-[0.2em] text-gray-400">
            {{ credit.label }}
          </p>
          <p
            class="text-lg font-medium tracking-wider text-white md:text-xl"
            :class="credit.widthClass"
          >
            {{ credit.value }}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import scenes from '@/data/scenes'

const currentScene = ref(0)
let autoPlayInterval: ReturnType<typeof setInterval> | null = null

const sceneDuration = 8000

const nextScene = () => {
  currentScene.value = (currentScene.value + 1) % scenes.length
  resetInterval()
}

const resetInterval = () => {
  if (autoPlayInterval) clearInterval(autoPlayInterval)
  autoPlayInterval = setInterval(nextScene, sceneDuration)
}

onMounted(() => {
  resetInterval()
})

onUnmounted(() => {
  if (autoPlayInterval) clearInterval(autoPlayInterval)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&display=swap');

/* Transisi per elemen (Fade In pelan) */
@keyframes slowFadeIn {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slow-fade-in {
  animation: slowFadeIn 2s ease-out forwards;
}

/* Transisi antar Scene Vue (Ganti layar penuh) */
.scene-fade-enter-active,
.scene-fade-leave-active {
  transition: opacity 1s ease;
}
.scene-fade-enter-from,
.scene-fade-leave-to {
  opacity: 0;
}
</style>
