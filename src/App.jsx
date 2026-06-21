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
};

const routeMeta = {
  '/': {
    title: 'SLAI | Building AI That Amplifies Human Potential',
    description:
      'SLAI builds AI-powered platforms for service businesses, education, growth, and careful long-term research.',
  },
  '/about': {
    title: 'About SLAI | Human-Centered AI',
    description:
      'Learn about SLAI, its founder story, and the principles behind building AI that helps people work smarter.',
  },
  '/servicesos': {
    title: 'ServicesOS | SLAI',
    description:
      'ServicesOS is SLAI’s main near-term product: operating software for service businesses with human-centered AI assistance.',
  },
  '/research': {
    title: 'Research | SLAI',
    description:
      'SLAI research areas include human-centered AI, memory systems, AI governance, education systems, business automation, and competitive integrity.',
  },
  '/blog': {
    title: 'Blog | SLAI',
    description: 'SLAI research notes and product updates are coming soon.',
  },
  '/competitive-integrity': {
    title: 'Competitive Integrity | SLAI',
    description:
      'A future SLAI research direction exploring fair competition, behavioral intelligence, and human-reviewed integrity systems.',
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
    title: 'Customer Operations',
    description: 'Keep customer details, service history, notes, and follow-up work organized for small service teams.',
    icon: Users,
  },
  {
    title: 'Estimates and Contracts',
    description: 'Support clearer pricing conversations with estimate and agreement workflows in one operating system.',
    icon: FileSignature,
  },
  {
    title: 'Scheduling',
    description: 'Help teams coordinate jobs, recurring work, crews, and customer expectations without scattered tools.',
    icon: CalendarCheck,
  },
  {
    title: 'Payments',
    description: 'Bring payment workflows closer to the rest of the business instead of separating money from operations.',
    icon: CreditCard,
  },
  {
    title: 'Training',
    description: 'Give teams repeatable standards, onboarding support, and job-quality expectations that can improve over time.',
    icon: BookOpenCheck,
  },
  {
    title: 'AI Assistance',
    description: 'Use AI to summarize, recommend, draft, and surface options while humans remain responsible for decisions.',
    icon: ClipboardCheck,
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
        <p className="eyebrow">Stellar Logic AI</p>
        <h1>Building AI That Amplifies Human Potential.</h1>
        <p className="hero-copy">
          SLAI develops AI-powered platforms for business growth, education, operations, and future intelligent systems
          that help people work smarter while keeping humans responsible for important decisions.
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
    </section>
  );
}

function PageHero({ eyebrow, title, copy, children }) {
  return (
    <section className="page-hero">
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
    </section>
  );
}

function ContactCTA({ compact = false }) {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    businessName: '',
    businessType: '',
    interestedProduct: 'ServicesOS',
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
            Tell us what workflow problem you want solved. This simple form sends the request through an email form
            endpoint without backend complexity or email automation.
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
              placeholder="Cleaning, lawn care, retail, pharmacy, other"
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
              <option>ServicesOS</option>
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
        eyebrow="ServicesOS"
        title="One operating platform for service businesses."
        copy="ServicesOS is SLAI's main near-term product: a practical system for service businesses that need less software sprawl, fewer manual handoffs, and clearer daily operations."
      >
        <div className="hero-actions">
          <a
            className="button primary"
            href="mailto:stellar.logic.ai@gmail.com?subject=ServicesOS%20Demo%20Request"
          >
            Request a Demo
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button secondary" href="mailto:stellar.logic.ai@gmail.com">
            Ask a Question
          </a>
        </div>
      </PageHero>
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
          </article>
          <article>
            <p className="eyebrow">Solution</p>
            <h3>A clearer operating core.</h3>
            <p>ServicesOS brings the major workflows together so owners and teams can operate from a shared source of truth.</p>
          </article>
        </div>
      </section>
      <section className="section feature-section">
        <div className="shell">
          <div className="section-header">
            <p className="eyebrow">Core Workflows</p>
            <h2>Built for the work service businesses repeat every day.</h2>
            <p>
              The platform is designed around practical operations first. AI assistance supports the work but does not
              replace human judgment, customer relationships, or owner responsibility.
            </p>
          </div>
          <div className="feature-grid">
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
          </div>
        </div>
      </section>
      <ProductPreview detailed />
      <ContactCTA />
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
    document.title = meta.title;
    const metaEntries = [
      ['name', 'description', meta.description],
      ['property', 'og:title', meta.title],
      ['property', 'og:description', meta.description],
      ['property', 'og:image', socialPreviewImage],
      ['name', 'twitter:title', meta.title],
      ['name', 'twitter:description', meta.description],
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
