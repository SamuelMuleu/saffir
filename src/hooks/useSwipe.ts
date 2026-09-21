import { useRef } from 'react';
import type { TouchEvent } from 'react';

const SWIPE_THRESHOLD = 40; // px mínimos de arrasto para considerar um swipe

/**
 * Detecta swipe horizontal por toque (mobile) e dispara os callbacks
 * correspondentes. Retorna os handlers prontos para espalhar num elemento
 * (section, div, etc).
 */
export function useSwipe(onSwipeLeft: () => void, onSwipeRight: () => void) {
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const onTouchStart = (e: TouchEvent) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };

  const onTouchMove = (e: TouchEvent) => {
    if (startX.current === null) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };

  const onTouchEnd = () => {
    if (deltaX.current < -SWIPE_THRESHOLD) {
      onSwipeLeft();
    } else if (deltaX.current > SWIPE_THRESHOLD) {
      onSwipeRight();
    }
    startX.current = null;
    deltaX.current = 0;
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
}
