import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Reveal from '../../../components/shared/Reveal/Reveal';
import TiltCard from '../../../components/shared/TiltCard/TiltCard';

export default function EventsTeaser() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/events.json')
            .then((res) => res.json())
            .then((data) => setEvents(data.slice(0, 3)))
            .catch(() => setEvents([]));
    }, []);

    if (!events.length) return null;

    return (
        <div className="max-w-6xl mx-auto">
            <Reveal className="text-center mb-12">
                <p className="font-display uppercase tracking-[0.3em] text-f1-red text-sm mb-3">On Track</p>
                <h2 className="font-display uppercase text-4xl md:text-5xl font-extrabold text-white">Latest From The Team</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {events.map((event, i) => (
                    <TiltCard key={event.id} index={i}>
                        <Link to="/events" className="f1-card group block h-full overflow-hidden rounded-2xl">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="font-display uppercase text-white font-bold text-lg">{event.name}</h3>
                            </div>
                        </Link>
                    </TiltCard>
                ))}
            </div>
            <Reveal className="text-center">
                <Link
                    to="/events"
                    className="font-display uppercase tracking-wide text-sm text-f1-red hover:text-white transition-colors"
                >
                    View All Events &rarr;
                </Link>
            </Reveal>
        </div>
    );
}
