# ServicesOS Test Data Usage Guide

Use this guide when running manual ServicesOS beta tests with the fake data in this folder.

## Basic Process

1. Pick one fake customer.
2. Pick one fake property.
3. Pick one job scenario.
4. Run that scenario end-to-end.
5. Log bugs using the bug report template.
6. Do not jump to another scenario until the first is completed or blocked.
7. If a blocker is found, stop and document it.
8. After a fix, retest the same scenario.

## Recommended First Test

- Customer: Maya Johnson
- Property: 3 bed / 1 bath home with pets
- Scenario: Standard residential clean with pets

This is the best first test because it covers the core ServicesOS workflow without starting with a high-complexity case.

## How to Combine Data

Use the files together:

- `FAKE_CUSTOMERS.md` for customer details.
- `FAKE_PROPERTIES.md` for home or office details.
- `FAKE_EMPLOYEES.md` for cleaner assignment.
- `FAKE_JOB_SCENARIOS.md` for the workflow.
- `EDGE_CASE_TEST_DATA.md` only after core scenarios work.
- `PAYMENT_STATUS_TEST_DATA.md` only according to current payment readiness.

## When to Stop

Stop the test if:

- Login fails.
- Customer or lead cannot be created.
- Estimate cannot be created.
- Scheduling cannot continue.
- Employee assignment cannot continue.
- Employee cannot see or complete the job.
- Data disappears after refresh.
- Job or payment status becomes misleading.

Document the issue before trying another scenario.

## Retesting After a Fix

After a bug is fixed:

1. Re-run the same fake customer, property, and scenario.
2. Confirm the original bug is fixed.
3. Confirm no new bug was introduced.
4. Test desktop.
5. Test mobile/tablet if relevant.
6. Update the bug status.

## Scope Reminder

ServicesOS is priority one. Do not use this beta data to test future verticals or new feature ideas.

Tap to Pay is later. Do not include Tap to Pay in beta-critical testing until core workflow and payment status/payment flow are stable.
