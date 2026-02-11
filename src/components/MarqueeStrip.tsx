import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from '@/utils/gsap-config';
import { prefersReducedMotion } from '@/utils/motion-preference';

const row1Content = "GROWTH · INNOVATION · LEADERSHIP · EXCELLENCE · ";
const row2Content = "27 HONOUREES · 18 CATEGORIES · 750+ GUESTS · DUBAI · ";
const row3Content = "AHMED LAMRAOUI · DR AL NUAIMI · FRANCIS LAPP · T.P. JAMALUDEEN · GULF CRAFT · VISTAJET · SONIA CABALLERO · ";

export const MarqueeStrip: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
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

      gsap.to(row3Ref.current, {
        xPercent: -50,
        duration: 45,
        ease: 'none',
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-8 overflow-hidden bg-secondary/30 border-y border-border/10"
    >
      {/* Edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />

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
      <div className="relative whitespace-nowrap mb-3">
        <div
          ref={row2Ref}
          className="inline-block text-lg md:text-xl font-display tracking-[0.2em] uppercase text-primary/60"
          style={{ transform: 'translateX(-50%)' }}
        >
          {row2Content.repeat(6)}
        </div>
      </div>

      {/* Row 3 - Muted awardee names, moving left */}
      <div className="relative whitespace-nowrap">
        <div
          ref={row3Ref}
          className="inline-block text-sm md:text-base font-sans tracking-[0.15em] uppercase text-muted-foreground/30"
        >
          {row3Content.repeat(6)}
        </div>
      </div>
    </section>
  );
};
