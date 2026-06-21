import { expect, test } from '@playwright/test';

const publicRoutes = [
  {
    path: '/',
    heading: 'Building AI That Amplifies Human Potential.',
    visibleText: 'ServicesOS leads the roadmap.',
  },
  {
    path: '/about',
    heading: 'A company built around people, responsibility, and practical AI.',
    visibleText: 'Tell the real story.',
  },
  {
    path: '/servicesos',
    heading: 'One operating platform for service businesses.',
    visibleText: 'Built for the work service businesses repeat every day.',
  },
  {
    path: '/research',
    heading: 'Careful research for practical, human-centered AI.',
    visibleText: 'Public research with boundaries.',
  },
  {
    path: '/blog',
    heading: 'Research notes and product updates coming soon.',
    visibleText: 'Nothing published yet.',
  },
  {
    path: '/competitive-integrity',
    heading: 'A future research direction for fair competition.',
    visibleText: 'High-level direction only.',
  },
];

test.describe('SLAI public routes', () => {
  for (const route of publicRoutes) {
    test(`${route.path} loads with page content and shared layout`, async ({ page }) => {
      await page.goto(route.path);

      await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
      await expect(page.getByRole('heading', { name: route.heading })).toBeVisible();
      await expect(page.getByText(route.visibleText)).toBeVisible();
      await expect(page.getByRole('contentinfo')).toBeVisible();
    });

    test(`${route.path} mobile layout has no horizontal overflow`, async ({ page, isMobile }) => {
      test.skip(!isMobile, 'Mobile overflow route checks run in the mobile project.');

      await page.goto(route.path);

      await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
      await expect(page.getByRole('heading', { name: route.heading })).toBeVisible();

      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 1
      );
      expect(hasHorizontalOverflow).toBe(false);
    });
  }
});
