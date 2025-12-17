import React, { useRef, useLayoutEffect } from 'react';
import { gsap, ScrollTrigger } from '@/utils/gsap-config';
import { prefersReducedMotion } from '@/utils/motion-preference';

export const MissionReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    if (prefersReducedMotion()) {
      gsap.set(textRef.current, { autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'top 20%',
          scrub: 0.5,
        },
      });

      // Elegant fade and slide in for text
      tl.fromTo(
        textRef.current?.children || [],
        {
          y: 40,
          autoAlpha: 0
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power2.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-40 overflow-hidden bg-card"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />

      {/* Text content */}
      <div
        ref={textRef}
        className="relative flex flex-col items-center justify-center text-center z-10 px-6 max-w-4xl mx-auto"
      >
        <span className="editorial-label text-primary mb-6">Our Mission</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6 leading-tight">
          Celebrating Excellence
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Honoring visionary leaders who shape the future of business in the UAE
        </p>
        <div className="gold-divider mt-10" />
      </div>
    </section>
  );
};
