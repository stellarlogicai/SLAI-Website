# ServicesOS Beta Testing Overview

This folder is for planning and recording ServicesOS beta testing after the refactor. The goal is to verify that the core product works in realistic cleaning and service business workflows before showing it to wider customers.

ServicesOS is SLAI priority one. Other SLAI products and research areas should stay secondary while ServicesOS core workflow testing is active.

## Purpose

- Confirm the main ServicesOS workflow works end-to-end.
- Find confusing UI, broken flows, missing information, and unclear status changes.
- Validate that employee-facing job work is simple enough for cleaners to use.
- Keep payment testing controlled and documented before broader release.
- Avoid moving to wider customer testing until basic beta issues are known and prioritized.

## Testing Order

1. Core workflow
   - Owner/admin login, dashboard, leads, estimates, contracts, scheduling, assignments, job completion, counts, and logout.
2. Employee app
   - Cleaner login, assigned job view, notes, instructions, checklist, photos if available, issues, completion, and admin visibility.
3. UI clarity
   - Confusing wording, hard-to-find actions, mobile issues, spacing, button labels, and status clarity.
4. Payments
   - Payment readiness, Stripe/Stripe Connect status, deposits, final payment flow, and failure states when ready for testing.
5. Tap to Pay later
   - Tap to Pay should stay later, after the core workflow and normal payment flow are stable.

## Beta Sequence

- Wife beta comes first before wider customer testing.
- Wider customer testing should wait until wife beta feedback is reviewed and major blockers are resolved or documented.
- Each beta session should produce bug reports, feedback notes, and a next fix list.

## Ground Rules

- Do not treat beta testing as proof that ServicesOS is fully launched.
- Do not promise final pricing during beta testing.
- Keep known limitations visible and honest.
- Prioritize the cleaning/service business workflow over new feature ideas.
