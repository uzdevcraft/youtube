# 📺 YouTube Clone

A production-ready YouTube clone built with **Next.js 14 App Router**, **TypeScript (strict)**, **Mantine UI**, **React Query**, and **SCSS Modules**.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Configure API key
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_YOUTUBE_API_KEY=YOUR_KEY_HERE
```

Get a free key at [console.cloud.google.com](https://console.cloud.google.com/apis/credentials):
- Create a project → Enable **YouTube Data API v3** → Create API Key
- Free tier: **10,000 units/day** (plenty for dev)

### 3. Run dev server
```bash
npm run dev
# → http://localhost:3000
```

### 4. Type check
```bash
npm run type-check
```

---

## 🏗️ Architecture

```
youtube-clone/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (providers, fonts)
│   ├── page.tsx                # Home page
│   ├── providers.tsx           # React Query + Mantine + Sonner
│   ├── AppShell.tsx            # Header + Sidebar layout wrapper
│   ├── watch/
│   │   ├── page.tsx            # Watch page (Suspense boundary)
│   │   └── WatchPageClient.tsx # Client: reads ?v= param
│   ├── search/
│   │   ├── page.tsx            # Search page (Suspense boundary)
│   │   └── SearchPageClient.tsx
│   └── channel/[channelId]/
│       ├── page.tsx
│       └── ChannelPageClient.tsx
│
├── modules/                    # React Query hooks (server state)
│   ├── useVideos.ts            # useTrendingVideos, useVideoDetail, useRelatedVideos
│   ├── useSearch.ts            # useSearchVideos (infinite)
│   └── useChannels.ts          # useChannel, useChannelsByIds, useVideoComments
│
├── components/                 # Reusable UI components
│   ├── Header/                 # Search bar, logo, nav actions
│   ├── Sidebar/                # Collapsible nav with mini mode
│   ├── VideoCard/              # Grid + horizontal variants + skeleton
│   ├── VideoPlayer/            # YouTube iframe embed
│   ├── ErrorState/             # Error UI with retry
│   └── CategoryPills/          # Horizontal scrollable filter chips
│
├── containers/                 # Page-level compositions
│   ├── HomeContainer/          # Trending grid + infinite scroll + category pills
│   ├── WatchContainer/         # Player + info + comments + related sidebar
│   └── SearchContainer/        # Search results + filters + infinite scroll
│
├── services/                   # Axios API layer
│   ├── youtube.client.ts       # Axios instance + interceptors
│   ├── videos.service.ts       # /videos + /search endpoints
│   └── channels.service.ts     # /channels + /commentThreads endpoints
│
├── lib/                        # Pure utilities
│   ├── format.ts               # formatViewCount, formatDuration, formatRelativeDate
│   ├── query-keys.ts           # Centralized React Query keys + stale times
│   └── storage.ts              # store2 wrappers (sidebar state, search history)
│
├── types/                      # Global TypeScript types
│   ├── youtube.ts              # All YouTube API shapes
│   └── api.ts                  # ApiError, PaginationState, WithPagination<T>
│
└── styles/
    ├── globals.scss            # CSS vars, reset, scrollbar, utilities
    └── _mixins.scss            # Breakpoints, flex helpers, skeleton shimmer
```

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home — trending videos grid with category filter pills |
| `/watch?v=VIDEO_ID` | Watch — player, video info, comments, related videos |
| `/search?q=QUERY` | Search — results list with sort/duration filters |
| `/channel/CHANNEL_ID` | Channel — avatar, stats, description, tab nav |

---

## 🧩 Component API

### `<VideoCard video={} horizontal? />`
Displays a video card in grid (default) or list (horizontal) layout. Includes thumbnail with duration badge, channel avatar, title, view count, and relative date.

### `<VideoCardSkeleton count={N} />`
Animated placeholder skeleton cards — use while loading.

### `<VideoPlayer videoId="" title? />`
YouTube iframe embed with autoplay, no related videos, modest branding.

### `<ErrorState title? message? onRetry? />`
Centered error display with optional retry callback.

### `<CategoryPills selected="" onChange={fn} />`
Horizontally scrollable pill filter bar for home page categories.

### `<Header onMenuClick={fn} />`
Fixed top header with YouTube logo, search form, voice search, create/bell/avatar actions.

### `<Sidebar isExpanded isMini? onClose? showOverlay? />`
Left navigation sidebar. Supports expanded (240px), mini (72px icon-only), and hidden states.

---

## 🪝 Custom Hooks

| Hook | Returns | Notes |
|------|---------|-------|
| `useTrendingVideos(regionCode?)` | `UseInfiniteQueryResult` | Pages of trending videos |
| `useVideoDetail(videoId)` | `UseQueryResult<Video>` | Single video with stats |
| `useRelatedVideos(videoId)` | `UseQueryResult<SearchResult[]>` | Related video search results |
| `useSearchVideos(filters)` | `UseInfiniteQueryResult` | Infinite search pages |
| `useChannel(channelId)` | `UseQueryResult<Channel>` | Channel with stats |
| `useChannelsByIds(ids[])` | `UseQueryResult<Channel[]>` | Batch channel fetch |
| `useVideoComments(videoId)` | `UseQueryResult<CommentThread[]>` | Top-level comments |

---

## ⚙️ Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_YOUTUBE_API_KEY` | ✅ Yes | YouTube Data API v3 key |

---

## 🎨 Theming

All colors are defined as CSS custom properties in `styles/globals.scss`:

```scss
:root {
  --yt-red: #ff0000;
  --bg-primary: #0f0f0f;
  --bg-secondary: #1a1a1a;
  --text-primary: #f1f1f1;
  --text-secondary: #aaaaaa;
  // ...
}
```

---

## 📦 Tech Stack

| Library | Purpose |
|---------|---------|
| `next@14` | App Router, SSR, image optimization |
| `typescript` | Strict type safety |
| `@mantine/core` | UI primitives, dark theme |
| `@tanstack/react-query` | Server state, caching, infinite scroll |
| `axios` | HTTP client with interceptors |
| `react-hook-form` + `yup` | Form validation (search form) |
| `sass` | SCSS modules per component |
| `clsx` | Conditional classnames |
| `dayjs` | Date formatting + relative time |
| `sonner` | Toast notifications |
| `store2` | LocalStorage (sidebar state, search history) |
| `radash` | Utility helpers |

---

## 🔧 YouTube API Quota

| Operation | Units |
|-----------|-------|
| `videos.list` (trending) | ~3 units |
| `videos.list` (by ID) | ~3 units |
| `search.list` | ~100 units |
| `channels.list` | ~3 units |
| `commentThreads.list` | ~3 units |

> ⚠️ `search.list` is expensive (100 units). The free quota is 10,000/day — roughly 100 searches.

---

## 🚀 Deploy to Vercel

```bash
npm i -g vercel
vercel
# Set NEXT_PUBLIC_YOUTUBE_API_KEY in Vercel dashboard → Settings → Environment Variables
```
