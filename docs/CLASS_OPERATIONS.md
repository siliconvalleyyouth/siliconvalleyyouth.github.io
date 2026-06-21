# Class Frontend Operations

## Current Semester Settings

Edit this file when the active public semester changes:

```txt
site-config.js
```

It owns:

- backend base URL
- public site base URL
- active year and term
- home page display label
- active class tab id and label
- current class-list container id
- current class filter tag
- current headshot folder
- active class price

Keep it aligned with backend `config/site.js`.

## Updating Classes

Do not manually edit the current-semester class list for normal class changes. The active class list in `classes.html` is loaded by `classes.js` from the backend API, which reads the Master Sheet.

Use the Master Sheet or backend admin edit page for:

- class name
- category
- time
- dates
- grades
- location
- teacher names and bios
- registration status
- publish status

## Current Detail Page

The active semester detail page handler reads `site-config.js` for backend API URL, payment URL, and headshot path:

```txt
classes/2026/spring/handler.js
```

When a future semester becomes active, create the new semester folder from the current template, then update `site-config.js`. The active tab label, class API URL, payment API URL, price, and headshot path are config-driven.

## Deprecated Backend

Do not point frontend code at:

```txt
https://siliconvalleyyouth-current.herokuapp.com
```

Use:

```txt
https://siliconvalleyyouth.herokuapp.com
```
