import type { CSSProperties } from "react";
import { Reveal } from "./Reveal";

const floatingCards = [
  {
    eyebrow: "AI Operation",
    title: "AI运营系统设计",
    detail: "Dify Workflow / RAG / Multi-Agent 思路沉淀为可执行运营流程",
    meta: "System 01",
  },
  {
    eyebrow: "Content Growth",
    title: "20万+ 内容曝光",
    detail: "围绕平台机制、选题结构与内容节奏建立增长证据",
    meta: "Reach",
  },
  {
    eyebrow: "B2B Leads",
    title: "460+ 有效线索",
    detail: "从内容触点延伸到表单、咨询、入驻与销售跟进链路",
    meta: "Conversion",
  },
  {
    eyebrow: "Visual Proof",
    title: "视觉排版与PPT",
    detail: "将方案、报告与证据素材整理成可被快速理解的展示系统",
    meta: "Design",
  },
  {
    eyebrow: "Editorial",
    title: "推文制作与文案",
    detail: "覆盖公众号、小红书、活动策划与商业内容表达",
    meta: "Copy",
  },
  {
    eyebrow: "Growth Lab",
    title: "实验与复盘意识",
    detail: "用指标、假设、测试与复盘把运营动作转化为持续优化路径",
    meta: "Iteration",
  },
];

type FloatStyle = CSSProperties & {
  "--x": string;
  "--y": string;
  "--delay": string;
  "--duration": string;
};

export function About() {
  return (
    <section id="about" className="floating-overview section-shell">
      <div className="section-grid">
        <Reveal className="floating-overview-stage">
          <div className="floating-overview-frame">
            {floatingCards.map((card, index) => (
              <article
                key={card.title}
                className={`floating-proof-card floating-proof-card-${index + 1}`}
                style={
                  {
                    "--x": `${index % 2 === 0 ? -1 : 1}`,
                    "--y": `${index % 3 === 0 ? -1 : 1}`,
                    "--delay": `${index * -0.9}s`,
                    "--duration": `${10 + index * 1.3}s`,
                  } as FloatStyle
                }
              >
                <span className="floating-proof-eyebrow">{card.eyebrow}</span>
                <h2>{card.title}</h2>
                <p>{card.detail}</p>
                <span className="floating-proof-meta">{card.meta}</span>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
