/**
 * F1 "start/finish line" style section divider: checkered-flag blocks at
 * both ends, red ruled tick lines top and bottom, and an optional centered
 * label. Used to break up sections with more visual weight than a plain line.
 */
export default function FlagDivider({ label, className = '' }) {
    return (
        <div className={`flag-divider relative h-14 md:h-16 ${className}`}>
            <div className="flag-divider-rule flag-divider-rule-top" />
            <div className="flag-divider-rule flag-divider-rule-bottom" />

            <div className="flag-divider-checker absolute left-0 top-0 bottom-0 w-14 md:w-20" />
            <div className="flag-divider-checker absolute right-0 top-0 bottom-0 w-14 md:w-20" />

            {label && (
                <div className="relative z-10 h-full flex items-center justify-center">
                    <span className="font-display uppercase tracking-[0.3em] text-xs md:text-sm text-white">
                        {label}
                    </span>
                </div>
            )}
        </div>
    );
}
