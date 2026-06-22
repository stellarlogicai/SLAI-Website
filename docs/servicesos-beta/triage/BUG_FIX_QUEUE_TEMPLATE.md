# ServicesOS Bug Fix Queue Template

Use this table to track bugs from beta testing through retest.

| ID | Date Found | Area | Scenario | Severity | Summary | Expected Behavior | Actual Behavior | Repro Steps | Screenshot/Video | Status | Assigned To | Fix Notes | Retest Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SBUG-001 | YYYY-MM-DD | Customer/Lead | Standard Clean | Blocker | Customer creation fails | New customer saves and appears in lead/customer list | Save fails or customer does not appear | 1. Create customer 2. Fill required fields 3. Save | Pending | New | Jamie |  |  |
| SBUG-002 | YYYY-MM-DD | Estimate | Deep Clean | Beta-Critical | Estimate calculation appears wrong | Estimate total reflects selected scope/add-ons | Total is missing add-on or shows unexpected amount | 1. Create deep clean estimate 2. Add add-on 3. Review total | Pending | New | Jamie |  |  |
| SBUG-003 | YYYY-MM-DD | Employee App | Employee Field Test | Beta-Critical | Cleaner checklist does not save | Completed checklist items remain checked after navigation | Items reset after leaving job | 1. Open assigned job 2. Check items 3. Leave and return | Pending | New | Jamie |  |  |
| SBUG-004 | YYYY-MM-DD | Mobile Layout | Standard Clean | Minor | Button spacing is cramped on mobile | Buttons remain readable and easy to tap | Buttons feel crowded but still work | 1. Open mobile view 2. Navigate to job 3. Review buttons | Pending | New | Jamie |  |  |
| SBUG-005 | YYYY-MM-DD | Future Payments | Payment Review | Later | Tap to Pay idea for field payments | Tap to Pay remains future scope until core workflow and payments are stable | Idea captured during beta | 1. Discuss payment workflow 2. Capture future idea | Not needed | Deferred | Jamie | Keep out of beta-critical scope |  |

## Status Options

- New
- Reproduced
- Needs more info
- In progress
- Fixed
- Retest needed
- Passed retest
- Failed retest
- Deferred

## Severity Reminder

- Blocker: app or core workflow cannot continue.
- Beta-Critical: wife beta cannot reasonably continue.
- Minor: does not block testing.
- Later: future feature or out-of-scope idea.
