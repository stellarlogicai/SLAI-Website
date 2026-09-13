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
  test('renders completed V1 scope, safety wording, and quick links without backend integrations', async ({ page }) => {
    const blockedIntegrationRequests = watchForbiddenRequests(page);

    await page.goto('/servicesos-faq');

    await expect(page.getByRole('heading', { name: 'ServicesOS V1 FAQ' })).toBeVisible();
    await expect(page.getByText('Practical answers about the defined V1 release')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'General', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Completed V1 capabilities', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Job scope and extra work', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Employee App', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Payments', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'AI and credits', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'V1 launch and boundaries', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Getting started', exact: true })).toBeVisible();

    await expect(page.getByText('ServicesOS V1 is $100/month.')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'How do AI credits work?' })).toBeVisible();
    await expect(page.getByText('Provider-backed AI generation consumes credits')).toBeVisible();
    await expect(page.getByText('Residential and commercial bookings use the same core booking')).toBeVisible();
    await expect(page.getByText('Employees can submit an extra-work request tied to the exact approved scope.')).toBeVisible();
    await expect(page.getByText('Yes. ServicesOS V1 includes a dedicated Employee App')).toBeVisible();
    await expect(page.getByText('A payment request is not payment confirmation.')).toBeVisible();
    await expect(page.getByText('AI can notice, organize, draft, and suggest.')).toBeVisible();
    await expect(page.getByText('Payroll is not part of ServicesOS V1.')).toBeVisible();

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
