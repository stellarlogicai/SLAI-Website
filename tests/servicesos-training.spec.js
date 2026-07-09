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
  test('renders training lessons and quick links without backend integrations', async ({ page }) => {
    const blockedIntegrationRequests = watchForbiddenRequests(page);

    await page.goto('/servicesos-training');

    await expect(page.getByRole('heading', { name: 'ServicesOS Training Center' })).toBeVisible();
    const trainingFlow = page.locator('.training-flow-list');
    await expect(trainingFlow.getByText('Request', { exact: true })).toBeVisible();
    await expect(trainingFlow.getByText('Booking', { exact: true })).toBeVisible();
    await expect(trainingFlow.getByText('Payment', { exact: true })).toBeVisible();
    await expect(trainingFlow.getByText('Field visibility', { exact: true })).toBeVisible();
    await expect(trainingFlow.getByText('Follow-up', { exact: true })).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Getting started' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Customers' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Bookings' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Payments' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Calendar' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Field Mode' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Beta expectations' })).toBeVisible();
    await expect(page.getByText('Payment links do not mark a booking paid by themselves.')).toBeVisible();
    await expect(page.getByText('It is not the full employee mobile app yet.')).toBeVisible();

    await expect(page.getByRole('link', { name: 'ServicesOS Demo' })).toHaveAttribute('href', '/servicesos-demo');
    await expect(page.getByRole('link', { name: 'Founder Access' }).first()).toHaveAttribute(
      'href',
      '/servicesos-founder-access'
    );
    await expect(page.getByRole('link', { name: 'Request Access' })).toHaveAttribute('href', '#contact');

    expect(blockedIntegrationRequests).toEqual([]);
  });
});
