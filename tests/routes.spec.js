import { expect, test } from '@playwright/test';

const publicRoutes = [
  {
    path: '/',
    title: 'Stellar Logic AI | Human-Centered AI Platforms for Service Businesses',
    description:
      'Stellar Logic AI builds human-centered AI platforms, beginning with ServicesOS V1, a $100/month operating system targeting customer-ready release in late October 2026.',
    socialTitle: 'ServicesOS V1 | $100/month | Targeting Late October 2026',
    socialDescription:
      'ServicesOS V1 connects customers, estimates, bookings, job scope, employee field work, payments, and human-controlled AI assistance. Customer-ready V1 is targeted for late October 2026.',
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
    title: 'ServicesOS V1 | $100/month | Targeting Late October 2026',
    description:
      'ServicesOS V1 is a $100/month operating system for cleaning and service businesses, connecting customers, estimates, residential and commercial bookings, approved job scope, employee field work, payments, and human-controlled AI assistance.',
    socialTitle: 'ServicesOS V1 | $100/month | Targeting Late October 2026',
    socialDescription:
      'ServicesOS V1 connects customers, estimates, bookings, job scope, employee field work, payments, and human-controlled AI assistance. Customer-ready V1 is targeted for late October 2026.',
    heading: 'One operating system for your service business.',
    visibleText: 'Customer-ready V1 is targeted for late October 2026.',
  },
  {
    path: '/servicesos-demo',
    title: 'See how ServicesOS works | Static Demo Walkthrough',
    description:
      'A static ServicesOS walkthrough using fake demo data to preview the owner workflow while the completed V1 adds employee, scope-control, change-request, AI, and payment capabilities.',
    socialTitle: 'See how ServicesOS works',
    socialDescription:
      'Preview the ServicesOS workflow with fake data only. No login, Firebase, Stripe, cloud functions, AI providers, or real customer data are used.',
    heading: 'See how ServicesOS works',
    visibleText: 'Demo only: fake data, no backend actions.',
  },
  {
    path: '/servicesos-founder-access',
    title: 'ServicesOS Founder Access | Early V1 Rollout',
    description:
      'Founder Access is the hands-on early rollout for cleaning and service businesses that want to help validate ServicesOS V1 before wider public onboarding.',
    socialTitle: 'ServicesOS Founder Access',
    socialDescription:
      'Join the hands-on early rollout of ServicesOS V1 for customers, bookings, approved job scope, field work, payments, and human-controlled AI assistance.',
    heading: 'Founder Access for cleaning and service businesses',
    visibleText: 'Outside V1',
  },
  {
    path: '/servicesos-faq',
    title: 'ServicesOS V1 FAQ | Features, Pricing & Launch',
    description:
      'Answers about the completed ServicesOS V1 scope, $100/month pricing, 100 included monthly AI credits, Employee App, commercial work, job-scope control, payments, Tap to Pay, and late-October release target.',
    socialTitle: 'ServicesOS V1 FAQ | Features, Pricing & Launch',
    socialDescription:
      'Practical answers about what ServicesOS V1 includes, what remains in final validation, $100/month pricing, AI credits, payments, and public onboarding.',
    heading: 'ServicesOS V1 FAQ',
    visibleText: 'Completed V1 answers for prospects and early users.',
  },
  {
    path: '/servicesos-training',
    title: 'ServicesOS V1 Training Center',
    description:
      'Learn the ServicesOS V1 workflow across customers, estimates, bookings, approved job scope, Employee App field work, extra-work requests, payments, and human-controlled AI assistance.',
    socialTitle: 'ServicesOS V1 Training Center',
    socialDescription:
      'Practical ServicesOS V1 training for owner-led service businesses, including booking, job scope, employees, payments, and AI-assisted workflows.',
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
