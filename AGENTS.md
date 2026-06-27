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

Current positioning priority:

- Keep personal profile and internship history concise.
- Put the strongest visual and content weight on project work, portfolio evidence, and capability proof.
- The most important differentiator is Chen Lijun's ability to use AI tools for operations: Dify Workflow, RAG, Multi-Agent thinking, Prompt Engineering, AIGC content production, structured output, and AI-assisted growth experiments.
- The page order should support this priority: Hero -> Featured Work -> Evidence Studio -> concise About -> Contact. AI operation capability should be expressed through the AI project cards and detail pages, not through a separate repeated capability section.
- The two AI projects should be framed as one AI Native operation system portfolio: `AI增长决策系统` represents the strategy/decision layer, while `AI内容矩阵自动化工作流` represents the execution/content-production layer.

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
  projects/
    growth-os/page.tsx
    ai-content-matrix/page.tsx
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  FeaturedWork.tsx
  EvidenceStudio.tsx
  Contact.tsx
  Footer.tsx
  Reveal.tsx        Framer Motion scroll reveal wrapper
data/
  projects.ts       selected project data
  projectCases.ts   project detail page case data
  skills.ts         capability groups and metrics
  evidence.ts       evidence gallery and reserved slots
public/images/
  copied portfolio evidence assets
  design-layout/       posters, campus activity layouts, recruitment visuals
  wechat-editorial/    WeChat account and article screenshots
  commercial-posters/  product/brand poster experiments
  ai-projects/         AI workflow screenshots and system evidence
  report-decks/        exported deck cover previews
public/docs/
  full-plans/          full PDF plans converted from DOCX
  presentations/       PPTX originals and PDF exports
public/videos/
  video-production/    video production clips shown in portfolio cards
```

## Design Direction

Use a restrained editorial look:

- Frosted-glass visual system with light-pink translucent panels, fine borders, backdrop blur, and controlled shadows
- Muted pink and muted blue background layers, black typography
- Muted pink and muted blue accents
- Main visible titles should be Chinese, with restrained scale and comfortable line height
- English can remain in small tool tags, framework names, links, and technical labels such as Dify, RAG, Next.js, Tailwind, or Framer Motion
- Spacious layout with a max width around 1700px
- Real evidence images shown as complete originals, not cropped or covered
- Cards are acceptable for repeated work/evidence items, but avoid nested card-heavy layouts
- Avoid decorative clutter and avoid making the page look like a generic template
- Use shared glass utility classes from `app/globals.css` (`glass-panel`, `glass-panel-strong`, `glass-chip`, `glass-dark`) for new cards and major surfaces

Motion direction:

- Hero title uses mask-like strong entrance through Framer Motion
- Section content reveals with slow, smooth easing
- No cheap bounce effects
- Respect `prefers-reduced-motion`

## Content Positioning

Use professional, neutral descriptions across the whole website. Avoid first-person phrasing such as `我`, `我的`, `本人`, and `自己` in visible page copy. The portfolio should read like a polished professional case archive, not a self-introduction diary.

Chen Lijun's core positioning should be expressed as:

```text
应届毕业生，专注于 B2B 内容增长、用户转化链路设计与 AI 驱动运营系统构建。
核心关注点不是简单内容传播，而是如何将内容转化为可持续增长系统，并实现可量化的业务结果。
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
- `commercial-posters/starbucks-coffee-festival-poster.png`
- `commercial-posters/coca-cola-summer-poster.png`
- `report-decks/pet-paradise-deck-cover.png`
- `report-decks/innovation-entrepreneurship-competition-cover.png`
- `video-production/douyin-short-video-script-cover.png`
- `video-production/douyin-shot-breakdown-storyboard-cover.png`
- `video-production/film-storyboard-script-cover.png`
- `ai-projects/growth-os-workflow.png`
- `ai-projects/content-matrix/content-matrix-workflow.png`
- `ai-projects/content-matrix/result-xiaohongshu-copy.png`
- `ai-projects/content-matrix/result-tags-bilibili.png`
- `ai-projects/content-matrix/result-bilibili-detail.png`
- `ai-projects/content-matrix/result-youtube-detail.png`
- `ai-projects/content-matrix/result-instagram-x.png`
- `ai-projects/content-matrix/result-x-thread-1.png`
- `ai-projects/content-matrix/result-x-thread-2.png`

Full document assets:

- `docs/full-plans/startup-plan.pdf`
- `docs/full-plans/business-plan.pdf`
- `docs/full-plans/color-run-plan.pdf`
- `docs/presentations/pet-paradise-deck.pptx`
- `docs/presentations/pet-paradise-deck.pdf`
- `docs/presentations/innovation-entrepreneurship-competition.pptx`
- `docs/presentations/innovation-entrepreneurship-competition.pdf`
- `docs/video-production/douyin-short-video-script.docx`
- `docs/video-production/douyin-short-video-script.pdf`
- `docs/video-production/douyin-shot-breakdown-storyboard.xlsx`
- `docs/video-production/douyin-shot-breakdown-storyboard.pdf`
- `docs/video-production/film-storyboard-script.docx`
- `docs/video-production/film-storyboard-script.pdf`
- `docs/ai-projects/ai-growth-experiment-report.docx`
- `videos/video-production/campus-short-video-01.mp4`
- `videos/video-production/campus-short-video-02.mp4`
- `videos/video-production/campus-short-video-03.mp4`

## What Is Done

- New Next.js project scaffolded at `leanne-portfolio`
- Framer Motion installed
- Main portfolio homepage implemented
- Evidence gallery implemented with clean categories
- Added project detail page and homepage card for `AI内容矩阵自动化工作流`
- Added project detail page, workflow screenshot, and DOCX report download for `AI增长决策系统`
- Added Dify full-chain workflow screenshot and generated output evidence screenshots for `AI内容矩阵自动化工作流`
- Real uploaded evidence assets migrated into `public/images`
- Lint passes
- Production build passes using webpack

## Next Recommended Tasks

- Replace placeholder contact email in `Navbar.tsx` and `Contact.tsx`
- Upload missing evidence for PPT reports, shooting/editing, and deeper operation process documents
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
