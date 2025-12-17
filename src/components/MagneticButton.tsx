import React, { useRef, useEffect, ReactNode } from 'react';
import { gsap } from '@/utils/gsap-config';
import { prefersReducedMotion } from '@/utils/motion-preference';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 0.3,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const quickToX = useRef<gsap.QuickToFunc | null>(null);
  const quickToY = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !buttonRef.current) return;

    const button = buttonRef.current;
    
    quickToX.current = gsap.quickTo(button, 'x', { duration: 0.5, ease: 'elastic.out(1, 0.3)' });
    quickToY.current = gsap.quickTo(button, 'y', { duration: 0.5, ease: 'elastic.out(1, 0.3)' });

    let throttleTimeout: NodeJS.Timeout | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (throttleTimeout) return;
      
      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
      }, 16);

      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      quickToX.current?.(deltaX);
      quickToY.current?.(deltaY);
    };

    const handleMouseLeave = () => {
      quickToX.current?.(0);
      quickToY.current?.(0);
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, [strength]);

  return (
    <div ref={buttonRef} className={`inline-block ${className}`}>
      {children}
    </div>
  );
};
