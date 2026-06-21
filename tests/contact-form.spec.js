import { expect, test } from '@playwright/test';

test.describe('Request demo contact form', () => {
  test('renders required contact fields', async ({ page }) => {
    await page.goto('/#contact');

    await expect(page.getByRole('heading', { name: 'Request a ServicesOS Demo' })).toBeVisible();
    await expect(page.getByLabel('Name', { exact: true })).toBeVisible();
    await expect(page.getByLabel('Email', { exact: true })).toBeVisible();
    await expect(page.getByLabel('Business name')).toBeVisible();
    await expect(page.getByLabel('Business type')).toBeVisible();
    await expect(page.getByLabel('Interested product')).toHaveValue('ServicesOS');
    await expect(page.getByLabel('Message')).toBeVisible();
  });

  test('validates required fields and email format', async ({ page }) => {
    await page.goto('/#contact');

    await page.getByRole('button', { name: 'Request a ServicesOS Demo' }).click();

    await expect(page.getByText('Name is required.')).toBeVisible();
    await expect(page.getByText('Email is required.')).toBeVisible();
    await expect(page.getByText('Message is required.')).toBeVisible();

    await page.getByLabel('Name', { exact: true }).fill('Jamie Brown');
    await page.getByLabel('Email', { exact: true }).fill('not-an-email');
    await page.getByLabel('Message', { exact: true }).fill('I want to reduce manual scheduling and estimate follow-up.');
    await page.getByRole('button', { name: 'Request a ServicesOS Demo' }).click();

    await expect(page.getByText('Enter a valid email address.')).toBeVisible();
  });

  test('allows a visitor to fill and submit the form', async ({ page }) => {
    await page.goto('/#contact');

    await page.getByLabel('Name', { exact: true }).fill('Jamie Brown');
    await page.getByLabel('Email', { exact: true }).fill('jamie@example.com');
    await page.getByLabel('Business name').fill('Stellar Cleaning Co.');
    await page.getByLabel('Business type').fill('Residential cleaning');
    await page.getByLabel('Interested product').selectOption('ServicesOS');
    await page
      .getByLabel('Message', { exact: true })
      .fill('We need a better way to manage estimates, scheduling, and customer follow-up.');
    await page.getByRole('button', { name: 'Request a ServicesOS Demo' }).click();

    await expect(page.getByRole('status')).toHaveText('Thanks — your request has been captured. We’ll follow up soon.');
  });
});
