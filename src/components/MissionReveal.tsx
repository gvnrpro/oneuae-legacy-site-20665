import React, { useRef, useLayoutEffect } from 'react';
import { gsap, ScrollTrigger } from '@/utils/gsap-config';
import { prefersReducedMotion } from '@/utils/motion-preference';

export const MissionReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !circleRef.current || !textRef.current) return;

    if (prefersReducedMotion()) {
      // Simple fade for reduced motion
      gsap.set(circleRef.current, { scale: 1, borderRadius: '24px' });
      gsap.set(textRef.current, { autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
        },
      });

      // Scale circle from small to fullscreen
      tl.fromTo(
        circleRef.current,
        { 
          scale: 0.1, 
          borderRadius: '50%',
        },
        { 
          scale: 1.5, 
          borderRadius: '24px',
          duration: 1,
          ease: 'power2.inOut',
        }
      );

      // Fade in text during scale
      tl.fromTo(
        textRef.current?.children || [],
        { 
          y: 30, 
          autoAlpha: 0 
        },
        { 
          y: 0, 
          autoAlpha: 1, 
          stagger: 0.1,
          duration: 0.3,
        },
        0.3
      );

      // Continue slight zoom
      tl.to(
        circleRef.current,
        { 
          scale: 1.6,
          duration: 0.3,
        }
      );

      // Fade out
      tl.to(
        [circleRef.current, textRef.current],
        { 
          autoAlpha: 0,
          duration: 0.3,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-background"
    >
      {/* Circle element */}
      <div
        ref={circleRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-card"
        style={{ transformOrigin: 'center center' }}
      />

      {/* Text overlay */}
      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4"
      >
        <span className="editorial-label text-primary mb-4">Our Mission</span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4">
          Celebrating Excellence
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
          Honoring visionary leaders who shape the future of business in the UAE
        </p>
      </div>
    </section>
  );
};
