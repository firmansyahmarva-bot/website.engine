'use client';

import React, { useRef, useState, useCallback } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Max rotation in degrees — keep subtle (6-10) for a professional feel */
  maxTilt?: number;
}

/**
 * Wraps a card so it tilts slightly toward the cursor in 3D — used on
 * browse/discovery grids (designs, industries) where a premium feel
 * matters more than density. NOT used on dense utility grids (tools),
 * where a plain Reveal is used instead so the page reads more "functional".
 */
export default function TiltCard({ children, className = '', maxTilt = 6 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setStyle({
        transform: `perspective(800px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg) translateZ(0)`,
      });
    },
    [maxTilt, reduced]
  );

  const handleLeave = useCallback(() => {
    setStyle({ transform: 'perspective(800px) rotateY(0deg) rotateX(0deg)' });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`transition-transform duration-200 ease-out [transform-style:preserve-3d] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
