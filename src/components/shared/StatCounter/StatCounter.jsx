import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useReducedMotion, animate } from "framer-motion";

/**
 * Counts up from 0 to `value` once it scrolls into view. Snaps straight to
 * the final value under prefers-reduced-motion instead of animating.
 */
export default function StatCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const spanRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const count = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      if (spanRef.current) spanRef.current.textContent = `${value}${suffix}`;
      return;
    }
    const controls = animate(count, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (spanRef.current) {
          spanRef.current.textContent = `${Math.round(latest)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [isInView, prefersReducedMotion, value, suffix, count]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center">
      <span
        ref={spanRef}
        className="tabular-nums font-display text-4xl font-bold text-white sm:text-5xl"
      >
        0{suffix}
      </span>
      <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
        {label}
      </span>
    </div>
  );
}
