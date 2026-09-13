import { expect, test } from '@playwright/test';

test.describe('ServicesOS beta public smoke checks', () => {
  test('public ServicesOS page loads without critical console errors', async ({ page }) => {
    const criticalMessages = [];

    page.on('console', (message) => {
      if (message.type() === 'error') {
        criticalMessages.push(message.text());
      }
    });
    page.on('pageerror', (error) => {
      criticalMessages.push(error.message);
    });

    await page.goto('/servicesos');

    await expect(page).toHaveTitle('ServicesOS V1 | Launching Late October');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Launching late October for cleaning and service businesses.' })).toBeVisible();
    await expect(page.getByText('Scheduled for late October completion.')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Request a V1 Demo' }).first()).toHaveAttribute(
      'href',
      '#contact'
    );
    await expect(page.getByRole('link', { name: 'View Demo' }).first()).toHaveAttribute(
      'href',
      '/servicesos-demo'
    );
    await expect(page.getByRole('contentinfo')).toBeVisible();

    expect(criticalMessages).toEqual([]);
  });

  test('public ServicesOS page has no mobile horizontal overflow', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile overflow checks run in the mobile project.');

    await page.goto('/servicesos');

    await expect(page.getByRole('heading', { name: 'Launching late October for cleaning and service businesses.' })).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1
    );
    expect(hasHorizontalOverflow).toBe(false);
  });
});
