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
      url.includes('analytics') ||
      url.includes('/post')
    ) {
      blockedIntegrationRequests.push(url);
    }
  });

  return blockedIntegrationRequests;
}

test.describe('ServicesOS Training Center page', () => {
  test('renders V1 training lessons and quick links without backend integrations', async ({ page }) => {
    const blockedIntegrationRequests = watchForbiddenRequests(page);

    await page.goto('/servicesos-training');

    await expect(page.getByRole('heading', { name: 'ServicesOS Training Center' })).toBeVisible();
    const trainingFlow = page.locator('.training-flow-list');
    await expect(trainingFlow.getByText('Request', { exact: true })).toBeVisible();
    await expect(trainingFlow.getByText('Estimate', { exact: true })).toBeVisible();
    await expect(trainingFlow.getByText('Booking', { exact: true })).toBeVisible();
    await expect(trainingFlow.getByText('Customer approval', { exact: true })).toBeVisible();
    await expect(trainingFlow.getByText('Field work', { exact: true })).toBeVisible();
    await expect(trainingFlow.getByText('Payment', { exact: true })).toBeVisible();
    await expect(trainingFlow.getByText('Follow-up', { exact: true })).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Getting started' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Customers and bookings' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Approved job scope' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Employee App' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Add-ons and extra work' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Payments' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'SLAI Assistant and AI credits' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Launch expectations' })).toBeVisible();
    await expect(page.getByText('A payment request does not mark a booking paid by itself.')).toBeVisible();
    await expect(page.getByText('My Day and assigned Job Detail keep field work focused.')).toBeVisible();
    await expect(page.getByText('ServicesOS V1 includes 100 AI credits each calendar month.')).toBeVisible();

    await expect(page.getByRole('link', { name: 'ServicesOS Demo' })).toHaveAttribute('href', '/servicesos-demo');
    await expect(page.getByRole('link', { name: 'Founder Access' }).first()).toHaveAttribute(
      'href',
      '/servicesos-founder-access'
    );
    await expect(page.getByRole('link', { name: 'Request Access' })).toHaveAttribute('href', '#contact');

    expect(blockedIntegrationRequests).toEqual([]);
  });
});
