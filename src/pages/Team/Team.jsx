import { useEffect } from 'react';
import { Link } from 'react-router';
import Reveal from '../../components/shared/Reveal/Reveal';
import TiltCard from '../../components/shared/TiltCard/TiltCard';

// Team 2024-25 panel — post graphics from public/images/panel
const PANEL = [
    { img: '/images/panel/592256981_843249348291000_6988243912846599422_n.jpg', name: 'Farhan Ibtahsum', role: 'Team Lead' },
    { img: '/images/panel/591633566_843249681624300_3848687323697209780_n.jpg', name: 'Sakib Al Azad', role: 'Project Manager (Electrical)' },
    { img: '/images/panel/593809726_843249454957656_7482438825216721472_n.jpg', name: 'Muneebur Rahman', role: 'Project Manager (Mechanical)' },
    { img: '/images/panel/592356711_843249761624292_3593100014641709892_n.jpg', name: 'Azmir Hassan Jim', role: 'Technical Lead' },
    { img: '/images/panel/592359703_843249801624288_903449427936901705_n.jpg', name: 'Jawad Ibn Jahir', role: 'Manufacturing Lead' },
    { img: '/images/panel/594080428_843249654957636_1027982837140326157_n.jpg', name: 'Takibur Rahim', role: 'Operations Lead' },
];

const Team = () => {

    // Dynamic title handling
    useEffect(() => {
        document.title = 'FormulaIUT | Team';
    }, []);

    return (
        <div className='bg-black'>
            {/* Team Content */}
            <div id="team-content" className='px-5 md:px-0 pb-24'>
                <Reveal>
                    <h2 className='font-display uppercase text-4xl md:text-6xl font-extrabold text-white text-center mt-30 mb-6 w-11/12 mx-auto'>Meet Our Team</h2>
                    <p className='text-center text-zinc-400 max-w-2xl mx-auto mb-16'>
                        The people behind the car &mdash; the panel that leads Formula IUT.
                    </p>
                </Reveal>

                {/* Panel 2024-25 */}
                <div className='max-w-6xl mx-auto px-4'>
                    <Reveal>
                        <h3 className='font-display uppercase text-2xl md:text-3xl font-bold text-white text-center mb-2'>The Panel &mdash; 2024/25</h3>
                        <div className='checkered-strip h-1.5 w-24 mx-auto mb-10 rounded-full overflow-hidden'></div>
                    </Reveal>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {PANEL.map((person, i) => (
                            <TiltCard key={person.name} index={i} className="h-full">
                                <div className='f1-card rounded-2xl overflow-hidden transition-colors duration-300 hover:border-f1-red'>
                                    <img
                                        src={person.img}
                                        alt={`${person.name} — ${person.role}`}
                                        loading='lazy'
                                        className='w-full aspect-square object-cover'
                                    />
                                    <div className='p-4 text-center'>
                                        <h4 className='font-display uppercase font-bold text-white text-lg'>{person.name}</h4>
                                        <p className='text-zinc-400 text-sm mt-1'>{person.role}</p>
                                    </div>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </div>

                {/* Recruitment CTA */}
                <Reveal className='max-w-3xl mx-auto text-center mt-24 md:mt-32'>
                    <div className='f1-card carbon-texture rounded-2xl px-8 py-12 md:py-16'>
                        <p className='font-display uppercase tracking-[0.3em] text-f1-red text-sm mb-3'>Join The Grid</p>
                        <h3 className='font-display uppercase text-3xl md:text-4xl font-bold text-white mb-4'>
                            Want To Join Formula IUT?
                        </h3>
                        <p className='text-zinc-400 max-w-xl mx-auto mb-8'>
                            We&apos;re always looking for students across engineering, design, and business who want
                            to build a real race car. <em>(Placeholder &mdash; add recruitment details, open roles,
                            and an application link here.)</em>
                        </p>
                        <Link
                            to="/contact"
                            className='inline-block font-display uppercase tracking-wide px-8 py-3 bg-f1-red text-white font-semibold rounded-sm hover:bg-f1-red-dark transition-colors duration-300'
                        >
                            Get In Touch
                        </Link>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default Team;
