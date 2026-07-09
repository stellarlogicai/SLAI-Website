import { expect, test } from '@playwright/test';

const publicRoutes = [
  {
    path: '/',
    title: 'Stellar Logic AI | Human-Centered AI Platforms for Service Businesses',
    description:
      'Stellar Logic AI builds human-centered AI platforms, starting with ServicesOS: a workflow system for cleaning and service businesses to manage leads, estimates, scheduling, employee workflows, and payment readiness from one place.',
    socialTitle: 'ServicesOS by Stellar Logic AI',
    socialDescription:
      'A workflow platform being built for cleaning and service businesses to manage leads, estimates, scheduling, employees, job completion, and future payment workflows from one place.',
    heading: 'Building AI That Amplifies Human Potential.',
    visibleText: 'ServicesOS leads the roadmap.',
  },
  {
    path: '/about',
    title: 'About Stellar Logic AI | Human-Centered AI',
    description:
      'Learn about Stellar Logic AI, its founder-led story, and the principles behind practical AI systems that keep people responsible for important decisions.',
    heading: 'A company built around people, responsibility, and practical AI.',
    visibleText: 'Tell the real story.',
  },
  {
    path: '/servicesos',
    title: 'ServicesOS by Stellar Logic AI | Early Access Pilot',
    description:
      'ServicesOS helps cleaning and service businesses track leads, send estimates, schedule jobs, assign cleaners, guide job completion, and prepare for payment workflows without losing context between the office and field team.',
    socialTitle: 'ServicesOS by Stellar Logic AI',
    socialDescription:
      'A workflow platform being built for cleaning and service businesses to manage leads, estimates, scheduling, employees, job completion, and future payment workflows from one place.',
    heading: 'One operating platform for service businesses.',
    visibleText: 'Preparing for real-world service business pilots.',
  },
  {
    path: '/servicesos-demo',
    title: 'See how ServicesOS works | Static Demo Walkthrough',
    description:
      'A static ServicesOS walkthrough using fake demo data to preview dashboard, customers, bookings, calendar, field mode, and payment workflows without app access.',
    socialTitle: 'See how ServicesOS works',
    socialDescription:
      'Preview the ServicesOS workflow with fake data only. No login, Firebase, Stripe, cloud functions, or real customer data are used.',
    heading: 'See how ServicesOS works',
    visibleText: 'Fake data only. No backend actions.',
  },
  {
    path: '/servicesos-founder-access',
    title: 'ServicesOS Founder Access',
    description:
      'Founder Access for cleaning businesses that want early access to ServicesOS while helping shape customer, booking, field visibility, and payment workflows.',
    socialTitle: 'ServicesOS Founder Access',
    socialDescription:
      'ServicesOS Founder Access is for cleaning businesses that want a simpler operating system for customers, bookings, job visibility, and payments.',
    heading: 'Founder Access for cleaning businesses',
    visibleText: 'What is not included yet',
  },
  {
    path: '/servicesos-training',
    title: 'ServicesOS Training Center',
    description:
      'Learn the basics of using ServicesOS to manage customers, bookings, field visibility, and payments during early beta and Founder Access rollout.',
    socialTitle: 'ServicesOS Training Center',
    socialDescription:
      'Simple ServicesOS training for cleaning business owners covering dashboard, customers, bookings, payments, calendar, and Field Mode basics.',
    heading: 'ServicesOS Training Center',
    visibleText: 'Training lessons',
  },
  {
    path: '/research',
    title: 'Research | Stellar Logic AI',
    description:
      'Stellar Logic AI research areas include human-centered AI, memory systems, AI governance, education systems, business automation, and competitive integrity.',
    heading: 'Careful research for practical, human-centered AI.',
    visibleText: 'Public research with boundaries.',
  },
  {
    path: '/blog',
    title: 'Blog | Stellar Logic AI',
    description: 'Stellar Logic AI research notes and product updates are coming soon.',
    heading: 'Research notes and product updates coming soon.',
    visibleText: 'Nothing published yet.',
  },
  {
    path: '/competitive-integrity',
    title: 'Competitive Integrity Research | Stellar Logic AI',
    description:
      'A future Stellar Logic AI research direction exploring fair competition, behavioral intelligence, and human-reviewed integrity systems.',
    heading: 'A future research direction for fair competition.',
    visibleText: 'High-level direction only.',
  },
];

test.describe('SLAI public routes', () => {
  for (const route of publicRoutes) {
    test(`${route.path} loads with page content and shared layout`, async ({ page }) => {
      await page.goto(route.path);

      await expect(page).toHaveTitle(route.title);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', route.description);
      await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute('content', 'Stellar Logic AI');
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
        'content',
        route.socialTitle || route.title
      );
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
        'content',
        route.socialDescription || route.description
      );
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
      await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
        'content',
        route.socialTitle || route.title
      );
      await expect(page.locator('meta[name="twitter:description"]')).toHaveAttribute(
        'content',
        route.socialDescription || route.description
      );
      await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
      await expect(page.getByRole('heading', { name: route.heading })).toBeVisible();
      await expect(page.getByText(route.visibleText)).toBeVisible();
      await expect(page.getByRole('contentinfo')).toBeVisible();
    });

    test(`${route.path} mobile layout has no horizontal overflow`, async ({ page, isMobile }) => {
      test.skip(!isMobile, 'Mobile overflow route checks run in the mobile project.');

      await page.goto(route.path);

      await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
      await expect(page.getByRole('heading', { name: route.heading })).toBeVisible();

      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 1
      );
      expect(hasHorizontalOverflow).toBe(false);
    });
  }
});
