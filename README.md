# Silicon Valley Youth Frontend

Static website for `www.siliconvalleyyouth.com`.

Current-semester behavior is configured in `site-config.js`. Update that file when the active semester changes; do not hardcode new backend URLs in `classes.js`, `payment.js`, or the active semester `handler.js`.

The class list and class detail pages read current class data from the backend Master Sheet APIs. Update class names, category, time, dates, location, teacher info, status, and publish state in the Master Sheet or backend admin edit form.

Teacher/officer card images and shared profile fields are centralized through `teachers.js` and `SVYProfiles`. Officer files should list only officer membership, role, and role-specific copy; do not duplicate image/profile data there.

See `docs/CLASS_OPERATIONS.md` for the current class update flow.
