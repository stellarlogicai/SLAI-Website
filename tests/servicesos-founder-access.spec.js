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
  test('renders completed V1 direction and stays static', async ({ page }) => {
    const blockedIntegrationRequests = watchForbiddenRequests(page);

    await page.goto('/servicesos-founder-access');

    await expect(page.getByRole('heading', { name: 'Founder Access for cleaning and service businesses' })).toBeVisible();
    await expect(page.getByText('Join the hands-on early rollout of ServicesOS V1')).toBeVisible();
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
    await expect(page.getByText('Completed V1 direction')).toBeVisible();
    await expect(page.getByText('Residential and commercial booking workflows')).toBeVisible();
    await expect(page.getByText('Employee App for assigned work, checklists, photos, notes, and job completion')).toBeVisible();
    await expect(page.getByText('SLAI Assistant / GrowthAI with 100 included AI credits each calendar month')).toBeVisible();
    await expect(page.getByText('What Founder Access means')).toBeVisible();
    await expect(page.getByText('Outside V1')).toBeVisible();
    await expect(page.getByText('No payroll in V1')).toBeVisible();
    await expect(page.getByText('No autonomous marketing or customer messaging')).toBeVisible();
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
