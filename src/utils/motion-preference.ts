// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get animation duration based on motion preference
export const getAnimationDuration = (normal: number, reduced: number = 0): number => {
  return prefersReducedMotion() ? reduced : normal;
};

// Get animation config based on motion preference
export const getMotionConfig = () => {
  const reduced = prefersReducedMotion();
  return {
    reduced,
    duration: reduced ? 0.1 : 0.8,
    stagger: reduced ? 0 : 0.1,
    ease: reduced ? 'none' : 'power2.out',
  };
};
