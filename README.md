# AIXORA Academy — Platform

> **Learn • Build • Lead** — AI-powered learning ecosystem

---

## 🚀 Tech Stack

| Layer        | Technology                  |
|--------------|-----------------------------|
| Framework    | Next.js 14 (App Router)     |
| Styling      | Tailwind CSS + custom tokens|
| Database     | PostgreSQL via Supabase      |
| Auth         | Supabase Auth               |
| Storage      | Supabase Storage            |
| Video        | YouTube (Unlisted)          |
| Email        | Resend                      |
| Deployment   | Vercel                      |
| **Cost**     | **$0/month** ✅             |

---

## 📁 Project Structure

```
aixora-academy/
├── public/
│   └── assets/               # Logo, favicon, static images
│
├── src/
│   ├── app/
│   │   ├── (auth)/           # Auth pages (no navbar)
│   │   │   ├── login/
│   │   │   └── register/
│   │   │
│   │   ├── (main)/           # Main site pages (with navbar)
│   │   │   ├── courses/
│   │   │   │   └── [id]/     # Course detail page
│   │   │   ├── dashboard/    # Student dashboard
│   │   │   ├── events/       # Events listing
│   │   │   ├── blog/
│   │   │   │   └── [slug]/   # Blog post page
│   │   │   └── community/
│   │   │
│   │   ├── admin/            # Admin panel
│   │   │
│   │   ├── api/              # API routes
│   │   │   ├── auth/
│   │   │   ├── courses/
│   │   │   ├── users/
│   │   │   ├── enrollments/
│   │   │   ├── events/
│   │   │   └── certificates/
│   │   │
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   └── globals.css       # Global styles + design tokens
│   │
│   ├── components/
│   │   ├── ui/               # Base UI (Button, Input, Badge, Modal...)
│   │   ├── layout/           # Navbar, Footer, Sidebar
│   │   ├── home/             # Hero, Features, Stats, Testimonials
│   │   ├── courses/          # CourseCard, CourseGrid, LessonPlayer
│   │   ├── dashboard/        # ProgressCard, EnrollmentList
│   │   ├── auth/             # LoginForm, RegisterForm
│   │   └── shared/           # CertificateCard, EventCard, BlogCard
│   │
│   ├── lib/
│   │   └── supabase/
│   │       ├── client.ts     # Browser client
│   │       └── server.ts     # Server client
│   │
│   ├── hooks/                # useAuth, useCourses, useEnrollment...
│   ├── types/                # TypeScript types (index.ts)
│   ├── utils/                # Helper functions
│   └── config/               # App constants, category labels
│
├── supabase-schema.sql       # Run this in Supabase SQL Editor
├── .env.local.example        # Copy to .env.local and fill values
├── tailwind.config.js        # Brand color tokens
├── next.config.mjs
└── package.json
```

---

## ⚡ Getting Started

### 1. Clone & Install
```bash
git clone <your-repo-url> aixora-academy
cd aixora-academy
npm install
```

### 2. Setup Supabase
1. Go to [supabase.com](https://supabase.com) → Create new project
2. Go to **SQL Editor** → Paste contents of `supabase-schema.sql` → Run
3. Go to **Project Settings → API** → Copy your URL and anon key

### 3. Environment Variables
```bash
cp .env.local.example .env.local
# Fill in your Supabase URL and keys
```

### 4. Run Dev Server
```bash
npm run dev
# Open http://localhost:3000
```

### 5. Deploy to Vercel
```bash
npx vercel
# Add env variables in Vercel dashboard
```

---

## 🎨 Design Tokens

| Token           | Value     | Usage                    |
|-----------------|-----------|--------------------------|
| `--brand`       | `#5a2b4e` | Primary plum (logo)      |
| `--accent`      | `#c084fc` | Lavender purple highlight|
| `--surface`     | `#0f0a0e` | Dark background base     |
| `--surface-card`| `#1a1018` | Card backgrounds         |
| `--text`        | `#f5f0f7` | Primary text             |

---

## 📋 Development Phases

### Phase 1 — MVP (Month 1-2)
- [ ] Landing page (Hero, About, Programs, Team)
- [ ] Auth (Login, Register, Google OAuth)
- [ ] Course listing + detail page
- [ ] Video player (YouTube embed)
- [ ] Student dashboard
- [ ] Basic enrollment

### Phase 2 — LMS (Month 3-4)
- [ ] Progress tracking
- [ ] Certificate generation (PDF)
- [ ] Events & registration
- [ ] Blog section
- [ ] Admin panel

### Phase 3 — AI Features (Month 5+)
- [ ] AI Learning Assistant
- [ ] AI Career Advisor
- [ ] AI Course Recommendations

---

## 🔑 Key Decisions

- **YouTube Unlisted** for videos — zero hosting cost, unlimited storage
- **Supabase RLS** — security rules at database level
- **App Router** — server components for performance & SEO
- **Tailwind + custom tokens** — consistent brand throughout

---

*Built with ❤️ — AIXORA Academy © 2024*
