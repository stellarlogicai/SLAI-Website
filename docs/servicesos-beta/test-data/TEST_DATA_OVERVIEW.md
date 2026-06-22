# ServicesOS Test Data Overview

This folder contains fake data for ServicesOS beta testing. Use it to test realistic cleaning business workflows without using real customer private information.

## Data Safety Rules

- Use fake names.
- Use fake emails.
- Use fake phone numbers.
- Use fake address placeholders.
- Do not use real customer private information.
- Do not copy real customer notes into beta testing.
- Do not use real payment information.

## Testing Approach

- Test one realistic cleaning workflow at a time.
- Pick one fake customer.
- Pick one fake property.
- Pick one fake job scenario.
- Run the workflow from start to finish or until blocked.
- Log bugs before moving to another scenario.

## Priority

ServicesOS core workflow comes first:

1. Login.
2. Customer or lead creation.
3. Estimate.
4. Booking or scheduling.
5. Employee assignment.
6. Job execution and completion.
7. Payment status tracking if available.
8. Dashboard/status verification.

Payments should be tested only according to current app readiness. If the tested app supports only payment status tracking, test status tracking only.

Tap to Pay is later and is not part of beta-critical testing.

## What This Data Is For

- Wife beta.
- Early internal testing.
- Bug reproduction.
- Retesting fixes.
- Comparing admin and employee workflows.
- Checking whether job details stay connected.

## What This Data Is Not For

- Real customer service.
- Production payment testing.
- Public launch claims.
- Future vertical testing.
- Tap to Pay readiness.
