
import { useEffect } from 'react';

export const useLenis = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      const lenis = new window.Lenis({
        duration: 3.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 0.8,
        smoothTouch: false,
        touchMultiplier: 2
      });
      (window as any).lenis = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      // Clean up global lenis instance if needed
      if ((window as any).lenis) {
        (window as any).lenis.destroy();
        delete (window as any).lenis;
      }
    };
  }, []);
};
