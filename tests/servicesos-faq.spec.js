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
  test('renders FAQ sections, safety wording, and quick links without backend integrations', async ({ page }) => {
    const blockedIntegrationRequests = watchForbiddenRequests(page);

    await page.goto('/servicesos-faq');

    await expect(page.getByRole('heading', { name: 'ServicesOS V1 FAQ' })).toBeVisible();
    await expect(page.getByText('Practical answers about late-October V1 completion')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'General', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Current features', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Payments', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'V1 launch and early access', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'What is not included yet', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'AI philosophy', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Getting started', exact: true })).toBeVisible();
    await expect(page.getByText('A payment request should not be treated as paid')).toBeVisible();
    await expect(page.getByText('Employee workflow is part of the V1 completion plan.')).toBeVisible();
    await expect(page.getByText('Tap to Pay is part of the remaining V1 completion track')).toBeVisible();
    await expect(page.getByText('Payroll is not part of ServicesOS V1.')).toBeVisible();
    await expect(page.getByText('AI should amplify humans, not replace them.')).toBeVisible();

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
