import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      let cancelled = false;
      let lastTop = -1;
      let stableCount = 0;
      let timeoutId = 0;

      const check = () => {
        if (cancelled) return;
        const el = document.querySelector(hash);
        if (!el) return;

        const currentTop = el.getBoundingClientRect().top + window.scrollY;
        if (Math.abs(currentTop - lastTop) < 1) {
          stableCount++;
        } else {
          stableCount = 0;
        }
        lastTop = currentTop;

        if (stableCount >= 3) {
          const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
          window.scrollTo({ top: currentTop - headerHeight - 12, behavior: 'smooth' });
          return;
        }
        timeoutId = window.setTimeout(check, 40);
      };

      timeoutId = window.setTimeout(check, 40);
      return () => {
        cancelled = true;
        window.clearTimeout(timeoutId);
      };
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
