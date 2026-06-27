# Project Memory: Chen Lijun Portfolio

## Goal

Build a clean, high-end personal portfolio website for Chen Lijun, a fresh graduate focused on B2B content growth, user conversion journey design, product/operation thinking, and AI-driven growth operation systems.

The site should feel like a curated portfolio/creative studio website rather than a template or resume page. It should show both strategy and evidence:

- AI operation system design
- B2B content growth
- Account operation and high-performing notes
- Copywriting and campaign planning
- Product operation and growth funnel thinking
- Visual layout, WeChat article production, PPT/report design, shooting/editing placeholders

## Tech Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Local static assets under `public/images`

Important: `npm run build` uses `next build --webpack` because Turbopack build may fail in restricted local environments when spawning helper processes. `npm run dev` can still be used for preview.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

Expected preview URL:

```text
http://localhost:3000
```

## Current Structure

```text
app/
  layout.tsx        metadata and root layout
  page.tsx          page assembly
  globals.css       global design tokens and section utilities
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  FeaturedWork.tsx
  EvidenceStudio.tsx
  Skills.tsx
  Contact.tsx
  Footer.tsx
  Reveal.tsx        Framer Motion scroll reveal wrapper
data/
  projects.ts       selected project data
  skills.ts         capability groups and metrics
  evidence.ts       evidence gallery and reserved slots
public/images/
  copied portfolio evidence assets
  design-layout/       posters, campus activity layouts, recruitment visuals
  wechat-editorial/    WeChat account and article screenshots
  commercial-posters/  product/brand poster experiments
  report-decks/        exported deck cover previews
public/docs/
  full-plans/          full PDF plans converted from DOCX
  presentations/       PPTX originals and PDF exports
```

## Design Direction

Use a restrained editorial look:

- Cream base background, black typography
- Muted pink and muted blue accents
- Large uppercase English headings
- Spacious layout with a max width around 1700px
- Real evidence images shown as complete originals, not cropped or covered
- Cards are acceptable for repeated work/evidence items, but avoid nested card-heavy layouts
- Avoid decorative clutter and avoid making the page look like a generic template

Motion direction:

- Hero title uses mask-like strong entrance through Framer Motion
- Section content reveals with slow, smooth easing
- No cheap bounce effects
- Respect `prefers-reduced-motion`

## Content Positioning

Use first-person language where appropriate. Chen Lijun's core positioning:

```text
我是一名应届毕业生，专注于 B2B 内容增长、用户转化链路设计与 AI 驱动运营系统构建。
我关注的不是简单内容传播，而是如何将内容转化为可持续增长系统，并实现可量化的业务结果。
```

Key experience:

- 佛山新基地实业集团，内容运营 & 增长策略实习生，2025.01-2025.08
- 广东佛燃科技有限公司，内容运营 & SEO增长实习生，2024.06-2024.09
- AI Growth Experiment Lab, Dify Workflow + RAG + Multi-Agent

Key results:

- 20万+ 内容曝光
- 58% 新媒体渠道访客占比
- 460+ B端有效线索
- 70+ 企业入驻转化
- 500+ 工业客户询盘
- 210万+ KOL传播曝光

## Evidence Rules

Uploaded proof assets should be placed into the correct ability sections, not dumped into one mixed gallery.

Current evidence groups in `data/evidence.ts`:

- 账号运营优质笔记
- 文案写作能力
- 运营能力展示
- 设计排版能力
- 推文制作
- 小组报告PPT
- 拍摄剪辑能力

Important image requirement from the user:

- Show uploaded screenshots as original images.
- Do not crop important information.
- Do not overlay text on top of evidence images.
- Use `object-contain` for screenshots or document images.

## Current Assets

These assets are already copied into `public/images`:

- `energy-routes-xhs.jpg`
- `hydrogen-report-xhs.jpg`
- `energy-chain-xhs.jpg`
- `disney-plush-xhs.png`
- `campus-cultural-festival-page.png`
- `brand-marketing-plan-pages.png`
- `project-growth.svg`
- `project-park.svg`
- `project-energy.svg`
- `portrait-abstract.svg`
- `hero-motion.webm`

New categorized evidence assets:

- `design-layout/autumn-market-poster.jpeg`
- `design-layout/student-union-recruitment.jpeg`
- `design-layout/seaside-concert-poster.jpeg`
- `design-layout/light-in-motion-poster.jpg`
- `wechat-editorial/article-list-operation.png`
- `wechat-editorial/color-run-article.png`
- `commercial-posters/spring-heart-dream-poster.jpg`
- `commercial-posters/jellycat-sleepover-poster.png`
- `commercial-posters/coca-cola-summer-poster.png`
- `report-decks/pet-paradise-deck-cover.png`

Full document assets:

- `docs/full-plans/startup-plan.pdf`
- `docs/full-plans/business-plan.pdf`
- `docs/full-plans/color-run-plan.pdf`
- `docs/presentations/pet-paradise-deck.pptx`
- `docs/presentations/pet-paradise-deck.pdf`

## What Is Done

- New Next.js project scaffolded at `leanne-portfolio`
- Framer Motion installed
- Main portfolio homepage implemented
- Evidence gallery implemented with clean categories
- Real uploaded evidence assets migrated into `public/images`
- Lint passes
- Production build passes using webpack

## Next Recommended Tasks

- Replace placeholder contact email in `Navbar.tsx` and `Contact.tsx`
- Upload missing evidence for PPT reports, shooting/editing, and deeper operation process documents
- Add a dedicated project detail page for AI Growth Decision System if needed
- Add mobile QA and browser screenshot verification
- Optionally create a GitHub remote or handoff branch for collaborator workflow

## Git Practice

Keep commits atomic:

- one commit for content/data updates
- one commit for visual style updates
- one commit for interaction/motion updates
- one commit for asset organization

Before handoff:

```bash
npm run lint
npm run build
git status
```
