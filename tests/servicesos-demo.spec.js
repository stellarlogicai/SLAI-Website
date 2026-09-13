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
    await expect(page.getByRole('heading', { name: 'Follow a simplified ServicesOS workflow.' })).toBeVisible();
    await expect(page.getByText('The completed V1 path is Request to Estimate to Booking')).toBeVisible();
    await expect(page.getByText('Step 1: Review the Dashboard')).toBeVisible();
    await expect(page.getByText('Step 2: Review a customer request')).toBeVisible();
    await expect(page.getByText('Step 3: Manage the booking and scope')).toBeVisible();
    await expect(page.getByText('Step 4: Understand payment status')).toBeVisible();
    await expect(page.getByText('Step 5: View the schedule')).toBeVisible();
    await expect(page.getByText('Step 6: Understand the Employee App')).toBeVisible();
    await expect(page.getByText('Step 7: Request Founder Access')).toBeVisible();
    await expect(page.getByText("See today's revenue, requests, balances, and upcoming work at a glance.")).toBeVisible();
    await expect(page.getByText('Calendar provides schedule visibility while booking changes remain in the booking workflow.')).toBeVisible();
    await expect(page.getByText('My Day', { exact: false })).toBeVisible();
    await expect(page.getByText('Payment requests do not mark a job paid by themselves.')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Built first for cleaning and owner-led service businesses.' })).toBeVisible();
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
    await expect(page.getByRole('status')).toContainText('reviews customer and estimate context');
    await page.getByRole('button', { name: 'Demo-only payment link' }).first().click();
    await expect(page.getByRole('status')).toContainText('Stripe payment link');
    await page.getByRole('button', { name: 'Explain payment status' }).click();
    await expect(page.getByRole('status')).toContainText('paid status updates from confirmed payment state');
    await page.getByRole('button', { name: 'Explain Calendar role' }).click();
    await expect(page.getByRole('status')).toContainText('booking changes remain in Bookings');
    await page.getByRole('button', { name: 'Explain Employee App' }).click();
    await expect(page.getByRole('status')).toContainText('Completed V1 Employee App adds execution tools');

    expect(blockedIntegrationRequests).toEqual([]);
  });
});
