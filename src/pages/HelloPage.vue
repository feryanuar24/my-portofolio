<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

type Expression = 'neutral' | 'happy' | 'sleepy' | 'sad' | 'excited'

type StatKey = 'fullness' | 'happiness' | 'energy' | 'hygiene'

interface PetStats {
  fullness: number
  happiness: number
  energy: number
  hygiene: number
}

const router = useRouter()

const petName = ref('Fery')
const activeFeature = ref('')
const transientExpression = ref<Expression | null>(null)

const stats = ref<PetStats>({
  fullness: 70,
  happiness: 70,
  energy: 70,
  hygiene: 70,
})

const gameStatus = ref('Fery is doing well.')

let decayIntervalId: ReturnType<typeof setInterval> | null = null
let expressionTimeoutId: ReturnType<typeof setTimeout> | null = null

const expressionAssets: Record<Expression, string> = {
  neutral: '/assets/avatars/tamagotchi/neutral.svg',
  happy: '/assets/avatars/tamagotchi/happy.svg',
  sleepy: '/assets/avatars/tamagotchi/sleepy.svg',
  sad: '/assets/avatars/tamagotchi/sad.svg',
  excited: '/assets/avatars/tamagotchi/excited.svg',
}

const clampStat = (value: number) => Math.max(0, Math.min(100, value))

const baseExpression = computed<Expression>(() => {
  if (stats.value.fullness <= 20 || stats.value.happiness <= 20 || stats.value.hygiene <= 20) {
    return 'sad'
  }

  if (stats.value.energy <= 25) {
    return 'sleepy'
  }

  if (stats.value.happiness >= 75 && stats.value.fullness >= 55) {
    return 'happy'
  }

  return 'neutral'
})

const currentExpression = computed<Expression>(
  () => transientExpression.value || baseExpression.value,
)

const characterAsset = computed(() => expressionAssets[currentExpression.value])

const healthScore = computed(() => {
  const total =
    stats.value.fullness + stats.value.happiness + stats.value.energy + stats.value.hygiene
  return Math.round(total / 4)
})

const moodText = computed(() => {
  if (healthScore.value >= 80) return 'Very Happy'
  if (healthScore.value >= 60) return 'Happy'
  if (healthScore.value >= 40) return 'Okay'
  if (healthScore.value >= 20) return 'Needs Attention'
  return 'Critical'
})

const setTransientExpression = (expression: Expression, duration = 1300) => {
  transientExpression.value = expression

  if (expressionTimeoutId) {
    clearTimeout(expressionTimeoutId)
  }

  expressionTimeoutId = setTimeout(() => {
    transientExpression.value = null
  }, duration)
}

const updateStat = (stat: StatKey, delta: number) => {
  stats.value[stat] = clampStat(stats.value[stat] + delta)
}

const useFeature = (feature: 'feed' | 'play' | 'sleep' | 'clean') => {
  activeFeature.value = feature

  if (feature === 'feed') {
    updateStat('fullness', 22)
    updateStat('happiness', 6)
    updateStat('hygiene', -4)
    setTransientExpression('happy')
    gameStatus.value = `${petName.value} is full and happy.`
  }

  if (feature === 'play') {
    updateStat('happiness', 20)
    updateStat('energy', -10)
    updateStat('fullness', -7)
    setTransientExpression('excited')
    gameStatus.value = `${petName.value} is having a great time playing with you.`
  }

  if (feature === 'sleep') {
    updateStat('energy', 24)
    updateStat('fullness', -6)
    setTransientExpression('sleepy')
    gameStatus.value = `${petName.value} is sleeping peacefully.`
  }

  if (feature === 'clean') {
    updateStat('hygiene', 24)
    updateStat('happiness', 5)
    setTransientExpression('neutral')
    gameStatus.value = `${petName.value} is clean and refreshed.`
  }
}

const resetGame = () => {
  stats.value = {
    fullness: 70,
    happiness: 70,
    energy: 70,
    hygiene: 70,
  }
  activeFeature.value = ''
  transientExpression.value = null
  gameStatus.value = `${petName.value} has been reset to the starting condition.`
}

onMounted(() => {
  decayIntervalId = setInterval(() => {
    updateStat('fullness', -4)
    updateStat('happiness', -3)
    updateStat('energy', -2)
    updateStat('hygiene', -3)

    if (healthScore.value <= 25) {
      gameStatus.value = `${petName.value} needs your attention now.`
    }
  }, 3500)
})

onUnmounted(() => {
  if (decayIntervalId) {
    clearInterval(decayIntervalId)
  }

  if (expressionTimeoutId) {
    clearTimeout(expressionTimeoutId)
  }
})
</script>

<template>
  <main class="hello-page min-h-screen px-5 py-8 text-[#f6f7e8] md:px-12">
    <section class="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.2fr_1fr]">
      <article
        class="rounded-3xl border border-[#f6f7e8]/20 bg-black/35 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] md:p-8"
      >
        <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-[#f8d477]">HELLO TAMAGOTCHI LAB</p>
            <h1 class="font-anton text-5xl uppercase leading-none md:text-7xl">FERY</h1>
          </div>

          <button
            class="cursor-pointer rounded-full border border-[#f6f7e8]/35 px-5 py-2 text-sm uppercase tracking-[0.2em] transition hover:bg-[#f6f7e8] hover:text-black"
            @click="router.push({ name: 'Home' })"
          >
            Back Home
          </button>
        </div>

        <div class="grid gap-7 md:grid-cols-[1.2fr_1fr]">
          <div class="pet-stage rounded-2xl p-5">
            <div
              class="relative overflow-hidden rounded-2xl border border-[#f6f7e8]/20 bg-[#111111]/75 p-4"
            >
              <img
                :src="characterAsset"
                :alt="`${petName} expression ${currentExpression}`"
                class="mx-auto w-full max-w-[320px]"
              />
            </div>

            <p
              class="mt-4 rounded-xl border border-[#f6f7e8]/15 bg-black/30 px-4 py-3 text-sm text-[#f2f3db]"
            >
              {{ gameStatus }}
            </p>

            <div class="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em]">
              <span class="rounded-full bg-[#f8d477]/20 px-3 py-1">Mood: {{ moodText }}</span>
              <span class="rounded-full bg-[#8df0d2]/20 px-3 py-1"
                >Expression: {{ currentExpression }}</span
              >
              <span class="rounded-full bg-[#98b6ff]/20 px-3 py-1"
                >Feature: {{ activeFeature || 'idle' }}</span
              >
            </div>
          </div>

          <div class="space-y-3">
            <button
              class="feature-button bg-[#f8d477] text-black hover:translate-y-0.5 cursor-pointer"
              @click="useFeature('feed')"
            >
              Feed
            </button>

            <button
              class="feature-button bg-[#8df0d2] text-black hover:translate-y-0.5 cursor-pointer"
              @click="useFeature('play')"
            >
              Play
            </button>

            <button
              class="feature-button bg-[#98b6ff] text-black hover:translate-y-0.5 cursor-pointer"
              @click="useFeature('sleep')"
            >
              Sleep
            </button>

            <button
              class="feature-button bg-[#ffbe92] text-black hover:translate-y-0.5 cursor-pointer"
              @click="useFeature('clean')"
            >
              Clean
            </button>

            <button
              class="feature-button border border-[#f6f7e8]/30 bg-transparent text-[#f6f7e8] hover:bg-[#f6f7e8] hover:text-black cursor-pointer"
              @click="resetGame"
            >
              Reset
            </button>
          </div>
        </div>
      </article>

      <article class="rounded-3xl border border-[#f6f7e8]/20 bg-black/35 p-5 md:p-8">
        <h2 class="font-anton text-4xl uppercase">My Status</h2>

        <div class="mt-6 space-y-4">
          <div class="stat-row">
            <div class="stat-header">
              <span>Fullness</span>
              <span>{{ stats.fullness }}%</span>
            </div>
            <div class="stat-bar">
              <div class="stat-fill bg-[#f8d477]" :style="{ width: `${stats.fullness}%` }"></div>
            </div>
          </div>

          <div class="stat-row">
            <div class="stat-header">
              <span>Happiness</span>
              <span>{{ stats.happiness }}%</span>
            </div>
            <div class="stat-bar">
              <div class="stat-fill bg-[#8df0d2]" :style="{ width: `${stats.happiness}%` }"></div>
            </div>
          </div>

          <div class="stat-row">
            <div class="stat-header">
              <span>Energy</span>
              <span>{{ stats.energy }}%</span>
            </div>
            <div class="stat-bar">
              <div class="stat-fill bg-[#98b6ff]" :style="{ width: `${stats.energy}%` }"></div>
            </div>
          </div>

          <div class="stat-row">
            <div class="stat-header">
              <span>Hygiene</span>
              <span>{{ stats.hygiene }}%</span>
            </div>
            <div class="stat-bar">
              <div class="stat-fill bg-[#ffbe92]" :style="{ width: `${stats.hygiene}%` }"></div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;700&display=swap');

.hello-page {
  font-family: 'Space Grotesk', sans-serif;
  background:
    radial-gradient(1200px 600px at 10% -10%, rgba(248, 212, 119, 0.2), transparent 60%),
    radial-gradient(1000px 500px at 100% 10%, rgba(141, 240, 210, 0.2), transparent 60%),
    linear-gradient(160deg, #121212 0%, #090909 55%, #1a1a1a 100%);
}

.feature-button {
  width: 100%;
  border-radius: 0.9rem;
  padding: 0.85rem 1rem;
  font-family: 'Anton', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition:
    transform 0.2s ease,
    filter 0.2s ease;
}

.feature-button:hover {
  filter: brightness(1.04);
}

.stat-row {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.stat-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.stat-bar {
  height: 0.65rem;
  width: 100%;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
}

.stat-fill {
  height: 100%;
  border-radius: inherit;
  transition: width 0.25s ease;
}

@media (max-width: 768px) {
  .feature-button {
    font-size: 1rem;
  }
}
</style>
