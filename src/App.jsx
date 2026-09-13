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
  'Stellar Logic AI builds human-centered AI platforms, beginning with ServicesOS V1, a $100/month operating system for cleaning and service businesses targeting customer-ready completion in late October 2026.';
const servicesOSDescription =
  'ServicesOS V1 is a $100/month operating system for cleaning and service businesses, connecting customers, estimates, residential and commercial bookings, approved job scope, employee field work, payments, and human-controlled AI. Customer-ready V1 is targeted for late October 2026.';
const servicesOSSocialTitle = 'ServicesOS V1 | $100/Month | Late October 2026';
const servicesOSSocialDescription =
  'Customers, bookings, approved job scope, employee field work, payments, and human-controlled AI in one $100/month service-business operating system.';

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
    title: 'ServicesOS V1 | $100/Month | Late October 2026',
    description: servicesOSDescription,
    socialTitle: servicesOSSocialTitle,
    socialDescription: servicesOSSocialDescription,
  },
  '/servicesos-demo': {
    title: 'See how ServicesOS works | Static Demo Walkthrough',
    description:
      'A static ServicesOS walkthrough using fake demo data to preview the owner workflow. Completed V1 also includes approved job scope, the Employee App, add-on/change-request controls, payments, and human-controlled AI.',
    socialTitle: 'See how ServicesOS works',
    socialDescription:
      'Preview the ServicesOS owner workflow with fake data only. This static demo does not connect to Firebase, Stripe, cloud functions, AI providers, or real customer data.',
  },
  '/servicesos-founder-access': {
    title: 'ServicesOS Founder Access | V1 Early Access',
    description:
      'Founder Access for cleaning and service businesses that want hands-on early access to the $100/month ServicesOS V1 operating platform before public onboarding.',
    socialTitle: 'ServicesOS Founder Access',
    socialDescription:
      'Early access to ServicesOS V1 for owner-led service businesses that want customers, bookings, approved scope, employee field work, payments, and human-controlled AI in one system.',
  },
  '/servicesos-faq': {
    title: 'ServicesOS V1 FAQ | $100/Month | Late October 2026',
    description:
      'Answers about the completed ServicesOS V1 scope, $100/month pricing, 100 included monthly AI credits, residential and commercial work, Employee App, job-scope control, payments, and launch validation.',
    socialTitle: 'ServicesOS V1 FAQ | $100/Month',
    socialDescription:
      'Practical answers about ServicesOS V1 capabilities, pricing, Employee App, customer-approved scope, AI credits, payments, and the late-October 2026 customer-ready target.',
  },
  '/servicesos-training': {
    title: 'ServicesOS V1 Training Center',
    description:
      'Learn the ServicesOS V1 workflow across customers, bookings, approved job scope, Employee App field work, payments, add-on/change requests, and SLAI Assistant.',
    socialTitle: 'ServicesOS V1 Training Center',
    socialDescription:
      'Simple V1 training for cleaning and service business owners covering the connected owner, customer, employee, payment, and AI-assisted workflow.',
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
    status: 'Customer-ready V1 target: late Oct 2026',
    description:
      'A $100/month operating system for service businesses that connects customers, estimates, bookings, approved job scope, employee field work, payments, and human-controlled AI.',
    icon: ShieldCheck,
    href: '/servicesos',
    featured: true,
    points: ['Residential and commercial work', 'Employee App and scope control', 'AI assists; humans decide'],
  },
  {
    name: 'GrowthAI',
    status: 'Future standalone platform',
    description:
      'A future standalone growth platform planned around lead discovery, outreach support, analytics, memory systems, and human oversight. ServicesOS V1 already includes its own SLAI Assistant capabilities.',
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
    title: 'Customers, leads & estimates',
    description:
      'Keep customer records, lead context, property or business details, estimates, pricing, service notes, and follow-up needs organized.',
    icon: Users,
  },
  {
    title: 'Residential & commercial bookings',
    description:
      'Create residential or commercial jobs through the same booking, scheduling, employee, and payment core, with bounded commercial facility context when needed.',
    icon: CalendarCheck,
  },
  {
    title: 'Customer-approved job scope',
    description:
      'Preserve what the customer approved for the job. Material changes create a new scope revision instead of silently replacing the original agreement.',
    icon: FileSignature,
  },
  {
    title: 'Employee App & field execution',
    description:
      'Give assigned employees My Day, job details, checklists, approved scope, before/after photos, notes, issue reporting, navigation, and job completion tools without exposing the whole back office.',
    icon: ClipboardCheck,
  },
  {
    title: 'Add-ons & extra-work control',
    description:
      'Owners define add-on pricing and expected duration. Employees submit work outside the approved scope for owner review instead of quietly expanding the job.',
    icon: ShieldCheck,
  },
  {
    title: 'Payments & revenue visibility',
    description:
      'Track expected, collected, and outstanding amounts, support Stripe-based customer payment workflows, and record approved manual payment methods without confusing a payment request with confirmed payment.',
    icon: CreditCard,
  },
  {
    title: 'SLAI Assistant',
    description:
      'Use business briefings, rebooking opportunities, communication drafts, reputation support, marketing assistance, content planning, and other controlled AI-assisted workflows with human review.',
    icon: BrainCircuit,
  },
  {
    title: 'Human control & audit history',
    description:
      'Keep important approvals, scope versions, draft history, and workflow state visible so employees and AI can assist without silently taking over owner decisions.',
    icon: LineChart,
  },
];

const servicesOSAudience = [
  'Cleaning businesses managing residential, commercial, recurring, and one-time service work.',
  'Owner-led local service teams coordinating customers, schedules, employees, scope, and payments across office and field work.',
  'Teams that want one clearer operating center with practical AI assistance while keeping people responsible for important decisions.',
];

const servicesOSWorkflow = ['Request', 'Estimate', 'Booking', 'Customer approval', 'Field work', 'Payment', 'Follow-up'];

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
    title: 'Review a customer request',
    notice: 'Keep customer context and estimate review together before confirming the work.',
  },
  {
    step: 'Step 3',
    title: 'Manage the booking and scope',
    notice: 'Keep schedule, service notes, price, and the customer-approved job scope tied to the same job.',
  },
  {
    step: 'Step 4',
    title: 'Understand payment status',
    notice: 'Track what is owed, what was received, and how payment was recorded.',
  },
  {
    step: 'Step 5',
    title: 'View the schedule',
    notice: 'Use Calendar for schedule visibility while job changes stay in the canonical booking workflow.',
  },
  {
    step: 'Step 6',
    title: 'Understand the Employee App',
    notice: 'Give employees assigned-job tools and approved scope without exposing owner-only controls.',
  },
  {
    step: 'Step 7',
    title: 'Request Founder Access',
    notice: 'Ask about early access if the workflow fits your cleaning or service business.',
  },
];

const founderAccessAudience = [
  'Solo cleaners who need one simple place to manage customers, jobs, approved scope, and payment status.',
  'Small service teams that are ready to move beyond notebooks, text threads, and scattered spreadsheets.',
  'Family-run or owner-led businesses where the owner still needs hands-on visibility into office and field work.',
  'Residential and commercial service businesses that want simpler operations before adding more software or staff.',
];

const founderAccessToday = [
  'Customer and lead organization',
  'Estimate and request review',
  'Residential and commercial booking workflows',
  'Calendar and repeat-customer visibility',
  'Customer-approved job scope and immutable revisions',
  'Employee App for assigned field work, checklists, photos, notes, and completion',
  'Owner-controlled add-on catalog and employee extra-work requests',
  'Stripe-based customer payment workflows and manual payment visibility',
  'Basic revenue visibility',
  'SLAI Assistant and employee Work Assistant with human control',
  '100 included AI credits each calendar month',
];

const founderAccessMeans = [
  'Early access while the completed V1 workflow goes through final release validation with real service businesses.',
  'A direct feedback loop so the product improves around actual owner and employee workflows.',
  'A clear $100/month V1 subscription rather than enterprise-style pricing tiers.',
  'Human-guided onboarding and support during the early rollout.',
  'A roadmap shaped by real users without pulling post-V1 complexity into the first release.',
];

const founderAccessNotIncluded = [
  'No payroll in V1',
  'No advanced route optimization in V1',
  'No full accounting replacement in V1',
  'No advanced commercial proposal, procurement, or net-term contract system in V1',
  'No enterprise multi-location account hierarchy in V1',
  'No autonomous marketing or customer messaging',
];

const founderAccessPhilosophy = [
  'AI should amplify humans, not replace them.',
  'Business owners remain responsible for important decisions.',
  'Build simple first; complexity is earned.',
  'MVPs solve real problems.',
];

const founderAccessExpectations = [
  'Founder Access users should expect final V1 hardening and workflow refinements before wider public onboarding.',
  'Feedback matters and may directly affect beta-critical fixes.',
  'Completed V1 scope is defined; new post-V1 ideas are not silently added to the launch requirement.',
  'Support is hands-on during the early rollout.',
];

const servicesOSTrainingLessons = [
  {
    title: 'Getting started',
    summary: 'Follow the same connected path the work follows in the business.',
    points: [
      'Request to Estimate to Booking to Customer approval to Field work to Payment to Follow-up is the completed V1 path.',
      'Requests and estimates should be reviewed before they become confirmed jobs.',
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
    title: 'Customers and bookings',
    summary: 'Customer records and bookings keep the office-side job context connected.',
    points: [
      'Keep customer records clean and avoid unnecessary duplicates.',
      'Use Residential or Commercial when creating the job.',
      'Commercial bookings can capture bounded facility, access, hazard, surface, and frequency context.',
      'Booking details remain the canonical place for job management.',
    ],
  },
  {
    title: 'Approved job scope',
    summary: 'The approved scope records what the customer actually agreed to for the job.',
    points: [
      'Customer approval creates an immutable scope version.',
      'Material changes do not silently rewrite the previously approved scope.',
      'Employees receive a safe view of the approved work they need in the field.',
    ],
  },
  {
    title: 'Employee App',
    summary: 'Employees get the tools required for assigned work without owner-only administration.',
    points: [
      'My Day and assigned Job Detail keep field work focused.',
      'Employees use checklists, job start/completion, before/after photos, notes, issue reporting, navigation, and safe guidance.',
      'Owner-only business controls and unrelated tenant data remain protected.',
    ],
  },
  {
    title: 'Add-ons and extra work',
    summary: 'Work outside the approved scope follows a controlled request instead of becoming unpaid scope creep.',
    points: [
      'Owner-managed add-ons provide authoritative price and expected duration.',
      'Employees can submit an extra-work request against the exact approved scope baseline.',
      'Custom work goes to the owner for pricing and operational review.',
      'Completed V1 requires customer approval before the approved scope changes.',
    ],
  },
  {
    title: 'Payments',
    summary: 'Payment tracking should describe what actually happened.',
    points: [
      'Stripe-based customer payment workflows and manual payment visibility are part of V1.',
      'A payment request does not mark a booking paid by itself.',
      'Confirmed Stripe state or an authorized owner-recorded workflow controls payment status.',
      'Tap to Pay is part of the V1 mobile payment completion track and is released only after final device/payment validation.',
    ],
  },
  {
    title: 'SLAI Assistant and AI credits',
    summary: 'AI can help the business without silently making important decisions.',
    points: [
      'SLAI Assistant supports briefings, opportunities, rebooking, communication drafts, reputation, marketing, and content planning.',
      'Employee Work Assistant supports bounded field guidance.',
      'ServicesOS V1 includes 100 AI credits each calendar month.',
      'Provider-backed generation uses credits; deterministic ServicesOS workflows do not.',
      'Human review remains central before sending, publishing, pricing, scheduling, or other consequential action.',
    ],
  },
  {
    title: 'Launch expectations',
    summary: 'Customer-ready V1 is targeted for late October 2026.',
    points: [
      'Final work is focused on customer approval for extra work, Stripe lifecycle stabilization, Tap to Pay, hardening, device QA, and real-business beta validation.',
      'Founder Access may see refinements before public onboarding.',
      'Post-V1 ideas stay parked unless they become a real launch blocker.',
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
          'ServicesOS is an operating system for owner-led service businesses. V1 connects customers, estimates, residential and commercial bookings, scheduling, customer-approved job scope, employee field work, payments, business visibility, and human-controlled AI assistance in one platform.',
      },
      {
        question: 'Who is ServicesOS built for first?',
        answer:
          'ServicesOS V1 is being built first around cleaning businesses and similar owner-led local service teams, including solo operators, small teams, and family-run businesses.',
      },
      {
        question: 'Is ServicesOS only for cleaning companies?',
        answer:
          'Cleaning businesses are the first vertical and the product is being validated around real cleaning workflows. The V1 architecture also supports other owner-led service businesses without creating a separate operating system for each trade.',
      },
      {
        question: 'When will ServicesOS V1 be customer-ready?',
        answer:
          'Customer-ready ServicesOS V1 is targeted for late October 2026. Public onboarding begins after final payment stabilization, release hardening, device testing, and real-business beta validation.',
      },
      {
        question: 'Can I sign up today?',
        answer:
          'Demo and Founder Access requests are open now. Wider public onboarding begins after the customer-ready V1 validation gate is complete.',
      },
      {
        question: 'How much does ServicesOS cost?',
        answer:
          'ServicesOS V1 is $100/month. The subscription includes the core V1 operating platform and 100 AI credits each calendar month. Any optional additional provider-backed usage or third-party cost offered later would be disclosed separately rather than silently added.',
      },
      {
        question: 'Is there a free trial?',
        answer:
          'No customer trial is planned for V1. Businesses can review the public information, demo workflow, pricing, and ServicesOS agreement before subscribing.',
      },
    ],
  },
  {
    title: 'Completed V1 capabilities',
    questions: [
      {
        question: 'What is included in ServicesOS V1?',
        answer:
          'Completed V1 includes customer and lead organization, estimates and pricing, residential and commercial bookings, scheduling and repeat-customer workflows, customer-approved scope, the Employee App, field photos and checklists, owner-controlled add-ons and extra-work requests, payment and revenue visibility, owner onboarding and subscription billing, SLAI Assistant, employee Work Assistant, and the security boundaries required to connect those workflows.',
      },
      {
        question: 'Can I manage customers and estimates?',
        answer:
          'Yes. ServicesOS keeps customer contact and service context organized and supports estimate and pricing workflows that remain owner-controlled.',
      },
      {
        question: 'Does ServicesOS support residential and commercial jobs?',
        answer:
          'Yes. Residential and commercial bookings use the same core booking, scheduling, employee, payment, and JobPacket systems. Commercial jobs can also capture facility-specific context such as square footage, service frequency, operating hours, access and security requirements, hazards, surfaces, supplies, and service areas.',
      },
      {
        question: 'Does ServicesOS support recurring customers?',
        answer:
          'Yes. V1 includes repeat-customer workflows and supported recurring-service context. SLAI Assistant can surface supported rebooking opportunities while the owner remains responsible for deciding what to do and what to send.',
      },
      {
        question: 'Can I track revenue?',
        answer:
          'Yes. ServicesOS separates expected revenue, collected revenue, and outstanding balances so owners can distinguish booked work from money actually received.',
      },
    ],
  },
  {
    title: 'Job scope and extra work',
    questions: [
      {
        question: 'How does customer job-scope approval work?',
        answer:
          'ServicesOS creates a clear snapshot of the work being approved for a booking. Customer approval creates an immutable approved version. Material changes require a new revision rather than silently overwriting what the customer already approved.',
      },
      {
        question: 'What happens if a customer asks for extra work during a job?',
        answer:
          'Employees can submit an extra-work request tied to the exact approved scope. Catalog add-ons use owner-controlled pricing and expected duration, while custom work goes back to the owner for pricing and review. Completed V1 requires authenticated customer approval before the approved scope changes.',
      },
      {
        question: 'Can employees change prices?',
        answer:
          'No. Employees cannot create authoritative prices for catalog add-ons or custom work. Catalog price and duration are controlled by the owner and loaded server-side; custom requested work is priced by an authorized owner or admin.',
      },
      {
        question: 'Can ServicesOS help control scope creep?',
        answer:
          'Yes. V1 is designed to make scope changes explicit. Employees can see the approved job scope and route work outside that scope through an extra-work request instead of quietly expanding the original job.',
      },
    ],
  },
  {
    title: 'Employee App',
    questions: [
      {
        question: 'Is there a mobile employee app?',
        answer:
          'Yes. ServicesOS V1 includes a dedicated Employee App for assigned work. The app is built and remains in final device, payment, and release validation before customer-ready launch.',
      },
      {
        question: 'What can employees do in the app?',
        answer:
          'Employees can use My Day, assigned Job Detail, approved scope, checklists, job start and completion, before and after photos, notes, issue reporting, navigation, safe work guidance, Work Assistant, and V1 extra-work request tools.',
      },
      {
        question: 'What can employees see?',
        answer:
          'Employees receive the information required to perform their assigned work. ServicesOS intentionally limits owner-only administration, unrelated tenant data, and private pricing or agreement information that employees do not need.',
      },
      {
        question: 'Can an employee approve something for the customer?',
        answer:
          'No. Employee and owner actions cannot impersonate authenticated customer approval. Customer approval is a separate controlled boundary.',
      },
    ],
  },
  {
    title: 'Payments',
    questions: [
      {
        question: 'Does ServicesOS support customer payments?',
        answer:
          'Yes. Completed V1 includes Stripe-based customer payment workflows, payment-state tracking, manual payment visibility, business subscription billing, and the planned Tap to Pay employee/mobile workflow. Payment features are fully validated before public onboarding.',
      },
      {
        question: 'Do I need Stripe?',
        answer:
          'Stripe and Stripe Connect provide the online and connected-account payment foundation for ServicesOS V1. Manual payment visibility can still describe approved non-Stripe payment methods where the owner records what happened.',
      },
      {
        question: 'Does creating a payment request mark a booking paid?',
        answer:
          'No. A payment request is not payment confirmation. ServicesOS keeps requested, confirmed, and owner-recorded payment states separate so the booking is not treated as paid simply because a link was created.',
      },
      {
        question: 'Does ServicesOS support Tap to Pay?',
        answer:
          'Tap to Pay is included in the V1 completion scope for supported employee/mobile payment workflows. It will be released only after Stripe and physical-device validation are complete.',
      },
      {
        question: 'Who handles refunds or chargebacks?',
        answer:
          'Business owners remain responsible for unusual payment cases, refunds, and chargebacks. V1 focuses on safe payment collection and state visibility rather than adding a broad dispute-management system.',
      },
    ],
  },
  {
    title: 'AI and credits',
    questions: [
      {
        question: 'Does ServicesOS include AI?',
        answer:
          'Yes. ServicesOS V1 includes SLAI Assistant capabilities for business briefings, opportunities, retention and rebooking, customer communication drafting, reputation support, marketing assistance, content planning, and controlled contextual workflows. The Employee App also includes SLAI Work Assistant capabilities.',
      },
      {
        question: 'Does AI make decisions for the business?',
        answer:
          'No. AI can notice, organize, draft, and suggest. Humans remain responsible for important customer, pricing, scheduling, payment, approval, and publishing decisions.',
      },
      {
        question: 'How do AI credits work?',
        answer:
          'ServicesOS V1 includes 100 AI credits each calendar month. Provider-backed AI generation consumes credits, while deterministic ServicesOS workflows do not. Provider-backed actions show their credit cost before execution.',
      },
      {
        question: 'Does SLAI Assistant automatically send messages or publish marketing?',
        answer:
          'No. Customer communication and marketing output remain draft-first and human-reviewed. ServicesOS V1 does not automatically send customer communication or publish marketing without owner control.',
      },
      {
        question: 'Will AI replace the owner or employee?',
        answer:
          'No. ServicesOS is built around the principle that AI should amplify people, not replace them. The system is designed to support owners and employees while preserving human responsibility.',
      },
    ],
  },
  {
    title: 'V1 launch and boundaries',
    questions: [
      {
        question: 'What remains before public onboarding?',
        answer:
          'Remaining work is focused on the final customer approval path for extra work, Stripe subscription and payment lifecycle stabilization, Tap to Pay, release hardening, final mobile/device QA, real-business beta validation, and beta-critical fixes.',
      },
      {
        question: 'Will V1 features still change?',
        answer:
          'Final validation may refine wording, edge cases, and usability, but the V1 scope is defined. New post-V1 ideas are not being added unless a real launch blocker requires it.',
      },
      {
        question: 'Does V1 include payroll?',
        answer: 'No. Payroll is not part of ServicesOS V1.',
      },
      {
        question: 'Does V1 include route optimization?',
        answer: 'No. Advanced route optimization is outside the V1 scope.',
      },
      {
        question: 'Does ServicesOS replace accounting software?',
        answer:
          'No. ServicesOS provides operational payment and revenue visibility, but V1 is not a full accounting system.',
      },
      {
        question: 'Does V1 include advanced commercial contracts or procurement?',
        answer:
          'No. V1 supports commercial booking context through the same canonical operating workflow, but advanced proposals, procurement, net payment terms, and enterprise multi-location account hierarchies remain post-V1.',
      },
    ],
  },
  {
    title: 'Getting started',
    questions: [
      {
        question: 'How do I see the demo?',
        answer:
          'Use the ServicesOS demo page for a static owner-side walkthrough with fake data only. The demo intentionally shows a limited subset of V1 and does not connect to the real app or providers.',
      },
      {
        question: 'How do I request a V1 demo?',
        answer:
          'Use the contact form to tell SLAI about your service business and the workflow problem you want to solve.',
      },
      {
        question: 'Where can I learn the V1 workflow?',
        answer:
          'Use the Training Center for a public overview of customers, bookings, approved scope, Employee App, extra-work controls, payments, SLAI Assistant, and launch expectations.',
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
            Use these public resources to understand the static demo, Founder Access, completed V1 workflow, and common
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
            SLAI is starting with a practical operating system for service businesses. Customer-ready ServicesOS V1 is
            targeted for late October 2026; future platforms remain clearly separated from the active build.
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
            Tell us what workflow problem you want solved, request a V1 demo, or ask about the $100/month subscription
            and 100 included monthly AI credits. Your request goes to SLAI by email, and we'll follow up directly.
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
              <option>ServicesOS Pricing</option>
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
        copy="Manage customers, estimates, residential and commercial bookings, approved job scope, employee field work, payments, and human-controlled AI from one connected platform. ServicesOS V1 is $100/month, with customer-ready completion targeted for late October 2026."
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
              ServicesOS is for businesses that need one clearer operating center for the customer, office, field team,
              job scope, payment state, and follow-up instead of rebuilding context across disconnected tools.
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
            <p className="eyebrow">Core V1 Workflow</p>
            <h2>One connected path from first request to follow-up.</h2>
            <p>
              Request to Estimate to Booking to Customer approval to Field work to Payment to Follow-up. The goal is to
              keep the work moving without losing context between the customer, owner, and field team.
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
            <p className="eyebrow">Completed V1 Scope</p>
            <h2>The operating tools behind the whole job.</h2>
            <p>
              The website describes the defined customer-ready V1: one connected operating platform, with remaining work
              focused on final validation, payment stabilization, device QA, and release hardening rather than adding a new feature maze.
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
            <p className="eyebrow">Scope Control</p>
            <h2>Know what was agreed. Know what changed.</h2>
          </div>
          <div>
            <p>
              ServicesOS preserves the customer-approved scope for each job. When additional work comes up in the field,
              employees submit an extra-work request instead of silently expanding the original job.
            </p>
            <p>
              Owners control catalog pricing, custom-work pricing, timing, and operational disposition. Completed V1
              adds authenticated customer approval before a material change becomes the next approved scope revision.
            </p>
          </div>
        </div>
      </section>
      <section className="section product-detail-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">AI Posture</p>
            <h2>AI assists. Humans decide.</h2>
          </div>
          <div>
            <p>
              ServicesOS V1 includes SLAI Assistant and employee Work Assistant capabilities. AI can surface business
              opportunities, help with rebooking, draft communication, support reputation and marketing work, organize
              context, and assist employees within bounded workflows.
            </p>
            <p>
              Important customer, pricing, scheduling, payment, approval, and publishing decisions remain under human
              control. Provider-backed generation uses AI credits; deterministic ServicesOS workflows remain available
              without consuming AI credits.
            </p>
          </div>
        </div>
      </section>
      <section className="section pricing-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">V1 Pricing</p>
            <h2>ServicesOS V1 — $100/month.</h2>
          </div>
          <div>
            <p>
              One ServicesOS subscription covers the core V1 operating platform and includes 100 AI credits each
              calendar month. The V1 plan does not use an enterprise-style pricing maze or require a customer trial.
            </p>
            <p>
              Any optional additional provider-backed usage or third-party cost offered later would be disclosed
              separately rather than silently added. Demo and Founder Access requests are open now; public onboarding
              begins after final customer-ready validation.
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
            <p className="eyebrow">Customer-Ready V1</p>
            <h2>Targeted for late October 2026.</h2>
            <p>
              Owner onboarding, subscription billing, residential and commercial booking, employee workflows,
              customer-approved scope, canonical add-ons, and employee extra-work review are already part of the V1
              architecture. Remaining work is focused on the final customer approval path for extra work, Stripe
              lifecycle stabilization, Tap to Pay, release hardening, device QA, and real-business beta validation.
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
              <p className="eyebrow">Current Status</p>
              <h3>Defined V1 scope, final release validation in progress.</h3>
              <p>
                ServicesOS is not publicly launched yet. This page describes what the completed V1 release includes;
                unfinished release-critical pieces are still validated before public onboarding. Owners remain in
                control of customer, pricing, scheduling, approval, payment, and publishing decisions.
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
        copy="Walk through a limited owner-side workflow with fake cleaning business data. The completed V1 scope is broader than this static walkthrough and also includes residential and commercial booking, customer-approved scope, the Employee App, add-on/change-request controls, SLAI Assistant, and V1 payment workflows."
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
            This walkthrough shows selected ServicesOS concepts without login or connections to real customer data,
            Firebase, Stripe, cloud functions, or AI providers. Use the ServicesOS and FAQ pages for the full V1 scope.
          </p>
        </div>
      </section>

      <section className="section demo-walkthrough-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Guided Owner Walkthrough</p>
            <h2>Follow a simplified ServicesOS workflow.</h2>
            <p>
              The completed V1 path is Request to Estimate to Booking to Customer approval to Field work to Payment to
              Follow-up. This static page intentionally illustrates only selected parts of that connected workflow.
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
            <p className="eyebrow">Step 2: Review a customer request</p>
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
                  'In the real app, the owner reviews customer and estimate context before confirming the canonical booking. This demo keeps the request static.'
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
            <p className="eyebrow">Step 3: Manage the booking and scope</p>
            <h2>Bookings is the job management center.</h2>
            <p>
              Residential and commercial bookings use the same canonical workflow. Completed V1 keeps schedule, service
              context, job price, payment state, and customer-approved scope tied back to the booking.
            </p>
          </div>
          <div className="demo-training-callout">
            <strong>What you see</strong>
            <p>Job status, customer context, price, amount owed, and manual payment details.</p>
            <strong>What completed V1 adds</strong>
            <p>
              Customer-approved immutable scope versions and controlled extra-work requests prevent material job changes
              from silently replacing what was originally approved.
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
                      'In the real app, a Stripe payment link is created only through the authorized payment workflow. Creating a request does not mark the booking paid.'
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
            <h2>Confirmed payment state, not wishful payment state.</h2>
            <p>
              Payment requests do not mark a job paid by themselves. Completed V1 keeps online and approved manual
              payment state separate and validates Stripe-based workflows before public onboarding.
            </p>
            <div className="demo-training-callout">
              <strong>What you see</strong>
              <p>Payment status describes what has actually happened, not what the owner hopes will happen.</p>
              <strong>Why it matters</strong>
              <p>Owners can separate Stripe-confirmed payments from approved manually recorded payment methods.</p>
            </div>
            <button
              className="button secondary demo-action-button"
              type="button"
              onClick={() =>
                explainDemoAction(
                  'In the real app, paid status updates from confirmed payment state or an authorized owner-recorded manual-payment workflow.'
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
              <h3>Payment is requested through the authorized workflow.</h3>
              <p>Creating the request does not mean the customer has paid.</p>
            </article>
            <article>
              <span>3</span>
              <h3>Status updates after confirmed payment.</h3>
              <p>Owners see paid state only after the appropriate confirmation or authorized manual record.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section demo-calendar-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Step 5: View the schedule</p>
            <h2>A schedule view connected to canonical bookings.</h2>
            <p>Calendar provides schedule visibility while booking changes remain in the booking workflow.</p>
            <div className="demo-training-callout">
              <strong>What you see</strong>
              <p>The schedule shows upcoming work without becoming a duplicate booking-management system.</p>
              <strong>Why it matters</strong>
              <p>The owner and team can understand the week while keeping job state in one canonical place.</p>
            </div>
            <button
              className="button secondary demo-action-button"
              type="button"
              onClick={() =>
                explainDemoAction(
                  'In the real app, booking changes remain in Bookings while Calendar provides schedule visibility.'
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
            <p className="eyebrow">Step 6: Understand the Employee App</p>
            <h2>Assigned work without owner-only administration.</h2>
            <p>
              This static card previews the safe job information employees need. Completed V1 goes further with My Day,
              assigned Job Detail, approved scope, checklists, job start/completion, before/after photos, notes, issue
              reporting, navigation, Work Assistant, and extra-work requests.
            </p>
            <div className="demo-training-callout">
              <strong>What employees receive</strong>
              <p>Bounded job context and execution tools for assigned work.</p>
              <strong>What stays protected</strong>
              <p>Owner-only administration, unrelated tenant data, and private information employees do not need.</p>
            </div>
          </div>
          <article className="demo-job-packet">
            <h3>Sarah Mitchell - Standard recurring clean</h3>
            <p className="demo-address">Demo address: 1200 Clean Street, Springfield, ST</p>
            <ul className="plain-list">
              <li>Approved scope: kitchen, bathrooms, floors, and entryway dusting.</li>
              <li>Use customer-provided product on hardwood floors.</li>
              <li>Checklist preview: arrival check, room-by-room clean, final completion review.</li>
              <li>If new work is requested, submit an extra-work request instead of silently changing the scope.</li>
            </ul>
            <button
              className="button secondary demo-action-button"
              type="button"
              onClick={() =>
                explainDemoAction(
                  'Completed V1 Employee App adds execution tools, photos, notes, Work Assistant, and scope-change requests while preserving owner-only controls.'
                )
              }
            >
              Explain Employee App
            </button>
          </article>
        </div>
      </section>

      <section className="section demo-founder-section" id="founder-access">
        <div className="shell value-panel demo-founder-panel">
          <div>
            <p className="eyebrow">Step 7: Request Founder Access</p>
            <h2>Built first for cleaning and owner-led service businesses.</h2>
            <p>
              Founder Access provides a hands-on early rollout of the defined V1 workflow while final payment,
              device, hardening, and real-business validation finish before wider public onboarding.
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
        copy="Get hands-on early access to the defined ServicesOS V1 operating workflow while final release validation is completed before wider public onboarding."
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
            <h2>ServicesOS V1 is built around the whole service-business workflow.</h2>
          </div>
          <div>
            <p>
              ServicesOS connects customers, estimates, residential and commercial bookings, approved job scope,
              employee field execution, payments, business visibility, and human-controlled AI without forcing the
              owner to spread daily operations across disconnected tools.
            </p>
            <p>
              Founder Access is intentionally hands-on. The completed V1 scope is defined; early users help validate
              the final workflow and surface beta-critical issues before wider onboarding.
            </p>
          </div>
        </div>
      </section>

      <section className="section founder-audience-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Who it is for</p>
            <h2>Built first for owner-led service businesses that need simpler operations.</h2>
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
            <p className="eyebrow">What completed V1 includes</p>
            <h2>A defined operating platform, not a placeholder feature list.</h2>
            <p>
              Founder Access is early, but the V1 scope is now defined. The remaining work is release-critical
              validation rather than open-ended feature expansion.
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
              Founder Access is not a passive waitlist. It is a practical early rollout for service businesses willing
              to use the product, give feedback, and help surface beta-critical issues before wider public onboarding.
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
            <p className="eyebrow">V1 boundaries</p>
            <h2>Clear limits keep the first release useful.</h2>
            <p>
              ServicesOS V1 solves the core operating workflow without pretending to replace payroll, accounting,
              enterprise procurement, or every future business system.
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
              ServicesOS V1 includes AI assistance, but the system is built around owner control, employee clarity,
              explicit customer approval, responsible decisions, and useful workflows before complexity.
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
            <h2>Hands-on support while final V1 validation finishes.</h2>
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
            <h2>Founder Access is for service businesses ready to simplify operations.</h2>
            <p>
              Tell SLAI about your business, the workflows causing the most friction, and whether your biggest problem
              is customer management, booking, field execution, scope creep, payment visibility, or follow-up.
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
        copy="Learn the completed V1 workflow across customers, estimates, residential and commercial bookings, approved job scope, Employee App field work, payments, extra-work control, and SLAI Assistant."
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
              Understand ServicesOS by following the work from the customer's first request through approval, field
              execution, payment, and follow-up.
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
            <h2>Practical operating guidance for ServicesOS V1.</h2>
            <p>
              These public notes explain the defined V1 workflow while final customer-ready validation continues.
              Detailed in-app guidance can be refined without changing the core V1 boundaries described here.
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
            <h2>Use these pages for demos, V1 planning, and support conversations.</h2>
            <p>
              These links are public website resources only. They do not require login and do not connect to the real
              ServicesOS app, payment providers, or customer records.
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
        eyebrow="ServicesOS V1 FAQ"
        title="ServicesOS V1 FAQ"
        copy="Practical answers about the defined V1 release: $100/month pricing, 100 included monthly AI credits, residential and commercial work, customer-approved scope, Employee App, payments, AI assistance, and the late-October 2026 customer-ready target."
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
              ServicesOS V1 is a $100/month operating platform built first for cleaning and owner-led service businesses.
              This FAQ describes what completed V1 includes; wider public onboarding begins only after final payment,
              hardening, device, and real-business validation.
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
            <h2>Clear answers about the defined V1 product.</h2>
            <p>
              These answers describe the completed V1 target without pretending unfinished release validation is already
              publicly available or pulling post-V1 features into the launch promise.
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
              Share your service-business workflow, the tools you use today, and where customers, bookings, field work,
              scope changes, payments, or follow-up are hardest to keep organized.
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
