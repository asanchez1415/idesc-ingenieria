import { useEffect, useRef, useState } from 'react';

export function useInView<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (!ref.current || hasBeenInView) return;
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasBeenInView(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [options, hasBeenInView]);

  return { ref, isInView: hasBeenInView };
}
