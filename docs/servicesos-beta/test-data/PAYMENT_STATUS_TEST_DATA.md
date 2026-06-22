# Payment Status Test Data

Use this file for payment-status-only testing. Do not assume live Stripe, Stripe Connect, or Tap to Pay readiness. If the app only supports payment status tracking, test status tracking only.

Tap to Pay is later and should not be part of beta-critical testing.

## Payment Status Cases

### 1. Deposit Requested

- Customer: Robert Ellis
- Job: Deep clean
- Payment status: Deposit requested
- Expected result: Owner/admin can see that deposit is requested. Job should not imply deposit is paid.

### 2. Deposit Paid

- Customer: Robert Ellis
- Job: Deep clean
- Payment status: Deposit paid
- Expected result: Deposit paid status is visible. Final payment should still be separate if applicable.

### 3. Final Payment Pending

- Customer: Maya Johnson
- Job: Standard clean
- Payment status: Final payment pending
- Expected result: Job may be complete while payment remains pending, if supported by workflow.

### 4. Paid in Full

- Customer: Alicia Grant
- Job: Recurring clean first visit
- Payment status: Paid in full
- Expected result: Paid status is visible and does not incorrectly change job completion status.

### 5. Refund Requested

- Customer: Thomas Wright
- Job: Add-on service job
- Payment status: Refund requested
- Expected result: Refund status is visible if supported. If unsupported, document limitation.

### 6. Cancelled Before Payment

- Customer: Nina Patel
- Job: Rescheduled/cancelled maintenance clean
- Payment status: Cancelled before payment
- Expected result: Job should not appear paid or complete.

### 7. Payment Failed If Supported

- Customer: Dana Brooks
- Job: Pet hair-heavy job
- Payment status: Payment failed
- Expected result: Failed status is clear if supported. If unsupported, document limitation.

### 8. Manual / Offline Payment Note If Supported

- Customer: Evelyn Parker
- Job: Standard clean
- Payment status: Manual payment note
- Expected result: Owner/admin can record cash/check/offline note if supported. If unsupported, document limitation.

### 9. Payment Status Mismatch That Should Be Caught

- Customer: Marcus Reed
- Job: Move-out clean
- Job status: Not complete
- Payment status: Paid in full
- Expected result: App should avoid implying job completion just because payment is paid.

## What to Watch For

- Payment status should not imply live payment collection unless that flow is confirmed.
- Payment status should not overwrite job status.
- Job status should not overwrite payment status.
- Payment wording should be clear to owner/admin.
- Payment limitations should be documented as beta limitations.
