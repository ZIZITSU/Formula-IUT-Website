import { motion as Motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Thin fixed progress bar across the very top of the viewport, tracking
 * scroll depth of the whole page — a small "telemetry" touch. Hidden
 * under prefers-reduced-motion since it's purely decorative.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <Motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-f1-red origin-left z-[60] pointer-events-none"
      style={{ scaleX }}
    />
  );
}
