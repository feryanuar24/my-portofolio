import { test, expect } from '@playwright/test'

// Home Page

test.describe('HomePage', () => {
  test('should display name and summary', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: /professional summary/i })).toBeVisible()
    await expect(
      page.getByRole('heading', { level: 1, name: /Fery Anuar Ramadhan Putra/i }),
    ).toBeVisible()
  })
})

// Projects Page

test.describe('ProjectsPage', () => {
  test('should display projects header', async ({ page }) => {
    await page.goto('/projects')
    await expect(page.getByRole('heading', { name: /my projects/i })).toBeVisible()
  })
})

// Project Detail Page

test.describe('ProjectDetailPage', () => {
  test('should show not found for invalid id', async ({ page }) => {
    await page.goto('/project/invalid-id')
    await expect(page.getByRole('heading', { name: /project not found/i })).toBeVisible()
  })
})

// Contact Page

test.describe('ContactPage', () => {
  test('should display contact form', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.getByRole('heading', { name: /get in touch/i })).toBeVisible()
    await expect(page.getByLabel(/your name/i)).toBeVisible()
    await expect(page.getByLabel(/email address/i)).toBeVisible()
    await expect(page.getByLabel(/your message/i)).toBeVisible()
  })
})
