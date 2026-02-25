"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Screenshot = {
  src: string;
  alt: string;
  label?: string;
};

type AppScreenshotCarouselProps = {
  screenshots: Screenshot[];
  autoPlayMs?: number;
  className?: string;
};

export function AppScreenshotCarousel({
  screenshots,
  autoPlayMs = 4000,
  className = "",
}: AppScreenshotCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!screenshots.length || isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, autoPlayMs);
    return () => window.clearInterval(timer);
  }, [autoPlayMs, isPaused, screenshots.length]);

  if (!screenshots.length) {
    return null;
  }

  const active = screenshots[activeIndex];

  return (
    <section
      className={`rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      aria-label="Matcha app screenshots"
    >
      <div className="relative overflow-hidden rounded-xl bg-slate-50">
        <div className="relative h-[520px] w-full sm:h-[640px]">
          <Image
            src={active.src}
            alt={active.alt}
            fill
            className="object-contain p-2 sm:p-4"
            sizes="(max-width: 640px) 100vw, 900px"
            priority={activeIndex === 0}
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 py-3 text-white">
          <p className="text-sm font-medium">{active.label || "Matcha app preview"}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() =>
            setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
          }
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
          aria-label="Previous screenshot"
        >
          Prev
        </button>

        <div className="flex items-center gap-2" aria-label="Carousel indicators">
          {screenshots.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? "w-6 bg-slate-900" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActiveIndex((prev) => (prev + 1) % screenshots.length)}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
          aria-label="Next screenshot"
        >
          Next
        </button>
      </div>
    </section>
  );
}
