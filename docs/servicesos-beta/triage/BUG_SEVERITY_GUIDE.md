# ServicesOS Bug Severity Guide

Use this guide to classify bugs found during ServicesOS beta testing.

## Blocker

A blocker prevents meaningful use of the app or risks incorrect business data.

Examples:

- App cannot be used.
- Login fails.
- Tenant/account data cannot load.
- Core workflow cannot continue.
- Data is lost or saved incorrectly.
- Customer, lead, estimate, schedule, job, or assignment data disappears after refresh.
- Wrong tenant or account data appears.

Action:

- Stop the affected beta flow.
- Add to the fix queue immediately.
- Fix before wife beta can continue if it affects the tested workflow.

## Beta-Critical

A beta-critical issue allows some app use, but makes wife beta or realistic ServicesOS testing unreasonable.

Examples:

- Wife beta cannot reasonably continue.
- Customer/lead/estimate/schedule/job flow breaks.
- Employee workflow is confusing enough to block use.
- Payment status or job status becomes misleading.
- Admin cannot verify job progress.
- Cleaner cannot tell what job to complete.
- Required status changes save inconsistently.

Action:

- Add to the first fix sprint if it affects current beta testing.
- Retest before wider trusted testing.
- Do not downgrade unless a clear workaround exists.

## Minor

A minor issue should be fixed, but it does not block the core workflow or wife beta.

Examples:

- Visual issue.
- Wording issue.
- Spacing issue.
- Non-blocking confusing step.
- Missing helper text.
- A button label could be clearer, but the action still works.
- Mobile layout feels imperfect but remains usable.

Action:

- Add to fix queue.
- Fix after blockers and beta-critical issues.
- Batch with UI polish if possible.

## Later

A later item is useful but outside the current beta-critical ServicesOS scope.

Examples:

- Nice-to-have feature.
- Future automation.
- Tap to Pay.
- Advanced analytics.
- Future vertical/module idea.
- Optional dashboard improvement.
- GrowthAI, EducationOS, or other non-ServicesOS expansion idea.

Action:

- Record the idea.
- Do not include in the first beta fix sprint.
- Do not let it block wife beta or core workflow testing.
