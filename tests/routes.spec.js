import { expect, test } from '@playwright/test';

const publicRoutes = [
  {
    path: '/',
    title: 'Stellar Logic AI | Human-Centered AI Platforms for Service Businesses',
    description:
      'Stellar Logic AI builds human-centered AI platforms, beginning with ServicesOS V1, a $100/month operating system for cleaning and service businesses targeting customer-ready completion in late October 2026.',
    socialTitle: 'ServicesOS V1 | $100/Month | Late October 2026',
    socialDescription:
      'Customers, bookings, approved job scope, employee field work, payments, and human-controlled AI in one $100/month service-business operating system.',
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
    title: 'ServicesOS V1 | $100/Month | Late October 2026',
    description:
      'ServicesOS V1 is a $100/month operating system for cleaning and service businesses, connecting customers, estimates, residential and commercial bookings, approved job scope, employee field work, payments, and human-controlled AI. Customer-ready V1 is targeted for late October 2026.',
    socialTitle: 'ServicesOS V1 | $100/Month | Late October 2026',
    socialDescription:
      'Customers, bookings, approved job scope, employee field work, payments, and human-controlled AI in one $100/month service-business operating system.',
    heading: 'One operating system for your service business.',
    visibleText: 'Targeted for late October 2026.',
  },
  {
    path: '/servicesos-demo',
    title: 'See how ServicesOS works | Static Demo Walkthrough',
    description:
      'A static ServicesOS walkthrough using fake demo data to preview the owner workflow. Completed V1 also includes approved job scope, the Employee App, add-on/change-request controls, payments, and human-controlled AI.',
    socialTitle: 'See how ServicesOS works',
    socialDescription:
      'Preview the ServicesOS owner workflow with fake data only. This static demo does not connect to Firebase, Stripe, cloud functions, AI providers, or real customer data.',
    heading: 'See how ServicesOS works',
    visibleText: 'Demo only: fake data, no backend actions.',
  },
  {
    path: '/servicesos-founder-access',
    title: 'ServicesOS Founder Access | V1 Early Access',
    description:
      'Founder Access for cleaning and service businesses that want hands-on early access to the $100/month ServicesOS V1 operating platform before public onboarding.',
    socialTitle: 'ServicesOS Founder Access',
    socialDescription:
      'Early access to ServicesOS V1 for owner-led service businesses that want customers, bookings, approved scope, employee field work, payments, and human-controlled AI in one system.',
    heading: 'Founder Access for cleaning and service businesses',
    visibleText: 'V1 boundaries',
  },
  {
    path: '/servicesos-faq',
    title: 'ServicesOS V1 FAQ | $100/Month | Late October 2026',
    description:
      'Answers about the completed ServicesOS V1 scope, $100/month pricing, 100 included monthly AI credits, residential and commercial work, Employee App, job-scope control, payments, and launch validation.',
    socialTitle: 'ServicesOS V1 FAQ | $100/Month',
    socialDescription:
      'Practical answers about ServicesOS V1 capabilities, pricing, Employee App, customer-approved scope, AI credits, payments, and the late-October 2026 customer-ready target.',
    heading: 'ServicesOS V1 FAQ',
    visibleText: 'Clear answers about the defined V1 product.',
  },
  {
    path: '/servicesos-training',
    title: 'ServicesOS V1 Training Center',
    description:
      'Learn the ServicesOS V1 workflow across customers, bookings, approved job scope, Employee App field work, payments, add-on/change requests, and SLAI Assistant.',
    socialTitle: 'ServicesOS V1 Training Center',
    socialDescription:
      'Simple V1 training for cleaning and service business owners covering the connected owner, customer, employee, payment, and AI-assisted workflow.',
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
