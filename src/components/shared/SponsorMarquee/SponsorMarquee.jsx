/**
 * Infinite horizontal scroll of sponsor logos. Pure CSS keyframe animation
 * (see .marquee-track in index.css) so it never blocks the main thread;
 * pauses automatically under prefers-reduced-motion.
 */
export default function SponsorMarquee({ logos }) {
  const track = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="marquee-track flex w-max items-center gap-16 py-4">
        {track.map((logo, i) => (
          <img
            key={`${logo.alt}-${i}`}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="h-12 w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-16"
          />
        ))}
      </div>
    </div>
  );
}
