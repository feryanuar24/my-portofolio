import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  function setDarkMode(value: boolean) {
    isDark.value = value
  }

  return { isDark, setDarkMode }
})
