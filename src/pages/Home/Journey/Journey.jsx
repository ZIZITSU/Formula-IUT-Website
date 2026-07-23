import { useRef } from 'react';
import { motion as Motion, useScroll, useReducedMotion } from 'framer-motion';
import Reveal from '../../../components/shared/Reveal/Reveal';

const MILESTONES = [
    {
        year: '2023',
        title: 'Team Founded',
        text: 'A group of students came together to start Formula IUT with one goal: build a competitive FSAE car from the ground up.',
    },
    {
        year: '2024',
        title: 'First Chassis Built',
        text: 'The team designed and manufactured its first in-house chassis, moving from concept sketches to a rolling prototype.',
    },
    {
        year: '2025',
        title: 'First Competition Entry',
        text: 'Formula IUT entered its first FSAE competition, putting the car and the team through static and dynamic events.',
    },
    {
        year: '2026',
        title: "What's Next",
        text: 'This is where the next milestone goes — a new subsystem, a competition result, a record lap. Add it here.',
    },
];

function MilestoneCard({ milestone }) {
    return (
        <div className="f1-card inline-block rounded-2xl p-6 md:p-7 text-left max-w-sm">
            <p className="font-display text-f1-red text-2xl md:text-3xl font-bold mb-1">{milestone.year}</p>
            <h3 className="font-display uppercase text-white text-lg md:text-xl font-bold mb-2">{milestone.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{milestone.text}</p>
        </div>
    );
}

export default function Journey() {
    const itemsRef = useRef(null);
    const prefersReducedMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: itemsRef,
        offset: ['start center', 'end center'],
    });

    return (
        <div className="max-w-4xl mx-auto">
            <Reveal className="text-center mb-16 md:mb-20">
                <p className="font-display uppercase tracking-[0.3em] text-f1-red text-sm mb-3">Our Story</p>
                <h2 className="font-display uppercase text-4xl md:text-5xl font-extrabold text-white">The Journey So Far</h2>
                <p className="text-zinc-500 mt-3 max-w-xl mx-auto text-sm">
                    <em>(Placeholder timeline &mdash; swap in the team&apos;s real milestones and dates.)</em>
                </p>
            </Reveal>

            <div ref={itemsRef} className="relative space-y-14 md:space-y-20">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-white/10 overflow-hidden">
                    {!prefersReducedMotion && (
                        <Motion.div
                            className="w-full bg-f1-red origin-top"
                            style={{ height: '100%', scaleY: scrollYProgress }}
                        />
                    )}
                </div>

                {MILESTONES.map((milestone, i) => (
                    <div
                        key={milestone.year}
                        className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-10 items-center"
                    >
                        {i % 2 === 0 ? (
                            <>
                                <Reveal className="md:text-right">
                                    <MilestoneCard milestone={milestone} />
                                </Reveal>
                                <div className="hidden md:flex w-4 h-4 rounded-full bg-f1-red ring-4 ring-black z-10" />
                                <div className="hidden md:block" />
                            </>
                        ) : (
                            <>
                                <div className="hidden md:block" />
                                <div className="hidden md:flex w-4 h-4 rounded-full bg-f1-red ring-4 ring-black z-10" />
                                <Reveal className="md:text-left">
                                    <MilestoneCard milestone={milestone} />
                                </Reveal>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
