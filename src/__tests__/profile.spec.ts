import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useProfileStore } from '../stores/profile'

beforeEach(() => {
  setActivePinia(createPinia())
})

describe('useProfileStore', () => {
  it('should provide default profile data', () => {
    const store = useProfileStore()
    expect(store.profile).toBeDefined()
    expect(store.profile.name).toBe('Fery Anuar Ramadhan Putra')
    expect(store.profile.skills.web).toContain('Laravel')
    expect(store.profile.experiences.length).toBeGreaterThan(0)
    expect(store.profile.educations.length).toBeGreaterThan(0)
    expect(store.profile.certifications.length).toBeGreaterThan(0)
    expect(store.profile.projects.length).toBeGreaterThan(0)
    expect(store.profile.additionals.length).toBeGreaterThan(0)
  })
})
