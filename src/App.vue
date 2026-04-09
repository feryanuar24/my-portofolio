<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
</script>

<template>
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
</template>
