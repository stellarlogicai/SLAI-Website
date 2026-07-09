import {
  ArrowRight,
  BrainCircuit,
  CalendarCheck,
  ClipboardCheck,
  CreditCard,
  Eye,
  FileSignature,
  GraduationCap,
  LineChart,
  Mail,
  Newspaper,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { submitContactRequest } from './services/contact';

const routes = {
  '/': 'home',
  '/about': 'about',
  '/blog': 'blog',
  '/competitive-integrity': 'competitive-integrity',
  '/research': 'research',
  '/servicesos': 'servicesos',
  '/servicesos-demo': 'servicesos-demo',
  '/servicesos-founder-access': 'servicesos-founder-access',
  '/servicesos-faq': 'servicesos-faq',
  '/servicesos-training': 'servicesos-training',
};

const siteTitle = 'Stellar Logic AI | Human-Centered AI Platforms for Service Businesses';
const siteDescription =
  'Stellar Logic AI builds human-centered AI platforms, starting with ServicesOS: a workflow system for cleaning and service businesses to manage leads, estimates, scheduling, employee workflows, and payment readiness from one place.';
const servicesOSDescription =
  'ServicesOS helps cleaning and service businesses track leads, send estimates, schedule jobs, assign cleaners, guide job completion, and prepare for payment workflows without losing context between the office and field team.';
const servicesOSSocialTitle = 'ServicesOS by Stellar Logic AI';
const servicesOSSocialDescription =
  'A workflow platform being built for cleaning and service businesses to manage leads, estimates, scheduling, employees, job completion, and future payment workflows from one place.';

const routeMeta = {
  '/': {
    title: siteTitle,
    description: siteDescription,
    socialTitle: servicesOSSocialTitle,
    socialDescription: servicesOSSocialDescription,
  },
  '/about': {
    title: 'About Stellar Logic AI | Human-Centered AI',
    description:
      'Learn about Stellar Logic AI, its founder-led story, and the principles behind practical AI systems that keep people responsible for important decisions.',
  },
  '/servicesos': {
    title: 'ServicesOS by Stellar Logic AI | Early Access Pilot',
    description: servicesOSDescription,
    socialTitle: servicesOSSocialTitle,
    socialDescription: servicesOSSocialDescription,
  },
  '/servicesos-demo': {
    title: 'See how ServicesOS works | Static Demo Walkthrough',
    description:
      'A static ServicesOS walkthrough using fake demo data to preview dashboard, customers, bookings, calendar, field mode, and payment workflows without app access.',
    socialTitle: 'See how ServicesOS works',
    socialDescription:
      'Preview the ServicesOS workflow with fake data only. No login, Firebase, Stripe, cloud functions, or real customer data are used.',
  },
  '/servicesos-founder-access': {
    title: 'ServicesOS Founder Access',
    description:
      'Founder Access for cleaning businesses that want early access to ServicesOS while helping shape customer, booking, field visibility, and payment workflows.',
    socialTitle: 'ServicesOS Founder Access',
    socialDescription:
      'ServicesOS Founder Access is for cleaning businesses that want a simpler operating system for customers, bookings, job visibility, and payments.',
  },
  '/servicesos-faq': {
    title: 'ServicesOS FAQ',
    description:
      'Answers to common questions about ServicesOS Founder Access, cleaning-business workflows, payments, Field Mode, and what is still coming later.',
    socialTitle: 'ServicesOS FAQ',
    socialDescription:
      'Common ServicesOS questions for prospects, Founder Access users, and early cleaning-business customers.',
  },
  '/servicesos-training': {
    title: 'ServicesOS Training Center',
    description:
      'Learn the basics of using ServicesOS to manage customers, bookings, field visibility, and payments during early beta and Founder Access rollout.',
    socialTitle: 'ServicesOS Training Center',
    socialDescription:
      'Simple ServicesOS training for cleaning business owners covering dashboard, customers, bookings, payments, calendar, and Field Mode basics.',
  },
  '/research': {
    title: 'Research | Stellar Logic AI',
    description:
      'Stellar Logic AI research areas include human-centered AI, memory systems, AI governance, education systems, business automation, and competitive integrity.',
  },
  '/blog': {
    title: 'Blog | Stellar Logic AI',
    description: 'Stellar Logic AI research notes and product updates are coming soon.',
  },
  '/competitive-integrity': {
    title: 'Competitive Integrity Research | Stellar Logic AI',
    description:
      'A future Stellar Logic AI research direction exploring fair competition, behavioral intelligence, and human-reviewed integrity systems.',
  },
};

const socialPreviewImage = '/brand/logo_social_preview_1200x630.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'ServicesOS', href: '/servicesos' },
  { label: 'Research', href: '/research' },
  { label: 'Blog', href: '/blog' },
  { label: 'Integrity', href: '/competitive-integrity' },
  { label: 'Contact', href: '#contact' },
];

const servicesOSResourceLinks = [
  { label: 'See the demo', href: '/servicesos-demo' },
  { label: 'Request Founder Access', href: '/servicesos-founder-access' },
  { label: 'Learn how it works', href: '/servicesos-training' },
  { label: 'Read common questions', href: '/servicesos-faq' },
];

const productPreviews = [
  {
    name: 'ServicesOS',
    status: 'Near-term product',
    description:
      'An operating platform for service businesses that brings CRM, estimates, contracts, payments, scheduling, training, and AI assistance into one place.',
    icon: ShieldCheck,
    href: '/servicesos',
    featured: true,
    points: ['Built around daily operations', 'Designed for service teams', 'Human approval stays central'],
  },
  {
    name: 'GrowthAI',
    status: 'Coming soon / internal-first',
    description:
      'A future growth platform currently framed as internal-first tooling for lead discovery, outreach support, analytics, memory systems, and human oversight.',
    icon: LineChart,
    points: ['Lead research support', 'Outreach drafting', 'Growth analytics'],
  },
  {
    name: 'EducationOS',
    status: 'Planned future platform',
    description:
      'A planned education platform exploring tutoring, teacher tools, corporate training, lesson marketplaces, and adaptive learning with responsible oversight.',
    icon: GraduationCap,
    points: ['Tutor and teacher support', 'Training content systems', 'Adaptive learning research'],
  },
  {
    name: 'FutureAI',
    status: 'Careful research initiative',
    description:
      'A long-term research initiative studying memory, attention, ethics, uncertainty, oversight, and human-AI cooperation without AGI or consciousness claims.',
    icon: BrainCircuit,
    points: ['Memory and attention systems', 'AI ethics and oversight', 'Composite intelligence research'],
  },
];

const serviceFeatures = [
  {
    title: 'Customers & leads',
    description: 'Keep customer records, lead context, contact details, property notes, and follow-up needs organized.',
    icon: Users,
  },
  {
    title: 'Estimates and quotes',
    description: 'Review requests, clarify scope, and move owner-approved work toward a booking.',
    icon: FileSignature,
  },
  {
    title: 'Bookings & scheduling',
    description: 'Use Bookings as the job management center for schedule, job notes, and payment status.',
    icon: CalendarCheck,
  },
  {
    title: 'Payments',
    description: 'Create Stripe payment links when connected and record manual payments collected another way.',
    icon: CreditCard,
  },
  {
    title: 'Field Mode',
    description: 'Give workers read-only job packet visibility without exposing owner admin controls.',
    icon: ClipboardCheck,
  },
  {
    title: 'Revenue visibility',
    description: 'Separate expected revenue, collected revenue, and outstanding balances in owner-friendly terms.',
    icon: LineChart,
  },
];

const servicesOSAudience = [
  'Cleaning businesses that need cleaner customer, quote, and booking workflows.',
  'Owner-led local service teams juggling leads, schedules, payments, and job notes.',
  'Teams that want one clearer operating center before adding more software.',
];

const servicesOSWorkflow = ['Request', 'Booking', 'Payment', 'Field visibility', 'Follow-up'];

const servicesOSDemoCustomers = [
  {
    name: 'Sarah Mitchell',
    service: 'Standard recurring clean',
    schedule: 'Scheduled next Tuesday',
    payment: 'Unpaid',
    amount: '$185',
    phone: '(555) 014-2180',
    email: 'sarah.demo@example.com',
    notes: 'Prefers the kitchen and bathrooms prioritized before recurring living area touch-ups.',
  },
  {
    name: 'Mark Evans',
    service: 'Move-out deep clean',
    schedule: 'Completed',
    payment: 'Paid',
    amount: '$320',
    phone: '(555) 019-4420',
    email: 'mark.demo@example.com',
    notes: 'Apartment turnover clean with inside appliances, baseboards, and final walkthrough notes.',
  },
  {
    name: 'Aunt B Demo Client',
    service: 'First-time deep clean',
    schedule: 'Quote requested',
    payment: 'Pending owner review',
    amount: '$240 estimated',
    phone: '(555) 012-7710',
    email: 'demo.client@example.com',
    notes: 'Owner reviews the requested scope before confirming schedule and final price.',
  },
];

const servicesOSDemoMetrics = [
  { label: 'Expected Revenue', value: '$745', note: 'Booked and quoted work owners are watching.' },
  { label: 'Collected Revenue', value: '$320', note: 'Only money recorded as received.' },
  { label: 'Outstanding Balance', value: '$425', note: 'Work still unpaid or pending review.' },
  { label: 'Pending quote requests', value: '1', note: 'A new customer request waiting on owner approval.' },
  { label: 'Upcoming jobs', value: '2', note: 'Scheduled work visible before the day starts.' },
];

const servicesOSDemoBookings = [
  {
    customer: 'Sarah Mitchell',
    service: 'Standard recurring clean',
    status: 'Scheduled',
    paymentStatus: 'Unpaid',
    owed: '$185',
    received: '$0',
    method: 'Not collected yet',
  },
  {
    customer: 'Mark Evans',
    service: 'Move-out deep clean',
    status: 'Completed',
    paymentStatus: 'Paid another way',
    owed: '$0',
    received: '$320',
    method: 'Manual payment recorded',
  },
];

const servicesOSDemoCalendarItems = [
  { day: 'Tuesday', time: '9:00 AM', title: 'Sarah Mitchell', detail: 'Recurring clean - unpaid' },
  { day: 'Wednesday', time: '1:30 PM', title: 'Aunt B Demo Client', detail: 'Quote follow-up before scheduling' },
  { day: 'Friday', time: '10:00 AM', title: 'Mark Evans', detail: 'Completed move-out clean review' },
];

const servicesOSDemoSteps = [
  {
    step: 'Step 1',
    title: 'Review the Dashboard',
    notice: "See today's revenue, requests, balances, and upcoming work at a glance.",
  },
  {
    step: 'Step 2',
    title: 'Review a new customer request',
    notice: 'Check scope and customer context before turning a request into a booking.',
  },
  {
    step: 'Step 3',
    title: 'Manage the booking',
    notice: 'Keep job details, schedule, service notes, and payment status together.',
  },
  {
    step: 'Step 4',
    title: 'Understand payment status',
    notice: 'Track what is owed, what was received, and how payment was recorded.',
  },
  {
    step: 'Step 5',
    title: 'View the schedule',
    notice: 'Use Calendar for read-only schedule visibility.',
  },
  {
    step: 'Step 6',
    title: 'Open Field Mode',
    notice: 'Give workers job details without exposing admin controls.',
  },
  {
    step: 'Step 7',
    title: 'Request Founder Access',
    notice: 'Ask about early access if the workflow fits your cleaning business.',
  },
];

const founderAccessAudience = [
  'Solo cleaners who need one simple place to manage customers, jobs, and payment status.',
  'Small cleaning teams that are ready to move beyond notebooks, text threads, and scattered spreadsheets.',
  'Family-run cleaning businesses where the owner still needs hands-on visibility into daily work.',
  'Early service businesses that want simpler operations before adding more tools or staff.',
];

const founderAccessToday = [
  'Customer organization',
  'Quote and request review',
  'Booking visibility',
  'Read-only calendar',
  'Read-only Field Mode job packets',
  'Stripe payment links when connected',
  'Manual payment recording',
  'Basic revenue visibility',
];

const founderAccessMeans = [
  'Early access while ServicesOS is still being shaped with real cleaning businesses.',
  'A direct feedback loop so the product improves around actual owner workflows.',
  'Simpler pricing conversations while the product matures.',
  'Human-guided onboarding instead of handing owners a login and hoping they figure it out.',
  'A roadmap shaped by real users, not enterprise feature checklists.',
];

const founderAccessNotIncluded = [
  'No full mobile employee app yet',
  'No Tap to Pay yet',
  'No payroll',
  'No route optimization',
  'No advanced accounting',
  'No auto-posting or autonomous AI',
  'Some workflows may still be beta',
];

const founderAccessPhilosophy = [
  'AI should amplify humans, not replace them.',
  'Business owners remain responsible for important decisions.',
  'Build simple first; complexity is earned.',
  'MVPs solve real problems.',
];

const founderAccessExpectations = [
  'Founder Access users should expect improvements over time.',
  'Feedback matters and may directly affect product priorities.',
  'Some features may change as the workflow gets clearer.',
  'Support is hands-on during the early rollout.',
];

const servicesOSTrainingLessons = [
  {
    title: 'Getting started',
    summary: 'Use the basic flow to understand where each piece of work belongs.',
    points: [
      'Request to Booking to Payment to Field visibility to Follow-up is the core ServicesOS path.',
      'Requests should be reviewed before they become confirmed jobs.',
      'Bookings become the source of truth once work is approved and scheduled.',
    ],
  },
  {
    title: 'Dashboard',
    summary: 'The Dashboard shows what needs attention before the day gets away from you.',
    points: [
      'Review pending requests and upcoming jobs.',
      'Compare expected revenue with collected revenue.',
      'Use outstanding balance to see which jobs still need payment follow-up.',
    ],
  },
  {
    title: 'Customers',
    summary: 'Customer records keep contact, property, and service notes organized.',
    points: [
      'Keep current customer records clean and accurate during beta.',
      'Use customer notes for preferences, property details, and service context.',
      'Avoid creating duplicate records when an existing customer can be updated.',
    ],
  },
  {
    title: 'Bookings',
    summary: 'Bookings is the job management center.',
    points: [
      'Schedule, job details, and payment status live with the booking.',
      'Payment links do not mark a booking paid by themselves.',
      'Manual payments are owner-recorded for cash, check, or external payment methods.',
    ],
  },
  {
    title: 'Payments',
    summary: 'Payment tracking should describe what actually happened.',
    points: [
      'Stripe must be connected before online payment links can be used.',
      'Stripe-paid status updates after payment confirmation.',
      'Manual paid-another-way is for cash, check, Venmo, Zelle, PayPal, or other external payments.',
      'The owner remains responsible for verifying unusual cases.',
    ],
  },
  {
    title: 'Calendar',
    summary: 'Calendar is read-only visibility.',
    points: [
      'Use Calendar to understand the schedule.',
      'Booking changes happen in Bookings.',
      'Calendar should not become a second place to manage jobs.',
    ],
  },
  {
    title: 'Field Mode',
    summary: 'Field Mode is a read-only job packet.',
    points: [
      'It shows job information without admin controls.',
      'Workers can review customer, address, service notes, and checklist context.',
      'It is not the full employee mobile app yet.',
    ],
  },
  {
    title: 'Beta expectations',
    summary: 'ServicesOS is being built simple first.',
    points: [
      'Founder Access users may see improvements over time.',
      'Feedback matters and can shape product priorities.',
      'Some workflows may change as the product matures.',
      'The goal is to solve real operating problems before adding complexity.',
    ],
  },
];

const servicesOSFaqGroups = [
  {
    title: 'General',
    questions: [
      {
        question: 'What is ServicesOS?',
        answer:
          'ServicesOS is an operating system for service businesses, starting with cleaning companies. It helps owners manage customers, quote and request review, bookings, field visibility, and payments.',
      },
      {
        question: 'Who is ServicesOS built for first?',
        answer:
          'It is being built first for cleaning companies, especially solo cleaners, small teams, family-run businesses, and early service businesses that need simpler operations.',
      },
      {
        question: 'Is ServicesOS only for cleaning companies?',
        answer:
          'Cleaning companies are the first focus. The same workflow may fit other service businesses later, but early messaging and onboarding are cleaning-business first.',
      },
      {
        question: 'What is Founder Access?',
        answer:
          'Founder Access means early access while the product is still improving, with a more direct feedback loop and hands-on onboarding.',
      },
      {
        question: 'Is ServicesOS finished?',
        answer:
          'No. ServicesOS is in beta and still maturing. Some workflows may change as real cleaning businesses use it and give feedback.',
      },
    ],
  },
  {
    title: 'Current features',
    questions: [
      {
        question: 'What can ServicesOS do today?',
        answer:
          'Current V1 workflows include customer organization, quote and request review, booking and job visibility, read-only calendar, read-only Field Mode job packets, Stripe payment links when connected, manual payment recording, and basic revenue visibility.',
      },
      {
        question: 'Can I manage customers?',
        answer:
          'Yes. ServicesOS is designed to keep customer contact details, property notes, service notes, and job context organized.',
      },
      {
        question: 'Can I manage bookings?',
        answer:
          'Yes. Bookings is the job management center for schedule, job details, payment status, and owner review.',
      },
      {
        question: 'Does ServicesOS have a calendar?',
        answer:
          'Yes, but Calendar is currently for read-only schedule visibility. Booking changes happen in Bookings.',
      },
      {
        question: 'What is Field Mode?',
        answer:
          'Field Mode is a read-only job packet for workers. It shows job information without admin controls and is not the full employee mobile app yet.',
      },
      {
        question: 'Can I track revenue?',
        answer:
          'ServicesOS can show basic expected revenue, collected revenue, and outstanding balance visibility so owners can separate booked work from money actually received.',
      },
    ],
  },
  {
    title: 'Payments',
    questions: [
      {
        question: 'Does ServicesOS process payments?',
        answer:
          'Online payments use Stripe Connect when connected. ServicesOS also supports owner-recorded manual payment tracking for payments collected another way.',
      },
      {
        question: 'Do I need Stripe?',
        answer:
          'You need Stripe Connect for online payment links. If Stripe is not connected, owners can still record cash, check, or external payments manually.',
      },
      {
        question: 'Can I record cash/check/manual payments?',
        answer:
          'Yes. Manual paid-another-way tracking is for cash, check, Venmo, Zelle, PayPal, or other external payment methods the owner verifies.',
      },
      {
        question: 'Does creating a payment link mark a booking paid?',
        answer:
          'No. Payment links do not mark bookings paid by themselves. Stripe-paid status updates after confirmed payment.',
      },
      {
        question: 'Who is responsible for refunds or chargebacks?',
        answer:
          'Business owners remain responsible for unusual payment cases, refunds, and chargebacks. ServicesOS is not adding new refund or dispute workflows in V1.',
      },
    ],
  },
  {
    title: 'Beta / Founder Access',
    questions: [
      {
        question: 'What should Founder Access users expect?',
        answer:
          'Founder Access users should expect a product that is useful but still improving. Early support is more hands-on while the workflow matures.',
      },
      {
        question: 'Will features change?',
        answer:
          'Yes. Some workflows may change as ServicesOS learns from real cleaning businesses and simplifies the product.',
      },
      {
        question: 'How should feedback be handled?',
        answer:
          'Feedback should be specific and tied to real owner workflows: customers, bookings, payments, Field Mode, schedule visibility, and follow-up.',
      },
      {
        question: 'Is support hands-on?',
        answer:
          'Yes. Founder Access is intended to be more guided than a typical self-serve product launch.',
      },
    ],
  },
  {
    title: 'What is not included yet',
    questions: [
      {
        question: 'Is there a mobile employee app?',
        answer:
          'Not yet. Field Mode is mobile-friendly web visibility, not the full React Native employee app yet.',
      },
      {
        question: 'Does ServicesOS support Tap to Pay?',
        answer: 'Not yet. Tap to Pay is later and is parked until ServicesOS V1 is stable.',
      },
      {
        question: 'Does it handle payroll?',
        answer: 'No. Payroll is not part of ServicesOS V1.',
      },
      {
        question: 'Does it do route optimization?',
        answer: 'No. Route optimization is not part of V1 and should be treated as a later possibility.',
      },
      {
        question: 'Does it replace full accounting software?',
        answer:
          'No. ServicesOS can show basic payment and revenue visibility, but it does not replace full accounting software.',
      },
      {
        question: 'Does it auto-post marketing content?',
        answer:
          'No. Autonomous marketing and auto-posting are not V1 ServicesOS features.',
      },
    ],
  },
  {
    title: 'AI philosophy',
    questions: [
      {
        question: 'Does AI make decisions for the business?',
        answer:
          'No. AI may draft, suggest, summarize, or organize later, but humans remain responsible for important decisions.',
      },
      {
        question: 'Will AI replace the owner?',
        answer:
          'No. ServicesOS is built around owner control. Human approval stays central for customer, pricing, scheduling, and payment decisions.',
      },
      {
        question: 'How does SLAI think about AI?',
        answer:
          'AI should amplify humans, not replace them. ServicesOS should help owners work more clearly without pretending automation can run the business alone.',
      },
    ],
  },
  {
    title: 'Getting started',
    questions: [
      {
        question: 'How do I see the demo?',
        answer: 'Use the ServicesOS demo page for a guided static walkthrough with fake data only.',
      },
      {
        question: 'How do I request Founder Access?',
        answer: 'Use the Founder Access page or the contact form to tell SLAI about your cleaning business.',
      },
      {
        question: 'Where can I learn how to use ServicesOS?',
        answer: 'Use the Training Center for beta-aware lessons on Dashboard, Customers, Bookings, Payments, Calendar, and Field Mode.',
      },
    ],
  },
];

const researchAreas = [
  {
    title: 'Human-Centered AI',
    description:
      'Research focused on systems that assist people, explain recommendations, expose uncertainty, and keep humans responsible for important decisions.',
    icon: Users,
  },
  {
    title: 'Memory Systems',
    description:
      'Careful study of how AI systems can retain useful context, summarize history, and support continuity without overstating what memory can do.',
    icon: BrainCircuit,
  },
  {
    title: 'AI Governance',
    description:
      'Principles for data ownership, transparency, customer rights, human oversight, and responsible limits around automation.',
    icon: Scale,
  },
  {
    title: 'Composite Intelligence',
    description:
      'Exploration of how specialized systems can cooperate around defined tasks, with clear boundaries and review points.',
    icon: ClipboardCheck,
  },
  {
    title: 'Education Systems',
    description:
      'Planning around tutoring support, teacher tools, corporate training, adaptive learning, and learning marketplaces.',
    icon: GraduationCap,
  },
  {
    title: 'Business Automation',
    description:
      'Operational research tied to service businesses, customer workflows, scheduling, training, and practical AI assistance.',
    icon: LineChart,
  },
  {
    title: 'Competitive Integrity',
    description:
      'Early research into fairness, behavioral signals, investigation workflows, and integrity support for competitive environments.',
    icon: ShieldCheck,
  },
];

function getRouteFromLocation() {
  return routes[window.location.pathname] ? window.location.pathname : '/';
}

function navigateTo(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function PageLink({ href, className, children, ...props }) {
  const isAnchor = href.startsWith('#');

  function handleClick(event) {
    if (isAnchor) {
      return;
    }

    event.preventDefault();
    navigateTo(href);
  }

  return (
    <a className={className} href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

function Navbar({ currentPath }) {
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <PageLink aria-label="SLAI brand" className="brand" href="/">
          <img
            alt=""
            className="brand-icon"
            height="40"
            src="/brand/logo_icon_transparent_clean.png"
            width="40"
          />
          <span className="brand-wordmark">SLAI</span>
        </PageLink>
        <div className="nav-links">
          {navLinks.map((link) => {
            const isActive = !link.href.startsWith('#') && currentPath === link.href;
            return (
              <PageLink
                aria-current={isActive ? 'page' : undefined}
                className={isActive ? 'active' : undefined}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </PageLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-visual" aria-hidden="true">
        <div className="signal-line signal-line-one" />
        <div className="signal-line signal-line-two" />
        <div className="signal-node node-one" />
        <div className="signal-node node-two" />
        <div className="signal-node node-three" />
      </div>
      <div className="shell hero-content">
        <div className="hero-copy-panel">
          <p className="eyebrow">Stellar Logic AI</p>
          <h1>Building AI That Amplifies Human Potential.</h1>
          <p className="hero-copy">
            SLAI develops AI-powered platforms for business growth, education, operations, and future intelligent
            systems that help people work smarter while keeping humans responsible for important decisions.
          </p>
          <div className="hero-actions">
            <PageLink className="button primary" href="/servicesos">
              Explore ServicesOS
              <ArrowRight size={18} aria-hidden="true" />
            </PageLink>
            <PageLink className="button secondary" href="/about">
              Learn About SLAI
            </PageLink>
          </div>
        </div>
        <div className="hero-brand-panel" aria-hidden="true">
          <img
            alt=""
            className="hero-brand-image"
            height="630"
            src="/brand/logo_social_preview_1200x630.png"
            width="1200"
          />
        </div>
      </div>
    </section>
  );
}

function PageHero({ className = '', eyebrow, title, copy, children }) {
  return (
    <section className={className ? `page-hero ${className}` : 'page-hero'}>
      <div className="shell page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        {children}
      </div>
    </section>
  );
}

function ServicesOSResourceLinks({ includeContact = false, omitDemo = false }) {
  const resourceLinks = omitDemo
    ? servicesOSResourceLinks.filter((link) => link.href !== '/servicesos-demo')
    : servicesOSResourceLinks;

  return (
    <section className="section servicesos-resource-section" aria-labelledby="servicesos-resource-heading">
      <div className="shell value-panel servicesos-resource-panel">
        <div>
          <p className="eyebrow">ServicesOS resources</p>
          <h2 id="servicesos-resource-heading">Keep exploring ServicesOS.</h2>
          <p>
            Use these static website resources to understand the demo, Founder Access, basic training, and common
            questions before requesting access.
          </p>
        </div>
        <div className="servicesos-resource-links">
          {resourceLinks.map((link) => (
            <PageLink className="button secondary" href={link.href} key={link.href}>
              {link.label}
            </PageLink>
          ))}
          {includeContact && (
            <a className="button primary" href="#contact">
              Contact SLAI
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="section mission-section">
      <div className="shell two-column">
        <div>
          <p className="eyebrow">Mission</p>
          <h2>Tools that make people more capable, not less necessary.</h2>
        </div>
        <div className="mission-copy">
          <p>
            SLAI is built around a simple rule: AI assists, humans decide. Data can inform judgment, automate routine
            work, and surface options, but responsibility stays with people.
          </p>
          <p>
            The company is shaped by practical products, honest research, and a belief that good systems should remove
            friction so people can spend more time doing work that matters.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductPreview({ detailed = false }) {
  return (
    <section className="section product-section">
      <div className="shell">
        <div className="section-header">
          <p className="eyebrow">Product Direction</p>
          <h2>ServicesOS leads the roadmap.</h2>
          <p>
            SLAI is starting with practical operating software for service businesses. Future platforms are clearly
            framed as planned products, internal-first work, or careful research.
          </p>
        </div>
        <div className={detailed ? 'product-grid detailed' : 'product-grid'}>
          {productPreviews.map((product) => (
            <ProductCard product={product} detailed={detailed} key={product.name} />
          ))}
        </div>
      </div>
      <ServicesOSResourceLinks />
    </section>
  );
}

function ResearchAreas() {
  return (
    <section className="section feature-section">
      <div className="shell">
        <div className="section-header">
          <p className="eyebrow">Research Areas</p>
          <h2>Public research with boundaries.</h2>
          <p>
            SLAI shares high-level research direction without publishing proprietary algorithms, implementation secrets,
            sensitive benchmarks, or patent-sensitive techniques.
          </p>
        </div>
        <div className="feature-grid research-area-grid">
          {researchAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article className="feature-card" key={area.title}>
                <span className="icon-wrap">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, detailed }) {
  const Icon = product.icon;

  return (
    <article className={product.featured ? 'product-card featured' : 'product-card'}>
      <div className="product-card-top">
        <span className="icon-wrap">
          <Icon size={24} aria-hidden="true" />
        </span>
        <span className="status">{product.status}</span>
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {detailed && (
        <ul className="plain-list">
          {product.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
      {product.href && (
        <PageLink className="text-link" href={product.href}>
          View {product.name}
          <ArrowRight size={16} aria-hidden="true" />
        </PageLink>
      )}
    </article>
  );
}

function FounderPreview() {
  return (
    <section className="section founder-preview">
      <div className="shell two-column">
        <div>
          <p className="eyebrow">Founder Story</p>
          <h2>Built from real operating experience, not theory alone.</h2>
        </div>
        <div>
          <p>
            SLAI was founded on the idea that technology should help people work smarter, learn faster, and build a
            better future. The company reflects years of management experience, small-town roots, after-work building,
            fair pricing, and a belief that AI should help humans instead of replacing them.
          </p>
          <PageLink className="text-link" href="/about">
            Read the story
            <ArrowRight size={16} aria-hidden="true" />
          </PageLink>
        </div>
      </div>
    </section>
  );
}

function ResearchPreview() {
  return (
    <section className="section research-section">
      <div className="shell research-panel">
        <div className="research-copy">
          <div>
            <p className="eyebrow">Research</p>
            <h2>Careful public research, without inflated claims.</h2>
          </div>
          <p>
            SLAI will publish selected observations on architecture, human oversight, memory systems, education, and
            operational intelligence without exposing proprietary methods or presenting speculative research as finished
            capability.
          </p>
        </div>
        <img
          alt="SLAI branded research preview with the company mark on a deep navy background."
          className="research-brand-image"
          height="720"
          loading="lazy"
          src="/brand/logo_dark_background.png"
          width="720"
        />
      </div>
    </section>
  );
}

function ContactCTA({ compact = false }) {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    businessName: '',
    businessType: '',
    interestedProduct: 'ServicesOS Demo',
    message: '',
    website: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
    setFormErrors((current) => ({ ...current, [name]: undefined }));
    setSubmissionError('');
  }

  function validateForm() {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.name.trim()) {
      nextErrors.name = 'Name is required.';
    }

    if (!formValues.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!emailPattern.test(formValues.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!formValues.message.trim()) {
      nextErrors.message = 'Message is required.';
    }

    return nextErrors;
  }

  async function submitForm(event) {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setFormErrors(nextErrors);
      setIsSubmitted(false);
      setSubmissionError('');
      return;
    }

    setFormErrors({});
    setSubmissionError('');

    if (formValues.website.trim()) {
      setIsSubmitted(true);
      return;
    }

    const payload = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      businessName: formValues.businessName.trim(),
      businessType: formValues.businessType.trim(),
      interestedProduct: formValues.interestedProduct,
      message: formValues.message.trim(),
      submittedAt: new Date().toISOString(),
      source: 'slai-website',
    };

    setIsSubmitting(true);
    setIsSubmitted(false);

    try {
      await submitContactRequest(payload);
      setIsSubmitted(true);
    } catch {
      setSubmissionError('Something went wrong sending your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={compact ? 'section contact-section compact' : 'section contact-section'} id="contact">
      <div className="shell contact-panel">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Request a ServicesOS Demo</h2>
          <p>
            Tell us what workflow problem you want solved, ask about early access, or request a pilot pricing
            conversation. Your request goes to SLAI by email, and we'll follow up directly.
          </p>
          <div className="contact-actions" aria-label="Contact links">
            <a className="text-link contact-email" href="mailto:stellar.logic.ai@gmail.com">
              stellar.logic.ai@gmail.com
              <Mail size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <form className="contact-form" noValidate onSubmit={submitForm}>
          <div className="form-row honeypot" aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input
              autoComplete="off"
              id="contact-website"
              name="website"
              onChange={updateField}
              tabIndex="-1"
              type="text"
              value={formValues.website}
            />
          </div>
          <div className="form-row">
            <label htmlFor="contact-name">Name</label>
            <input
              aria-describedby={formErrors.name ? 'contact-name-error' : undefined}
              aria-invalid={Boolean(formErrors.name)}
              id="contact-name"
              disabled={isSubmitting}
              name="name"
              onChange={updateField}
              required
              type="text"
              value={formValues.name}
            />
            {formErrors.name && (
              <p className="form-error" id="contact-name-error">
                {formErrors.name}
              </p>
            )}
          </div>
          <div className="form-row">
            <label htmlFor="contact-email">Email</label>
            <input
              aria-describedby={formErrors.email ? 'contact-email-error' : undefined}
              aria-invalid={Boolean(formErrors.email)}
              id="contact-email"
              disabled={isSubmitting}
              name="email"
              onChange={updateField}
              required
              type="email"
              value={formValues.email}
            />
            {formErrors.email && (
              <p className="form-error" id="contact-email-error">
                {formErrors.email}
              </p>
            )}
          </div>
          <div className="form-row">
            <label htmlFor="business-name">Business name</label>
            <input
              id="business-name"
              disabled={isSubmitting}
              name="businessName"
              onChange={updateField}
              type="text"
              value={formValues.businessName}
            />
          </div>
          <div className="form-row">
            <label htmlFor="business-type">Business type</label>
            <input
              id="business-type"
              disabled={isSubmitting}
              name="businessType"
              onChange={updateField}
              placeholder="Business type"
              type="text"
              value={formValues.businessType}
            />
          </div>
          <div className="form-row">
            <label htmlFor="interested-product">Interested product</label>
            <select
              id="interested-product"
              disabled={isSubmitting}
              name="interestedProduct"
              onChange={updateField}
              value={formValues.interestedProduct}
            >
              <option>ServicesOS Demo</option>
              <option>Early Access / Pilot</option>
              <option>Pilot Pricing</option>
              <option>Product Research</option>
              <option>GrowthAI</option>
              <option>EducationOS</option>
              <option>RetailOS / PharmacyOS</option>
              <option>General SLAI inquiry</option>
            </select>
          </div>
          <div className="form-row full">
            <label htmlFor="contact-message">Message</label>
            <textarea
              aria-describedby={formErrors.message ? 'contact-message-error' : undefined}
              aria-invalid={Boolean(formErrors.message)}
              id="contact-message"
              disabled={isSubmitting}
              name="message"
              onChange={updateField}
              required
              rows="5"
              value={formValues.message}
            />
            {formErrors.message && (
              <p className="form-error" id="contact-message-error">
                {formErrors.message}
              </p>
            )}
          </div>
          <button className="button primary form-submit" disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Sending request...' : 'Request a ServicesOS Demo'}
            <Mail size={18} aria-hidden="true" />
          </button>
          {submissionError && (
            <p className="form-submit-error" role="alert">
              {submissionError}
            </p>
          )}
          {isSubmitted && (
            <p className="form-success" role="status">
              Thanks — your request has been captured. We’ll follow up soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
      <ProductPreview />
      <FounderPreview />
      <ResearchPreview />
      <section className="section route-preview-section">
        <div className="shell three-column">
          <article>
            <p className="eyebrow">Research</p>
            <h2>Research direction</h2>
            <p>Read the careful public overview of SLAI research areas and boundaries.</p>
            <PageLink className="text-link" href="/research">
              Explore research
              <ArrowRight size={16} aria-hidden="true" />
            </PageLink>
          </article>
          <article>
            <p className="eyebrow">Blog</p>
            <h2>Notes coming soon</h2>
            <p>Research notes and product updates will live here when they are ready to publish.</p>
            <PageLink className="text-link" href="/blog">
              View blog
              <ArrowRight size={16} aria-hidden="true" />
            </PageLink>
          </article>
          <article>
            <p className="eyebrow">Integrity</p>
            <h2>Future teaser</h2>
            <p>A future research direction for fair competition and human-reviewed integrity systems.</p>
            <PageLink className="text-link" href="/competitive-integrity">
              View teaser
              <ArrowRight size={16} aria-hidden="true" />
            </PageLink>
          </article>
        </div>
      </section>
      <ContactCTA compact />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SLAI"
        title="A company built around people, responsibility, and practical AI."
        copy="SLAI is shaped by the belief that intelligent systems should help people work smarter, learn faster, and build a better future without pretending technology removes human responsibility."
      />
      <section className="section story-section">
        <div className="shell story-grid">
          <article className="story-block">
            <p className="eyebrow">Founder Story</p>
            <h2>Tell the real story.</h2>
            <p>
              SLAI grew out of years of management experience, after-work building, small-town roots, and a practical
              understanding of how messy real operations can become. The work began with the belief that better tools
              should reduce stress, make work clearer, and respect the people using them.
            </p>
            <p>
              ServicesOS and EducationOS were also shaped by family influence and lived experience. The goal is not to
              create software that sounds impressive in a pitch deck. The goal is to build tools that people can trust
              when work is busy, imperfect, and human.
            </p>
          </article>
          <aside className="principles-panel">
            <h2>Operating principles</h2>
            <ul className="plain-list">
              <li>AI assists. Humans decide.</li>
              <li>Data informs decisions. People interpret them.</li>
              <li>Fair pricing and clear expectations matter.</li>
              <li>Customers own their data.</li>
              <li>Build simple first. Complexity is earned.</li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="section quote-band">
        <div className="shell">
          <blockquote>
            SLAI was founded on the idea that technology should help people work smarter, learn faster, and build a
            better future.
          </blockquote>
        </div>
      </section>
      <ContactCTA compact />
    </>
  );
}

function ServicesOSPage() {
  return (
    <>
      <PageHero
        className="servicesos-hero"
        eyebrow="ServicesOS"
        title="One operating platform for service businesses."
        copy="ServicesOS is SLAI's main near-term product: a practical system for service businesses that need less software sprawl, fewer manual handoffs, and clearer daily operations."
      >
        <div className="hero-actions">
          <PageLink className="button primary" href="/servicesos-founder-access">
            Request Founder Access
            <ArrowRight size={18} aria-hidden="true" />
          </PageLink>
          <PageLink className="button secondary" href="/servicesos-demo">
            View Demo
          </PageLink>
          <PageLink className="text-link" href="/servicesos-faq">
            Read FAQ
            <ArrowRight size={16} aria-hidden="true" />
          </PageLink>
        </div>
      </PageHero>
      <section className="section services-fit-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Who it is for</p>
            <h2>Built first for cleaning businesses and owner-led local service teams.</h2>
          </div>
          <div>
            <p>
              ServicesOS is for teams juggling leads, quotes, schedules, payments, and job notes without a clear shared
              operating center.
            </p>
            <ul className="plain-list">
              {servicesOSAudience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section workflow-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Core Workflow</p>
            <h2>One clear path from request to follow-up.</h2>
            <p>
              Request to Booking to Payment to Field visibility to Follow-up. The goal is to keep the work moving
              without losing context between the customer, owner, and field team.
            </p>
          </div>
          <ol className="workflow-list">
            {servicesOSWorkflow.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section feature-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Current Focus</p>
            <h2>Core tools for the work behind each job.</h2>
            <p>
              ServicesOS is operations-first. Detailed how-to guidance now lives in the Training Center.
            </p>
          </div>
          <div className="feature-grid services-feature-grid">
            {serviceFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="feature-card" key={feature.title}>
                  <span className="icon-wrap">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section product-detail-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">AI Posture</p>
            <h2>Human-controlled and operations-first.</h2>
          </div>
          <div>
            <p>
              AI may draft, suggest, and organize later. Humans remain responsible for important customer, pricing,
              scheduling, and payment decisions.
            </p>
            <p>ServicesOS is not automation-first. It is practical operating software first.</p>
          </div>
        </div>
      </section>
      <section className="section pilot-section">
        <div className="shell two-column value-panel pilot-panel">
          <div>
            <p className="eyebrow">Founder Access</p>
            <h2>Preparing for early real-world pilots.</h2>
            <p>
              ServicesOS is preparing for early pilots with cleaning businesses. Founder Access is available by request
              for owners who want to help shape the product while it matures.
            </p>
            <div className="hero-actions">
              <PageLink className="button primary" href="/servicesos-founder-access">
                Request Founder Access
                <ArrowRight size={18} aria-hidden="true" />
              </PageLink>
              <PageLink className="button secondary" href="/servicesos-demo">
                View Demo
              </PageLink>
            </div>
          </div>
          <div>
            <article className="status-callout">
              <p className="eyebrow">Current Status</p>
              <h3>Beta-aware and still improving.</h3>
              <p>
                Some workflows may change as the product learns from real users. Training, FAQ, and demo pages explain
                the current direction without overclaiming what is finished.
              </p>
            </article>
          </div>
        </div>
      </section>
      <ServicesOSResourceLinks includeContact />
      <ContactCTA />
    </>
  );
}

function ServicesOSDemoPage() {
  const [demoMessage, setDemoMessage] = useState(
    'Demo buttons explain the workflow only. They do not submit data or contact any live system.'
  );

  function explainDemoAction(message) {
    setDemoMessage(message);
  }

  return (
    <>
      <PageHero
        className="servicesos-hero servicesos-demo-hero"
        eyebrow="Static ServicesOS Demo"
        title="See how ServicesOS works"
        copy="Walk through the owner-side workflow with fake cleaning business data. This page does not require login and does not connect to the real ServicesOS app, Firebase, Stripe, cloud functions, or customer records."
      >
        <div className="hero-actions">
          <a className="button primary" href="#founder-access">
            Request Founder Access
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <PageLink className="button secondary" href="/servicesos">
            Back to ServicesOS
          </PageLink>
          <PageLink className="button secondary" href="/servicesos-founder-access">
            Founder Access Details
          </PageLink>
        </div>
      </PageHero>

      <section className="section demo-notice-section">
        <div className="shell demo-notice">
          <p className="eyebrow">Demo boundary</p>
          <h2>Demo only: fake data, no backend actions.</h2>
          <p>
            This walkthrough shows how ServicesOS works without connecting to real customer, payment, or schedule data.
          </p>
        </div>
      </section>

      <section className="section demo-walkthrough-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Guided Owner Walkthrough</p>
            <h2>Follow the ServicesOS workflow from request to follow-up.</h2>
            <p>
              Core flow: Request to Booking to Payment to Field visibility to Follow-up. The owner stays in control at
              every step, and each surface has a clear job.
            </p>
          </div>
          <ol className="demo-step-grid">
            {servicesOSDemoSteps.map((item) => (
              <li className="demo-step-card" key={item.title}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.notice}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section demo-dashboard-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Step 1: Review the Dashboard</p>
            <h2>A quick snapshot of today's business.</h2>
            <p>Dashboard keeps attention on requests, upcoming jobs, collected revenue, and open balances.</p>
          </div>
          <div className="demo-training-callout">
            <strong>What you see</strong>
            <p>Expected revenue, collected revenue, outstanding balances, pending requests, and upcoming jobs.</p>
            <strong>Why it matters</strong>
            <p>Owners can tell what needs attention without rebuilding context from memory.</p>
          </div>
          <div className="demo-metric-grid">
            {servicesOSDemoMetrics.map((metric) => (
              <article className="demo-metric-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <p>{metric.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section demo-customers-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Step 2: Review a new customer request</p>
            <h2>Customer details stay close to service notes and payment context.</h2>
            <p>Customer records keep contact details, property notes, service context, and payment status together.</p>
            <div className="demo-training-callout">
              <strong>What you see</strong>
              <p>Aunt B Demo Client is still a quote request, not a confirmed booking or paid job.</p>
              <strong>Why it matters</strong>
              <p>New work can be reviewed before it becomes a scheduled job.</p>
            </div>
            <button
              className="button secondary demo-action-button"
              type="button"
              onClick={() =>
                explainDemoAction(
                  'In the real app, the owner reviews a new customer request before approving a booking. This demo keeps the request static.'
                )
              }
            >
              Explain request review
            </button>
          </div>
          <div className="demo-customer-list">
            {servicesOSDemoCustomers.map((customer) => (
              <article className="demo-record-card" key={customer.name}>
                <div className="demo-record-top">
                  <div>
                    <h3>{customer.name}</h3>
                    <p>{customer.service}</p>
                  </div>
                  <span className="status">{customer.payment}</span>
                </div>
                <dl className="demo-details">
                  <div>
                    <dt>Schedule</dt>
                    <dd>{customer.schedule}</dd>
                  </div>
                  <div>
                    <dt>Amount</dt>
                    <dd>{customer.amount}</dd>
                  </div>
                  <div>
                    <dt>Contact</dt>
                    <dd>
                      {customer.phone}
                      <br />
                      {customer.email}
                    </dd>
                  </div>
                  <div>
                    <dt>Notes</dt>
                    <dd>{customer.notes}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section demo-bookings-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Step 3: Manage the booking</p>
            <h2>Bookings is the job management center.</h2>
            <p>The booking detail view keeps scheduled work, service notes, job price, and payment status together.</p>
          </div>
          <div className="demo-training-callout">
            <strong>What you see</strong>
            <p>Job status, customer context, price, amount owed, and manual payment details.</p>
            <strong>Why it matters</strong>
            <p>Bookings is where job management happens. Calendar and Field Mode are visibility surfaces.</p>
          </div>
          <div className="demo-booking-grid">
            {servicesOSDemoBookings.map((booking) => (
              <article className="demo-record-card" key={`${booking.customer}-${booking.service}`}>
                <div className="demo-record-top">
                  <div>
                    <h3>{booking.customer}</h3>
                    <p>{booking.service}</p>
                  </div>
                  <span className="status">{booking.status}</span>
                </div>
                <dl className="demo-details compact">
                  <div>
                    <dt>Payment status</dt>
                    <dd>{booking.paymentStatus}</dd>
                  </div>
                  <div>
                    <dt>Still owed</dt>
                    <dd>{booking.owed}</dd>
                  </div>
                  <div>
                    <dt>Amount received</dt>
                    <dd>{booking.received}</dd>
                  </div>
                  <div>
                    <dt>Payment method</dt>
                    <dd>{booking.method}</dd>
                  </div>
                </dl>
                <button
                  className="button secondary demo-action-button"
                  type="button"
                  onClick={() =>
                    explainDemoAction(
                      'In the real app, this creates a Stripe Checkout link after Stripe is connected. Creating the link does not mark the booking paid.'
                    )
                  }
                >
                  Demo-only payment link
                </button>
              </article>
            ))}
          </div>
          <p className="demo-action-message" role="status">
            {demoMessage}
          </p>
        </div>
      </section>

      <section className="section demo-payments-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Step 4: Understand payment status</p>
            <h2>Stripe-first, manual-friendly payment tracking.</h2>
            <p>
              Payment links do not mark paid by themselves. Paid status updates after confirmed payment, or after the
              owner records a manual payment.
            </p>
            <div className="demo-training-callout">
              <strong>What you see</strong>
              <p>Payment status describes what has actually happened, not what the owner hopes will happen.</p>
              <strong>Why it matters</strong>
              <p>Owners can separate online payments from cash, check, Venmo, Cash App, Zelle, PayPal, or other methods.</p>
            </div>
            <button
              className="button secondary demo-action-button"
              type="button"
              onClick={() =>
                explainDemoAction(
                  'In the real app, paid status updates after payment confirmation, or after the owner manually records a non-Stripe payment.'
                )
              }
            >
              Explain payment status
            </button>
          </div>
          <div className="demo-payment-flow">
            <article>
              <span>1</span>
              <h3>Owner checks the booking.</h3>
              <p>The booking shows job price, amount received, and amount still owed.</p>
            </article>
            <article>
              <span>2</span>
              <h3>Payment link is sent when ready.</h3>
              <p>Creating a link does not mean the customer has paid.</p>
            </article>
            <article>
              <span>3</span>
              <h3>Status updates after confirmed payment.</h3>
              <p>Owners see paid status after payment is confirmed, or after they manually record another method.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section demo-calendar-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Step 5: View the schedule</p>
            <h2>A read-only schedule view for visibility.</h2>
            <p>Calendar is visibility. Booking changes happen in Bookings.</p>
            <div className="demo-training-callout">
              <strong>What you see</strong>
              <p>The schedule shows upcoming work without payment buttons or edit controls.</p>
              <strong>Why it matters</strong>
              <p>The team can see the week without turning Calendar into a second booking system.</p>
            </div>
            <button
              className="button secondary demo-action-button"
              type="button"
              onClick={() =>
                explainDemoAction(
                  'In the real app, booking changes happen in Bookings, not Calendar. Calendar stays read-only for visibility.'
                )
              }
            >
              Explain Calendar role
            </button>
          </div>
          <div className="demo-calendar-list">
            {servicesOSDemoCalendarItems.map((item) => (
              <article className="demo-schedule-row" key={`${item.day}-${item.time}-${item.title}`}>
                <span>{item.day}</span>
                <strong>{item.time}</strong>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section demo-field-section">
        <div className="shell two-column value-panel">
          <div>
            <p className="eyebrow">Step 6: Open Field Mode</p>
            <h2>A read-only job packet for the team in the field.</h2>
            <p>Field Mode shows job details without admin controls.</p>
            <div className="demo-training-callout">
              <strong>What you see</strong>
              <p>Field Mode shows job information, not payment collection, scheduling edits, or owner-only controls.</p>
              <strong>Why it matters</strong>
              <p>Workers get clarity for the job while the owner keeps admin control in Bookings.</p>
            </div>
          </div>
          <article className="demo-job-packet">
            <h3>Sarah Mitchell - Standard recurring clean</h3>
            <p className="demo-address">Demo address: 1200 Clean Street, Springfield, ST</p>
            <ul className="plain-list">
              <li>Focus on kitchen counters, bathrooms, floors, and entryway dusting.</li>
              <li>Use customer-provided product on hardwood floors.</li>
              <li>Checklist preview: arrival check, room-by-room clean, final owner notes.</li>
            </ul>
            <button
              className="button secondary demo-action-button"
              type="button"
              onClick={() =>
                explainDemoAction(
                  'Demo-only field action: the real Field Mode is read-only and does not expose owner payment, booking, or admin controls.'
                )
              }
            >
              Explain Field Mode
            </button>
          </article>
        </div>
      </section>

      <section className="section demo-founder-section" id="founder-access">
        <div className="shell value-panel demo-founder-panel">
          <div>
            <p className="eyebrow">Step 7: Request Founder Access</p>
            <h2>Built first for cleaning companies.</h2>
            <p>
              Manage customers, bookings, field visibility, and payments in one place. Founder Access is available for
              early cleaning businesses that want a hands-on rollout while the product matures.
            </p>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Request Founder Access
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <PageLink className="button secondary" href="/servicesos-founder-access">
              Read Founder Access Details
            </PageLink>
            <a className="button secondary" href="#contact">
              Contact SLAI
            </a>
          </div>
        </div>
      </section>

      <ServicesOSResourceLinks includeContact omitDemo />
      <ContactCTA compact />
    </>
  );
}

function ServicesOSFounderAccessPage() {
  return (
    <>
      <PageHero
        className="servicesos-hero founder-access-hero"
        eyebrow="ServicesOS Founder Access"
        title="Founder Access for cleaning businesses"
        copy="Help shape ServicesOS while getting early access to a simpler operating system for customers, bookings, job visibility, and payments."
      >
        <div className="hero-actions">
          <a className="button primary" href="#contact">
            Request Founder Access
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <PageLink className="button secondary" href="/servicesos-demo">
            View the demo
          </PageLink>
        </div>
      </PageHero>

      <section className="section founder-intro-section">
        <div className="shell two-column value-panel">
          <div>
            <p className="eyebrow">Main Message</p>
            <h2>ServicesOS is being built first for cleaning companies.</h2>
          </div>
          <div>
            <p>
              ServicesOS is for cleaning businesses that need a simpler way to manage customers, bookings, field
              visibility, and payments without spreading daily operations across too many tools.
            </p>
            <p>
              Founder Access is intentionally early and hands-on. The goal is to help real owners use the product,
              learn what matters, and improve the workflow before a wider launch.
            </p>
          </div>
        </div>
      </section>

      <section className="section founder-audience-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Who it is for</p>
            <h2>Built for owner-led cleaning businesses that need simpler operations.</h2>
          </div>
          <div className="feature-grid">
            {founderAccessAudience.map((item) => (
              <article className="feature-card founder-access-card" key={item}>
                <span className="icon-wrap">
                  <Users size={24} aria-hidden="true" />
                </span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section founder-today-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">What ServicesOS helps with today</p>
            <h2>Useful V1 workflows, described honestly.</h2>
            <p>
              Founder Access focuses on practical owner workflows first. Some parts are still beta, and the product is
              not being presented as a finished enterprise suite.
            </p>
          </div>
          <ul className="plain-list founder-list">
            {founderAccessToday.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section founder-meaning-section">
        <div className="shell two-column value-panel">
          <div>
            <p className="eyebrow">What Founder Access means</p>
            <h2>Early access with a direct feedback loop.</h2>
            <p>
              Founder Access is not a passive waitlist. It is a practical early rollout for cleaning businesses willing
              to use the product, give feedback, and help shape what comes next.
            </p>
          </div>
          <ul className="plain-list">
            {founderAccessMeans.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section founder-not-included-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">What is not included yet</p>
            <h2>Clear boundaries for the early version.</h2>
            <p>
              ServicesOS is being built carefully. Founder Access does not promise every future workflow on day one.
            </p>
          </div>
          <div className="founder-boundary-grid">
            {founderAccessNotIncluded.map((item) => (
              <article className="status-callout founder-boundary-card" key={item}>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section founder-philosophy-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">ServicesOS philosophy</p>
            <h2>Practical software first. Human judgment always.</h2>
            <p>
              The ServicesOS roadmap can include AI assistance, but the product is built around owner control,
              responsible decisions, and useful workflows before complexity.
            </p>
          </div>
          <ul className="plain-list founder-list">
            {founderAccessPhilosophy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section founder-expectations-section">
        <div className="shell two-column value-panel">
          <div>
            <p className="eyebrow">Early user expectations</p>
            <h2>Hands-on support while the product matures.</h2>
          </div>
          <ul className="plain-list">
            {founderAccessExpectations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section founder-final-cta-section">
        <div className="shell value-panel founder-final-cta">
          <div>
            <p className="eyebrow">Request Access</p>
            <h2>Founder Access is for cleaning companies ready to simplify operations.</h2>
            <p>
              Tell SLAI about your business, the workflows causing the most friction, and whether you want to start
              with customers, bookings, field visibility, or payment tracking.
            </p>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Request Founder Access
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <PageLink className="button secondary" href="/servicesos-demo">
              View the demo
            </PageLink>
          </div>
        </div>
      </section>

      <ServicesOSResourceLinks includeContact />
      <ContactCTA compact />
    </>
  );
}

function ServicesOSTrainingPage() {
  return (
    <>
      <PageHero
        className="servicesos-hero servicesos-training-hero"
        eyebrow="ServicesOS Training Center"
        title="ServicesOS Training Center"
        copy="Learn the basics of using ServicesOS to manage customers, bookings, field visibility, and payments."
      >
        <div className="hero-actions">
          <PageLink className="button primary" href="/servicesos-demo">
            View the demo
            <ArrowRight size={18} aria-hidden="true" />
          </PageLink>
          <PageLink className="button secondary" href="/servicesos-founder-access">
            Founder Access
          </PageLink>
        </div>
      </PageHero>

      <section className="section training-start-section">
        <div className="shell two-column value-panel">
          <div>
            <p className="eyebrow">Start here</p>
            <h2>The basic ServicesOS flow.</h2>
          </div>
          <div>
            <p>
              For beta and Founder Access users, the safest way to understand ServicesOS is to follow the work from
              first request through follow-up.
            </p>
            <ol className="training-flow-list">
              <li>Request</li>
              <li>Booking</li>
              <li>Payment</li>
              <li>Field visibility</li>
              <li>Follow-up</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section training-lessons-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Training lessons</p>
            <h2>Simple operating guidance for cleaning business owners.</h2>
            <p>
              These notes are intentionally practical and beta-aware. They explain where work belongs without promising
              that every future ServicesOS workflow is finished today.
            </p>
          </div>
          <div className="training-lesson-grid">
            {servicesOSTrainingLessons.map((lesson, index) => (
              <article className="training-lesson-card" key={lesson.title}>
                <div className="training-lesson-top">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{lesson.title}</h3>
                </div>
                <p>{lesson.summary}</p>
                <ul className="plain-list">
                  {lesson.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section training-links-section">
        <div className="shell value-panel training-links-panel">
          <div>
            <p className="eyebrow">Quick links</p>
            <h2>Use these pages for demos, onboarding, and support conversations.</h2>
            <p>
              These links are public website resources only. They do not require login and do not connect to the live
              ServicesOS app.
            </p>
          </div>
          <div className="training-quick-links">
            <PageLink className="button primary" href="/servicesos-demo">
              ServicesOS Demo
              <ArrowRight size={18} aria-hidden="true" />
            </PageLink>
            <PageLink className="button secondary" href="/servicesos-founder-access">
              Founder Access
            </PageLink>
            <a className="button secondary" href="#contact">
              Request Access
            </a>
          </div>
        </div>
      </section>

      <ServicesOSResourceLinks includeContact />
      <ContactCTA compact />
    </>
  );
}

function ServicesOSFaqPage() {
  return (
    <>
      <PageHero
        className="servicesos-hero servicesos-faq-hero"
        eyebrow="ServicesOS FAQ"
        title="ServicesOS FAQ"
        copy="Answers to common questions about ServicesOS Founder Access, cleaning-business workflows, payments, Field Mode, and what is still coming later."
      >
        <div className="hero-actions">
          <PageLink className="button primary" href="/servicesos-demo">
            View the demo
            <ArrowRight size={18} aria-hidden="true" />
          </PageLink>
          <PageLink className="button secondary" href="/servicesos-founder-access">
            Founder Access
          </PageLink>
          <PageLink className="button secondary" href="/servicesos-training">
            Training Center
          </PageLink>
        </div>
      </PageHero>

      <section className="section faq-resource-section">
        <div className="shell two-column value-panel">
          <div>
            <p className="eyebrow">Quick answer</p>
            <h2>ServicesOS is useful now, but still beta-aware.</h2>
          </div>
          <div>
            <p>
              ServicesOS is being built first for cleaning companies that need simpler customer, booking, field
              visibility, and payment workflows. Founder Access means early use while the product keeps improving.
            </p>
            <div className="faq-quick-links">
              <PageLink className="button secondary" href="/servicesos-demo">
                Demo
              </PageLink>
              <PageLink className="button secondary" href="/servicesos-founder-access">
                Founder Access
              </PageLink>
              <PageLink className="button secondary" href="/servicesos-training">
                Training
              </PageLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section servicesos-faq-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Common questions</p>
            <h2>Short answers for prospects and early users.</h2>
            <p>
              These answers are intentionally plain and conservative. ServicesOS is not being described as mature
              enterprise software or as a replacement for tools that are not part of V1.
            </p>
          </div>
          <div className="servicesos-faq-groups">
            {servicesOSFaqGroups.map((group) => (
              <section className="servicesos-faq-group" key={group.title} aria-labelledby={`faq-${group.title}`}>
                <h3 id={`faq-${group.title}`}>{group.title}</h3>
                <div className="servicesos-faq-card-grid">
                  {group.questions.map((item) => (
                    <article className="faq-card servicesos-faq-card" key={item.question}>
                      <h4>{item.question}</h4>
                      <p>{item.answer}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-final-cta-section">
        <div className="shell value-panel faq-final-cta">
          <div>
            <p className="eyebrow">Still have questions?</p>
            <h2>Request Founder Access or contact SLAI.</h2>
            <p>
              Share your cleaning business workflow, the tools you use today, and where customers, bookings, field
              work, or payments are hardest to keep organized.
            </p>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Request Founder Access
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <PageLink className="button secondary" href="/servicesos-training">
              Read Training Center
            </PageLink>
          </div>
        </div>
      </section>

      <ServicesOSResourceLinks includeContact />
      <ContactCTA compact />
    </>
  );
}

function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Careful research for practical, human-centered AI."
        copy="SLAI research is focused on systems that help people make better decisions, improve operations, and learn more effectively without overstating the current limits of AI."
      >
        <div className="hero-actions">
          <PageLink className="button primary" href="/blog">
            Research Notes
            <Newspaper size={18} aria-hidden="true" />
          </PageLink>
          <PageLink className="button secondary" href="/competitive-integrity">
            Competitive Integrity Teaser
          </PageLink>
        </div>
      </PageHero>
      <ResearchAreas />
      <section className="section product-detail-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Publishing Standard</p>
            <h2>Teach the direction. Protect the sensitive work.</h2>
          </div>
          <div>
            <p>
              Public research should explain principles, questions, and high-level architecture ideas without revealing
              proprietary algorithms, implementation details, patent-sensitive approaches, or sensitive benchmarks.
            </p>
            <p>
              FutureAI remains a careful research initiative. SLAI does not claim AGI, consciousness, or guaranteed
              outcomes from the systems described on this site.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA compact />
    </>
  );
}

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Research notes and product updates coming soon."
        copy="The SLAI blog will publish selected research summaries, product updates, architecture ideas, and industry observations when they are ready for public review."
      />
      <section className="section placeholder-section">
        <div className="shell placeholder-panel">
          <span className="icon-wrap">
            <Newspaper size={28} aria-hidden="true" />
          </span>
          <h2>Nothing published yet.</h2>
          <p>
            This page is intentionally a placeholder. SLAI will publish carefully selected notes without exposing
            proprietary methods or presenting planned products as finished.
          </p>
          <PageLink className="text-link" href="/research">
            Read the research overview
            <ArrowRight size={16} aria-hidden="true" />
          </PageLink>
        </div>
      </section>
      <ContactCTA compact />
    </>
  );
}

function CompetitiveIntegrityPage() {
  return (
    <>
      <PageHero
        eyebrow="Competitive Integrity"
        title="A future research direction for fair competition."
        copy="Competitive Integrity is a teaser for future SLAI research into behavioral signals, investigation workflows, and human-reviewed integrity systems. It is not a currently available product launch."
      >
        <div className="hero-actions">
          <PageLink className="button primary" href="/research">
            View Research Areas
            <Eye size={18} aria-hidden="true" />
          </PageLink>
          <a className="button secondary" href="mailto:stellar.logic.ai@gmail.com?subject=Competitive%20Integrity%20Inquiry">
            Ask About Research
          </a>
        </div>
      </PageHero>
      <section className="section integrity-section">
        <div className="shell three-column">
          <article>
            <p className="eyebrow">Focus</p>
            <h2>Fair play</h2>
            <p>Research may explore how intelligent systems can support fair competitive environments.</p>
          </article>
          <article>
            <p className="eyebrow">Review</p>
            <h2>Human judgment</h2>
            <p>Integrity systems should support investigation and review, not replace human responsibility.</p>
          </article>
          <article>
            <p className="eyebrow">Status</p>
            <h2>Teaser only</h2>
            <p>This is not a product availability claim, launch announcement, or anti-cheat deployment page.</p>
          </article>
        </div>
      </section>
      <section className="section product-detail-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Boundary</p>
            <h2>High-level direction only.</h2>
          </div>
          <div>
            <p>
              Public messaging here stays intentionally conservative. SLAI can discuss research interests around
              fairness, evidence workflows, behavioral intelligence, and operational review without exposing detection
              methods or sensitive security details.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA compact />
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div>
          <PageLink aria-label="SLAI brand" className="brand footer-brand" href="/">
            <img
              alt=""
              className="brand-icon footer-icon"
              height="40"
              src="/brand/logo_icon_transparent_clean.png"
              width="40"
            />
            <span className="brand-wordmark">SLAI</span>
          </PageLink>
          <p>AI should amplify humanity, not replace it.</p>
        </div>
        <div className="footer-links">
          <PageLink href="/about">About</PageLink>
          <PageLink href="/servicesos">ServicesOS</PageLink>
          <PageLink href="/research">Research</PageLink>
          <PageLink href="/blog">Blog</PageLink>
          <PageLink href="/competitive-integrity">Integrity</PageLink>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function AppPage({ route }) {
  if (route === '/about') {
    return <AboutPage />;
  }

  if (route === '/servicesos') {
    return <ServicesOSPage />;
  }

  if (route === '/servicesos-demo') {
    return <ServicesOSDemoPage />;
  }

  if (route === '/servicesos-founder-access') {
    return <ServicesOSFounderAccessPage />;
  }

  if (route === '/servicesos-faq') {
    return <ServicesOSFaqPage />;
  }

  if (route === '/servicesos-training') {
    return <ServicesOSTrainingPage />;
  }

  if (route === '/research') {
    return <ResearchPage />;
  }

  if (route === '/blog') {
    return <BlogPage />;
  }

  if (route === '/competitive-integrity') {
    return <CompetitiveIntegrityPage />;
  }

  return <HomePage />;
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromLocation);

  useEffect(() => {
    function handlePopState() {
      setRoute(getRouteFromLocation());
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const meta = routeMeta[route] || routeMeta['/'];
    const socialTitle = meta.socialTitle || meta.title;
    const socialDescription = meta.socialDescription || meta.description;
    document.title = meta.title;
    const metaEntries = [
      ['name', 'description', meta.description],
      ['property', 'og:site_name', 'Stellar Logic AI'],
      ['property', 'og:title', socialTitle],
      ['property', 'og:description', socialDescription],
      ['property', 'og:image', socialPreviewImage],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', socialTitle],
      ['name', 'twitter:description', socialDescription],
      ['name', 'twitter:image', socialPreviewImage],
    ];

    for (const [attribute, key, content] of metaEntries) {
      let tag = document.querySelector(`meta[${attribute}="${key}"]`);

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, key);
        document.head.append(tag);
      }

      tag.setAttribute('content', content);
    }
  }, [route]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar currentPath={route} />
      <main id="main-content" tabIndex="-1">
        <AppPage route={route} />
      </main>
      <Footer />
    </>
  );
}
