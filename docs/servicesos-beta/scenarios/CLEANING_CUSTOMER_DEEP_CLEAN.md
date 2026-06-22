# Cleaning Customer Deep Clean Scenario

## Scenario

A customer requests a deep clean with extra room/detail notes. This scenario tests whether ServicesOS can handle higher-detail jobs without losing scope, add-ons, or cleaner instructions.

## Test Data

- Customer name: Robert Ellis
- Phone/email placeholder: 555-0193 / robert.deepclean@example.com
- Property type: Residential townhouse
- Rooms: 2 bedrooms, 2 bathrooms, kitchen, living room, stairs, laundry area
- Pets: None
- Lead source: Phone inquiry
- Difficulty/clutter: Medium-high clutter in kitchen and laundry area
- Extra service notes:
  - Baseboards need extra attention.
  - Inside microwave.
  - Cabinet fronts.
  - Heavy dust on ceiling fans.
  - Extra detail around shower grout.
- Add-ons:
  - Inside oven if available.
  - Interior window cleaning if available.
  - Refrigerator exterior only unless interior add-on exists.
- Estimate expectations:
  - Estimate should reflect deep clean scope and add-ons.
  - Higher difficulty/clutter should be captured in notes.
  - Estimate should be reviewable before booking.
- Contract/booking expectations:
  - Booking should preserve deep clean details.
  - Customer expectations should stay visible.
- Checklist expectations:
  - Deep clean checklist should be more detailed than standard clean.
  - Add-ons should appear clearly.
  - Cleaner should be able to distinguish required tasks from optional notes.
- Before/after photo expectations:
  - If photo capture is available, before photos should be attachable before work starts.
  - If photo capture is available, after photos should be attachable before completion.
  - If photos are not available, document that limitation.
- Payment expectations:
  - Payment status should be trackable.
  - Do not assume payment collection is fully ready unless confirmed.
  - Tap to Pay remains later.

## Workflow

Lead -> Estimate Review -> Contract/Booking -> Scheduling -> Employee Assignment -> Job Execution -> Photos If Available -> Completion -> Payment Status -> Dashboard Check

## Test Steps

### 1. Lead

- [ ] Create a new lead for Robert Ellis.
- [ ] Add contact placeholder.
- [ ] Add property type and room details.
- [ ] Add medium-high clutter note.
- [ ] Add deep clean detail notes.
- [ ] Add requested add-ons.
- [ ] Save lead.

### 2. Estimate Review

- [ ] Create estimate from the lead.
- [ ] Add deep clean service scope.
- [ ] Add add-ons.
- [ ] Confirm higher difficulty/clutter note is visible during estimate review.
- [ ] Save estimate.
- [ ] Confirm estimate status is clear.
- [ ] Confirm estimate can be reviewed before booking.

### 3. Contract / Booking

- [ ] Move estimate to contract or booking flow.
- [ ] Confirm deep clean scope transfers correctly.
- [ ] Confirm add-ons transfer correctly.
- [ ] Confirm booking status saves.

### 4. Scheduling

- [ ] Schedule the deep clean.
- [ ] Confirm date/time are visible.
- [ ] Confirm job notes include the deep clean details.

### 5. Employee Assignment

- [ ] Assign a cleaner or team.
- [ ] Confirm assignment saves.
- [ ] Confirm cleaner can access the job if employee workflow is available.

### 6. Job Execution

- [ ] Open assigned job.
- [ ] Confirm deep clean notes are visible.
- [ ] Confirm add-ons are visible.
- [ ] Confirm checklist includes detailed tasks.
- [ ] Mark checklist items complete.

### 7. Before / After Photos If Available

- [ ] Add before photos if available.
- [ ] Confirm before photos save.
- [ ] Add after photos if available.
- [ ] Confirm after photos save.
- [ ] If photos are unavailable, document that status as a limitation.

### 8. Completion

- [ ] Add final notes or issues.
- [ ] Mark job complete.
- [ ] Confirm completion status appears in owner/admin view.

### 9. Payment Status

- [ ] Confirm payment status can be viewed or documented.
- [ ] Confirm wording does not imply untested live payment collection.

### 10. Dashboard Check

- [ ] Confirm dashboard reflects the customer, estimate, scheduled job, and completed job if counts exist.
- [ ] Refresh and confirm data persists.

## Expected Result

- Deep clean scope, add-ons, clutter notes, photos if available, assignment, completion, and payment status remain connected through the workflow.

## Issues Found

- 
