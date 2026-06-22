# ServicesOS Selector Requirements

Reliable Playwright tests need stable selectors. The current public website tests mostly use roles, labels, headings, and visible text. That is fine for public marketing pages, but deeper ServicesOS app workflow tests should use explicit test IDs for important actions and states.

Do not add these selectors as part of this documentation task. Add them later in a focused app-code task.

## Recommended Selector Principles

- Use selectors that describe product intent, not visual layout.
- Prefer `data-testid` for workflow-critical controls and status elements.
- Keep accessible labels in place for users and assistive technology.
- Avoid CSS class selectors for tests unless there is no alternative.
- Avoid using real customer names, production IDs, or generated database IDs as primary selectors.
- Keep owner/admin and employee workflow selectors consistent.

## Auth Selectors

Examples:

- `data-testid="login-email"`
- `data-testid="login-password"`
- `data-testid="login-submit"`
- `data-testid="logout-button"`
- `data-testid="tenant-loading-state"`
- `data-testid="dashboard-ready"`

## Customer And Lead Selectors

Examples:

- `data-testid="customer-create-button"`
- `data-testid="customer-name-input"`
- `data-testid="customer-phone-input"`
- `data-testid="customer-email-input"`
- `data-testid="customer-property-type-select"`
- `data-testid="customer-save-button"`
- `data-testid="lead-status-select"`
- `data-testid="lead-status-badge"`

## Estimate And Booking Selectors

Examples:

- `data-testid="estimate-create-button"`
- `data-testid="estimate-service-type-select"`
- `data-testid="estimate-notes-input"`
- `data-testid="estimate-review-submit"`
- `data-testid="contract-send-button"`
- `data-testid="booking-confirm-button"`

## Scheduling And Assignment Selectors

Examples:

- `data-testid="schedule-job-button"`
- `data-testid="schedule-date-input"`
- `data-testid="schedule-time-input"`
- `data-testid="employee-assignment-select"`
- `data-testid="assigned-employee-card"`
- `data-testid="job-status-badge"`

## Employee Workflow Selectors

Examples:

- `data-testid="assigned-job-card"`
- `data-testid="job-customer-notes"`
- `data-testid="job-special-instructions"`
- `data-testid="job-arrival-button"`
- `data-testid="job-before-photo-upload"`
- `data-testid="job-checklist-item"`
- `data-testid="job-help-link"`
- `data-testid="job-issue-notes-input"`
- `data-testid="job-after-photo-upload"`
- `data-testid="job-complete-button"`

## Payment Status Selectors

Examples:

- `data-testid="payment-status-badge"`
- `data-testid="deposit-status-badge"`
- `data-testid="final-payment-status-badge"`
- `data-testid="manual-payment-note"`

Payment selectors should verify status display only until the payment flow is stable and test-mode payment handling is approved.

## Current Selector Status

The current Website project tests do not show a safe ServicesOS app selector pattern such as `data-testid` or `getByTestId`. Selector work should be handled as a separate small task before automating private ServicesOS workflows.
