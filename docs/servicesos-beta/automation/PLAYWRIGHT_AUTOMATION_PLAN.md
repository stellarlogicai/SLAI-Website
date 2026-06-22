# Playwright Automation Plan

This plan keeps ServicesOS automation staged so tests become useful without touching production data or relying on unstable UI details.

## Phase 1: Public And Smoke Checks

Automate:

- Public website route loading.
- ServicesOS public page smoke checks.
- Contact-free checks that do not submit real lead data.
- Dashboard loading only after safe test auth exists.

Do not automate private dashboard flows until safe auth, fake data, and stable selectors are available.

## Phase 2: Core Owner/Admin Workflow

Automate:

- Customer or lead creation.
- Lead status updates.
- Estimate creation.
- Scheduling.
- Employee assignment.

Required before this phase:

- Safe test account or saved test session.
- Isolated test environment.
- Fake test data.
- Stable selectors or `data-testid` attributes.
- Cleanup or reset process for test-created records.

## Phase 3: Employee Workflow

Automate:

- Employee login.
- Assigned job visibility.
- Customer notes and job instructions.
- Checklist completion.
- Notes or issue reporting.
- Job complete status.
- Admin view reflects employee updates.

This phase should wait until the owner/admin workflow is stable.

## Phase 4: Payment Status Checks Only

Automate:

- Deposit requested.
- Deposit paid.
- Final payment pending.
- Paid in full.
- Payment status mismatch cases if supported.

Do not automate:

- Tap to Pay.
- Live payments.
- Real card collection.
- Production Stripe or Stripe Connect activity.

Payment automation should remain status-only until the core payment flow is confirmed stable in a safe test environment.

## Phase 5: Regression Suite After Wife Beta

After wife beta blockers are fixed, convert repeated manual checks into regression tests:

- Previously failed scenarios.
- Beta-critical workflow bugs.
- Confusing steps that were clarified.
- Mobile workflow checks.
- Cross-role admin and cleaner status agreement.

## Automation Gates

Before deeper automation begins, confirm:

- Test auth exists and does not use personal credentials.
- Tests use fake data only.
- Tests do not connect to production customer records.
- Selectors are stable enough to survive layout changes.
- Payment-related tests use safe status checks or Stripe test-mode only.
- Tap to Pay remains out of scope until explicitly approved.
