import { expect, test } from '@playwright/test';

test.describe('SLAI website smoke tests', () => {
  test('homepage loads and shows the main hero text', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('Stellar Logic AI | Human-Centered AI Platforms for Service Businesses');
    await expect(page.getByRole('heading', { name: 'Building AI That Amplifies Human Potential.' })).toBeVisible();
  });

  test('main navigation links exist', async ({ page }) => {
    await page.goto('/');

    const navigation = page.getByRole('navigation', { name: 'Main navigation' });
    await expect(navigation.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'ServicesOS' })).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'Research' })).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'Integrity' })).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('product cards and sections render', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'ServicesOS leads the roadmap.' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'ServicesOS', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'GrowthAI', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'EducationOS', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'FutureAI', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Request a ServicesOS Demo' })).toBeVisible();
  });

  test('mobile viewport keeps core layout usable', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile layout smoke test runs in the mobile project.');

    await page.goto('/');

    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Building AI That Amplifies Human Potential.' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Explore ServicesOS' })).toBeVisible();

    const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    expect(horizontalOverflow).toBe(false);
  });
});
