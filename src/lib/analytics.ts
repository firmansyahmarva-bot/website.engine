'use client';

/**
 * Lightweight Google Analytics 4 event dispatcher.
 * No-ops safely if gtag is not defined (e.g. ad blockers or unset GA ID).
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean | undefined>
): void {
  if (typeof window === 'undefined') return;

  try {
    const w = window as any;
    if (typeof w.gtag === 'function') {
      w.gtag('event', eventName, eventParams);
    } else if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    }
  } catch (err) {
    // Fail silently in production
    console.debug('Analytics trackEvent failed:', err);
  }
}
