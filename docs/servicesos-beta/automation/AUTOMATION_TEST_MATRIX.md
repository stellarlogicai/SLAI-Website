# ServicesOS Automation Test Matrix

This matrix maps ServicesOS beta scenarios to future automated Playwright tests.

| Scenario | Manual doc source | Fake data source | Automation priority | Test type | Current readiness | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Login | `SERVICESOS_CORE_WORKFLOW_TEST.md` | Test account to be defined | High | Auth smoke | Not ready | Needs safe test account, isolated environment, and stable login selectors. |
| Dashboard loads | `SERVICESOS_CORE_WORKFLOW_TEST.md` | Test account to be defined | High | Authenticated smoke | Not ready | Should confirm tenant/account data loads without production data. |
| Create customer/lead | `SERVICESOS_CORE_WORKFLOW_TEST.md` | `FAKE_CUSTOMERS.md`, `FAKE_JOB_SCENARIOS.md` | High | Core workflow | Not ready | Needs fake data seeding or cleanup plus stable create/save selectors. |
| Update lead status | `SERVICESOS_CORE_WORKFLOW_TEST.md` | `FAKE_JOB_SCENARIOS.md` | High | Core workflow | Not ready | Should verify the status persists after refresh. |
| Create estimate | `SERVICESOS_CORE_WORKFLOW_TEST.md` | `CLEANING_CUSTOMER_STANDARD_CLEAN.md`, `FAKE_PROPERTIES.md` | High | Core workflow | Not ready | Should verify estimate details save correctly without asserting unapproved pricing. |
| Schedule job | `SERVICESOS_CORE_WORKFLOW_TEST.md` | `FAKE_JOB_SCENARIOS.md` | High | Core workflow | Not ready | Should cover standard, recurring, and rescheduled jobs after core flow is stable. |
| Assign employee | `SERVICESOS_CORE_WORKFLOW_TEST.md` | `FAKE_EMPLOYEES.md` | High | Owner/admin workflow | Not ready | Needs stable employee selector and fake employee records. |
| Employee views assigned job | `EMPLOYEE_APP_BETA_TEST.md`, `EMPLOYEE_APP_FIELD_TEST.md` | `FAKE_EMPLOYEES.md`, `FAKE_JOB_SCENARIOS.md` | Medium | Employee workflow | Not ready | Requires safe cleaner login/session pattern. |
| Employee completes checklist | `EMPLOYEE_APP_BETA_TEST.md`, `EMPLOYEE_APP_FIELD_TEST.md` | `FAKE_JOB_SCENARIOS.md` | Medium | Employee workflow | Not ready | Should verify checklist state persists and admin can see progress. |
| Admin sees completion | `SERVICESOS_CORE_WORKFLOW_TEST.md`, `EMPLOYEE_APP_FIELD_TEST.md` | `FAKE_JOB_SCENARIOS.md` | Medium | Cross-role workflow | Not ready | Requires owner and employee test sessions that use the same fake job. |
| Payment status tracking | `PAYMENT_STATUS_TEST_DATA.md` | `PAYMENT_STATUS_TEST_DATA.md` | Later | Status-only workflow | Not ready | Test status display only until payment flow is confirmed stable. No Tap to Pay automation. |
| Logout | `SERVICESOS_CORE_WORKFLOW_TEST.md` | Test account to be defined | Medium | Auth smoke | Not ready | Needs safe auth setup and selectors for logout controls. |

## Public-Safe Coverage Available Now

The public ServicesOS website route can be smoke tested now because it does not require credentials or production data. That check is not a replacement for ServicesOS app workflow automation.
