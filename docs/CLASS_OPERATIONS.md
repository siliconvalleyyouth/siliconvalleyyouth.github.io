# Class Operations

Start with `docs/WEBSITE_OPERATIONS_OVERVIEW.md` for the high-level workflow. This file is the detailed reference for class operations.

## Source of Truth

The Google Master Sheet is the backing data store and source of truth for current-semester class information. Do not edit class rows directly in the Master Sheet for normal operations. Use the backend admin page or a generated one-class edit link so changes are synced consistently and written to the audit log.

Admin page:

```txt
https://siliconvalleyyouth.herokuapp.com/admin
```

The frontend class list and class detail page both read through the backend API, so updates to class name, category, time, dates, location, teacher info, and registration status only need to be made once through the admin workflow.

## Active Semester

Backend active-semester settings live in:

```txt
config/site.js
config/semesters.js
```

Frontend active-semester settings live in:

```txt
site-config.js
```

When opening a new public semester, update the config files to the same `year`, `term`, display label, spreadsheet ids, pricing, list container id, filter tag, and headshot folder. Normal semester operations should not require editing `index.js`, route files, or service files.

Archived semester class sheet ids live in:

```txt
archive/legacySemesterDefinitions.js
```

Treat archive files as read-only. Do not add signup sheets, payment sheets, refresh routes, or write operations for semesters before the active registration year.

## Archive A Finished Semester

When a semester is finished, snapshot its class data into the repo so archived class pages do not depend on old Google Sheets staying shared or unbroken.

Run this from the backend repo:

```sh
npm run archive:classes -- --semester=2026-spring
```

For a one-time backfill of all configured historical semesters before the active semester:

```sh
npm run archive:classes
```

The script writes JSON files under:

```txt
archive/classData/
```

After reviewing the generated files, commit them. Generic class APIs such as `/api/classes/2025/fall/creatwriting` read these local archive files first and only fall back to Google Sheets when no local archive exists.

Semesters before 2019 Fall were not consistently backed by Master Sheets. Their archive files are best-effort snapshots from committed frontend pages and JavaScript maps:

```sh
npm run archive:static-classes
```

Those snapshots preserve normalized class fields when the old JavaScript maps have them, and preserve `raw_html`/`raw_text` for older standalone class pages so historical content is not lost even when it cannot be fully normalized.

## Backfill Profile Descriptions

Teacher profile metadata is derived from the latest non-empty teacher bio and email in class sheets or local class archives. Run this after adding historical class data or after a large profile cleanup:

```sh
npm run backfill:profile-descriptions
```

The script updates `profiles.js` in the frontend GitHub repository. Review and commit that generated frontend registry change. Normal backend class sync also updates an in-memory profile metadata cache, which is exposed through `/api/profile-descriptions` for newer data between commits.

Frontend repository:

```txt
https://github.com/siliconvalleyyouth/siliconvalleyyouth.github.io
```

## Add Or Update A Class

1. Open the admin page:

```txt
https://siliconvalleyyouth.herokuapp.com/admin
```

2. Use the admin page to close/open a class or generate a one-class edit link.
3. Do not directly edit class rows in the Master Sheet. The Master Sheet should receive class changes from the admin flow or class edit form so the `Audit Log` tab records who changed what and when.
4. Make sure these fields are filled for visible classes:
   - `selector`
   - `classname`
   - `category`
   - `time`
   - `dates`
   - `graderange`
   - `location`
   - teacher and bio fields as needed
5. Set `publish_status`:
   - `published`: visible and registration open
   - `closed`: visible as full and registration hidden
   - `draft`: hidden from public pages
   - `failed`: hidden from public pages after validation failure
6. Run the class info sync from the admin page.

The backend also refreshes the active-semester cache on its configured interval when enabled.

## Admin Edits

The admin page can sync the active semester, open or close a class, and generate a shareable one-class edit link. Shared edit links only edit that class and ask the editor to enter a name or email in the confirmation prompt. Changes are written to the Master Sheet and appended to the `Audit Log` tab when that tab exists. Do not bypass this by manually editing class data in the Master Sheet.

## Registration State

Use `publish_status=closed` to stop registration while keeping the class visible. The payment URL is not blocked only because a class is closed; the frontend hides the payment link and shows the class as full.

Only the active semester in `config/semesters.js` has `registrationEnabled: true`. Historical semesters should keep class information available but should not expose registration or payment writes.

## Code Boundaries

- `config/site.js`: current public semester and site URLs.
- `config/semesters.js`: active semester spreadsheet ids, price, dates, and registration switch.
- `services/classManagement.js`: class sheet reads/writes, sync, audit log, status changes, and active signup writes.
- `services/coupons.js`: coupon lookup and usage marking.
- `services/email.js`: Courier email integration.
- `services/payments.js`: Stripe charge creation.
- `routes/admin.js`: admin and class edit endpoints.
- `routes/publicApi.js`: public semester/class APIs.
- `routes/payments.js`: active semester payment APIs.
- `archive/`: read-only historical class sheet definitions, loaders, and local class snapshots.

For the full new-semester checklist, see `docs/SEMESTER_OPERATOR.md`.

## Deprecated Backend

Do not update `siliconvalleyyouth-current`. The canonical backend is:

```txt
https://siliconvalleyyouth.herokuapp.com
```
