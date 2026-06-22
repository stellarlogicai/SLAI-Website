# ServicesOS Core Workflow Test

Use this checklist to test the owner/admin workflow from login through logout. Record bugs in `BUG_REPORT_TEMPLATE.md`.

## Test Setup

- Tester:
- Date/time:
- Device/browser:
- Test account:
- Build/version if known:

## Core Workflow Steps

### 1. Login

- [ ] Open the ServicesOS app.
- [ ] Enter valid owner/admin credentials.
- [ ] Confirm login succeeds.
- [ ] Confirm the app lands on the expected dashboard or home screen.
- [ ] Confirm no console, loading, or permission errors are visible.

### 2. Dashboard Loading

- [ ] Dashboard loads without a blank screen.
- [ ] Business name or account context is correct.
- [ ] Lead, estimate, job, payment, or other summary cards load.
- [ ] Empty states are understandable if no data exists.
- [ ] Loading states finish in a reasonable time.

### 3. Customer / Lead Creation

- [ ] Create a new customer or lead.
- [ ] Add customer name.
- [ ] Add phone/email if available.
- [ ] Add address or service location if available.
- [ ] Add source or notes if available.
- [ ] Save the record.
- [ ] Confirm the new customer/lead appears in the correct list.

### 4. Lead Status Updates

- [ ] Open the customer/lead record.
- [ ] Change lead status.
- [ ] Confirm the status saves.
- [ ] Refresh or navigate away and back.
- [ ] Confirm the saved status remains correct.
- [ ] Confirm dashboard counts update if applicable.

### 5. Estimate Generation

- [ ] Create an estimate for the customer/lead.
- [ ] Add service type or scope.
- [ ] Add line items or estimate details if available.
- [ ] Confirm totals or summary display correctly.
- [ ] Save the estimate.
- [ ] Confirm the estimate is visible from the customer/lead record.
- [ ] Confirm any estimate status is clear.

### 6. Contract / Booking Flow

- [ ] Move the estimate toward booking or contract.
- [ ] Confirm required fields are clear.
- [ ] Confirm contract/service agreement details are visible if available.
- [ ] Confirm accepted, booked, or pending status is clear.
- [ ] Confirm the customer/lead record reflects the change.

### 7. Scheduling

- [ ] Create or edit the job schedule.
- [ ] Select date.
- [ ] Select time or time window if available.
- [ ] Confirm recurring service options if available.
- [ ] Save schedule.
- [ ] Confirm the scheduled job appears in the expected job/calendar view.

### 8. Employee Assignment

- [ ] Assign an employee/cleaner to the job.
- [ ] Confirm available employees display correctly.
- [ ] Save assignment.
- [ ] Confirm assigned employee is visible on the job.
- [ ] Confirm the assignment appears in the employee-facing workflow if available.

### 9. Job Completion

- [ ] Open the scheduled job.
- [ ] Confirm customer notes and job scope are visible.
- [ ] Complete required job steps.
- [ ] Mark the job complete.
- [ ] Confirm completion status saves.
- [ ] Confirm completion is visible from the dashboard or job list.

### 10. Dashboard Counts

- [ ] Return to the dashboard.
- [ ] Confirm lead counts are correct.
- [ ] Confirm estimate counts are correct.
- [ ] Confirm scheduled/completed job counts are correct if shown.
- [ ] Confirm no stale counts remain after refresh.

### 11. Logout

- [ ] Use the logout action.
- [ ] Confirm the session ends.
- [ ] Confirm protected pages are not accessible after logout.
- [ ] Confirm logging back in still works.

## Pass / Fail Summary

- [ ] Core workflow passed end-to-end.
- [ ] Core workflow passed with minor issues.
- [ ] Core workflow blocked.

## Notes

- Issues found:
- Missing information:
- Confusing steps:
- Follow-up fixes:
