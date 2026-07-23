import { useEffect } from 'react';
import { ChevronDown, User } from 'lucide-react';
import { Link } from 'react-router';
import Reveal from '../../components/shared/Reveal/Reveal';
import TiltCard from '../../components/shared/TiltCard/TiltCard';

const TeamPhoto = "/images/event3.png";

const LEADERSHIP = [
    { name: 'Team Captain Name', role: 'Team Captain' },
    { name: 'Faculty Advisor Name', role: 'Faculty Advisor' },
];

const SUBSYSTEMS = [
    {
        name: 'Chassis & Vehicle Dynamics',
        members: [
            { name: 'Member Name', role: 'Subsystem Lead' },
            { name: 'Member Name', role: 'Team Member' },
            { name: 'Member Name', role: 'Team Member' },
        ],
    },
    {
        name: 'Powertrain',
        members: [
            { name: 'Member Name', role: 'Subsystem Lead' },
            { name: 'Member Name', role: 'Team Member' },
            { name: 'Member Name', role: 'Team Member' },
        ],
    },
    {
        name: 'Aerodynamics',
        members: [
            { name: 'Member Name', role: 'Subsystem Lead' },
            { name: 'Member Name', role: 'Team Member' },
        ],
    },
    {
        name: 'Electronics & Data Acquisition',
        members: [
            { name: 'Member Name', role: 'Subsystem Lead' },
            { name: 'Member Name', role: 'Team Member' },
        ],
    },
    {
        name: 'Business & Management',
        members: [
            { name: 'Member Name', role: 'Subsystem Lead' },
            { name: 'Member Name', role: 'Team Member' },
            { name: 'Member Name', role: 'Team Member' },
        ],
    },
];

function MemberCard({ name, role, tag, index, featured }) {
    return (
        <TiltCard index={index} className="h-full">
            <div className={`f1-card h-full rounded-2xl p-6 text-center transition-colors duration-300 hover:border-f1-red ${featured ? 'py-10' : ''}`}>
                <div className={`mx-auto flex items-center justify-center rounded-full bg-white/5 border border-white/10 ${featured ? 'w-24 h-24' : 'w-20 h-20'}`}>
                    <User className={featured ? 'w-11 h-11 text-zinc-500' : 'w-9 h-9 text-zinc-500'} />
                </div>
                {tag && (
                    <p className="font-display uppercase tracking-widest text-xs text-f1-red mt-4">{tag}</p>
                )}
                <h3 className={`font-display uppercase font-bold text-white mt-2 ${featured ? 'text-2xl' : 'text-xl'}`}>{name}</h3>
                <p className="text-zinc-400 mt-1">{role}</p>
            </div>
        </TiltCard>
    );
}

const Team = () => {

    // Dynamic title handling
    useEffect(() => {
        document.title = 'FormulaIUT | Team';
    }, []);

    // Scroll to team content after clicking the down arrow
    const scrollToSection = () => {
        const section = document.getElementById('team-content');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-black'>
            {/* Team Photo */}
            <div className='relative w-full h-svh min-h-80'>
                <img src={TeamPhoto} alt="Formula IUT team" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black/40 pointer-events-none'></div>
                <div className='absolute left-0 right-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-black pointer-events-none'></div>
                <button type="button" onClick={scrollToSection} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white cursor-pointer">
                    <ChevronDown className="scroll-arrow w-9 h-9 md:w-10 md:h-10" />
                </button>
            </div>

            {/* Team Content */}
            <div id="team-content" className='px-5 md:px-0 pb-24'>
                <Reveal>
                    <h2 className='font-display uppercase text-4xl md:text-6xl font-extrabold text-white text-center mt-20 mb-6 w-11/12 mx-auto'>Meet Our Team</h2>
                    <p className='text-center text-zinc-400 max-w-2xl mx-auto mb-16'>
                        The people behind the car &mdash; organised by subsystem. <em>(Placeholder roster &mdash; swap in real names, roles, and photos.)</em>
                    </p>
                </Reveal>

                {/* Leadership */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-20 md:mb-28 px-4'>
                    {LEADERSHIP.map((person, i) => (
                        <MemberCard key={person.role} {...person} index={i} featured />
                    ))}
                </div>

                {/* Subsystems */}
                <div className='max-w-6xl mx-auto space-y-20 md:space-y-24 px-4'>
                    {SUBSYSTEMS.map((subsystem) => (
                        <div key={subsystem.name}>
                            <Reveal>
                                <h3 className='font-display uppercase text-2xl md:text-3xl font-bold text-white text-center mb-2'>{subsystem.name}</h3>
                                <div className='checkered-strip h-1.5 w-24 mx-auto mb-10 rounded-full overflow-hidden'></div>
                            </Reveal>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {subsystem.members.map((member, i) => (
                                    <MemberCard
                                        key={`${subsystem.name}-${i}`}
                                        {...member}
                                        tag={subsystem.name}
                                        index={i}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
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
