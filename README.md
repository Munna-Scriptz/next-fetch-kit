# Next Fetch Kit

Production-ready fetch wrapper built specifically for the Next.js App Router.

Designed for modern applications using:

- Server Components
- Route Handlers
- Server Actions
- SSG
- ISR
- SSR
- Cache Tags
- Revalidation

Unlike traditional API wrappers, this library fully supports the native Next.js caching system.

---

# Features

- Built for Next.js App Router
- Supports SSG, ISR, and SSR
- Cache Tags support
- Path Revalidation
- Request Timeout
- Typed API Errors
- Automatic JSON Parsing
- Authentication Headers
- Minimal & Lightweight
- Production Ready

---

# Why This Library?

Most fetch wrappers are generic and ignore how Next.js caching actually works.

This project solves that problem by providing:

- Native App Router support
- Built-in revalidation helpers
- Cleaner fetch syntax
- Better developer experience
- Production-grade architecture

Perfect for:

- E-commerce
- Dashboards
- Blogs
- CMS
- SaaS Applications
- Enterprise apps

---

# Installation

Clone the repository:

```bash
git clone https://github.com/Munna-Scriptz/next-fetch-kit.git
```

Install dependencies:

```bash
npm install
```

---

# Folder Structure

```bash
next-fetch-kit/
│
├── api/
│   ├── client.js
│   └── revalidate.js
│
├── examples/
│   ├── Auth_Header.jsx
│   ├── Cache_Tags.jsx
│   ├── Isr.jsx
│   ├── POST_method.jsx
│   ├── Ssg.jsx
│   └── Ssr.jsx
│
├── LICENSE
└── README.md
```

---

# Setup

Create an environment variable:

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:8000
```

Example:

```env
NEXT_PUBLIC_SERVER_URL=https://api.example.com
```

---

# Basic Usage

## Import Client

```js
import { api } from "@/lib/api/client";
```

---

# GET Request

```js
const products = await api.get("/products");
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

# PUT Request

```js
await api.put("/products/1", {
  title: "Updated Product",
});
```

---

# PATCH Request

```js
await api.patch("/products/1", {
  price: 120,
});
```

---

# DELETE Request

```js
await api.delete("/products/1");
```

---

# Next.js Caching

This library fully supports the Next.js App Router caching system.

---

# SSG (Static Site Generation)

Static data cached at build time.

```js
await api.get("/products", {
  cache: "force-cache",
});
```

Best for:

- Blogs
- Landing pages
- Public content
- Static catalogs

---

# ISR (Incremental Static Regeneration)

Automatically refresh data after a specific time.

```js
await api.get("/products", {
  revalidate: 60,
});
```

This revalidates every 60 seconds.

Best for:

- Product listings
- News feeds
- CMS content
- Frequently updated pages

---

# SSR (Server Side Rendering)

Always fetch fresh data.

```js
await api.get("/user", {
  cache: "no-store",
});
```

Best for:

- User dashboards
- Authenticated pages
- Real-time data
- Admin panels

---

# Cache Tags

Cache tags allow selective cache invalidation.

```js
await api.get("/products", {
  tags: ["products"],
});
```

You can later revalidate only this cached data.

Best for:

- Product systems
- CMS
- Dynamic collections
- Dashboard data

---

# Revalidation

## Revalidate Tag

```js
import { invalidateTag } from "@/lib/api/revalidate";

await invalidateTag("products");
```

This refreshes all cached requests using:

```js
tags: ["products"]
```

---

## Revalidate Path

```js
import { invalidatePath } from "@/lib/api/revalidate";

await invalidatePath("/products");
```

This refreshes the entire route/page.

---

# Complete Example

## Fetch Products

```js
const products = await api.get("/products", {
  tags: ["products"],
  revalidate: 60,
});
```

---

## Create Product

```js
await api.post("/products", data);
```

---

## Revalidate Cache

```js
await invalidateTag("products");
```

---

# Authentication Headers

```js
await api.get("/user", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

---

# Custom Headers

```js
await api.get("/products", {
  headers: {
    "x-api-key": "my-secret-key",
  },
});
```

---

# Request Timeout

```js
await api.get("/products", {
  timeout: 5000,
});
```

Automatically aborts after 5 seconds.

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

# Example Error Response

```js
{
  name: "ApiError",
  status: 404,
  message: "Product not found"
}
```

---

# Credentials Support

Cookies are included automatically.

```js
credentials: "include"
```

Perfect for:

- Session authentication
- JWT cookies
- Protected routes

---

# API Methods

| Method | Description |
|---|---|
| api.get() | Fetch data |
| api.post() | Create data |
| api.put() | Replace data |
| api.patch() | Update data |
| api.delete() | Delete data |

---

# Feature Comparison

| Feature | Native Fetch | Axios | Next Fetch Kit |
|---|---|---|---|
| SSG Support | ❌ | ❌ | ✅ |
| ISR Support | ❌ | ❌ | ✅ |
| Cache Tags | ❌ | ❌ | ✅ |
| Revalidation | ❌ | ❌ | ✅ |
| App Router Optimized | ❌ | ❌ | ✅ |
| Built-in Timeout | ❌ | ❌ | ✅ |
| Typed Errors | ❌ | ❌ | ✅ |

---

# Recommended Use Cases

- Next.js App Router Projects
- E-commerce Applications
- SaaS Dashboards
- CMS Platforms
- Enterprise Applications
- Fullstack Next.js Apps

---

# Example Project Ideas

You can build:

- E-commerce Store
- Admin Dashboard
- Blog CMS
- Portfolio API
- Analytics Dashboard
- Authentication System

---

# Tech Stack

- Next.js
- JavaScript / TypeScript
- Native Fetch API
- Next.js Cache System

---

# Contributing

Contributions are welcome.

Feel free to:

- Open issues
- Submit pull requests
- Improve documentation
- Add TypeScript support
- Add new examples

---

# Roadmap

- TypeScript Generics
- Retry System
- Request Interceptors
- Response Interceptors
- Automatic Token Refresh
- npm Package Release
- React Query Integration

---

# License

MIT License

Free to use in personal and commercial projects.

---

# Support

If this project helped you, consider giving it a star on GitHub.