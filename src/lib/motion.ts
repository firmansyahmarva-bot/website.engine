export function getStaggerDelay(index: number, baseDelayMs = 60): { animationDelay: string } {
  return {
    animationDelay: `${index * baseDelayMs}ms`,
  };
}

export function formatNumberWithCommas(val: number): string {
  return val.toLocaleString('id-ID');
}

export function animateCounter({
  start = 0,
  end,
  durationMs = 1500,
  onUpdate,
  onComplete,
}: {
  start?: number;
  end: number;
  durationMs?: number;
  onUpdate: (current: number) => void;
  onComplete?: () => void;
}) {
  if (typeof window === 'undefined') {
    onUpdate(end);
    onComplete?.();
    return () => {};
  }

  let startTime: number | null = null;
  let animationFrameId: number;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / durationMs, 1);
    
    // Ease out expo formula: 1 - Math.pow(2, -10 * progress)
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const currentVal = Math.floor(start + (end - start) * eased);
    
    onUpdate(currentVal);

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(step);
    } else {
      onUpdate(end);
      onComplete?.();
    }
  };

  animationFrameId = requestAnimationFrame(step);

  return () => {
    cancelAnimationFrame(animationFrameId);
  };
}
