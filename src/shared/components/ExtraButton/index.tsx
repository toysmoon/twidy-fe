import { useEffect, useState } from 'react';
import GoogleForm from './GoogleForm';
import ScrollToTop from './ScrollToTop';

export default function ExtraButton() {
  const [onScroll, setOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return onScroll ? <ScrollToTop /> : <GoogleForm />;
}
