"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type BackgroundMusicProps = {
  src: string;
  /** 初始音量 0~1，默认 0.35（背景音乐偏轻） */
  initialVolume?: number;
};

export function BackgroundMusic({ src, initialVolume = 0.35 }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(initialVolume);
  const [showHint, setShowHint] = useState(true);

  // 同步音量到 audio 元素
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // 3 秒后自动隐藏提示气泡
  useEffect(() => {
    if (!showHint) return;
    const t = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(t);
  }, [showHint]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setShowHint(false);
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch((err) => {
        console.warn("[BackgroundMusic] 播放失败：", err);
      });
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-2 sm:bottom-7 sm:right-7">
      {showHint ? (
        <div
          className="rounded-full bg-[#171513]/85 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[#f6f1ec] shadow-lg backdrop-blur"
          style={{ animation: "fadeOut 4s ease forwards" }}
        >
          点击播放背景音乐
        </div>
      ) : null}

      <div className="flex items-center gap-2 rounded-full border border-[#171513]/12 bg-white/70 p-1.5 shadow-lg backdrop-blur-md">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "暂停背景音乐" : "播放背景音乐"}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171513] text-[#f6f1ec] transition hover:scale-105 hover:bg-[#9b84b4]"
        >
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          )}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "取消静音" : "静音"}
          className="flex h-9 w-9 items-center justify-center rounded-full text-[#403c37] transition hover:bg-[#171513]/8"
        >
          {isMuted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <line x1="22" y1="9" x2="16" y2="15" />
              <line x1="16" y1="9" x2="22" y2="15" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>

        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="音量"
          className="mr-2 h-1 w-20 cursor-pointer appearance-none rounded-full bg-[#171513]/15 accent-[#9b84b4]"
        />
      </div>

      <audio ref={audioRef} src={src} loop preload="metadata" />
    </div>
  );
}
