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
    <div class="carousel-scene relative flex h-full w-full items-center justify-center">
      <!-- Poros Putar (Carousel Track) -->
      <!-- rotate-x-[-10deg] membuat cincin miring sedikit agar kedalamannya terlihat dari atas -->
      <div
        class="carousel-track relative flex h-44 w-72 items-center justify-center transform-3d [-webkit-transform-style:preserve-3d]"
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
      [ HOVER TO INSPECT SYSTEM ]
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

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

const getCardStyle = (index: number) => {
  const totalItems = techStack.value.length
  const angle = (360 / totalItems) * index

  return {
    transform: `rotateY(${angle}deg) translateZ(var(--carousel-radius))`,
  }
}
</script>

<style scoped>
/* CSS murni untuk animasi berputar terus-menerus */

@keyframes spin-carousel {
  0% {
    transform: rotateX(-10deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(-10deg) rotateY(360deg);
  }
}

.carousel-track {
  --carousel-radius: 620px;
  /* Putaran penuh dalam 25 detik */
  animation: spin-carousel 25s infinite linear;
}

.carousel-scene {
  perspective: 1000px;
}

/* Pause animasi saat user menyorot cincin agar bisa dibaca */
.carousel-track:hover {
  animation-play-state: paused;
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
