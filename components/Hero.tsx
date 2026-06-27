"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#d9d6cf] px-5 pt-28 sm:px-8">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-35 saturate-[0.75]"
        src="/images/hero-motion.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(246,241,236,0.94),rgba(237,219,229,0.8)_46%,rgba(196,212,226,0.74))]" />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1700px] flex-col justify-end pb-14">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <motion.p
              className="mb-7 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#6c6b66]"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              AI Operation / Portfolio Evidence / B2B Growth
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1
                className="max-w-[1180px] text-[clamp(4.2rem,11vw,13.5rem)] font-black uppercase leading-[0.82] tracking-normal text-[#171513]"
                initial={reduceMotion ? false : { y: "110%", scaleY: 0.72 }}
                animate={reduceMotion ? undefined : { y: 0, scaleY: 1 }}
                transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
              >
                Growth
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="text-[clamp(4.2rem,11vw,13.5rem)] font-black uppercase leading-[0.82] tracking-normal text-[#171513]"
                initial={reduceMotion ? false : { y: "110%", scaleY: 0.72 }}
                animate={reduceMotion ? undefined : { y: 0, scaleY: 1 }}
                transition={{ duration: 1.25, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              >
                Operator
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
              我是陈丽君。我用AI工作流、内容增长和产品运营思维，把创意内容转化为可验证的增长系统。
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {["Dify Workflow", "RAG", "Multi-Agent", "Content Growth", "Product Operation"].map((item) => (
                <span key={item} className="border border-[#1e1c1a]/20 bg-white/30 px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="grid border-y border-[#1e1c1a]/18 text-sm uppercase tracking-[0.18em] text-[#5b5852] md:grid-cols-3"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="py-5 md:border-r md:border-[#1e1c1a]/18">Based in Guangdong</span>
          <span className="py-5 md:border-r md:border-[#1e1c1a]/18 md:px-6">AI-powered operation portfolio</span>
          <a href="#work" className="py-5 transition hover:text-[#171513] md:px-6">
            Explore portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
