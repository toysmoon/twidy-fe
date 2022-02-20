import { useEffect } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

function useScrollLock(enabled: boolean = false) {
  useEffect(() => {
    if (enabled) {
      disablePageScroll(document.documentElement);
    } else {
      enablePageScroll(document.documentElement);
    }

    return () => enablePageScroll(document.documentElement);
  }, [enabled]);
}

export default useScrollLock;
