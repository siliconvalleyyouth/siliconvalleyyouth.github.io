# Silicon Valley Youth Frontend

Static website for `www.siliconvalleyyouth.com`.

Current-semester behavior is configured in `site-config.js`. Update that file when the active semester changes; do not hardcode new backend URLs in `classes.js`, `payment.js`, or the active semester `handler.js`.

The class list and class detail pages read current class data from the backend Master Sheet APIs. Update class names, category, time, dates, location, teacher info, status, and publish state in the Master Sheet or backend admin edit form.

Teacher/officer card images and shared profile fields are centralized through `teachers.js` and `SVYProfiles`. The backend `npm run backfill:profile-descriptions` script fills missing `teachers.js` descriptions from the latest non-empty teacher bio, and `teachers.js` overlays newer backend profile metadata when available. Officer history should list only officer membership, role, and role-specific copy; do not duplicate image/profile data there.

Officer history is centralized in `officers.js`. Add each officer year as one `SVY_OFFICER_TERMS` entry and update `ACTIVE_OFFICER_TERM` when a new leadership year becomes current.

See `docs/CLASS_OPERATIONS.md` for the current class update flow.
