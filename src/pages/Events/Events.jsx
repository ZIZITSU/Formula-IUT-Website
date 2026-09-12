import { useEffect, useState } from 'react';
import './Events.css';
import Reveal from '../../components/shared/Reveal/Reveal';
import TiltCard from '../../components/shared/TiltCard/TiltCard';
import FlagDivider from '../../components/shared/FlagDivider/FlagDivider';

const ROADSHOWS = [
    {
        name: 'Rajuk National SciSpark 4.0',
        date: 'June 11',
        text: 'Invited by the Rajuk College Science Club, we proudly showcased our race car to curious young minds, sharing our story and witnessing firsthand the next generation’s incredible hunger for knowledge.',
    },
    {
        name: 'ICCB — 19th Dhaka Motor Show 2026',
        date: '2026',
        text: 'We took center stage at the International Convention City Bashundhara, giving automotive experts and the general public a close-up look at our custom-engineered technology.',
    },
    {
        name: 'Govt. Science College, Dhaka',
        date: 'April 15, 2026',
        text: 'During the Sci Quantik Exhibition, we explored the engineering behind FSAE with the bright minds of Science College, sharing our sub-team dynamics and vehicle specs.',
    },
    {
        name: 'Bangladesh Autofest 2026, Aloki',
        date: 'July 19',
        text: 'We thrilled crowds alongside other national teams, capturing the raw excitement and growing pride of Bangladeshi student engineering.',
    },
];

const ROADSHOW_SNAPSHOTS = [
    '/images/4.jpg',
    '/images/3.jpg',
    '/images/2.jpg',
    '/images/750355804_1399295025587058_2544081992484580638_n.jpg',
    '/images/477802985_621365750479362_5945597185185807047_n.jpg',
];

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState(null);

    // Dynamic title and fetch data
    useEffect(() => {
        document.title = 'FormulaIUT | Events';

        fetch('/events.json')
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching events:", err);
                setLoading(false);
            });
    }, []);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className='min-h-screen bg-black carbon-texture text-white pb-24'>
            <div className="w-full px-4 md:px-10">
                <Reveal>
                    <h2 className='pt-30 font-display uppercase text-4xl md:text-6xl text-center font-bold text-white mb-16'>Previous Events</h2>
                </Reveal>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <span className="loading loading-spinner loading-lg text-f1-red"></span>
                    </div>
                ) : (
                    <div className='events-list max-w-5xl mx-auto'>
                        {events.map((event, i) => (
                            <TiltCard key={event.id} index={i} onClick={() => toggleExpand(event.id)}>
                                <article
                                    className={`event-card f1-card ${expandedId === event.id ? 'expanded' : ''}`}
                                >
                                    <div className='event-image-wrapper'>
                                        <img
                                            src={event.image}
                                            alt={event.name}
                                            loading='lazy'
                                            className='event-image'
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/1600x800?text=Event+Image';
                                            }}
                                        />
                                    </div>
                                    <div className='event-content'>
                                        <h3 className='event-name font-display uppercase'>{event.name}</h3>
                                        <div className={`event-details-container ${expandedId === event.id ? 'show' : ''}`}>
                                            <p className='event-details'>
                                                {expandedId === event.id
                                                    ? event.details
                                                    : event.details.split(' ').slice(0, 25).join(' ') + ' ...'
                                                }
                                            </p>
                                        </div>
                                        <div className='expand-indicator'>
                                            {expandedId === event.id ? 'View less' : 'View more'}
                                        </div>
                                    </div>
                                </article>
                            </TiltCard>
                        ))}
                    </div>
                )}

                {/* Roadshows */}
                <div className='max-w-6xl mx-auto mt-24 md:mt-32'>
                    <FlagDivider label="Community Outreach & Roadshows" className='mb-10' />
                    <Reveal>
                        <p className='text-center text-zinc-400 max-w-2xl mx-auto mb-12'>
                            We believe in taking motorsport out of the workshop and directly to the community to
                            ignite a passion for STEM and innovation across Bangladesh.
                        </p>
                    </Reveal>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14'>
                        {ROADSHOWS.map((show, i) => (
                            <TiltCard key={show.name} index={i} className="h-full">
                                <div className='f1-card h-full rounded-2xl p-6'>
                                    <p className='font-display uppercase tracking-widest text-xs text-f1-red mb-2'>{show.date}</p>
                                    <h3 className='font-display uppercase font-bold text-white text-lg mb-2'>{show.name}</h3>
                                    <p className='text-zinc-400 text-sm leading-relaxed'>{show.text}</p>
                                </div>
                            </TiltCard>
                        ))}
                    </div>

                    {/* Snapshots */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {ROADSHOW_SNAPSHOTS.map((src, i) => (
                            <TiltCard key={src} index={i}>
                                <div className='f1-card rounded-2xl overflow-hidden transition-colors duration-300 hover:border-f1-red'>
                                    <img
                                        src={src}
                                        alt={`Formula IUT roadshow snapshot ${i + 1}`}
                                        loading='lazy'
                                        className='w-full aspect-video object-cover'
                                    />
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Events;
