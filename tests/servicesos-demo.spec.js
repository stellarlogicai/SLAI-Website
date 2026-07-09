import { expect, test } from '@playwright/test';

test.describe('ServicesOS static demo walkthrough', () => {
  test('renders fake demo workflow without backend integrations', async ({ page }) => {
    const blockedIntegrationRequests = [];

    page.on('request', (request) => {
      const url = request.url();

      if (
        url.includes('firebase') ||
        url.includes('stripe.com') ||
        url.includes('cloudfunctions.net') ||
        url.includes('identitytoolkit.googleapis.com')
      ) {
        blockedIntegrationRequests.push(url);
      }
    });

    await page.goto('/servicesos-demo');

    await expect(page.getByRole('heading', { name: 'See how ServicesOS works' })).toBeVisible();
    await expect(page.getByText('Fake data only. No backend actions.')).toBeVisible();
    await expect(page.getByText('Dashboard Preview')).toBeVisible();
    await expect(page.getByText('Customers Preview')).toBeVisible();
    await expect(page.getByText('Bookings Preview')).toBeVisible();
    await expect(page.getByText('Calendar Preview')).toBeVisible();
    await expect(page.getByText('Field Mode Preview')).toBeVisible();
    await expect(page.getByText('Payments Preview')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Built first for cleaning companies.' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sarah Mitchell', exact: true }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Mark Evans', exact: true }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Aunt B Demo Client', exact: true }).first()).toBeVisible();

    await page.getByRole('button', { name: 'Demo-only payment link' }).first().click();
    await expect(page.getByRole('status')).toContainText('Demo-only payment link');

    expect(blockedIntegrationRequests).toEqual([]);
  });
});
