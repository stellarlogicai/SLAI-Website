# ServicesOS Beta Command Center

Use this README as the starting point when resuming ServicesOS beta testing. It organizes the beta documents into one practical run order so testing can restart quickly without re-deciding what matters first.

## ServicesOS Priority Reminder

- ServicesOS is priority one.
- Wife beta comes before wider customer testing.
- Core workflow comes before UI polish.
- Payments and Stripe stability come after core workflow confidence.
- Tap to Pay is later.
- Future verticals are documented but are not active beta scope.

## Recommended Test Order

1. Read [BETA_TESTING_OVERVIEW.md](BETA_TESTING_OVERVIEW.md).
2. Review [BETA_RELEASE_NOTES.md](release-notes/BETA_RELEASE_NOTES.md) and [KNOWN_LIMITATIONS.md](release-notes/KNOWN_LIMITATIONS.md).
3. Pick one fake customer from [FAKE_CUSTOMERS.md](test-data/FAKE_CUSTOMERS.md).
4. Pick one fake property from [FAKE_PROPERTIES.md](test-data/FAKE_PROPERTIES.md).
5. Run one standard clean scenario from [CLEANING_CUSTOMER_STANDARD_CLEAN.md](scenarios/CLEANING_CUSTOMER_STANDARD_CLEAN.md).
6. Log bugs with [BUG_REPORT_TEMPLATE.md](BUG_REPORT_TEMPLATE.md).
7. Triage bugs with [BUG_TRIAGE_OVERVIEW.md](triage/BUG_TRIAGE_OVERVIEW.md) and [BUG_SEVERITY_GUIDE.md](triage/BUG_SEVERITY_GUIDE.md).
8. Fix blocker and beta-critical bugs first.
9. Retest the same scenario using [RETEST_CHECKLIST.md](triage/RETEST_CHECKLIST.md).
10. Run the employee app scenario from [EMPLOYEE_APP_FIELD_TEST.md](scenarios/EMPLOYEE_APP_FIELD_TEST.md).
11. Review [WIFE_BETA_START_GUIDE.md](release-notes/WIFE_BETA_START_GUIDE.md).
12. Run wife beta.
13. Fill out [BETA_FEEDBACK_SUMMARY_TEMPLATE.md](release-notes/BETA_FEEDBACK_SUMMARY_TEMPLATE.md).
14. Check [BETA_EXIT_CRITERIA.md](BETA_EXIT_CRITERIA.md).

## Folder Map

### Overview Docs

- [BETA_TESTING_OVERVIEW.md](BETA_TESTING_OVERVIEW.md): Explains the purpose, order, and boundaries of ServicesOS beta testing.
- [BUG_REPORT_TEMPLATE.md](BUG_REPORT_TEMPLATE.md): Simple template for documenting what broke, what was expected, severity, and fix status.
- [WIFE_BETA_FEEDBACK.md](WIFE_BETA_FEEDBACK.md): Direct questions for wife beta feedback.

### Core Workflow Tests

- [SERVICESOS_CORE_WORKFLOW_TEST.md](SERVICESOS_CORE_WORKFLOW_TEST.md): Manual test steps for login, dashboard, customer/lead creation, estimates, booking, scheduling, employee assignment, job completion, dashboard counts, and logout.

### Employee App Tests

- [EMPLOYEE_APP_BETA_TEST.md](EMPLOYEE_APP_BETA_TEST.md): Manual checklist for cleaner login, assigned jobs, customer notes, job instructions, arrival, checklist work, notes, photos if available, and job completion.

### Scenarios

- [CLEANING_CUSTOMER_STANDARD_CLEAN.md](scenarios/CLEANING_CUSTOMER_STANDARD_CLEAN.md): First recommended scenario for a new residential standard clean.
- [CLEANING_CUSTOMER_DEEP_CLEAN.md](scenarios/CLEANING_CUSTOMER_DEEP_CLEAN.md): Deep clean scenario with extra notes, add-ons, and higher difficulty.
- [RECURRING_CUSTOMER_TEST.md](scenarios/RECURRING_CUSTOMER_TEST.md): Recurring service scenario.
- [EMPLOYEE_APP_FIELD_TEST.md](scenarios/EMPLOYEE_APP_FIELD_TEST.md): Cleaner field workflow scenario.
- [BETA_TEST_RUN_LOG.md](scenarios/BETA_TEST_RUN_LOG.md): Reusable run log for each manual test.

### Test Data

- [TEST_DATA_OVERVIEW.md](test-data/TEST_DATA_OVERVIEW.md): Explains how to use fake beta data safely.
- [TEST_DATA_USAGE_GUIDE.md](test-data/TEST_DATA_USAGE_GUIDE.md): Step-by-step guide for picking one fake customer, property, and scenario.
- [FAKE_CUSTOMERS.md](test-data/FAKE_CUSTOMERS.md): Fake customer profiles.
- [FAKE_PROPERTIES.md](test-data/FAKE_PROPERTIES.md): Fake property profiles.
- [FAKE_EMPLOYEES.md](test-data/FAKE_EMPLOYEES.md): Fake cleaner and employee profiles.
- [FAKE_JOB_SCENARIOS.md](test-data/FAKE_JOB_SCENARIOS.md): Reusable fake job scenarios.
- [EDGE_CASE_TEST_DATA.md](test-data/EDGE_CASE_TEST_DATA.md): Edge cases to test app resilience.
- [PAYMENT_STATUS_TEST_DATA.md](test-data/PAYMENT_STATUS_TEST_DATA.md): Payment-status-only cases. This does not assume live Stripe or Tap to Pay readiness.

### Bug Triage

- [BUG_TRIAGE_OVERVIEW.md](triage/BUG_TRIAGE_OVERVIEW.md): Explains how to sort beta bugs.
- [BUG_SEVERITY_GUIDE.md](triage/BUG_SEVERITY_GUIDE.md): Defines Blocker, Beta-Critical, Minor, and Later.
- [BUG_FIX_QUEUE_TEMPLATE.md](triage/BUG_FIX_QUEUE_TEMPLATE.md): Reusable fix queue table.
- [WIFE_BETA_BLOCKERS.md](triage/WIFE_BETA_BLOCKERS.md): Checklist of what blocks wife beta.
- [FIRST_FIX_SPRINT_PLAN.md](triage/FIRST_FIX_SPRINT_PLAN.md): Plan for the first fix sprint after testing.
- [RETEST_CHECKLIST.md](triage/RETEST_CHECKLIST.md): Checklist for confirming fixes.

### Release Notes / Known Limitations

- [BETA_RELEASE_NOTES.md](release-notes/BETA_RELEASE_NOTES.md): Internal beta release notes.
- [KNOWN_LIMITATIONS.md](release-notes/KNOWN_LIMITATIONS.md): Expected beta limitations and what feedback is still useful.
- [WIFE_BETA_START_GUIDE.md](release-notes/WIFE_BETA_START_GUIDE.md): Non-technical guide for wife beta.
- [INTERNAL_BETA_SCOPE.md](release-notes/INTERNAL_BETA_SCOPE.md): Defines what is in and out of scope.
- [BETA_FEEDBACK_SUMMARY_TEMPLATE.md](release-notes/BETA_FEEDBACK_SUMMARY_TEMPLATE.md): Summary template after wife beta.

### Automation Plan

- [AUTOMATED_TESTING_OVERVIEW.md](automation/AUTOMATED_TESTING_OVERVIEW.md): Explains how manual beta docs map to future automated tests.
- [AUTOMATION_TEST_MATRIX.md](automation/AUTOMATION_TEST_MATRIX.md): Maps scenarios to future Playwright coverage.
- [PLAYWRIGHT_AUTOMATION_PLAN.md](automation/PLAYWRIGHT_AUTOMATION_PLAN.md): Staged automation plan.
- [SELECTOR_REQUIREMENTS.md](automation/SELECTOR_REQUIREMENTS.md): Stable selector requirements for future app automation.

### Exit Criteria

- [BETA_EXIT_CRITERIA.md](BETA_EXIT_CRITERIA.md): Checklist for deciding whether ServicesOS is ready for the next tester or wider internal testing.

## First Manual Test To Run

Run the standard residential clean first:

- 3 bedroom / 1 bathroom home.
- Pets.
- New customer.
- Lead -> estimate -> schedule -> employee assignment -> job completion -> dashboard verification.

This should be first because:

- It represents the core ServicesOS workflow.
- It is realistic for wife beta.
- It touches the most important parts of the system.
- It avoids advanced and future features.

## What To Stop For

Stop testing and log a blocker if:

- Login fails.
- Dashboard does not load.
- Customer or lead cannot be created.
- Estimate cannot be created.
- Scheduling fails.
- Employee cannot see assigned job.
- Checklist cannot be completed.
- Admin status does not update.
- Data disappears after refresh.
- Payment status is misleading.

## What Not To Chase Yet

Do not let these interrupt beta testing:

- Cosmetic polish.
- Tiny spacing issues.
- Future vertical ideas.
- Tap to Pay.
- Advanced analytics.
- Full automation.
- GrowthAI.
- EducationOS.
- ComplianceAI.
- FutureAI.

Document these as later items if needed, but do not move them into the beta-critical fix list.

## Automation Note

Manual testing finds what matters. Automated testing protects what already works.

Do not automate unstable workflows too early. Start automation with smoke tests and repeatable core flows only. Owner/admin and employee workflow automation should wait until safe test auth and stable selectors exist.

Tap to Pay should not be automated now.

## Wife Beta Readiness

Before wife beta, confirm:

- Core workflow can be completed once.
- Fake standard clean scenario works or blockers are documented.
- No known data loss issue exists.
- Employee workflow is at least testable.
- Known limitations are clear.
- Bug report template is ready.
- Wife beta start guide is ready.

## Quick Start

Do this first:

1. Open [TEST_DATA_USAGE_GUIDE.md](test-data/TEST_DATA_USAGE_GUIDE.md).
2. Pick the standard clean fake customer.
3. Run [CLEANING_CUSTOMER_STANDARD_CLEAN.md](scenarios/CLEANING_CUSTOMER_STANDARD_CLEAN.md).
4. Use [BUG_REPORT_TEMPLATE.md](BUG_REPORT_TEMPLATE.md) for every blocker.
5. Use [BUG_TRIAGE_OVERVIEW.md](triage/BUG_TRIAGE_OVERVIEW.md) to prioritize fixes.
6. Do not move to wife beta until blockers are cleared.
