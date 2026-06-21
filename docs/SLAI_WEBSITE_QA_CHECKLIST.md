# SLAI Website QA Checklist

Use this checklist before sharing, publishing, or promoting the SLAI public website. Mark each item after reviewing the live site on both desktop and mobile.

## 1. Homepage Review

- [ ] Hero message is clear and easy to understand.
- [ ] Mission statement is understandable without internal context.
- [ ] ServicesOS is positioned as the active product.
- [ ] Future products are framed as planned, coming soon, internal-first, or research-focused.
- [ ] FutureAI, GrowthAI, EducationOS, and other future products are not overpromised.
- [ ] Primary CTAs work and route correctly.
- [ ] Contact CTAs scroll to `#contact` when expected.
- [ ] Homepage does not imply completed products that are still planned.

## 2. ServicesOS Page Review

- [ ] Page explains ServicesOS in plain English.
- [ ] Cleaning and service business owner pain points are clear.
- [ ] Missed follow-ups, scheduling confusion, employee assignment, job scope, and payment status problems are understandable.
- [ ] Core workflow is understandable from lead to recurring service.
- [ ] Employee and cleaner workflow is explained.
- [ ] Cleaners can understand the value of job notes, checklists, special instructions, and completion steps.
- [ ] Owner-control message is clear.
- [ ] AI language is conservative and human-first.
- [ ] Low-confidence AI behavior is framed as review instead of guessing.
- [ ] Current status is honest and does not imply full launch.
- [ ] Early Access / Pilot section is clear.
- [ ] ServicesOS remains the main active SLAI product.

## 3. Pricing / Payment Wording Safety

- [ ] No exact prices are listed unless intentionally approved.
- [ ] No "buy now" language appears.
- [ ] No checkout, subscription purchase, or automated onboarding language appears.
- [ ] No claim says payments are live if they are not fully tested.
- [ ] Payment language uses careful wording such as "planned," "being tested," or "future support" where appropriate.
- [ ] Pilot pricing is described as by request.
- [ ] Fees are described as transparent but not invented.
- [ ] Pricing language sounds practical for small service businesses, not enterprise-focused.

## 4. Contact Form Testing

- [ ] Contact section is easy to find from the homepage.
- [ ] Contact section is easy to find from the ServicesOS page.
- [ ] CTAs scroll to `#contact`.
- [ ] Dropdown options make sense for lead capture.
- [ ] ServicesOS-related options are prominent.
- [ ] Name required validation works.
- [ ] Email required validation works.
- [ ] Invalid email validation works.
- [ ] Message required validation works.
- [ ] Successful submit state works.
- [ ] Error state works.
- [ ] Honeypot behavior still avoids real submission when filled.
- [ ] Formspree/contact logic is not broken.
- [ ] No sensitive form data is logged to the console.

## 5. Mobile Review

- [ ] No horizontal overflow on homepage.
- [ ] No horizontal overflow on ServicesOS page.
- [ ] Hero CTA is visible quickly.
- [ ] Buttons are easy to tap.
- [ ] Navigation links wrap cleanly.
- [ ] Feature cards are readable.
- [ ] Workflow steps are readable.
- [ ] FAQ is readable.
- [ ] Contact dropdown does not truncate badly.
- [ ] Contact form fields are easy to use.
- [ ] Spacing feels balanced.
- [ ] Text does not overlap with buttons, cards, or adjacent sections.

## 6. Desktop Review

- [ ] Sections feel balanced.
- [ ] Cards align cleanly.
- [ ] Long sections do not feel overwhelming.
- [ ] CTAs are visible.
- [ ] Page has professional spacing.
- [ ] Header logo and navigation look aligned.
- [ ] Footer branding looks aligned.
- [ ] ServicesOS page has a clear path from explanation to contact.

## 7. Accessibility Basics

- [ ] Heading order makes sense.
- [ ] Buttons have clear labels.
- [ ] Links are descriptive.
- [ ] Form fields have visible labels.
- [ ] Required field errors are understandable.
- [ ] Focus states are visible.
- [ ] Keyboard navigation works reasonably.
- [ ] Color contrast is readable.
- [ ] Decorative images do not create confusing screen reader text.
- [ ] Important images have useful alt text where applicable.

## 8. SEO / Metadata Review

- [ ] Page title exists.
- [ ] Meta description exists.
- [ ] Social preview metadata exists if supported.
- [ ] Social preview image appears correctly.
- [ ] Metadata does not overpromise.
- [ ] ServicesOS is described clearly.
- [ ] ServicesOS metadata does not imply full launch.
- [ ] Future products are described conservatively.
- [ ] Metadata does not expose private or internal planning language.

## 9. Trust / Credibility Review

- [ ] Founder-led positioning feels honest.
- [ ] No fake customer claims appear.
- [ ] No unsupported revenue claims appear.
- [ ] No unsupported AI capability claims appear.
- [ ] No confidential or internal planning language is exposed.
- [ ] Research language is careful.
- [ ] ServicesOS claims are believable for early access.
- [ ] The site feels professional, human-centered, and practical.

## 10. Final Pre-Share Checklist

- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] `npm run test:e2e` passes.
- [ ] Manual desktop review completed.
- [ ] Manual mobile review completed.
- [ ] Contact form tested.
- [ ] Formspree endpoint is configured in the deployment environment.
- [ ] No sensitive or internal content is exposed.
- [ ] No checkout, payment purchase, or automated onboarding flow appears.
- [ ] ServicesOS remains the main active product.
- [ ] Early access and pilot language remains honest.
- [ ] Final site reviewed by Jamie before sharing publicly.
