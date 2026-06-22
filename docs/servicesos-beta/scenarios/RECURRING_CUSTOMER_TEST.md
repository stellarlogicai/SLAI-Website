# Recurring Customer Test Scenario

## Scenario

A customer wants recurring cleaning service. This scenario tests whether ServicesOS can preserve customer notes, repeat schedule details, and recurring job context without forcing the owner to re-enter everything manually.

## Test Data

- Customer name: Alicia Grant
- Phone/email placeholder: 555-0176 / alicia.recurring@example.com
- Property type: Residential apartment
- Rooms: 2 bedrooms, 1 bathroom, kitchen, living room
- Pets: 1 small dog
- Lead source: Referral
- Recurring frequency: Every 2 weeks
- Preferred day/time: Friday mornings, 9:00 AM if available
- Customer notes:
  - Dog is friendly but should stay in bedroom while cleaning.
  - Customer wants bed linens changed if left on bed.
  - Avoid moving work laptop on dining table.
- Estimate expectations:
  - Recurring frequency should be captured.
  - Estimate should make recurring service clear.
- Scheduling expectations:
  - First job should be scheduled.
  - Repeat job creation expectations should be documented.
  - Future jobs should preserve notes if recurring automation exists.
- Dashboard/analytics expectations:
  - Recurring customer or recurring job count should update if available.
  - Upcoming jobs should be visible if available.
- Payment expectations:
  - Payment status should be trackable.
  - Do not assume recurring automated billing is live unless confirmed.
  - Tap to Pay remains later.

## Workflow

Lead -> Estimate -> Recurring Booking -> First Schedule -> Employee Assignment -> Job Execution -> Completion -> Repeat Job Check -> Dashboard/Analytics Check

## Test Steps

### 1. Lead

- [ ] Create lead for Alicia Grant.
- [ ] Add contact placeholder.
- [ ] Add property and room details.
- [ ] Add pet and household notes.
- [ ] Add lead source as referral.
- [ ] Save lead.

### 2. Estimate

- [ ] Create estimate.
- [ ] Add recurring frequency: every 2 weeks.
- [ ] Confirm recurring service is clear in estimate notes/status.
- [ ] Save estimate.

### 3. Recurring Booking

- [ ] Move estimate to booking.
- [ ] Set recurring service if available.
- [ ] Confirm preferred day/time is captured.
- [ ] Confirm customer notes persist after booking.

### 4. First Schedule

- [ ] Schedule the first service for a Friday morning.
- [ ] Confirm first job appears in schedule/calendar if available.
- [ ] Confirm recurring context is visible.

### 5. Employee Assignment

- [ ] Assign cleaner to first job.
- [ ] Confirm assignment saves.
- [ ] Confirm cleaner can see recurring customer notes if employee app is available.

### 6. Job Execution

- [ ] Open job.
- [ ] Confirm dog note, linens note, and laptop note are visible.
- [ ] Complete checklist.
- [ ] Add any issue note if needed.
- [ ] Mark job complete.

### 7. Repeat Job Check

- [ ] Check whether next recurring job is created automatically.
- [ ] If automatic repeat jobs are not available, document expected manual workaround.
- [ ] Confirm customer notes persist into repeat job if available.
- [ ] Confirm recurring schedule is understandable.

### 8. Dashboard / Analytics Check

- [ ] Confirm dashboard reflects upcoming or recurring work if available.
- [ ] Confirm completed job count updates if available.
- [ ] Confirm recurring customer status is visible if available.

### 9. Payment Status

- [ ] Confirm payment status can be tracked for the first job.
- [ ] Confirm recurring payment language does not imply automated billing is live.

## Expected Result

- Recurring service details, preferred schedule, customer notes, employee assignment, completion status, and dashboard context remain understandable.

## Issues Found

- 
