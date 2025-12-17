import React, { useRef, useLayoutEffect, ReactNode } from 'react';
import { gsap, ScrollTrigger } from '@/utils/gsap-config';
import { prefersReducedMotion, getMotionConfig } from '@/utils/motion-preference';

interface GSAPRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  y?: number;
}

export const GSAPReveal: React.FC<GSAPRevealProps> = ({
  children,
  className = '',
  stagger = 0.1,
  delay = 0,
  y = 40,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const config = getMotionConfig();
    const elements = containerRef.current.children;

    if (config.reduced) {
      // Instant reveal for reduced motion
      gsap.set(elements, { autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        { 
          y: y, 
          autoAlpha: 0 
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: stagger,
          delay: delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [stagger, delay, y]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
