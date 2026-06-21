# Semester Operator Checklist

Start with `docs/WEBSITE_OPERATIONS_OVERVIEW.md` for the high-level workflow. This file is the detailed new-semester and archive checklist.

Use this checklist when opening a new semester or closing/archive an old one. The goal is that normal semester work only changes config, sheets, teacher/officer data, and generated archives.

## Open A New Semester

1. Create the new semester Master Sheet in Google Drive.
   - Use the current Master Sheet as the template.
   - Keep header names stable. The backend reads columns by header name, not by column position.
   - Required visible-class fields: `selector`, `publish_status`, `category`, `classname`, `graderange`, `time`, `dates`, `location`, teacher names, teacher images, teacher emails, and teacher bios.
   - After initial setup, do not edit class rows directly in the Master Sheet. Use the admin page or generated class edit links so changes are audited.

2. Share the semester folder or sheets with the website service account:

```txt
svy-website-spreadsheets@svyouthwebsite.iam.gserviceaccount.com
```

3. Update backend active-semester config:

```txt
config/site.js
config/semesters.js
```

Update the active year/term, display labels, Master Sheet id, signup sheet ids, class dates, price, and registration switch.

4. Update frontend active-semester config:

```txt
site-config.js
classes.html
payment.html
payment.js
classes/<year>/<term>/main.html
classes/<year>/<term>/handler.js
```

Keep class list/detail/payment URLs on the generic semester-aware backend routes. Do not point new pages to `siliconvalleyyouth-current`.

5. Upload teacher photos.
   - Put current-semester headshots under `images/<year>Headshots/<term>/`.
   - Use the image ids from the Master Sheet, usually `FirstnameLastname.jpg`.

6. Update officers.
   - Edit frontend `officers.js`.
   - Add one `SVY_OFFICER_TERMS` entry for the new officer year.
   - Set `ACTIVE_OFFICER_TERM` to the new active officer year.
   - Use `profileId` values from `profiles.js`; add missing people to `profiles.js` first.

7. Update teacher year membership.
   - Edit frontend `teachers.js` only when a person should appear under a teacher year.
   - Store only `profileId` values there.
   - Do not duplicate names, image filenames, emails, or bios in `teachers.js`; those belong in `profiles.js`.

8. Backfill teacher profile info.

```sh
npm run backfill:profile-descriptions
```

This updates `profiles.js` in the frontend GitHub repository with missing profile ids plus latest non-empty teacher bios and emails from sheets/local archives. Review and commit the generated registry changes.

Frontend repository:

```txt
https://github.com/siliconvalleyyouth/siliconvalleyyouth.github.io
```

9. Run a class sync.
   - In admin, click the sync button for the active semester.
   - Or use the active semester refresh API if needed.
   - Fix rows with `publish_status=failed` or `publish_error`.

10. Verify public pages.
   - `classes.html`
   - one class detail page
   - one teacher profile page
   - admin class list
   - payment link visibility for open/closed classes

## Add A New Class

1. Open the admin page:

```txt
https://siliconvalleyyouth.herokuapp.com/admin
```

2. Use the admin workflow or generated class edit link for class changes. Do not directly edit existing class rows in the Master Sheet.
3. For a brand-new class, create the initial row only if the admin flow cannot create it yet, then make future edits through the admin/class edit form.
4. Set `publish_status=draft` until it is ready.
5. Fill the class fields, teacher fields, teacher emails, and teacher bios.
6. Run the admin sync.
7. Review through draft/preview if needed.
8. Set `publish_status=published` when ready, or `closed` if it should show as full.

## Close A Finished Semester

1. Turn off registration for the finished semester in config when it is no longer active.
2. Archive sheet-backed class data:

```sh
npm run archive:classes -- --semester=<year>-<term>
```

Example:

```sh
npm run archive:classes -- --semester=2026-spring
```

3. For very old static-only semesters, refresh best-effort static archives:

```sh
npm run archive:static-classes
```

4. Run the teacher profile backfill after archiving:

```sh
npm run backfill:profile-descriptions
```

5. Review and commit:
   - backend `archive/classData/<year>-<term>.json`
   - frontend `profiles.js`
   - frontend `teachers.js`
   - officer updates, if any
   - config changes

Archived class pages should keep working from committed archive JSON even if old Google Sheets are later moved, unshared, or broken.

## Deploy Order

1. Commit backend and frontend changes.
2. Push frontend GitHub Pages changes.
3. Deploy backend to Heroku.
4. Restart Heroku after config/env changes.
5. Re-run active semester sync from admin.

## Do Not Use

Do not update or deploy `siliconvalleyyouth-current` for new semester work. It is deprecated and kept only as a rollback/reference copy.
