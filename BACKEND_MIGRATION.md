# Backend Migration Notes

The frontend should use one backend app:

```txt
https://siliconvalleyyouth.herokuapp.com
```

Do not point frontend code to:

```txt
https://siliconvalleyyouth-current.herokuapp.com
```

The active semester is configured in `site-config.js`. It is currently `2026 spring`.

Class detail pages should include semester context when linking to payment:

```txt
/payment.html?year=2026&term=spring&id=creatwriting
```

The shared payment page reads `year`, `term`, and `id`, then calls:

```txt
GET  /api/classes/:year/:term/:id
POST /api/payment/:year/:term?id=:id
GET  /api/check-coupon/:year/:term
```

The current-semester class list reads from the same backend and Master Sheet source. The exact year/term comes from `site-config.js`:

```txt
GET /api/classes/2026/spring/list
```

The Master Sheet `publish_status` column controls current-semester visibility:

```txt
published  visible and registration open
closed     visible as Full, registration blocked
draft      hidden
failed     hidden after backend validation failure
```

Draft previews use the generic URL prefix:

```txt
/draft/:year/:term/
/draft/:year/:term/main.html?id=:selector
```

Example:

```txt
/draft/2026/fall/
```

The draft preview includes draft and failed classes and highlights `publish_error` values for review.

Backend details live in the canonical backend repository:

```txt
siliconvalleyyouth / MIGRATION.md
```
