# Employee App Field Test Scenario

## Scenario

A cleaner receives an assigned job and completes it from the employee app. This scenario should be run after at least one owner/admin job exists and has been assigned to a cleaner.

## Test Data

- Cleaner name: Jordan Lee
- Cleaner login placeholder: jordan.cleaner@example.com
- Assigned customer: Maya Johnson
- Job type: Standard residential clean
- Job notes:
  - Dog will be crated.
  - Cat may hide under furniture.
  - Use unscented products if available.
- Checklist expectations:
  - Kitchen
  - Bathroom
  - Bedrooms
  - Floors
  - Trash
  - Final walkthrough
- Photo expectations:
  - Before photos if available.
  - After photos if available.
  - If photo capture is unavailable, document the limitation.
- Help expectations:
  - SOP/help link should be available if the cleaner is stuck.
  - If no SOP/help link exists, document the missing support point.

## Workflow

Cleaner Login -> Assigned Job -> Customer Notes -> Arrival -> Before Photos If Available -> Checklist -> SOP/Help -> Notes/Issues -> After Photos If Available -> Mark Complete -> Admin Status Verification

## Test Steps

### 1. Login

- [ ] Open employee app or employee route.
- [ ] Log in as Jordan Lee.
- [ ] Confirm login succeeds.
- [ ] Confirm employee sees assigned jobs.

### 2. Assigned Job

- [ ] Open Maya Johnson assigned job.
- [ ] Confirm job date/time is visible.
- [ ] Confirm job type is visible.
- [ ] Confirm customer or address information is visible if expected.

### 3. Customer Notes

- [ ] Find customer notes.
- [ ] Confirm dog and cat notes are visible.
- [ ] Confirm unscented product note is visible.
- [ ] Confirm notes are readable on mobile.

### 4. Arrival Step

- [ ] Mark arrival or check in if available.
- [ ] Confirm arrival status saves.
- [ ] If arrival step is unavailable, document whether that is expected.

### 5. Before Photos If Available

- [ ] Add before photos if available.
- [ ] Confirm photos save.
- [ ] If unavailable, document the limitation.

### 6. Checklist

- [ ] Open checklist.
- [ ] Confirm all expected checklist categories appear.
- [ ] Mark items complete.
- [ ] Confirm completed state is clear.
- [ ] Navigate away and back.
- [ ] Confirm completed items remain saved.

### 7. SOP / Help Link

- [ ] Open SOP/help link if available.
- [ ] Confirm it opens correctly.
- [ ] Confirm cleaner can return to job easily.
- [ ] If unavailable, document whether cleaner would know what to do if stuck.

### 8. Notes / Issues

- [ ] Add note or issue.
- [ ] Save note/issue.
- [ ] Confirm note remains after navigation.

### 9. After Photos If Available

- [ ] Add after photos if available.
- [ ] Confirm photos save.
- [ ] If unavailable, document the limitation.

### 10. Mark Complete

- [ ] Mark job complete.
- [ ] Confirm completion status saves.
- [ ] Confirm cleaner sees clear completed state.

### 11. Admin Status Verification

- [ ] Log in as admin/owner.
- [ ] Open the job.
- [ ] Confirm arrival status is visible if tested.
- [ ] Confirm checklist status is visible if available.
- [ ] Confirm notes/issues are visible.
- [ ] Confirm before/after photos are visible if tested.
- [ ] Confirm job completion status is visible.

## Expected Result

- Cleaner can complete an assigned job without needing repeated manual instructions, and admin/owner can see the status update.

## Issues Found

- 
