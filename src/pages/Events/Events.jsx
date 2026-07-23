import { useEffect, useState } from 'react';
import './Events.css';
import Reveal from '../../components/shared/Reveal/Reveal';
import TiltCard from '../../components/shared/TiltCard/TiltCard';

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
            </div>
        </div>
    );

};

export default Events;
