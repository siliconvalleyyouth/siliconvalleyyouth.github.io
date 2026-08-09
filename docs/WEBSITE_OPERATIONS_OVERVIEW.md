# SVY Website Operations Overview

This is the high-level replacement for the old semester setup instructions. The old workflow required copying folders, editing many hard-coded year/term values, maintaining both `siliconvalleyyouth` and `siliconvalleyyouth-current`, and manually keeping `classes.html` in sync with the Master Sheet. That is no longer the normal process.

Use this page as the starting point for semester setup, class updates, and basic website operations.

## What Changed

### One Backend

Use the canonical backend only:

```txt
https://siliconvalleyyouth.herokuapp.com
```

Do not update or deploy `siliconvalleyyouth-current`. It is deprecated and kept only as historical reference.

### Master Sheet Is The Data Store, Not The Editing UI

The Master Sheet is still the backing data store and source of truth for class data, but class rows should not be manually edited there during normal operations.

Use the admin page instead:

```txt
https://siliconvalleyyouth.herokuapp.com/admin
```

The admin page and generated class edit links write changes back to the Master Sheet and preserve audit records. This prevents class list, class detail, registration status, and public display data from drifting apart.

### Class List And Detail Pages Share One Source

The public class list and each class detail page now read from the same backend class APIs. Class name, category, grade range, time, dates, location, teacher info, bios, and registration state only need to be changed once through the admin workflow.

The current class list on:

```txt
https://www.siliconvalleyyouth.com/classes.html
```

shows the title, grade range, and time from backend class data.

### Current And Past Classes Are Split

Recent/current semesters stay on:

```txt
https://www.siliconvalleyyouth.com/classes.html
```

2023 and earlier semesters live on:

```txt
https://www.siliconvalleyyouth.com/past-semesters.html
```

Do not add old semesters back into a dropdown on `classes.html`.

### Teacher Profiles Are Shared

Teacher and officer profiles share one profile registry. Public profile pages show a person's SVY timeline, including teacher, TA, and officer roles when data is available.

When adding people:

- use `profileId` where possible
- keep names, images, bios, and emails in the profile data
- avoid duplicating the same person in multiple formats

## Normal Class Update Workflow

Use this for changing a class title, time, dates, grade range, location, teacher info, description, syllabus, bio, or registration state.

1. Open the admin page:

```txt
https://siliconvalleyyouth.herokuapp.com/admin
```

2. Use the class list there to close/open registration, or generate a one-class edit link.
3. Make the class change through the admin workflow or class edit form.
4. Enter your name when prompted so the audit log records who made the change.
5. Run the class info sync from the admin page.
6. Verify:
   - `classes.html`
   - the specific class detail page
   - payment/register link visibility if the class is open or closed

Do not manually edit the class row in the Master Sheet unless the admin flow cannot support the operation yet.

## New Semester Workflow

Use the detailed checklist in:

```txt
docs/SEMESTER_OPERATOR.md
```

At a high level:

1. Create the new semester folder and Master Sheet using the current template.
2. Keep Master Sheet headers stable. The backend reads columns by header name.
3. Share the semester folder or sheets with:

```txt
svy-website-spreadsheets@svyouthwebsite.iam.gserviceaccount.com
```

4. Update backend config:

```txt
config/site.js
config/semesters.js
```

5. Update frontend config and semester shell files:

```txt
site-config.js
classes.html
payment.html
payment.js
classes/<year>/<term>/main.html
classes/<year>/<term>/handler.js
```

6. Upload teacher photos under:

```txt
images/<year>Headshots/<term>/
```

7. Update officers and teacher-year membership if needed.
8. Run profile backfill:

```sh
npm run backfill:profile-descriptions
```

9. Run class sync from the admin page.
10. Verify current class list, detail pages, profile pages, admin page, and payment flow.

## New Class Workflow

Use the detailed checklist in:

```txt
docs/CLASS_OPERATIONS.md
```

At a high level:

1. Start in the admin page.
2. Use a generated class edit link when someone else needs to fill in class info.
3. Keep `publish_status=draft` until the class is ready.
4. Use `publish_status=published` when it should show publicly with registration.
5. Use `publish_status=closed` when it should still show publicly but registration should look full/closed.
6. Run the admin sync.
7. Verify the public page.

## Finished Semester Workflow

When a semester is over, archive class data so old class pages do not depend on old Google Sheets staying shared forever.

For sheet-backed semesters:

```sh
npm run archive:classes -- --semester=<year>-<term>
```

For very old static-only semesters:

```sh
npm run archive:static-classes
```

Then run:

```sh
npm run backfill:profile-descriptions
```

Review and commit the generated archive/profile changes.

## What Not To Do Anymore

- Do not update `siliconvalleyyouth-current`.
- Do not copy large route blocks such as `class2027fall` or `payment2027fall`.
- Do not manually change class title, time, grade range, or full/closed status in both GitHub and the Master Sheet.
- Do not add 2023-or-earlier semesters back to the main `classes.html` tabs or dropdown.
- Do not manually edit existing class rows in the Master Sheet for normal class operations.
- Do not use local machine paths in shared docs.

## Reference Docs

- `docs/CLASS_OPERATIONS.md`: class edits, admin workflow, archive workflow, code boundaries.
- `docs/SEMESTER_OPERATOR.md`: new semester checklist.
- `MIGRATION.md`: migration details and backend API behavior.
- `README.md`: backend quick reference.

