# Next.js Fetch Client

Production-ready fetch wrapper for Next.js App Router.

Supports:

- SSG
- ISR
- SSR
- Cache Tags
- Revalidation
- Timeout
- Typed Errors
- Auth Headers
- JSON Parsing

Built specifically for modern Next.js applications.

---

# Installation

```bash
npm install
```

---

# Setup

Create environment variable:

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:8000
```

---

# Usage

## Import

```js
import { api } from "@/api/client";
```

---

# SSG

```js
await api.get("/products", {
  cache: "force-cache",
});
```

Uses static caching.

---

# ISR

```js
await api.get("/products", {
  revalidate: 60,
});
```

Revalidates every 60 seconds.

---

# SSR

```js
await api.get("/user", {
  cache: "no-store",
});
```

Always fetches fresh data.

---

# Cache Tags

```js
await api.get("/products", {
  tags: ["products"],
});
```

---

# POST Request

```js
await api.post("/auth/login", {
  email,
  password,
});
```

---

# Error Handling

```js
try {
  await api.get("/products");
} catch (error) {
  console.log(error.status);
  console.log(error.message);
}
```

---

# Revalidation

```js
import { invalidateTag } from "@/api/revalidate";

await invalidateTag("products");
```

---

# Why this library?

Most fetch wrappers ignore modern Next.js caching.

This project is designed specifically for:

- Next.js App Router
- Server Components
- Route Handlers
- Production-grade caching
- Scalable applications

---

# Features

| Feature | Supported |
|---|---|
| SSG | ✅ |
| ISR | ✅ |
| SSR | ✅ |
| Cache Tags | ✅ |
| Revalidation | ✅ |
| Timeout | ✅ |
| Typed Errors | ✅ |
| App Router | ✅ |

---

# License

MIT