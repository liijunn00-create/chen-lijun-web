"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative min-h-screen overflow-hidden px-5 pt-28 sm:px-8">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-35 saturate-[0.75]"
        src="/images/hero-motion.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(246,241,236,0.78),rgba(237,219,229,0.58)_46%,rgba(196,212,226,0.6))]" />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1700px] flex-col justify-end pb-14">
        <div className="glass-panel-strong mb-16 grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:p-14">
          <div>
            <motion.p
              className="mb-7 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#6c6b66]"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              AI运营 / 作品集证据 / B2B增长
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1
                className="max-w-[1180px] text-[clamp(2.8rem,6.8vw,7.8rem)] font-black leading-[1.04] tracking-normal text-[#171513]"
                initial={reduceMotion ? false : { y: "110%", scaleY: 0.72 }}
                animate={reduceMotion ? undefined : { y: 0, scaleY: 1 }}
                transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
              >
                AI驱动
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="text-[clamp(2.8rem,6.8vw,7.8rem)] font-black leading-[1.04] tracking-normal text-[#171513]"
                initial={reduceMotion ? false : { y: "110%", scaleY: 0.72 }}
                animate={reduceMotion ? undefined : { y: 0, scaleY: 1 }}
                transition={{ duration: 1.25, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              >
                运营作品集
              </motion.h1>
            </div>
          </div>
          <motion.div
            className="max-w-xl border-l border-[#1e1c1a]/20 pl-6 text-[#2d2a27]"
            initial={reduceMotion ? false : { opacity: 0, x: 44 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-2xl leading-snug sm:text-3xl">
              以AI工作流、内容增长和产品运营思维为核心，将创意内容转化为可验证的增长系统。
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {["Dify工作流", "RAG知识库", "多智能体", "内容增长", "产品运营"].map((item) => (
                <span key={item} className="glass-chip px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="glass-panel grid text-sm uppercase tracking-[0.18em] text-[#5b5852] md:grid-cols-3"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="py-5 pl-5 md:border-r md:border-[#1e1c1a]/12">广东 / 应届毕业生</span>
          <span className="py-5 pl-5 md:border-r md:border-[#1e1c1a]/12 md:px-6">AI增强型运营作品集</span>
          <a href="#work" className="py-5 pl-5 transition hover:text-[#171513] md:px-6">
            查看作品
          </a>
        </motion.div>
      </div>
    </section>
  );
}
