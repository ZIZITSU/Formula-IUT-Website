import { useRef } from 'react';
import { motion as Motion, useScroll, useReducedMotion } from 'framer-motion';
import Reveal from '../../../components/shared/Reveal/Reveal';

const MILESTONES = [
    {
        year: '2021',
        title: 'Team Founded',
        text: 'Formula IUT began under the IUT Automobile Society — a vision by a group of students with no funding, experience, or mentorship, determined to build a competitive FSAE car from scratch.',
    },
    {
        year: '2022',
        title: 'Formula Student UK — International Finalist',
        text: 'Selected as one of 38 international finalists in the Concept Class at Formula Student UK 2022, and ranked 5th in the Lap Time Simulation (LTS) event.',
    },
    {
        year: '2023',
        title: 'Formula Bharat & IMechE FSUK — On-Site Finalists',
        text: '3rd overall at Formula Bharat 2023 (Class I) — 4th in the Business Plan Presentation, 5th in Engineering Design — while qualifying for the On-Site Finals. The team also qualified for the IMechE FSUK 2023 (Class II) On-Site Finals at Silverstone Circuit.',
    },
    {
        year: '2024',
        title: 'Formula Bharat & Formula Imperial',
        text: '3rd overall out of 26 finalist teams at Formula Bharat 2024 (Class II). At Formula Imperial 2024, the team placed 7th overall in Combustion and 4th in Engineering Design, with 4th in the Business Plan Presentation.',
    },
    {
        year: '2025',
        title: 'Formula Student China — 2nd Best Foreign Team',
        text: 'Formula IUT’s first on-site international debut with its own car: 8th in the Business Plan Presentation, three technical recognition stickers, and recognition as 2nd Best Foreign Team overall.',
    },
    {
        year: '2026',
        title: 'IMechE FSUK Sim Racing — First Bangladeshi Finalist',
        text: 'Reached the live finals at the Williams F1 Team HQ as the first Bangladeshi finalist team, out of 283 drivers from 73 university teams in 19 countries — finishing 9th in Final B and 9th in the Race Engineering Challenge.',
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
