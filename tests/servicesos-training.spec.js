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
  test('renders completed V1 lessons and quick links without backend integrations', async ({ page }) => {
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
    await expect(page.getByRole('heading', { name: 'Customers & estimates' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Residential & commercial bookings' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Job scope & customer approval' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Employee App & field work' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Extra-work requests' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Payments' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'SLAI Assistant / GrowthAI' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Release expectations' })).toBeVisible();
    await expect(page.getByText('Payment requests do not mark a booking paid by themselves.')).toBeVisible();
    await expect(page.getByText('My Day and assigned jobs keep field work focused.')).toBeVisible();
    await expect(page.getByText('ServicesOS includes 100 AI credits each calendar month', { exact: false })).toBeVisible();

    await expect(page.getByRole('link', { name: 'ServicesOS Demo' })).toHaveAttribute('href', '/servicesos-demo');
    await expect(page.getByRole('link', { name: 'Founder Access' }).first()).toHaveAttribute(
      'href',
      '/servicesos-founder-access'
    );
    await expect(page.getByRole('link', { name: 'Request Access' })).toHaveAttribute('href', '#contact');

    expect(blockedIntegrationRequests).toEqual([]);
  });
});
