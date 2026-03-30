# Customization Guide

This is a landing page built with **Next.js** and **Tailwind CSS**. Follow the steps below to make it your own.

---

## 1. Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- A [Gumroad](https://gumroad.com/) account (or any store you use to sell your app)

---

## 2. Install & Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

---

## 3. What to Change

All key content is in **`app/page.tsx`**.

### 3.1 Your Store Link

At the top of `app/page.tsx`, find:

```ts
const GUMROAD_URL = "https://your-store.gumroad.com/l/nastenka";
```

Replace with your actual product URL. This link is used for all download/buy buttons on the page.

---

### 3.2 App Name

Search and replace `Nastenka` with your app name across:

| File | What to change |
|------|---------------|
| `app/page.tsx` | Navbar logo, hero title, button labels, footer |
| `app/layout.tsx` | `<title>` and `<meta>` description |
| `README.md` | Product name and link |

---

### 3.3 Features Section

In `app/page.tsx`, find the `FEATURES` array and update each item:

```ts
const FEATURES = [
  {
    icon: PenLine,          // Icon from lucide-react
    title: "Feature Name",
    desc: "Short description of this feature.",
  },
  // ...
];
```

Available icons: [lucide.dev](https://lucide.dev/icons/)

---

### 3.4 How It Works Section

Find the `WORKFLOW_STEPS` array and update the steps to match your app's flow:

```ts
const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Step Title",
    desc: "What the user does in this step.",
  },
  // ...
];
```

---

### 3.5 Screenshots

Replace the screenshot files in the `public/` folder:

```
public/
  screenshot1.png
  screenshot2.png
  ...
  screenshot11.png
```

- Keep the same filenames, or update the `SCREENSHOTS` array in `app/page.tsx` to match your new filenames.
- Recommended size: **1280×800px** or similar 16:10 ratio.
- You can add or remove screenshots — just update the array accordingly.

---

### 3.6 Hero Text

Find the hero section in `app/page.tsx` (search for `hero`) and update:

- **Headline** — the main title
- **Subheadline** — the short description below
- **Platform badge** — e.g. "Windows 64-bit"
- **Button label** — e.g. "Get Nastenka" → "Get YourApp"

---

### 3.7 Footer Copyright

Near the bottom of `app/page.tsx`:

```tsx
© 2026 Nastenka. All rights reserved.
```

Update the year and app name.

---

## 4. Deploy

### Option A — Vercel (recommended, free)

1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Deploy with default settings — no configuration needed.

### Option B — Static Export

```bash
npm run build
```

The `out/` folder contains the static files. Upload to any hosting (Netlify, Cloudflare Pages, etc.).

---

## 5. Quick Checklist

- [ ] Updated `GUMROAD_URL` with your store link
- [ ] Replaced app name (`Nastenka` → your app name)
- [ ] Updated features to match your app
- [ ] Updated workflow steps
- [ ] Replaced all screenshots in `public/`
- [ ] Updated page title and meta description in `app/layout.tsx`
- [ ] Updated footer copyright
