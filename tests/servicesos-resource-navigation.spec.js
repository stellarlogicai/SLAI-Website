import { expect, test } from '@playwright/test';

const supportPages = ['/servicesos-demo', '/servicesos-founder-access', '/servicesos-training'];

function watchForbiddenRequests(page) {
  const blockedIntegrationRequests = [];

  page.on('request', (request) => {
    const url = request.url();

    if (
      url.includes('firebase') ||
      url.includes('stripe.com') ||
      url.includes('cloudfunctions.net') ||
      url.includes('identitytoolkit.googleapis.com') ||
      url.includes('api.openai.com') ||
      url.includes('analytics') ||
      url.includes('/post')
    ) {
      blockedIntegrationRequests.push(url);
    }
  });

  return blockedIntegrationRequests;
}

async function expectServicesOSResourceLinks(page, { hasContact = false, omitDemo = false } = {}) {
  const resourcePanel = page.locator('.servicesos-resource-section .servicesos-resource-panel').first();

  await expect(resourcePanel).toBeVisible();
  const demoLink = resourcePanel.getByRole('link', { name: 'See the demo', exact: true });
  if (omitDemo) {
    await expect(demoLink).toHaveCount(0);
  } else {
    await expect(demoLink).toHaveAttribute('href', '/servicesos-demo');
  }
  await expect(resourcePanel.getByRole('link', { name: 'Request Founder Access', exact: true })).toHaveAttribute(
    'href',
    '/servicesos-founder-access'
  );
  await expect(resourcePanel.getByRole('link', { name: 'Learn how it works', exact: true })).toHaveAttribute(
    'href',
    '/servicesos-training'
  );
  await expect(resourcePanel.getByRole('link', { name: 'Read common questions', exact: true })).toHaveAttribute(
    'href',
    '/servicesos-faq'
  );

  if (hasContact) {
    await expect(resourcePanel.getByRole('link', { name: 'Contact SLAI', exact: true })).toHaveAttribute(
      'href',
      '#contact'
    );
  }
}

test.describe('ServicesOS resource navigation', () => {
  test('homepage ServicesOS section links to demo and Founder Access', async ({ page }) => {
    const blockedIntegrationRequests = watchForbiddenRequests(page);

    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'ServicesOS leads the roadmap.' })).toBeVisible();
    await expectServicesOSResourceLinks(page);

    expect(blockedIntegrationRequests).toEqual([]);
  });

  for (const path of supportPages) {
    test(`${path} exposes ServicesOS cross-links`, async ({ page }) => {
      const blockedIntegrationRequests = watchForbiddenRequests(page);

      await page.goto(path);

      await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
      await expectServicesOSResourceLinks(page, { hasContact: path !== '/', omitDemo: path === '/servicesos-demo' });

      expect(blockedIntegrationRequests).toEqual([]);
    });
  }
});
