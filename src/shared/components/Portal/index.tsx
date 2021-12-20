import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  selector?: string;
}

export default function Portal({ children, selector = 'body' }: PortalProps) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (selector) {
      ref.current = document.querySelector(selector);
    }

    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}
