# ServicesOS Automated Testing Overview

This folder explains how the ServicesOS beta documentation, scenarios, and fake test data can become future Playwright tests.

The immediate goal is not to automate every ServicesOS workflow. The goal is to build automation in the right order, using fake data, stable selectors, and safe test accounts so tests do not touch production data or require real customers.

## How Beta Docs Map To Automated Tests

The beta documents define what matters during manual testing:

- Core workflow documents define the main owner/admin path.
- Employee beta documents define the cleaner field workflow.
- Scenario documents define realistic cleaning jobs.
- Test data documents provide fake customers, properties, employees, jobs, and payment-status cases.
- Triage documents define what should block wife beta or early customer testing.

Future automated tests should use those documents as the source of truth for test coverage, fixture data, and expected results.

## What Should Be Automated First

Automate the safest and most stable checks first:

1. Public website route loading.
2. ServicesOS public page smoke checks.
3. Dashboard loads after a safe test-auth pattern exists.
4. Customer/lead creation with fake data.
5. Estimate creation and lead status updates.
6. Scheduling and employee assignment.
7. Employee job visibility and checklist completion.
8. Admin status verification.
9. Payment status checks only after the core workflow is stable.

## What Should Remain Manual

Some beta feedback should remain manual because automation cannot judge real-world clarity:

- Whether a cleaning business owner understands the workflow.
- Whether a cleaner knows what to do without extra explanation.
- Whether job notes and checklist wording are practical.
- Whether the flow feels too long, too confusing, or too risky.
- Whether wife beta feedback identifies owner or cleaner pain points.
- Whether payment wording and status labels feel trustworthy.

## Why Wife Beta Feedback Still Matters

Automation verifies expected behavior. Wife beta validates whether the product makes sense to a real person trying to run or complete a cleaning job.

Even after tests pass, manual beta feedback should still decide whether the app is clear enough for another tester.

## Tap To Pay Automation Boundary

Tap to Pay should not be automated yet. It should stay out of the beta-critical automated suite until:

- Core workflow testing is stable.
- Payment status tracking is confirmed.
- Stripe or Stripe Connect test-mode patterns are documented.
- Device requirements and supported environments are clear.

Until then, payment automation should focus on status labels and workflow readiness only, not live payment collection.

## Current Readiness

The current Website project has Playwright tests for the public marketing site. It does not show a safe ServicesOS app login pattern, saved test session, seed-data process, or stable workflow selectors.

That means authenticated ServicesOS workflow automation should wait for a separate setup task.
