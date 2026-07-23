import { motion, useReducedMotion } from "framer-motion";

/**
 * Generic scroll-entrance wrapper: fades + slides up once the element
 * scrolls into view. Falls back to a plain fade under prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  as = "div",
  once = true,
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
