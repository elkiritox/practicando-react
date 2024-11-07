// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST = 'http://localhost:5173/'

test('app shows rando fact image', async ({ page }) => {
  await page.goto(LOCALHOST)

  // Expect a title "to contain" a substring.
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log({ textContent, imageSrc })

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('blob:')).toBeTruthy()
})
