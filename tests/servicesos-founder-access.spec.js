import { expect, test } from '@playwright/test';

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
      url.includes('analytics')
    ) {
      blockedIntegrationRequests.push(url);
    }
  });

  return blockedIntegrationRequests;
}

test.describe('ServicesOS Founder Access page', () => {
  test('renders founder access content and stays static', async ({ page }) => {
    const blockedIntegrationRequests = watchForbiddenRequests(page);

    await page.goto('/servicesos-founder-access');

    await expect(page.getByRole('heading', { name: 'Founder Access for cleaning businesses' })).toBeVisible();
    await expect(page.getByText('Help shape ServicesOS while getting early access')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Request Founder Access' }).first()).toHaveAttribute(
      'href',
      '#contact'
    );
    await expect(page.getByRole('link', { name: 'View the demo' }).first()).toHaveAttribute(
      'href',
      '/servicesos-demo'
    );
    await expect(page.getByText('Who it is for')).toBeVisible();
    await expect(page.getByText('solo cleaners', { exact: false })).toBeVisible();
    await expect(page.getByText('What ServicesOS helps with today')).toBeVisible();
    await expect(page.getByText('Stripe payment links when connected')).toBeVisible();
    await expect(page.getByText('What Founder Access means')).toBeVisible();
    await expect(page.getByText('What is not included yet')).toBeVisible();
    await expect(page.getByText('No Tap to Pay yet')).toBeVisible();
    await expect(page.getByText('No auto-posting or autonomous AI')).toBeVisible();
    await expect(page.getByText('ServicesOS philosophy')).toBeVisible();
    await expect(page.getByText('AI should amplify humans, not replace them.')).toBeVisible();
    await expect(page.getByText('Early user expectations')).toBeVisible();

    expect(blockedIntegrationRequests).toEqual([]);
  });

  test('demo page links to founder access', async ({ page }) => {
    await page.goto('/servicesos-demo');

    await expect(page.getByRole('link', { name: 'Founder Access Details', exact: true })).toHaveAttribute(
      'href',
      '/servicesos-founder-access'
    );
    await expect(page.getByRole('link', { name: 'Read Founder Access Details' })).toHaveAttribute(
      'href',
      '/servicesos-founder-access'
    );
  });
});
