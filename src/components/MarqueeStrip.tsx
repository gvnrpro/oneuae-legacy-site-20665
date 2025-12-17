import React, { useRef, useLayoutEffect } from 'react';
import { gsap, ScrollTrigger } from '@/utils/gsap-config';
import { prefersReducedMotion } from '@/utils/motion-preference';

const row1Content = "GROWTH · INNOVATION · LEADERSHIP · EXCELLENCE · NOMINATIONS OPEN · ";
const row2Content = "JAN 4, 2026 · ZABEEL LADIES CLUB · DUBAI · 18 CATEGORIES · ";
const row3Content = "ONE UAE · BUSINESS AWARDS · CELEBRATING EXCELLENCE · ";

export const MarqueeStrip: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Base animations
      const tl1 = gsap.to(row1Ref.current, {
        xPercent: -50,
        duration: 30,
        ease: 'none',
        repeat: -1,
      });

      const tl2 = gsap.to(row2Ref.current, {
        xPercent: 50,
        duration: 25,
        ease: 'none',
        repeat: -1,
      });

      const tl3 = gsap.to(row3Ref.current, {
        xPercent: -50,
        duration: 35,
        ease: 'none',
        repeat: -1,
      });

      // Scroll velocity response
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity()) / 1000;
          const timeScale = Math.min(1 + velocity * 0.5, 3);
          
          tl1.timeScale(timeScale);
          tl2.timeScale(timeScale);
          tl3.timeScale(timeScale);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative py-8 overflow-hidden bg-background border-y border-border/20"
    >
      {/* Row 1 - Outline text, moving left */}
      <div className="relative whitespace-nowrap mb-4">
        <div 
          ref={row1Ref}
          className="inline-block text-4xl md:text-5xl font-serif tracking-wider"
          style={{
            WebkitTextStroke: '1px hsl(var(--primary))',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {row1Content.repeat(4)}
        </div>
      </div>

      {/* Row 2 - Gold gradient text, moving right */}
      <div className="relative whitespace-nowrap mb-4">
        <div 
          ref={row2Ref}
          className="inline-block text-3xl md:text-4xl font-serif tracking-wider bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
          style={{ transform: 'translateX(-50%)' }}
        >
          {row2Content.repeat(4)}
        </div>
      </div>

      {/* Row 3 - Muted text, moving left slower */}
      <div className="relative whitespace-nowrap">
        <div 
          ref={row3Ref}
          className="inline-block text-2xl md:text-3xl font-serif tracking-wider text-muted-foreground/40"
        >
          {row3Content.repeat(4)}
        </div>
      </div>
    </section>
  );
};
