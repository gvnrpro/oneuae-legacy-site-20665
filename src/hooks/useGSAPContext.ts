import { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/utils/gsap-config';

export const useGSAPContext = (callback: (ctx: gsap.Context) => void, deps: any[] = []) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(callback, ref.current);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => {
        if (ref.current?.contains(trigger.trigger as Element)) {
          trigger.kill();
        }
      });
    };
  }, deps);

  return ref;
};

export { gsap, ScrollTrigger };
