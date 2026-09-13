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
  'Stellar Logic AI builds human-centered AI platforms, beginning with ServicesOS V1, a $100/month operating system targeting customer-ready release in late October 2026.';
const servicesOSDescription =
  'ServicesOS V1 is a $100/month operating system for cleaning and service businesses, connecting customers, estimates, residential and commercial bookings, approved job scope, employee field work, payments, and human-controlled AI assistance.';
const servicesOSSocialTitle = 'ServicesOS V1 | $100/month | Targeting Late October 2026';
const servicesOSSocialDescription =
  'ServicesOS V1 connects customers, estimates, bookings, job scope, employee field work, payments, and human-controlled AI assistance. Customer-ready V1 is targeted for late October 2026.';

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
    title: 'ServicesOS V1 | $100/month | Targeting Late October 2026',
    description: servicesOSDescription,
    socialTitle: servicesOSSocialTitle,
    socialDescription: servicesOSSocialDescription,
  },
  '/servicesos-demo': {
    title: 'See how ServicesOS works | Static Demo Walkthrough',
    description:
      'A static ServicesOS walkthrough using fake demo data to preview the owner workflow while the completed V1 adds employee, scope-control, change-request, AI, and payment capabilities.',
    socialTitle: 'See how ServicesOS works',
    socialDescription:
      'Preview the ServicesOS workflow with fake data only. No login, Firebase, Stripe, cloud functions, AI providers, or real customer data are used.',
  },
  '/servicesos-founder-access': {
    title: 'ServicesOS Founder Access | Early V1 Rollout',
    description:
      'Founder Access is the hands-on early rollout for cleaning and service businesses that want to help validate ServicesOS V1 before wider public onboarding.',
    socialTitle: 'ServicesOS Founder Access',
    socialDescription:
      'Join the hands-on early rollout of ServicesOS V1 for customers, bookings, approved job scope, field work, payments, and human-controlled AI assistance.',
  },
  '/servicesos-faq': {
    title: 'ServicesOS V1 FAQ | Features, Pricing & Launch',
    description:
      'Answers about the completed ServicesOS V1 scope, $100/month pricing, 100 included monthly AI credits, Employee App, commercial work, job-scope control, payments, Tap to Pay, and late-October release target.',
    socialTitle: 'ServicesOS V1 FAQ | Features, Pricing & Launch',
    socialDescription:
      'Practical answers about what ServicesOS V1 includes, what remains in final validation, $100/month pricing, AI credits, payments, and public onboarding.',
  },
  '/servicesos-training': {
    title: 'ServicesOS V1 Training Center',
    description:
      'Learn the ServicesOS V1 workflow across customers, estimates, bookings, approved job scope, Employee App field work, extra-work requests, payments, and human-controlled AI assistance.',
    socialTitle: 'ServicesOS V1 Training Center',
    socialDescription:
      'Practical ServicesOS V1 training for owner-led service businesses, including booking, job scope, employees, payments, and AI-assisted workflows.',
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
    status: 'Customer-ready V1 targeted late October 2026',
    description:
      'A $100/month operating system connecting customers, estimates, residential and commercial bookings, approved job scope, employees, field work, payments, and human-controlled AI assistance.',
    icon: ShieldCheck,
    href: '/servicesos',
    featured: true,
    points: ['Built around daily operations', 'Residential + commercial V1', 'Human approval stays central'],
  },
  {
    name: 'GrowthAI',
    status: 'Built into ServicesOS V1',
    description:
      'GrowthAI capabilities ship inside ServicesOS as SLAI Assistant for business briefings, rebooking, communication, marketing, reputation, content planning, and other human-reviewed workflows. A broader standalone GrowthAI product remains future planning.',
    icon: LineChart,
    points: ['Business intelligence', 'Draft-first assistance', 'Human-reviewed actions'],
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
    title: 'Customers, leads & estimates',
    description:
      'Keep customer records, lead context, property or business details, estimates, pricing, service context, and follow-up needs organized.',
    icon: Users,
  },
  {
    title: 'Residential & commercial bookings',
    description:
      'Run residential and commercial jobs through the same booking, scheduling, employee, payment, and job-management core, with bounded facility details for commercial work.',
    icon: CalendarCheck,
  },
  {
    title: 'Customer-approved job scope',
    description:
      'Preserve a clear, versioned record of what the customer approved so later material changes require a new approval instead of silently replacing the original scope.',
    icon: FileSignature,
  },
  {
    title: 'Employee App & field execution',
    description:
      'Give employees My Day, assigned jobs, job details, approved scope, checklists, before/after photos, notes, issue reporting, navigation, job completion, and field-safe guidance without exposing the whole back office.',
    icon: ClipboardCheck,
  },
  {
    title: 'Add-ons & extra-work control',
    description:
      'Owners define add-on price and duration. Employees submit out-of-scope work requests, and completed V1 routes approved changes through owner and customer control before scope changes.',
    icon: ShieldCheck,
  },
  {
    title: 'Payments & revenue visibility',
    description:
      'Track expected, collected, and outstanding money with Stripe-based customer payment workflows, manual payment visibility, and V1 mobile Tap to Pay after final Stripe/device validation.',
    icon: CreditCard,
  },
  {
    title: 'SLAI Assistant / GrowthAI',
    description:
      'Use business briefings, opportunity detection, rebooking support, communication drafts, reputation help, marketing assistance, content planning, and brand-aware AI while the owner stays in control.',
    icon: BrainCircuit,
  },
  {
    title: 'Human control & audit history',
    description:
      'Keep important approvals, drafts, changes, and workflow state visible so AI and employees can assist without silently taking over owner decisions.',
    icon: LineChart,
  },
];

const servicesOSAudience = [
  'Cleaning businesses that need one clearer operating center for customers, jobs, employees, scope, payments, and follow-up.',
  'Owner-led residential and commercial service teams moving beyond notebooks, text threads, and scattered spreadsheets.',
  'Small service businesses that want practical AI assistance while keeping important customer, pricing, scheduling, and payment decisions under human control.',
];

const servicesOSWorkflow = [
  'Request',
  'Estimate',
  'Booking',
  'Customer approval',
  'Field work',
  'Payment',
  'Follow-up',
];

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
    notice: 'Check customer context, service needs, and estimate details before work becomes a confirmed booking.',
  },
  {
    step: 'Step 3',
    title: 'Manage the booking',
    notice: 'Keep job details, schedule, approved scope context, service notes, and payment status together.',
  },
  {
    step: 'Step 4',
    title: 'Understand payment status',
    notice: 'Track what is owed, what was received, and how payment was recorded without treating a payment request as a confirmed payment.',
  },
  {
    step: 'Step 5',
    title: 'View the schedule',
    notice: 'Use Calendar for schedule visibility while booking changes remain in the booking workflow.',
  },
  {
    step: 'Step 6',
    title: 'Preview field execution',
    notice: 'See the job-packet concept while completed V1 adds the dedicated Employee App, approved-scope visibility, photos, checklists, notes, and extra-work requests.',
  },
  {
    step: 'Step 7',
    title: 'Request Founder Access',
    notice: 'Ask about the hands-on early rollout if the workflow fits your cleaning or service business.',
  },
];

const founderAccessAudience = [
  'Solo cleaners who need one simple place to manage customers, jobs, scope, and payment status.',
  'Small cleaning teams that are ready to move beyond notebooks, text threads, and scattered spreadsheets.',
  'Family-run cleaning businesses where the owner still needs hands-on visibility into daily work.',
  'Owner-led local service businesses that want residential and commercial workflows without enterprise complexity.',
];

const founderAccessToday = [
  'Customer, lead, estimate, and booking organization',
  'Residential and commercial booking workflows',
  'Customer-approved job scope and revision history',
  'Employee App for assigned work, checklists, photos, notes, and job completion',
  'Owner-managed add-on catalog and employee extra-work requests',
  'Stripe-based payment workflows plus manual payment visibility',
  'SLAI Assistant / GrowthAI with 100 included AI credits each calendar month',
  'Human-controlled drafts, approvals, and business activity history',
];

const founderAccessMeans = [
  'Early access while ServicesOS completes final V1 validation with real service-business workflows.',
  'A direct feedback loop so beta-critical issues can be fixed before wider public onboarding.',
  'The same $100/month V1 subscription model planned for customer-ready release.',
  'Human-guided onboarding and hands-on support during the early rollout.',
  'A product shaped by real operating problems instead of an enterprise feature checklist.',
];

const founderAccessNotIncluded = [
  'No payroll in V1',
  'No advanced route optimization in V1',
  'No full accounting replacement in V1',
  'No advanced commercial proposal, procurement, or multi-location account suite in V1',
  'No autonomous marketing or customer messaging',
  'No generalized fee, policy, or workflow engine in V1',
];

const founderAccessPhilosophy = [
  'AI should amplify humans, not replace them.',
  'Business owners remain responsible for important decisions.',
  'Build simple first; complexity is earned.',
  'MVPs solve real problems.',
];

const founderAccessExpectations = [
  'Founder Access users should expect final V1 refinement as testing continues.',
  'Feedback should be tied to real customer, booking, employee, scope, payment, and AI-assisted workflows.',
  'Beta-critical fixes take priority over new feature expansion.',
  'Support is hands-on during the early rollout.',
];

const servicesOSTrainingLessons = [
  {
    title: 'Getting started',
    summary: 'Follow the job from first request through follow-up while keeping the owner in control.',
    points: [
      'Request → Estimate → Booking → Customer approval → Field work → Payment → Follow-up is the completed V1 operating path.',
      'Bookings become the job source of truth once work is approved and scheduled.',
      'Important scope, pricing, scheduling, payment, and publishing decisions remain human-controlled.',
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
    title: 'Customers & estimates',
    summary: 'Customer and estimate context stays organized before work becomes a booking.',
    points: [
      'Keep customer records, service context, and property or business details current.',
      'Review estimates and pricing before confirming work.',
      'Avoid duplicate customer records when an existing customer can be updated.',
    ],
  },
  {
    title: 'Residential & commercial bookings',
    summary: 'Both job types use the same ServicesOS booking core.',
    points: [
      'Residential work keeps the fast booking flow.',
      'Commercial work can also capture facility type, square footage, service frequency, operating hours, access/security, hazards, surfaces, and supplies.',
      'Booking changes happen in Bookings while Calendar remains the schedule visibility surface.',
    ],
  },
  {
    title: 'Job scope & customer approval',
    summary: 'Approved scope is preserved instead of silently changing later.',
    points: [
      'ServicesOS snapshots what the customer is approving for the job.',
      'Approved versions remain preserved for auditability.',
      'A material scope change requires a new revision and customer approval in completed V1.',
    ],
  },
  {
    title: 'Employee App & field work',
    summary: 'Employees get the information and actions needed for assigned work without owner-only controls.',
    points: [
      'My Day and assigned jobs keep field work focused.',
      'Employees can use job details, approved scope, checklists, before/after photos, notes, issue reporting, navigation, and completion actions.',
      'SLAI Work Assistant supports the employee without exposing the whole back office.',
    ],
  },
  {
    title: 'Extra-work requests',
    summary: 'Work outside the approved scope follows a controlled change path.',
    points: [
      'Owners define canonical add-on price and expected duration.',
      'Employees submit out-of-scope work instead of inventing prices or silently expanding the job.',
      'Custom work returns to the owner for pricing, and completed V1 requires customer approval before approved scope changes.',
    ],
  },
  {
    title: 'Payments',
    summary: 'Payment tracking should describe what actually happened.',
    points: [
      'Stripe-based customer payment workflows are part of V1 and remain under final release validation.',
      'Payment requests do not mark a booking paid by themselves.',
      'Manual payment visibility supports payments collected outside Stripe.',
      'Tap to Pay is part of the completed V1 target and releases only after Stripe and device validation pass.',
    ],
  },
  {
    title: 'SLAI Assistant / GrowthAI',
    summary: 'AI notices, drafts, and suggests while humans stay responsible for decisions.',
    points: [
      'V1 includes business briefings, opportunity detection, retention/rebooking, communication drafts, reputation support, marketing assistance, content planning, and brand-aware context.',
      'Provider-backed AI actions show their credit cost and use the V1 credit system.',
      'ServicesOS includes 100 AI credits each calendar month; deterministic workflows do not consume AI credits.',
      'Marketing and customer communication remain draft-first and human-reviewed.',
    ],
  },
  {
    title: 'Release expectations',
    summary: 'Customer-ready V1 is targeted for late October 2026 after the remaining validation work is complete.',
    points: [
      'Remaining work centers on final extra-work customer approval, Stripe lifecycle stabilization, Tap to Pay, release hardening, device QA, and real-business beta.',
      'Beta-critical fixes take priority over new V2 ideas.',
      'Public onboarding begins only after the customer-ready release checks pass.',
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
          'ServicesOS is an operating system for owner-led service businesses. Completed V1 connects customers, estimates, residential and commercial bookings, scheduling, customer-approved job scope, employee field work, payments, business visibility, and human-controlled AI assistance in one platform.',
      },
      {
        question: 'Who is ServicesOS built for first?',
        answer:
          'ServicesOS V1 is built first around cleaning businesses and similar owner-led local service teams that need clearer operations without enterprise complexity.',
      },
      {
        question: 'Is ServicesOS only for cleaning companies?',
        answer:
          'No. Cleaning businesses are the first vertical and testing focus, but V1 supports both residential and commercial service workflows through the same operating core.',
      },
      {
        question: 'When will ServicesOS V1 be customer-ready?',
        answer:
          'Customer-ready ServicesOS V1 is targeted for late October 2026. Public onboarding begins after final change-approval work, Stripe lifecycle stabilization, Tap to Pay validation, release hardening, device QA, and real-business beta validation are complete.',
      },
      {
        question: 'Can I sign up today?',
        answer:
          'Demo and Founder Access requests are open now. Wider public onboarding begins after customer-ready V1 passes final validation.',
      },
      {
        question: 'How much does ServicesOS cost?',
        answer:
          'ServicesOS V1 is $100/month. The core V1 subscription includes 100 AI credits each calendar month. Standard third-party processing or provider costs may apply where relevant and will be disclosed rather than silently added.',
      },
      {
        question: 'Is there a free trial?',
        answer:
          'No customer trial is planned for ServicesOS V1. Businesses can review the public product information, demo workflow, pricing, and agreement before subscribing.',
      },
    ],
  },
  {
    title: 'V1 operations',
    questions: [
      {
        question: 'What is included in ServicesOS V1?',
        answer:
          'V1 includes customer and lead management, estimates and pricing, residential and commercial bookings, scheduling, recurring/repeat-customer workflows, customer-approved job scope, Employee App field execution, photos, checklists, owner-managed add-ons, extra-work change control, payments and revenue visibility, SLAI Assistant/GrowthAI, and human-controlled approval history.',
      },
      {
        question: 'Does ServicesOS support residential and commercial work?',
        answer:
          'Yes. Residential and commercial bookings use the same customer, booking, scheduler, employee, payment, and job-management core. Commercial bookings can also capture facility details such as square footage, service frequency, operating hours, access/security requirements, hazards, surfaces, and supplies.',
      },
      {
        question: 'Does ServicesOS support recurring customers?',
        answer:
          'Yes. V1 supports repeat-customer and recurring-service context, and SLAI Assistant can surface supported rebooking opportunities while the owner remains responsible for the decision and customer communication.',
      },
      {
        question: 'Does ServicesOS have a calendar?',
        answer:
          'Yes. Calendar provides schedule visibility while booking changes remain in the canonical booking workflow so the schedule does not become a second source of truth.',
      },
      {
        question: 'Can I track revenue?',
        answer:
          'Yes. ServicesOS separates expected revenue, collected revenue, and outstanding balances so owners can distinguish booked work from money actually received.',
      },
    ],
  },
  {
    title: 'Job scope & extra work',
    questions: [
      {
        question: 'How does customer job-scope approval work?',
        answer:
          'ServicesOS creates a versioned snapshot of the work being approved for a job. Once the customer approves it, that version is preserved. Material changes require a new revision instead of silently overwriting the original approved scope.',
      },
      {
        question: 'What happens if a customer asks for extra work during a job?',
        answer:
          'Employees can submit an extra-work request tied to the exact approved scope. Catalog add-ons use owner-controlled price and duration, while custom work goes back to the owner for pricing and review. Completed V1 requires authenticated customer approval before the approved job scope changes.',
      },
      {
        question: 'Can employees change prices?',
        answer:
          'No. Employees cannot create authoritative prices for add-ons or custom work. Catalog values come from the owner-controlled canonical add-on catalog, and custom work is priced by the owner.',
      },
      {
        question: 'Can ServicesOS help control scope creep?',
        answer:
          'Yes. Approved scope remains visible and preserved, and work outside that scope is routed through an extra-work request instead of quietly becoming unpaid work on the original job.',
      },
    ],
  },
  {
    title: 'Employee App',
    questions: [
      {
        question: 'Is there a mobile Employee App?',
        answer:
          'Yes. ServicesOS V1 includes a dedicated Employee App for assigned work. It includes My Day, job details, approved scope, checklists, before/after photos, notes, issue reporting, job start/completion, navigation, field-safe guidance, Work Assistant, and the V1 mobile payment workflow. Final device and payment validation happens before public release.',
      },
      {
        question: 'What can employees see?',
        answer:
          'Employees receive the information needed for assigned work. ServicesOS deliberately limits owner-only administration, unnecessary private pricing or agreement details, unrelated customer data, and other tenant information.',
      },
      {
        question: 'Can an employee approve work for the customer?',
        answer:
          'No. Employee and owner actions cannot impersonate customer approval. Customer approval is a separate authenticated action.',
      },
    ],
  },
  {
    title: 'Payments',
    questions: [
      {
        question: 'Does ServicesOS support payments?',
        answer:
          'Yes. Completed V1 includes Stripe-based customer payment workflows, payment-state tracking, manual payment visibility, owner subscription billing, and mobile Tap to Pay as part of the release target. Payment features remain under final Stripe and device validation before public onboarding.',
      },
      {
        question: 'Does creating a payment request mark a booking paid?',
        answer:
          'No. A payment request and a confirmed payment are separate states. ServicesOS only reflects paid status through the appropriate confirmed payment or owner-recorded manual-payment workflow.',
      },
      {
        question: 'Can I record cash, check, or other manual payments?',
        answer:
          'Yes. V1 keeps manual payment visibility alongside Stripe-based workflows so the owner can accurately record money collected outside Stripe.',
      },
      {
        question: 'Does ServicesOS support Tap to Pay?',
        answer:
          'Tap to Pay is included in the V1 completion scope for supported Employee App/mobile payment workflows. It will be released only after Stripe and physical-device validation are complete.',
      },
      {
        question: 'Does ServicesOS replace accounting software?',
        answer:
          'No. ServicesOS provides operational payment and revenue visibility, but V1 is not a full accounting system.',
      },
    ],
  },
  {
    title: 'AI assistance',
    questions: [
      {
        question: 'Does ServicesOS include AI?',
        answer:
          'Yes. ServicesOS V1 includes SLAI Assistant/GrowthAI for business briefings, opportunity detection, retention and rebooking, communication drafting, reputation support, marketing assistance, content planning, and brand-aware workflows. The Employee App also includes SLAI Work Assistant capabilities.',
      },
      {
        question: 'Does AI make decisions for the business?',
        answer:
          'No. AI can notice, organize, draft, and suggest. Humans remain responsible for important customer, pricing, scheduling, payment, approval, and publishing decisions.',
      },
      {
        question: 'How do AI credits work?',
        answer:
          'ServicesOS V1 includes 100 AI credits per calendar month. Provider-backed AI generation consumes credits and shows its credit cost before execution. Deterministic ServicesOS workflows do not consume AI credits.',
      },
      {
        question: 'Can SLAI Assistant send messages or publish marketing by itself?',
        answer:
          'No. Customer communication and marketing remain draft-first and human-reviewed. ServicesOS V1 does not automatically send or publish that content without owner control.',
      },
      {
        question: 'How does SLAI think about AI?',
        answer:
          'AI should amplify humans, not replace them. ServicesOS uses AI to support people while keeping responsibility for important decisions with the people running the business.',
      },
    ],
  },
  {
    title: 'V1 launch & boundaries',
    questions: [
      {
        question: 'What remains before public onboarding?',
        answer:
          'The remaining V1 finish work is focused on final customer approval for field change requests, Stripe subscription/payment lifecycle stabilization, Tap to Pay, release hardening, final Employee App and device QA, real-business beta, and beta-critical fixes.',
      },
      {
        question: 'Does ServicesOS handle payroll?',
        answer: 'No. Payroll is outside ServicesOS V1.',
      },
      {
        question: 'Does ServicesOS do route optimization?',
        answer: 'No. Advanced route optimization is outside V1 and remains a later possibility.',
      },
      {
        question: 'Does ServicesOS auto-post marketing content?',
        answer:
          'No. GrowthAI marketing remains draft-first and human-reviewed. Autonomous marketing publishing is not a ServicesOS V1 feature.',
      },
      {
        question: 'Does V1 include advanced commercial proposals or multi-location account management?',
        answer:
          'No. V1 supports bounded commercial booking and field context, but advanced proposals, procurement, payment terms, and multi-location commercial account hierarchies remain post-V1 work.',
      },
    ],
  },
  {
    title: 'Getting started',
    questions: [
      {
        question: 'How do I see the demo?',
        answer:
          'Use the ServicesOS demo page for a guided static walkthrough with fake data only. The demo is intentionally simpler than the full completed V1 feature set.',
      },
      {
        question: 'How do I request access?',
        answer:
          'Use the contact form to tell SLAI about your service business and the workflow problem you want to solve. Founder Access is available before wider public onboarding.',
      },
      {
        question: 'Where can I learn how ServicesOS V1 works?',
        answer:
          'Use the Training Center for the completed V1 workflow across customers, estimates, residential/commercial bookings, job scope, Employee App field work, extra-work requests, payments, and AI assistance.',
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
            Review the static demo, Founder Access, V1 training, and FAQ before requesting access. These public pages
            describe the completed V1 target while clearly separating features still in final validation from the public
            release.
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
            SLAI is finishing the customer-ready ServicesOS V1 before expanding into later standalone products. Future
            platforms remain clearly separated from the active ServicesOS finish line.
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
            Tell us what workflow problem you want solved, request a V1 demo, ask about Founder Access, or ask about the
            $100/month ServicesOS subscription. Your request goes to SLAI by email, and we'll follow up directly.
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
              <option>ServicesOS Founder Access</option>
              <option>ServicesOS Pricing / Subscription</option>
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
        eyebrow="ServicesOS V1"
        title="One operating system for your service business."
        copy="Manage customers, estimates, residential and commercial bookings, approved job scope, employees, field work, payments, and human-controlled AI assistance from one connected platform. ServicesOS V1 is $100/month, with customer-ready release targeted for late October 2026."
      >
        <div className="hero-actions">
          <PageLink className="button primary" href="#contact">
            Request a V1 Demo
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
              ServicesOS is for businesses that need customers, pricing, schedules, approved job scope, field work,
              payments, and follow-up to stay connected without turning daily operations into an enterprise software
              project.
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
            <p className="eyebrow">Core V1 workflow</p>
            <h2>One connected path from first request through follow-up.</h2>
            <p>
              Request → Estimate → Booking → Customer approval → Field work → Payment → Follow-up. Each step keeps the
              customer, owner, and field team working from the same operating context.
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
            <p className="eyebrow">Completed V1 capability</p>
            <h2>The operating tools behind the customer-ready ServicesOS V1.</h2>
            <p>
              The public feature story below describes the locked completed V1 target. Features still going through
              final payment, device, release, or beta validation are identified separately in the release-status section.
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
            <p className="eyebrow">Scope control</p>
            <h2>Know what was agreed. Know what changed.</h2>
          </div>
          <div>
            <p>
              ServicesOS preserves the customer-approved scope for each job. When a customer asks for additional work in
              the field, employees submit an extra-work request instead of silently expanding the original job.
            </p>
            <p>
              Owners control catalog pricing, custom-work pricing, timing, and operational disposition. Completed V1
              captures authenticated customer approval before a material change becomes the new approved scope.
            </p>
          </div>
        </div>
      </section>

      <section className="section product-detail-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">AI posture</p>
            <h2>AI assists. Humans decide.</h2>
          </div>
          <div>
            <p>
              ServicesOS V1 includes SLAI Assistant / GrowthAI for business briefings, opportunity detection, rebooking,
              communication drafts, reputation support, marketing assistance, content planning, and brand-aware
              workflows. The Employee App also includes SLAI Work Assistant capabilities.
            </p>
            <p>
              Important customer, pricing, scheduling, payment, approval, and publishing decisions stay under human
              control. V1 includes 100 AI credits each calendar month; provider-backed generation uses credits while
              deterministic ServicesOS workflows do not.
            </p>
          </div>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">V1 pricing</p>
            <h2>ServicesOS V1 — $100/month.</h2>
          </div>
          <div>
            <p>
              One ServicesOS subscription covers the core V1 operating platform and includes 100 AI credits each
              calendar month. The goal is straightforward pricing for small service businesses, not an enterprise
              pricing maze.
            </p>
            <p>
              No customer trial is planned for V1. Standard third-party processing or provider costs may apply where
              relevant and will be disclosed rather than silently added. Demo and Founder Access requests are open now.
            </p>
            <div className="hero-actions">
              <PageLink className="button primary" href="#contact">
                Request a V1 Demo
                <ArrowRight size={18} aria-hidden="true" />
              </PageLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section pilot-section">
        <div className="shell two-column value-panel pilot-panel">
          <div>
            <p className="eyebrow">Release status</p>
            <h2>Customer-ready V1 is targeted for late October 2026.</h2>
            <p>
              Core operations, owner onboarding, subscription billing, residential and commercial booking, Employee App
              workflows, customer-approved job scope, the canonical add-on catalog, employee extra-work requests, and
              owner review are already part of the V1 architecture.
            </p>
            <p>
              Remaining finish work is focused on final customer approval for field change requests, Stripe lifecycle
              stabilization, Tap to Pay, release hardening, final Employee App/device QA, real-business beta, and
              beta-critical fixes before public onboarding.
            </p>
            <div className="hero-actions">
              <PageLink className="button primary" href="#contact">
                Request a V1 Demo
                <ArrowRight size={18} aria-hidden="true" />
              </PageLink>
              <PageLink className="button secondary" href="/servicesos-demo">
                View Demo
              </PageLink>
            </div>
          </div>
          <div>
            <article className="status-callout">
              <p className="eyebrow">Current status</p>
              <h3>V1 scope is defined; final validation is still in progress.</h3>
              <p>
                ServicesOS is not publicly launched yet. The site describes what the completed V1 includes while the
                remaining payment, device, hardening, and real-business validation finishes. Public onboarding starts
                only after those release checks pass.
              </p>
            </article>
          </div>
        </div>
      </section>

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
        copy="Walk through a simplified owner-side workflow with fake cleaning-business data. This page does not require login and does not connect to the real ServicesOS app, Firebase, Stripe, cloud functions, AI providers, or customer records. The completed V1 feature set is broader than this static walkthrough."
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
            This walkthrough shows a safe static slice of ServicesOS without connecting to real customer, employee,
            payment, AI, or schedule data.
          </p>
        </div>
      </section>

      <section className="section demo-walkthrough-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Guided owner walkthrough</p>
            <h2>Follow a simplified ServicesOS workflow from request to follow-up.</h2>
            <p>
              The completed V1 path is Request → Estimate → Booking → Customer approval → Field work → Payment →
              Follow-up. This static walkthrough focuses on owner visibility and does not attempt to reproduce every V1
              screen.
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
            <h2>Customer details stay close to service and estimate context.</h2>
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
                  'In the real app, the owner reviews a new customer request and estimate context before approving a booking. This demo keeps the request static.'
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
            <p>
              The booking detail view keeps scheduled work, service notes, price, payment state, and the surrounding job
              workflow together.
            </p>
          </div>
          <div className="demo-training-callout">
            <strong>What you see</strong>
            <p>Job status, customer context, price, amount owed, and manual payment details.</p>
            <strong>Completed V1 adds</strong>
            <p>
              Residential/commercial classification, customer-approved scope, assignment, Employee App execution,
              add-ons, and controlled extra-work requests around the same canonical booking.
            </p>
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
                      'In the real app, the owner can create the appropriate Stripe Checkout payment request after Stripe is connected. Creating a payment request does not mark the booking paid.'
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
            <h2>Payment requests and confirmed payments stay separate.</h2>
            <p>
              A payment request does not mark a job paid. Paid status changes only through the appropriate confirmed
              payment or owner-recorded manual-payment workflow.
            </p>
            <div className="demo-training-callout">
              <strong>What you see</strong>
              <p>Payment status describes what has actually happened, not what the owner hopes will happen.</p>
              <strong>V1 payment target</strong>
              <p>Stripe-based customer payments, manual payment visibility, and Employee App Tap to Pay after final validation.</p>
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
              <h3>Payment request is created when ready.</h3>
              <p>Creating a request does not mean the customer has paid.</p>
            </article>
            <article>
              <span>3</span>
              <h3>Status updates after confirmed payment.</h3>
              <p>Owners see paid status only through the appropriate confirmed or recorded payment workflow.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section demo-calendar-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Step 5: View the schedule</p>
            <h2>A schedule view backed by canonical bookings.</h2>
            <p>Calendar is visibility. Booking changes happen in Bookings.</p>
            <div className="demo-training-callout">
              <strong>What you see</strong>
              <p>The schedule shows upcoming work without becoming a second source of truth for the job.</p>
              <strong>Why it matters</strong>
              <p>The team can understand the week while booking changes stay with the canonical booking workflow.</p>
            </div>
            <button
              className="button secondary demo-action-button"
              type="button"
              onClick={() =>
                explainDemoAction(
                  'In the real app, booking changes happen in Bookings, not Calendar. Calendar remains the schedule visibility surface.'
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
            <p className="eyebrow">Step 6: Preview field execution</p>
            <h2>The full V1 Employee App goes beyond the original read-only Field Mode.</h2>
            <p>
              Employees get assigned work, approved scope, checklists, photos, notes, issue reporting, navigation,
              completion actions, Work Assistant, and controlled extra-work requests while owner-only controls remain
              protected.
            </p>
            <div className="demo-training-callout">
              <strong>What this static demo shows</strong>
              <p>A simplified job packet only.</p>
              <strong>What completed V1 adds</strong>
              <p>The dedicated authenticated Employee App and field execution workflow described above.</p>
            </div>
          </div>
          <article className="demo-job-packet">
            <h3>Sarah Mitchell - Standard recurring clean</h3>
            <p className="demo-address">Demo address: 1200 Clean Street, Springfield, ST</p>
            <ul className="plain-list">
              <li>Approved scope preview: kitchen, bathrooms, floors, and entryway dusting.</li>
              <li>Use customer-provided product on hardwood floors.</li>
              <li>Checklist preview: arrival check, room-by-room clean, photos, notes, and completion.</li>
            </ul>
            <button
              className="button secondary demo-action-button"
              type="button"
              onClick={() =>
                explainDemoAction(
                  'Demo-only field action: the completed V1 Employee App adds authenticated assigned-job execution while keeping owner-only administration and unrelated business data protected.'
                )
              }
            >
              Explain Field Mode
            </button>
          </article>
        </div>
      </section>

      <section className="section feature-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Beyond the static demo</p>
            <h2>Completed V1 includes more than this owner walkthrough.</h2>
            <p>
              The production V1 target also includes customer-approved scope control, the Employee App, the canonical
              add-on catalog, extra-work change requests, SLAI Assistant / GrowthAI, residential and commercial booking,
              recurring-service context, and the final mobile payment workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="section demo-founder-section" id="founder-access">
        <div className="shell value-panel demo-founder-panel">
          <div>
            <p className="eyebrow">Step 7: Request Founder Access</p>
            <h2>Built first for cleaning companies and owner-led service teams.</h2>
            <p>
              Founder Access is the hands-on early rollout for businesses that want to validate the broader V1 workflow
              before public onboarding begins.
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
        title="Founder Access for cleaning and service businesses"
        copy="Join the hands-on early rollout of ServicesOS V1 while final release validation is completed. Founder Access uses the defined V1 product direction rather than a stripped-down placeholder product."
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
            <p className="eyebrow">Main message</p>
            <h2>Early access to the real V1 direction.</h2>
          </div>
          <div>
            <p>
              ServicesOS is built first around cleaning businesses and similar owner-led service teams that need a
              simpler way to manage customers, estimates, bookings, approved scope, employee field work, payments, and
              AI-assisted business workflows.
            </p>
            <p>
              Founder Access is intentionally hands-on. The goal is to validate real workflows, catch beta-critical
              problems, and finish customer-ready V1 before wider public onboarding.
            </p>
          </div>
        </div>
      </section>

      <section className="section founder-audience-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Who it is for</p>
            <h2>Owner-led businesses that want simpler operations and direct product feedback.</h2>
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
            <p className="eyebrow">Completed V1 direction</p>
            <h2>What ServicesOS V1 is built to cover.</h2>
            <p>
              Founder Access testing may happen while individual release checks are still being completed, but the V1
              product scope itself now includes the workflows below.
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
              Founder Access is not a passive waitlist. It is a controlled early rollout for businesses willing to use
              the product, give specific feedback, and help validate the final V1 workflow before public onboarding.
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
            <p className="eyebrow">Outside V1</p>
            <h2>Clear boundaries keep the first release focused.</h2>
            <p>
              ServicesOS V1 is intentionally practical. These larger systems remain outside the customer-ready V1
              finish line rather than being quietly promised as launch features.
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
              ServicesOS V1 includes meaningful AI assistance, but important decisions remain under human control and
              the product is built around useful operating workflows before unnecessary complexity.
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
            <h2>Hands-on support while customer-ready V1 finishes validation.</h2>
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
            <h2>Founder Access is for businesses ready to test the real workflow.</h2>
            <p>
              Tell SLAI about your business, the workflows causing the most friction, and whether customers, estimates,
              bookings, employee execution, scope changes, payments, or AI-assisted operations are the biggest problem
              today.
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
        eyebrow="ServicesOS V1 Training Center"
        title="ServicesOS Training Center"
        copy="Learn the completed V1 operating path across customers, estimates, residential and commercial bookings, approved job scope, Employee App field work, extra-work requests, payments, and human-controlled AI assistance."
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
            <h2>The completed ServicesOS V1 flow.</h2>
          </div>
          <div>
            <p>
              The safest way to understand ServicesOS is to follow the work from first customer request through approved
              scope, field execution, payment, and follow-up.
            </p>
            <ol className="training-flow-list">
              {servicesOSWorkflow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section training-lessons-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Training lessons</p>
            <h2>Simple operating guidance for the customer-ready V1 workflow.</h2>
            <p>
              These lessons describe the defined V1 product rather than the older early-beta snapshot. Release-status
              notes still identify features completing final validation before public onboarding.
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
              These are public website resources only. They do not require login and do not connect to the real
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
        title="ServicesOS V1 FAQ"
        copy="Practical answers about the completed V1 feature set, $100/month pricing, 100 included monthly AI credits, Employee App workflows, residential and commercial jobs, scope control, payments, Tap to Pay, and the late-October 2026 customer-ready target."
      >
        <div className="hero-actions">
          <PageLink className="button primary" href="/servicesos-demo">
            View the demo
            <ArrowRight size={18} aria-hidden="true" />
          </PageLink>
          <a className="button secondary" href="#contact">Request a V1 Demo</a>
          <PageLink className="button secondary" href="/servicesos-training">
            Training Center
          </PageLink>
        </div>
      </PageHero>

      <section className="section faq-resource-section">
        <div className="shell two-column value-panel">
          <div>
            <p className="eyebrow">Quick answer</p>
            <h2>Customer-ready V1 is targeted for late October 2026.</h2>
          </div>
          <div>
            <p>
              ServicesOS V1 is a $100/month operating system built first around cleaning and owner-led service
              businesses. The feature set is defined; remaining work is final integration, payment, device, hardening,
              and real-business validation before public onboarding.
            </p>
            <div className="faq-quick-links">
              <PageLink className="button secondary" href="/servicesos-demo">
                Demo
              </PageLink>
              <a className="button secondary" href="#contact">Request a V1 Demo</a>
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
            <h2>Completed V1 answers for prospects and early users.</h2>
            <p>
              These answers describe the locked customer-ready V1 target while remaining explicit about features that
              are still completing final validation before the public release.
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
            <h2>Request a ServicesOS V1 demo.</h2>
            <p>
              Share your service-business workflow, the tools you use today, and where customers, bookings, scope,
              employee work, payments, or follow-up are hardest to keep organized.
            </p>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Request a V1 Demo
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <PageLink className="button secondary" href="/servicesos-training">
              Read Training Center
            </PageLink>
          </div>
        </div>
      </section>

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
