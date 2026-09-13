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

test.describe('ServicesOS FAQ page', () => {
  test('renders completed V1 scope, launch boundaries, and quick links without backend integrations', async ({ page }) => {
    const blockedIntegrationRequests = watchForbiddenRequests(page);

    await page.goto('/servicesos-faq');

    await expect(page.getByRole('heading', { name: 'ServicesOS V1 FAQ' })).toBeVisible();
    await expect(page.getByText('Practical answers about the completed V1 feature set')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'General', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'V1 operations', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Job scope & extra work', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Employee App', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Payments', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'AI assistance', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'V1 launch & boundaries', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Getting started', exact: true })).toBeVisible();

    await expect(page.getByText('ServicesOS V1 is $100/month.')).toBeVisible();
    await expect(page.getByText('100 AI credits per calendar month', { exact: false })).toBeVisible();
    await expect(page.getByText('Residential and commercial bookings use the same customer', { exact: false })).toBeVisible();
    await expect(page.getByText('Employees can submit an extra-work request tied to the exact approved scope', { exact: false })).toBeVisible();
    await expect(page.getByText('ServicesOS V1 includes a dedicated Employee App', { exact: false })).toBeVisible();
    await expect(page.getByText('Tap to Pay is included in the V1 completion scope', { exact: false })).toBeVisible();
    await expect(page.getByText('AI should amplify humans, not replace them.', { exact: false })).toBeVisible();
    await expect(page.getByText('Payroll is outside ServicesOS V1.')).toBeVisible();

    await expect(page.getByRole('link', { name: 'Demo', exact: true })).toHaveAttribute('href', '/servicesos-demo');
    await expect(page.getByRole('link', { name: 'Request a V1 Demo' }).first()).toHaveAttribute('href', '#contact');
    await expect(page.getByRole('link', { name: 'Training', exact: true })).toHaveAttribute(
      'href',
      '/servicesos-training'
    );
    await expect(page.getByRole('link', { name: 'Request a V1 Demo' }).last()).toHaveAttribute('href', '#contact');

    expect(blockedIntegrationRequests).toEqual([]);
  });
});
