# ServicesOS Bug Triage Overview

Use this guide after each ServicesOS beta test run to sort issues into the right fix order. The goal is to keep ServicesOS priority one and avoid letting future ideas distract from the core cleaning/service business workflow.

## Triage Purpose

- Identify what blocks beta testing.
- Separate true workflow problems from visual polish.
- Keep wife beta feedback actionable.
- Protect the core lead-to-job workflow before expanding scope.
- Keep payment testing careful and staged.

## Priority Rule

- ServicesOS core workflow bugs come first.
- Wife beta blockers come before UI polish.
- UI polish comes before future features.
- Stripe/payment bugs are serious but should be tested only after the core workflow is stable.
- Tap to Pay is later and should not enter the beta-critical list yet.

## Triage Order

1. Confirm the bug is reproducible.
2. Identify the area affected: login, tenant loading, customer/lead, estimate, booking, schedule, employee app, job completion, payment status, dashboard, mobile layout, or documentation.
3. Assign severity using `BUG_SEVERITY_GUIDE.md`.
4. Add the bug to `BUG_FIX_QUEUE_TEMPLATE.md`.
5. Mark wife beta blockers in `WIFE_BETA_BLOCKERS.md`.
6. Decide whether the bug belongs in the first fix sprint.
7. Retest after the fix using `RETEST_CHECKLIST.md`.

## What Counts as Core Workflow

- Login and tenant/account loading.
- Dashboard loading.
- Customer or lead creation.
- Lead status updates.
- Estimate creation and review.
- Contract or booking flow.
- Scheduling.
- Employee assignment.
- Employee job visibility.
- Checklist/job execution.
- Job completion.
- Payment status tracking.
- Dashboard counts or status summaries.

## What Should Not Become Beta-Critical Yet

- Tap to Pay.
- Advanced analytics.
- Future vertical/module ideas.
- Complex automations.
- Nice-to-have dashboards.
- Cosmetic refinements that do not block testing.

## Triage Output

Each beta run should produce:

- Updated bug fix queue.
- Wife beta blocker list, if applicable.
- Clear first-fix sprint candidates.
- Known limitations list.
- Retest checklist for fixed items.
