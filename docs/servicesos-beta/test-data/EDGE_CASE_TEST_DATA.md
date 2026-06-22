# Edge Case Test Data

Use these edge cases to test app resilience after the basic ServicesOS workflow is working. Do not start here unless the core workflow can already run.

## Contact Data Edge Cases

### Missing Phone Number

- Customer: Missing Phone Test
- Email: missing.phone@example.com
- Phone: Leave blank
- Expected result: App should either allow missing phone or show a clear required-field message.

### Missing Email

- Customer: Missing Email Test
- Email: Leave blank
- Phone: 555-0110
- Expected result: App should either allow missing email or show a clear required-field message.

### Customer With Long Notes

- Customer: Long Notes Test
- Notes: Customer has pets, access instructions, product preferences, fragile surfaces, parking details, recurring schedule preferences, contact rules, and areas to avoid. Repeat enough detail to test wrapping and persistence.
- Expected result: Notes should save, display, and remain readable.

## Property / Scheduling Edge Cases

### Property With Many Rooms

- Property: Large home test
- Rooms: 5 bedrooms, 4 bathrooms, kitchen, dining room, living room, office, playroom, laundry room, basement, garage entry
- Expected result: Room list should remain usable and not break layout.

### Same-Day Scheduling

- Customer: Same Day Test
- Schedule: Today, later in the day
- Expected result: App should accept or clearly reject same-day scheduling.

### Rescheduled Job

- Customer: Reschedule Test
- Original schedule: Tomorrow morning
- New schedule: Two days later, afternoon
- Expected result: Job status, assignment, and checklist should remain connected after reschedule.

### Cancelled Job

- Customer: Cancelled Job Test
- Status: Cancel before employee starts
- Expected result: Cancelled job should not appear as completed or paid.

### Employee Removed From Assignment

- Customer: Assignment Removal Test
- Action: Assign employee, then remove employee
- Expected result: Job should show no assigned employee or clear reassignment needed status.

## Estimate / Job Status Edge Cases

### Estimate Revised After Customer Feedback

- Customer: Revised Estimate Test
- Original estimate: Standard clean
- Revision: Add oven and baseboards
- Expected result: Revised estimate should be clear and not lose the original customer context.

### Job Completed But Payment Still Pending

- Customer: Complete Pending Payment Test
- Job status: Complete
- Payment status: Pending
- Expected result: App should clearly show job complete and payment pending without contradiction.

### Payment Marked Paid But Job Incomplete

- Customer: Paid Incomplete Job Test
- Job status: In progress
- Payment status: Paid
- Expected result: App should make the mismatch visible or at least not imply the job is complete.

## Notes / Instructions Edge Cases

### Customer Has Pets and Access Instructions

- Customer: Pet Access Test
- Notes: Two dogs in laundry room, side gate code 1234, park on street, do not ring doorbell.
- Expected result: Employee should see both pet and access instructions before starting.

### Customer Has Special Surface / Material Notes

- Customer: Surface Notes Test
- Notes: Marble countertop, stainless appliances, hardwood floors, glass shower door, no bleach.
- Expected result: Notes should be visible in job instructions and checklist context.
