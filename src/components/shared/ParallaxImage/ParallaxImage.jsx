import { useRef } from 'react';
import { motion as Motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Image that drifts vertically at a different rate than the page scroll,
 * giving a subtle depth/parallax feel. The image is pre-scaled so the
 * drift never reveals empty edges. No-ops under prefers-reduced-motion.
 */
export default function ParallaxImage({ src, alt, className = '', strength = 36 }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <Motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={prefersReducedMotion ? undefined : { y, scale: 1.18 }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
