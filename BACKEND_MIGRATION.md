# Backend Migration Notes

The frontend should use one backend app:

```txt
https://siliconvalleyyouth.herokuapp.com
```

Do not point frontend code to:

```txt
https://siliconvalleyyouth-current.herokuapp.com
```

The active semester is `2026 spring`.

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

Backend details live in:

```txt
../siliconvalleyyouth/MIGRATION.md
```
