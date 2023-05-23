import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Hace scroll a la posición (0, 0) (parte superior de la página)
  }, []);

  return null;
};

export default ScrollToTop;