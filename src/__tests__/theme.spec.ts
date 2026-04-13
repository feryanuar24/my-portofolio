import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useThemeStore } from '../stores/theme'

describe('useThemeStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should have default isDark as false', () => {
    const store = useThemeStore()
    expect(store.isDark).toBe(false)
  })

  it('should set dark mode correctly', () => {
    const store = useThemeStore()
    store.setDarkMode(true)
    expect(store.isDark).toBe(true)
    store.setDarkMode(false)
    expect(store.isDark).toBe(false)
  })
})
