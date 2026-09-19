'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in ms — pass idx * 80 inside a .map() for cascading grids */
  delay?: number;
  direction?: Direction;
  className?: string;
  /** Lower = triggers earlier while scrolling */
  threshold?: number;
  as?: React.ElementType;
}

const OFFSETS: Record<Direction, string> = {
  up: 'translate-y-6',
  down: '-translate-y-6',
  left: 'translate-x-6',
  right: '-translate-x-6',
  none: '',
};

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  threshold = 0.15,
  as = 'div',
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>(threshold);
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${OFFSETS[direction]}`
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
