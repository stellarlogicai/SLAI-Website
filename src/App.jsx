import {
  ArrowRight,
  BookOpenCheck,
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
    title: 'CRM / lead tracking',
    description: 'Keep prospects, customer details, service history, notes, and follow-up work organized for small teams.',
    icon: Users,
  },
  {
    title: 'Estimates and quotes',
    description: 'Build clearer pricing conversations around service scopes, quotes, deposits, and approval steps.',
    icon: FileSignature,
  },
  {
    title: 'Contracts and agreements',
    description: 'Keep service terms, accepted work, and customer expectations closer to the rest of the workflow.',
    icon: ClipboardCheck,
  },
  {
    title: 'Payments and deposits',
    description: 'Connect payments, deposits, and job status so money does not sit apart from operations.',
    icon: CreditCard,
  },
  {
    title: 'Scheduling',
    description: 'Help teams coordinate jobs, recurring work, crews, and customer expectations without scattered tools.',
    icon: CalendarCheck,
  },
  {
    title: 'Employee assignment',
    description: 'Assign team members to jobs, keep work visible, and reduce owner-only memory around who is doing what.',
    icon: Users,
  },
  {
    title: 'Job checklists',
    description: 'Support repeatable job execution with checklists, completion notes, and service-specific standards.',
    icon: ShieldCheck,
  },
  {
    title: 'Training support',
    description: 'Give new and existing employees a clearer place to learn standards, expectations, and job procedures.',
    icon: BookOpenCheck,
  },
  {
    title: 'Inventory and equipment',
    description: 'Track important equipment, supplies, and job-readiness details without another separate spreadsheet.',
    icon: ClipboardCheck,
  },
  {
    title: 'Customer history',
    description: 'Give owners and staff better context around previous jobs, communication, preferences, and recurring needs.',
    icon: FileSignature,
  },
  {
    title: 'Reporting and analytics',
    description: 'Surface practical business signals around work volume, follow-up, payments, recurring jobs, and team activity.',
    icon: LineChart,
  },
];

const servicesOSAudience = [
  'Cleaning businesses managing leads, estimates, crews, recurring customers, and quality expectations.',
  'Local service companies that rely on repeat work, referrals, schedule discipline, and clear customer communication.',
  'Owner-led teams that have outgrown notebooks, spreadsheets, text threads, and disconnected subscriptions.',
];

const servicesOSWorkflow = [
  'Lead',
  'Estimate',
  'Contract',
  'Payment',
  'Scheduling',
  'Employee assignment',
  'Job execution',
  'Completion',
  'Review',
  'Recurring service',
  'Analytics',
];

const servicesOSToolGroups = [
  'CRM and lead trackers',
  'Quote and estimate tools',
  'Contract or agreement workflows',
  'Payment and deposit tools',
  'Scheduling calendars',
  'Job checklist systems',
  'Training documents',
  'Inventory or equipment spreadsheets',
  'Reporting dashboards',
];

const servicesOSPricingPoints = [
  'Early access and pilot pricing are available by request while the product is being shaped with real service businesses.',
  'Early access pricing is intended to be practical for small service businesses, not enterprise software pricing.',
  'The pricing goal is simple, transparent plans that make sense for small service teams.',
  'ServicesOS is designed to reduce the need for many separate software subscriptions.',
  'If payment processing is used, any processing or platform fees should be explained clearly before a business commits.',
];

const servicesOSPilotPoints = [
  'Early access is by request.',
  'Pilot pricing is discussed individually.',
  'The goal is practical pricing for small service businesses, not enterprise software pricing.',
  'Pilot users may start with one workflow first, such as leads/estimates or scheduling, before expanding into more operations.',
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

const servicesOSFaqs = [
  {
    question: 'Is ServicesOS only for cleaning businesses?',
    answer:
      'Cleaning businesses are the first strong fit, but the workflow is being designed for service businesses that manage leads, estimates, scheduling, staff, job execution, and recurring customers.',
  },
  {
    question: 'Is ServicesOS fully launched?',
    answer:
      'ServicesOS is the active near-term product priority. Public messaging should be treated as early access and pilot-oriented, not a claim that every planned feature is complete.',
  },
  {
    question: 'Will ServicesOS replace every tool immediately?',
    answer:
      'The goal is to reduce software sprawl over time, but adoption should be practical. Some businesses may start with one workflow before moving more operations into the platform.',
  },
  {
    question: 'How much setup is required?',
    answer:
      'Early pilots can start with one workflow, such as leads and estimates or scheduling, before moving more operations into ServicesOS.',
  },
  {
    question: 'Can I pay for ServicesOS on the website today?',
    answer:
      'Not yet. Early access is handled by request so we can make sure ServicesOS is a good fit before onboarding a business.',
  },
  {
    question: 'Will ServicesOS support payments?',
    answer:
      'The plan is for ServicesOS to support Stripe and Stripe Connect so service businesses can collect deposits, final payments, and eventually in-person payments. Payment features will be tested carefully before wider release.',
  },
  {
    question: 'How does early access work?',
    answer:
      'Early pilots can start with a focused workflow, such as leads and estimates or scheduling, then expand as the business is ready.',
  },
  {
    question: 'Does ServicesOS make decisions automatically?',
    answer:
      'No. AI assistance should summarize, draft, recommend, and organize. Owners, managers, and employees remain responsible for important decisions.',
  },
  {
    question: 'How do I ask about pricing?',
    answer:
      'Use the request demo form and mention early access pricing. SLAI can discuss pilot fit, business size, and the workflows you want to simplify.',
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
          <a className="button primary" href="#contact">
            Request a ServicesOS Demo
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button secondary" href="#contact">
            Ask About Pilot Pricing
          </a>
          <PageLink className="button secondary" href="/servicesos-demo">
            View Guided Demo
          </PageLink>
        </div>
      </PageHero>
      <section className="section services-fit-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Who it is for</p>
            <h2>Built for owner-led service teams that need one operating center.</h2>
          </div>
          <div>
            <p>
              ServicesOS helps you track leads, send estimates, schedule jobs, assign cleaners, collect payments, and
              manage recurring customers from one place.
            </p>
            <p>
              ServicesOS is being shaped around cleaning and local service businesses that need clearer workflows from
              first inquiry through recurring service. The product is business-focused: fewer scattered tools, less
              repeated admin work, and a better shared view of daily operations.
            </p>
            <ul className="plain-list">
              {servicesOSAudience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section problem-section">
        <h2 className="sr-only">ServicesOS problem and solution</h2>
        <div className="shell three-column">
          <article>
            <p className="eyebrow">Problem</p>
            <h3>Too many subscriptions.</h3>
            <p>Service businesses often stitch together separate tools for customers, estimates, payments, scheduling, and training.</p>
          </article>
          <article>
            <p className="eyebrow">Friction</p>
            <h3>Too much manual work.</h3>
            <p>Important details get copied between systems, handled in messages, or remembered by the person who happened to do it last.</p>
            <ul className="plain-list">
              <li>Missed follow-ups after estimates</li>
              <li>Jobs getting scheduled in texts or memory</li>
              <li>Cleaners not knowing exact scope or checklist</li>
              <li>Recurring customers needing repeat scheduling</li>
              <li>Payment/deposit status not being clear before a job</li>
            </ul>
          </article>
          <article>
            <p className="eyebrow">Solution</p>
            <h3>A clearer operating core.</h3>
            <p>ServicesOS brings the major workflows together so owners and teams can operate from a shared source of truth.</p>
          </article>
        </div>
      </section>
      <section className="section workflow-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Core Workflow</p>
            <h2>From lead to recurring customer.</h2>
            <p>
              ServicesOS is organized around the work service businesses repeat every day, not around a collection of
              disconnected apps.
            </p>
            <p>The goal is to keep each job moving without losing context between the customer, office, and field team.</p>
            <p>
              Cleaners can see assigned jobs, customer notes, checklists, special instructions, and completion steps so
              the owner does not have to repeat every detail manually.
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
            <p className="eyebrow">Features</p>
            <h2>Practical tools for the operating work behind every job.</h2>
            <p>
              The platform is designed around practical operations first. AI assistance supports the work but does not
              replace human judgment, customer relationships, or owner responsibility.
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
      <section className="section tool-reduction-section">
        <div className="shell two-column value-panel">
          <div>
            <p className="eyebrow">Tool Consolidation</p>
            <h2>Designed to reduce subscription sprawl.</h2>
            <p>
              ServicesOS is not positioned as another single-purpose app. The goal is to bring the major operating
              workflows closer together so a service business can rely on fewer disconnected subscriptions over time.
            </p>
          </div>
          <ul className="plain-list tool-list">
            {servicesOSToolGroups.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section product-detail-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Product Position</p>
            <h2>Main near-term platform, conservative AI posture.</h2>
          </div>
          <div>
            <p>
              ServicesOS is the first public product priority for SLAI. It is positioned as operational software for
              real service teams, not a promise that automation can replace owners, managers, or employees.
            </p>
            <p>
              AI features should summarize, recommend, draft, and assist. Important decisions stay with humans, and low
              confidence should lead to review rather than guessing.
            </p>
            <p>
              Owners stay in control of customer communication, pricing decisions, staff assignments, and final
              approvals.
            </p>
          </div>
        </div>
      </section>
      <section className="section pilot-section">
        <div className="shell two-column value-panel pilot-panel">
          <div>
            <p className="eyebrow">Early Access / Pilot</p>
            <h2>Preparing for real-world service business pilots.</h2>
            <p>
              ServicesOS is currently preparing for early real-world pilot testing with cleaning and service
              businesses. Early access is intended for owners who want a simpler way to manage leads, estimates,
              scheduling, employee workflows, job completion, and payment tracking from one place.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Request Early Access
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button secondary" href="#contact">
                Ask About Pilot Pricing
              </a>
              <a className="button secondary" href="#contact">
                Request a ServicesOS Demo
              </a>
            </div>
          </div>
          <div>
            <article className="status-callout">
              <p className="eyebrow">Current Status</p>
              <h3>Active development before wider launch.</h3>
              <p>
                ServicesOS is in active development and preparing for early real-world testing. The current focus is
                workflow stability, beta feedback, UI refinement, and payment testing before wider launch.
              </p>
            </article>
            <ul className="plain-list">
              {servicesOSPilotPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section pricing-section">
        <div className="shell two-column value-panel">
          <div>
            <p className="eyebrow">Pricing Approach</p>
            <h2>Early access pricing by request.</h2>
            <p>
              Public final pricing is not being listed yet. The near-term focus is learning from real service
              businesses and offering pilot conversations that are clear about fit, scope, and fees.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Request a ServicesOS Demo
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button secondary" href="#contact">
                Ask About Pilot Pricing
              </a>
            </div>
          </div>
          <ul className="plain-list">
            {servicesOSPricingPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section faq-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">FAQ</p>
            <h2>Common early-access questions.</h2>
            <p>
              Straightforward answers for service business owners evaluating whether ServicesOS is worth a demo
              conversation.
            </p>
          </div>
          <div className="faq-grid">
            {servicesOSFaqs.map((item) => (
              <article className="faq-card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
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
        </div>
      </PageHero>

      <section className="section demo-notice-section">
        <div className="shell demo-notice">
          <p className="eyebrow">Demo boundary</p>
          <h2>Fake data only. No backend actions.</h2>
          <p>
            This walkthrough shows how ServicesOS is intended to feel for a cleaning business owner. Names, jobs,
            payments, and schedules are static examples, and every demo action stays on this page.
          </p>
        </div>
      </section>

      <section className="section demo-dashboard-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Dashboard Preview</p>
            <h2>An owner can see what is booked, collected, owed, and waiting for review.</h2>
            <p>
              ServicesOS separates expected revenue from collected revenue so owners do not confuse scheduled work with
              money already received.
            </p>
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
            <p className="eyebrow">Customers Preview</p>
            <h2>Customer details stay close to service notes and payment context.</h2>
            <p>
              Owners can review contact details, property notes, recurring work, and quote context without hunting
              through texts or spreadsheets.
            </p>
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
            <p className="eyebrow">Bookings Preview</p>
            <h2>Bookings are the owner workspace for job status and payment review.</h2>
            <p>
              The booking detail view is where an owner can see scheduled work, amount owed, amount received, and
              whether payment was recorded manually or confirmed through Stripe.
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
                      'Demo-only payment link: in the real app, owners create a booking-scoped Stripe link from Bookings. The booking is marked paid only after payment is confirmed.'
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

      <section className="section demo-calendar-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Calendar Preview</p>
            <h2>A read-only schedule view for visibility.</h2>
            <p>Calendar is for visibility. Booking changes happen in Bookings.</p>
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
            <p className="eyebrow">Field Mode Preview</p>
            <h2>A read-only job packet for the team in the field.</h2>
            <p>
              Field Mode gives workers job visibility without exposing admin controls. Staff can review the customer,
              address, service notes, and checklist before arriving.
            </p>
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

      <section className="section demo-payments-section">
        <div className="shell two-column">
          <div>
            <p className="eyebrow">Payments Preview</p>
            <h2>Stripe-first, manual-friendly payment tracking.</h2>
            <p>
              ServicesOS is designed so owners can send a Stripe payment link for a booked job when Stripe Connect is
              ready, while still recording cash, check, Venmo, Cash App, Zelle, PayPal, or other manual payments.
            </p>
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

      <section className="section demo-founder-section" id="founder-access">
        <div className="shell value-panel demo-founder-panel">
          <div>
            <p className="eyebrow">Founder Access</p>
            <h2>Built first for cleaning companies.</h2>
            <p>
              Manage customers, bookings, field visibility, and payments in one place. Founder Access is for early
              cleaning businesses that want to help shape the workflow before wider launch.
            </p>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Request Founder Access
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              className="button secondary"
              href="mailto:stellar.logic.ai@gmail.com?subject=ServicesOS%20Founder%20Access"
            >
              Email SLAI
              <Mail size={18} aria-hidden="true" />
            </a>
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
