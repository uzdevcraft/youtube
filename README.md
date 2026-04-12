# 🎥 YouTube Clone

A **production-grade** YouTube clone featuring **Next.js 16 App Router**, **TypeScript (strict mode)**, **Mantine UI**, **React Query**, and **SCSS Modules**. Built for developers who demand excellence.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Google Cloud API credentials

### Installation

**1. Clone & install**

```bash
pnpm install
```

**2. Set up environment**

```bash
cp .env.local.example .env.local
```

Add your YouTube API key to `.env.local`:

```env
NEXT_PUBLIC_YOUTUBE_API_KEY=YOUR_API_KEY
```

📝 **Get a free API key**: [Google Cloud Console](https://console.cloud.google.com/apis/credentials)

- Enable YouTube Data API v3
- Free quota: 10,000 units/day

**3. Launch dev server**

```bash
pnpm dev
# Opens at http://localhost:3000
```

**4. Verify types**

```bash
pnpm type-check
```

---

## 📂 Architecture

```
youtube-clone/
├── app/              # Next.js App Router pages & layouts
├── components/       # Reusable React components
├── modules/          # React Query API hooks
├── services/         # API integration layer
├── lib/              # Utilities & helpers
├── types/            # TypeScript definitions
└── styles/           # SCSS module styles
```

---

## ⚡ Core Features

- **🎯 Trending Discovery** — Real-time trending videos with category filtering
- **🔎 Intelligent Search** — Advanced query filters and suggestions
- **▶️ Video Player** — Seamless playback with comments & related content
- **👥 Channel Profiles** — Creator pages with analytics
- **📱 Fully Responsive** — Optimized for all devices
- **🌙 Dark Mode** — Custom theme support
- **⚙️ High Performance** — Smart caching & infinite scrolling

---

## 💡 Perfect For

Portfolio showcases, learning production Next.js patterns, or building your own streaming platform reference.
