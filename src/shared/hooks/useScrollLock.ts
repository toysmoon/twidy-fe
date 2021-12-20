import { useEffect } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

function useScrollLock(enabled: boolean = false) {
  useEffect(() => {
    if (enabled) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }

    return () => enablePageScroll();
  }, [enabled]);
}

export default useScrollLock;
