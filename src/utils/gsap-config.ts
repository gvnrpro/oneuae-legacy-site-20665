import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Default easing
gsap.defaults({
  ease: 'power2.out',
  duration: 0.8,
});

// ScrollTrigger defaults
ScrollTrigger.defaults({
  markers: false,
});

export { gsap, ScrollTrigger };
