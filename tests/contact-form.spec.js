import { expect, test } from '@playwright/test';

const contactEndpoint = 'https://formspree.io/f/meebjnng';
const successMessage = 'Thanks — your request has been captured. We’ll follow up soon.';
const errorMessage = 'Something went wrong sending your request. Please try again.';
const corsHeaders = {
  'Access-Control-Allow-Headers': 'accept, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Origin': '*',
};

async function configureContactEndpoint(page) {
  await page.addInitScript((endpoint) => {
    window.__SLAI_CONTACT_FORM_ENDPOINT__ = endpoint;
  }, contactEndpoint);
}

async function fillValidContactForm(page) {
  await page.getByLabel('Name', { exact: true }).fill('Jamie Brown');
  await page.getByLabel('Email', { exact: true }).fill('jamie@example.com');
  await page.getByLabel('Business name').fill('Stellar Cleaning Co.');
  await page.getByLabel('Business type').fill('Residential cleaning');
  await page.getByLabel('Interested product').selectOption('ServicesOS');
  await page
    .getByLabel('Message', { exact: true })
    .fill('We need a better way to manage estimates, scheduling, and customer follow-up.');
}

async function fulfillPreflight(route) {
  if (route.request().method() === 'OPTIONS') {
    await route.fulfill({ status: 204, headers: corsHeaders });
    return true;
  }

  return false;
}

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

  test('calls the configured endpoint with the expected payload', async ({ page }) => {
    await configureContactEndpoint(page);

    let submittedPayload;
    await page.route(contactEndpoint, async (route) => {
      if (await fulfillPreflight(route)) {
        return;
      }

      expect(route.request().headers()).toMatchObject({
        accept: 'application/json',
        'content-type': 'application/json',
      });
      submittedPayload = route.request().postDataJSON();
      await route.fulfill({ contentType: 'application/json', headers: corsHeaders, json: { ok: true } });
    });

    await page.goto('/#contact');
    await fillValidContactForm(page);
    await page.getByRole('button', { name: 'Request a ServicesOS Demo' }).click();

    await expect(page.getByRole('status')).toHaveText(successMessage);
    expect(submittedPayload).toMatchObject({
      name: 'Jamie Brown',
      email: 'jamie@example.com',
      businessName: 'Stellar Cleaning Co.',
      businessType: 'Residential cleaning',
      interestedProduct: 'ServicesOS',
      message: 'We need a better way to manage estimates, scheduling, and customer follow-up.',
      source: 'slai-website',
    });
    expect(new Date(submittedPayload.submittedAt).toString()).not.toBe('Invalid Date');
  });

  test('shows the success message after a successful response', async ({ page }) => {
    await configureContactEndpoint(page);
    await page.route(contactEndpoint, async (route) => {
      if (await fulfillPreflight(route)) {
        return;
      }

      await route.fulfill({ contentType: 'application/json', headers: corsHeaders, json: { ok: true } });
    });

    await page.goto('/#contact');
    await fillValidContactForm(page);
    await page.getByRole('button', { name: 'Request a ServicesOS Demo' }).click();

    await expect(page.getByRole('status')).toHaveText(successMessage);
  });

  test('shows an error message after a failed response', async ({ page }) => {
    await configureContactEndpoint(page);
    await page.route(contactEndpoint, async (route) => {
      if (await fulfillPreflight(route)) {
        return;
      }

      await route.fulfill({ status: 500, contentType: 'application/json', headers: corsHeaders, json: { ok: false } });
    });

    await page.goto('/#contact');
    await fillValidContactForm(page);
    await page.getByRole('button', { name: 'Request a ServicesOS Demo' }).click();

    await expect(page.getByRole('alert')).toHaveText(errorMessage);
  });

  test('fails gracefully when the endpoint is missing', async ({ page }) => {
    await page.goto('/#contact');
    await fillValidContactForm(page);
    await page.getByRole('button', { name: 'Request a ServicesOS Demo' }).click();

    await expect(page.getByRole('alert')).toHaveText(errorMessage);
  });

  test('silently succeeds without a request when the honeypot is filled', async ({ page }) => {
    await configureContactEndpoint(page);

    let requestCount = 0;
    await page.route(contactEndpoint, async (route) => {
      requestCount += 1;
      await route.fulfill({ contentType: 'application/json', headers: corsHeaders, json: { ok: true } });
    });

    await page.goto('/#contact');
    await fillValidContactForm(page);
    await page.locator('#contact-website').fill('https://spam.example');
    await page.getByRole('button', { name: 'Request a ServicesOS Demo' }).click();

    await expect(page.getByRole('status')).toHaveText(successMessage);
    expect(requestCount).toBe(0);
  });
});
