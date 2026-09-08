import { useRef } from 'react';
import { motion as Motion, useScroll, useReducedMotion } from 'framer-motion';
import Reveal from '../../../components/shared/Reveal/Reveal';

const MILESTONES = [
    {
        year: '2022',
        title: 'Formula Student UK — Finalist',
        text: 'Formula IUT was selected as a finalist at Formula Student UK 2022, the team’s first major international milestone.',
    },
    {
        year: '2023',
        title: 'Formula Bharat — 3rd in Static Round',
        text: 'Competing against 50 university teams from different countries, Formula IUT secured 3rd position in the Static Round of Formula Bharat 2023, with strong design, cost analysis, and business planning.',
    },
    {
        year: '2024',
        title: 'Formula Imperial — 7th Overall',
        text: 'The team qualified for the final round of Formula Imperial 2024 and finished in 7th position.',
    },
    {
        year: '2025',
        title: 'Formula Student China — 2nd Best Foreign Team',
        text: 'Formula IUT’s first on-site international participation with its car: named 2nd Best Foreign Team, placed 8th in the Business Plan Presentation, and earned three technical recognition stickers at Formula Student China 2025.',
    },
    {
        year: '2026',
        title: 'FSUK Sim Racing — 9th of 72',
        text: 'At the Formula Student UK 2026 Sim Racing Series, hosted at Williams F1 HQ, Formula IUT placed 9th out of 72 universities worldwide and earned praise from motorsport judges on its Race Engineering debut. Next stop: Formula Student China 2026.',
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
                <p className="text-zinc-400 mt-3 max-w-xl mx-auto text-sm">
                    From a first UK finalist spot to racing our own car on the international stage.
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
