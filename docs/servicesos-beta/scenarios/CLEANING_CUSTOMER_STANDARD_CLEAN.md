# Cleaning Customer Standard Clean Scenario

## Scenario

A new residential customer requests a standard clean for a 3 bedroom / 1 bathroom home with pets.

Use this scenario first when manual testing resumes. It should exercise the most common ServicesOS workflow without relying on advanced payment or Tap to Pay features.

## Test Data

- Customer name: Maya Johnson
- Phone/email placeholder: 555-0148 / maya.standard@example.com
- Property type: Residential single-family home
- Rooms: 3 bedrooms, 1 bathroom, kitchen, living room, hallway
- Pets: 1 dog, 1 cat
- Notes:
  - Dog will be crated.
  - Cat may hide under furniture.
  - Customer prefers unscented products if available.
  - Focus on kitchen counters, bathroom sink/tub, floors, and dusting.
- Lead source: Website request demo / online inquiry
- Estimate expectations:
  - Estimate should capture home size, rooms, pet notes, and standard clean scope.
  - Estimate status should be easy to update.
  - Estimate should remain attached to the customer/lead record.
- Scheduling expectations:
  - Schedule one standard clean.
  - Date/time should be visible on job and dashboard.
  - Customer notes should remain visible after scheduling.
- Employee checklist expectations:
  - Checklist should include kitchen, bathroom, bedrooms, floors, trash, dusting, and final walkthrough.
  - Pet notes should be visible to cleaner.
  - Cleaner should not have to guess the scope.
- Payment expectations:
  - Payment status should be trackable.
  - Do not assume Stripe, Tap to Pay, or automated payment collection is fully ready.
  - Tap to Pay remains later, after core workflow and payment flow are stable.

## Workflow

Lead -> Estimate -> Contract/Booking -> Scheduling -> Employee Assignment -> Job Execution -> Completion -> Payment Status -> Dashboard Check

## Test Steps

### 1. Lead

- [ ] Create a new lead for Maya Johnson.
- [ ] Add phone/email placeholder.
- [ ] Add property type and room details.
- [ ] Add pet notes.
- [ ] Add lead source.
- [ ] Save the lead.
- [ ] Confirm the lead appears in the lead list/dashboard.

### 2. Estimate

- [ ] Create an estimate from the lead.
- [ ] Select or enter standard clean scope.
- [ ] Confirm 3 bedrooms / 1 bathroom are represented.
- [ ] Add pet and product preference notes.
- [ ] Save the estimate.
- [ ] Confirm estimate status is visible.
- [ ] Confirm the estimate remains linked to the customer/lead.

### 3. Contract / Booking

- [ ] Move the estimate toward booking.
- [ ] Confirm booking or contract fields are understandable.
- [ ] Confirm accepted/booked status is clear.
- [ ] Confirm the customer record reflects the booked job.

### 4. Scheduling

- [ ] Schedule the job for a realistic date and time.
- [ ] Confirm the job appears in the schedule/calendar if available.
- [ ] Confirm customer notes remain attached to the scheduled job.

### 5. Employee Assignment

- [ ] Assign one cleaner or test employee.
- [ ] Confirm assignment saves.
- [ ] Confirm assigned cleaner is visible on the job.

### 6. Job Execution

- [ ] Open the job from the employee/field view if available.
- [ ] Confirm customer notes are visible.
- [ ] Confirm checklist is visible.
- [ ] Mark checklist items complete.
- [ ] Add a note if needed.

### 7. Completion

- [ ] Mark the job complete.
- [ ] Confirm completion status saves.
- [ ] Confirm owner/admin view shows the completed job.

### 8. Payment Status

- [ ] Find payment status area if available.
- [ ] Set or verify status such as pending, deposit needed, paid, or not configured.
- [ ] Confirm status is understandable and does not imply untested payments are live.

### 9. Dashboard Check

- [ ] Return to dashboard.
- [ ] Confirm lead, estimate, scheduled job, completed job, or payment counts update if applicable.
- [ ] Refresh and confirm data persists.

## Expected Result

- Standard clean workflow can be completed without losing customer notes, pet details, assignment, completion status, or payment status context.

## Issues Found

- 
