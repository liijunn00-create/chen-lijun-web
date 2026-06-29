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
- The page order should support this priority: Hero -> Featured Work -> Core Capabilities -> Evidence Studio -> Experience Cases -> Skill Tags -> concise About -> Contact.
- AI operation capability should be expressed through the AI project cards/detail pages and reinforced by concise capability cards, not repeated as long self-introduction copy.
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
  CoreCapabilities.tsx
  FeaturedWork.tsx
  EvidenceStudio.tsx
  ExperienceCases.tsx
  SkillTags.tsx
  Contact.tsx
  Footer.tsx
  Reveal.tsx        Framer Motion scroll reveal wrapper
data/
  projects.ts       selected project data
  projectCases.ts   project detail page case data
  siteContent.ts    homepage IA copy: hero, capability cards, experience cases, skill tags, about copy
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

- Frosted-glass visual system with light silver-gray translucent panels, fine borders, backdrop blur, and controlled shadows
- Soft mixed background layers: silver gray, mist blue, pale lavender, and restrained warm orange glow
- Accent system uses pale lavender signal color, mist-blue metadata, and warm-orange light only as atmosphere
- Current frontend-design direction: position the homepage as an `AI Native operation system portfolio`, with the hero signature element as a `Growth OS Board` signal panel. This is the memorable visual risk; keep surrounding sections calmer and more editorial.
- Latest visual direction after Awwwards/reference-recording discussion: learn only the interaction atmosphere, not copyrighted images/copy/logo/layout/3D assets/code. The intended language is a light spatial portfolio with silver-gray, mist-blue, pale-lavender and warm-orange atmospheric gradients, large low-contrast ghost typography, slow system-map motion, case-study exhibit blocks, and curated evidence hierarchy.
- The homepage Hero should feel like an immersive AI Operations Portfolio cover: large whitespace, subtle experimental technology mood, System 01 / Workflow Intelligence language, original abstract nodes and linework, and slow blur-to-clear entrance motion.
- Project cards should read as system modules or operating dossiers, not generic portfolio cards.
- Featured projects now use larger case-exhibit surfaces with abstract system visuals and metrics, so future edits should avoid reverting them to ordinary list cards.
- Evidence Studio now treats each group as `one primary proof + supporting proof`, so new assets should be inserted with the strongest item first.
- Capability cards should be a matrix of ability proof; avoid arbitrary numbering unless the content is a real sequence.
- Main visible titles should be Chinese, with restrained scale and comfortable line height
- Visible titles should stay on one line when possible and should not end with punctuation such as `。`
- Use subtle emphasis for key terms with the shared `soft-mark` style; avoid loud highlight blocks or heavy badges inside body copy
- English can remain in small tool tags, framework names, links, and technical labels such as Dify, RAG, Next.js, Tailwind, or Framer Motion
- Spacious layout with a max width around 1700px
- Real evidence images shown as complete originals, not cropped or covered
- Cards are acceptable for repeated work/evidence items, but avoid nested card-heavy layouts
- Avoid decorative clutter and avoid making the page look like a generic template
- Use shared glass utility classes from `app/globals.css` (`glass-panel`, `glass-panel-strong`, `glass-chip`, `glass-dark`) for new cards and major surfaces

Motion direction:

- Hero title uses CSS-based mask-like entrance with visible-by-default fallback
- Section content reveals use visible-by-default CSS motion, not Framer initial opacity hiding
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
- `ai-projects/growth-os/test-output/contentpilot-business-insight.png`
- `ai-projects/growth-os/test-output/contentpilot-diagnosis.png`
- `ai-projects/growth-os/test-output/contentpilot-experiment-design-1.png`
- `ai-projects/growth-os/test-output/contentpilot-materials-1.png`
- `ai-projects/growth-os/test-output/contentpilot-materials-2.png`
- `ai-projects/growth-os/test-output/contentpilot-metrics.png`
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

## Hero 改版记录(2026-06-29)

目的:把单屏 13 节点的拥挤 Hero 拆为「屏 1 封面 + 屏 2 状态板」两屏,采用 5 段 2.4s 入场编排,营造「录屏感」开场。

改动文件:
- `components/Hero.tsx`:重写为两屏结构。屏 1 保留 chip / 大标题 2 行 / 副标题 / 中心核 / 4 浮动信号点 / 底部状态条;屏 2 渲染「系统状态 / 运营系统的运行证据」+ 3 张数据卡(`stats.slice(0,3)`)+ 3 张能力卡(`capabilityCards.slice(0,3)`),`id="status"`。
- `app/globals.css`:删除 11 个老装饰类(`.hero-ghost-word` / `.hero-sphere-*` / `.cover-board` / `.unlock-ring` / `.floating-module` / `.cover-paths` / `.cover-node` / `.cover-core` / `.hero-status-chip` / `.hero-mini-card` / `.workflow-token` 等)与对应 keyframes(`hero-rise` / `hero-soft-in` / `path-drift` / `field-drift` / `ghost-drift` / `slow-spin` / `ambient-float` / `node-float` / `core-breathe`)。新增 `.cover-opening` / `.cover-video` / `.cover-field` / `.cover-stage-wrap` / `.cover-chip` / `.cover-title` / `.cover-clip-line` / `.cover-subline` / `.cover-core` / `.cover-core-ring` / `.cover-core-text` / `.cover-signal-layer` / `.cover-signal-dot` / `.cover-signal-text` / `.cover-status-line` / `.cover-status-dot` / `.cover-section-title` / `.cover-stat-grid` / `.cover-stat` / `.cover-capability-grid` / `.cover-capability` 等。新增 keyframes:`cover-clip-rise` / `cover-core-bloom` / `cover-signal-fade-in` / `cover-status-fade` / `cover-field-drift` / `cover-ring-spin` / `cover-fade-in-soft`。

5 段编排:
- 0–0.4s:L1 标题 `clip-path: inset(0 0 100% 0 → 0)` 从底部揭开
- 0.4–0.9s:L2 副标题同上
- 0.9–1.3s:停帧(关键节奏)
- 1.3–1.7s:中心核 `scale(0.88 → 1)` + opacity 0→1
- 1.7–2.4s:4 个浮动信号点 stagger(0.15s 间隔)+ 状态条 fade

屏 2 stagger:
- kicker 2.4s
- title 2.45s
- desc 2.5s
- 3 数据卡 2.5 / 2.6 / 2.7s
- 3 能力卡 2.8 / 2.9 / 3.0s

响应式:
- `< 1023px`:隐藏 `.cover-signal-dot-2` 和 `.cover-signal-dot-4`,只留 Knowledge / Workflow
- `< 639px`:3 张数据卡 / 3 张能力卡 stack 为单列
- `prefers-reduced-motion`:全局降级到 0.01ms(原站既有)

数据源:
- `data/siteContent.ts` → `heroContent`(kicker / titleLines / subtitle)、`capabilityCards`(取前 3)
- `data/skills.ts` → `stats`(取前 3)

已知约束:
- 沿用项目内统一的 CSS + framer-motion 12,不引入 GSAP
- 沿用 `--font-sans`,不引入新字体
- 沿用 root tokens 配色,不动 `:root` 段
- 屏 2 stagger 当前为「首屏 2.4s 后入场」,与项目内 60+ 个 `<Reveal>` 的「即时进场」传统一致;若未来要做「滚动到 60% 触发」,需要扩展 `<Reveal>` 增加 `useInView` 行为,不可只在 Hero 内改

不要轻易删除这些类(后续如果有人觉得 cover 装饰太轻):
- `.cover-core` / `.cover-core-ring` 是「AI 系统 / 知识解锁 / 工作流智能」语义的可视化锚点
- `.cover-signal-dot` 与屏 2 3 张能力卡(AI 运营系统设计 / 内容运营与平台策略 / 增长实验与指标意识)的能力来源对齐,删了之后视觉上 4 个核心词会失去支撑
