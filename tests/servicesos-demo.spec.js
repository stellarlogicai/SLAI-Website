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
    await expect(page.getByRole('heading', { name: 'Follow the ServicesOS workflow from request to follow-up.' })).toBeVisible();
    await expect(page.getByText('Core flow: Request to Booking to Payment to Field visibility to Follow-up.')).toBeVisible();
    await expect(page.getByText('Step 1: Review the Dashboard')).toBeVisible();
    await expect(page.getByText('Step 2: Review a new customer request')).toBeVisible();
    await expect(page.getByText('Step 3: Manage the booking')).toBeVisible();
    await expect(page.getByText('Step 4: Understand payment status')).toBeVisible();
    await expect(page.getByText('Step 5: View the schedule')).toBeVisible();
    await expect(page.getByText('Step 6: Open Field Mode')).toBeVisible();
    await expect(page.getByText('Step 7: Request Founder Access')).toBeVisible();
    await expect(page.getByText('Dashboard tells you what needs attention.').first()).toBeVisible();
    await expect(page.getByText('Bookings is the job management center.').first()).toBeVisible();
    await expect(page.getByText('Calendar is read-only visibility.').first()).toBeVisible();
    await expect(page.getByText('Field Mode is read-only job information.').first()).toBeVisible();
    await expect(page.getByText('Payments can be Stripe or manually recorded.').first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Built first for cleaning companies.' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Request Founder Access' }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sarah Mitchell', exact: true }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Mark Evans', exact: true }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Aunt B Demo Client', exact: true }).first()).toBeVisible();

    await page.getByRole('button', { name: 'Explain request review' }).click();
    await expect(page.getByRole('status')).toContainText('owner reviews a new customer request');
    await page.getByRole('button', { name: 'Demo-only payment link' }).first().click();
    await expect(page.getByRole('status')).toContainText('Stripe Checkout link');
    await page.getByRole('button', { name: 'Explain payment status' }).click();
    await expect(page.getByRole('status')).toContainText('paid status updates after payment confirmation');
    await page.getByRole('button', { name: 'Explain Calendar role' }).click();
    await expect(page.getByRole('status')).toContainText('booking changes happen in Bookings');
    await page.getByRole('button', { name: 'Explain Field Mode' }).click();
    await expect(page.getByRole('status')).toContainText('Field Mode is read-only');

    expect(blockedIntegrationRequests).toEqual([]);
  });
});
