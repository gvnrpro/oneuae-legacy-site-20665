import React, { useRef, useLayoutEffect } from 'react';
import { gsap, ScrollTrigger } from '@/utils/gsap-config';
import { prefersReducedMotion } from '@/utils/motion-preference';

const row1Content = "GROWTH · INNOVATION · LEADERSHIP · EXCELLENCE · ";
const row2Content = "FEB 5, 2026 · ZABEEL LADIES CLUB · DUBAI · 18 CATEGORIES · ";

export const MarqueeStrip: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Smooth continuous scroll animation
      gsap.to(row1Ref.current, {
        xPercent: -50,
        duration: 40,
        ease: 'none',
        repeat: -1,
      });

      gsap.to(row2Ref.current, {
        xPercent: 50,
        duration: 35,
        ease: 'none',
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-6 overflow-hidden bg-secondary/30 border-y border-border/10"
    >
      {/* Row 1 - Outline text, moving left */}
      <div className="relative whitespace-nowrap mb-3">
        <div
          ref={row1Ref}
          className="inline-block text-2xl md:text-3xl font-display tracking-[0.15em] uppercase"
          style={{
            WebkitTextStroke: '1px hsl(var(--primary) / 0.4)',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {row1Content.repeat(6)}
        </div>
      </div>

      {/* Row 2 - Gold gradient text, moving right */}
      <div className="relative whitespace-nowrap">
        <div
          ref={row2Ref}
          className="inline-block text-lg md:text-xl font-display tracking-[0.2em] uppercase text-primary/60"
          style={{ transform: 'translateX(-50%)' }}
        >
          {row2Content.repeat(6)}
        </div>
      </div>
    </section>
  );
};
