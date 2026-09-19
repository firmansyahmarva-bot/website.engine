'use client';

import React, { useEffect, useRef } from 'react';

interface ParallaxLayerProps {
  children: React.ReactNode;
  /** Higher = moves more per scroll pixel. 0.1-0.3 reads as subtle drift, not a gimmick */
  speed?: number;
  className?: string;
}

/**
 * Moves its content vertically as the page scrolls, tied to the actual
 * scroll position (not a fixed-duration CSS loop) — this is what gives
 * "live" motion rather than a looping animation. Used for decorative
 * background elements only (blobs/glows), never for content the user
 * needs to read, since parallax on text hurts legibility.
 */
export default function ParallaxLayer({ children, speed = 0.15, className = '' }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const offset = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
