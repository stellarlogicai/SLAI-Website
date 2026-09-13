import { expect, test } from '@playwright/test';

test('production build preserves the Netlify SPA fallback', async ({ request }) => {
  const redirects = await request.get('/_redirects');

  expect(redirects.ok()).toBe(true);
  expect((await redirects.text()).trim()).toBe('/* /index.html 200');
});
