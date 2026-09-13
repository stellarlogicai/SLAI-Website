import { expect, test } from '@playwright/test';

test.describe('ServicesOS static demo walkthrough', () => {
  test('renders simplified fake demo workflow without backend integrations', async ({ page }) => {
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

    await page.goto('/servicesos-demo');

    await expect(page.getByRole('heading', { name: 'See how ServicesOS works' })).toBeVisible();
    await expect(page.getByText('Demo only: fake data, no backend actions.')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Follow a simplified ServicesOS workflow from request to follow-up.' })).toBeVisible();
    await expect(page.getByText('The completed V1 path is Request', { exact: false })).toBeVisible();
    await expect(page.getByText('Step 1: Review the Dashboard')).toBeVisible();
    await expect(page.getByText('Step 2: Review a new customer request')).toBeVisible();
    await expect(page.getByText('Step 3: Manage the booking')).toBeVisible();
    await expect(page.getByText('Step 4: Understand payment status')).toBeVisible();
    await expect(page.getByText('Step 5: View the schedule')).toBeVisible();
    await expect(page.getByText('Step 6: Preview field execution')).toBeVisible();
    await expect(page.getByText('Step 7: Request Founder Access')).toBeVisible();
    await expect(page.getByText("See today's revenue, requests, balances, and upcoming work at a glance.")).toBeVisible();
    await expect(page.getByText('Calendar is visibility. Booking changes happen in Bookings.')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'The full V1 Employee App goes beyond the original read-only Field Mode.' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Completed V1 includes more than this owner walkthrough.' })).toBeVisible();
    await expect(page.getByText('customer-approved scope control', { exact: false })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Built first for cleaning companies and owner-led service teams.' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Request Founder Access' }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sarah Mitchell', exact: true }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Mark Evans', exact: true }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Aunt B Demo Client', exact: true }).first()).toBeVisible();

    const resourcePanel = page.locator('.servicesos-resource-section .servicesos-resource-panel');
    await expect(resourcePanel.getByRole('link', { name: 'See the demo', exact: true })).toHaveCount(0);
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
    await expect(resourcePanel.getByRole('link', { name: 'Contact SLAI', exact: true })).toHaveAttribute(
      'href',
      '#contact'
    );

    await page.getByRole('button', { name: 'Explain request review' }).click();
    await expect(page.getByRole('status')).toContainText('owner reviews a new customer request');
    await page.getByRole('button', { name: 'Demo-only payment link' }).first().click();
    await expect(page.getByRole('status')).toContainText('Stripe Checkout payment request');
    await page.getByRole('button', { name: 'Explain payment status' }).click();
    await expect(page.getByRole('status')).toContainText('paid status updates after payment confirmation');
    await page.getByRole('button', { name: 'Explain Calendar role' }).click();
    await expect(page.getByRole('status')).toContainText('booking changes happen in Bookings');
    await page.getByRole('button', { name: 'Explain Field Mode' }).click();
    await expect(page.getByRole('status')).toContainText('completed V1 Employee App');

    expect(blockedIntegrationRequests).toEqual([]);
  });
});
