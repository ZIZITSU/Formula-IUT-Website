import { useRef } from "react";
import {
  motion as Motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const SPRING = { stiffness: 300, damping: 25, mass: 0.5 };

/**
 * "3D scroll card": flips up into view on scroll (staggered by `index`),
 * then tilts toward the pointer on hover with a soft glare highlight.
 * Degrades to a plain fade-in with no tilt under prefers-reduced-motion.
 */
export default function TiltCard({ children, index = 0, className = "", onClick }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springX = useSpring(px, SPRING);
  const springY = useSpring(py, SPRING);

  const rotateX = useTransform(springY, [0, 1], [10, -10]);
  const rotateY = useTransform(springX, [0, 1], [-10, 10]);
  const glareX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(springY, [0, 1], ["0%", "100%"]);

  function handlePointerMove(e) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <Motion.div
      ref={ref}
      className={`group relative ${className}`}
      style={{ perspective: 800 }}
      initial={{ opacity: 0, rotateX: prefersReducedMotion ? 0 : -15, y: 30 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.06, 0.4),
        ease: [0.16, 1, 0.3, 1],
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
    >
      <Motion.div
        className="relative h-full overflow-hidden"
        style={
          prefersReducedMotion
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
      >
        {children}
        {!prefersReducedMotion && (
          <Motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(180px circle at ${glareX} ${glareY}, rgba(255,255,255,0.12), transparent 70%)`,
            }}
          />
        )}
      </Motion.div>
    </Motion.div>
  );
}
