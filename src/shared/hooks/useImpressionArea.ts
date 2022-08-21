import { useEffect, useRef } from 'react';

export function useImpressionArea({ onDisplay }: { onDisplay: () => void }) {
  const targetElement = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (targetElement.current == null) {
      return;
    }

    const interactionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          onDisplay();
        }
      });
    });

    interactionObserver.observe(targetElement.current);
    return () => interactionObserver.disconnect();
  }, [targetElement, onDisplay]);

  return targetElement;
}
