import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { motion as Motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Slider from './Slider/Slider';
import Intro from './Intro/Intro';
import Journey from './Journey/Journey';
import CarSpecs from './CarSpecs/CarSpecs';
import EventsTeaser from './EventsTeaser/EventsTeaser';
import Reveal from '../../components/shared/Reveal/Reveal';
import StatCounter from '../../components/shared/StatCounter/StatCounter';
import SponsorMarquee from '../../components/shared/SponsorMarquee/SponsorMarquee';

import titleSponsor from "../../assets/title_sponsor.png";
import diamondPartner from "../../assets/diamond_partner.png";
import goldPartner1 from "../../assets/gold_partner_1.png";
import goldPartner2 from "../../assets/gold_partner_2.png";
import goldPartner3 from "../../assets/gold_partner_3.jpg";
import goldPartner4 from "../../assets/gold_partner_4.png";

const sponsorLogos = [
    { src: titleSponsor, alt: 'Title Sponsor' },
    { src: diamondPartner, alt: 'Diamond Partner' },
    { src: goldPartner1, alt: 'Gold Partner' },
    { src: goldPartner2, alt: 'Gold Partner' },
    { src: goldPartner3, alt: 'Gold Partner' },
    { src: goldPartner4, alt: 'Gold Partner' },
];

const stats = [
    { value: 3, suffix: '', label: 'Years Building' },
    { value: 40, suffix: '+', label: 'Team Members' },
    { value: 4, suffix: '', label: 'Subteams' },
    { value: 6, suffix: '', label: 'Competitions Entered' },
];

const Home = () => {
    useEffect(() => {
        document.title = 'FormulaIUT | Home';
    }, []);

    const heroRef = useRef(null);
    const prefersReducedMotion = useReducedMotion();
    const { scrollYProgress: heroProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });
    const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0.25]);
    const heroScale = useTransform(heroProgress, [0, 1], [1, 1.08]);

    const scrollToSection = () => {
        const section = document.getElementById('home-content');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-black pb-9'>
            {/* Hero Slider */}
            <div ref={heroRef} className='w-full bg-black relative overflow-hidden'>
                <Motion.div
                    style={prefersReducedMotion ? undefined : { opacity: heroOpacity, scale: heroScale }}
                >
                    <Slider></Slider>
                </Motion.div>
                <button type="button" onClick={scrollToSection} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-white cursor-pointer">
                    <ChevronDown className="scroll-arrow w-9 h-9 md:w-10 md:h-10" />
                </button>
            </div>

            {/* Stats strip */}
            <div className='carbon-texture bg-carbon border-y border-white/10 py-10'>
                <div className='w-11/12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
                    {stats.map((stat) => (
                        <StatCounter key={stat.label} {...stat} />
                    ))}
                </div>
            </div>

            {/* Home content */}
            <div id="home-content" className='w-11/12 mx-auto'>
                <Reveal>
                    <h2 className='font-display uppercase text-4xl md:text-6xl font-extrabold text-white text-center border-b-3 border-f1-red pb-5 mt-20 mb-20 w-11/12 mx-auto'>Welcome</h2>
                </Reveal>
                <div className='mb-28 md:mb-36'>
                    <Intro></Intro>
                </div>

                <div className='mb-28 md:mb-36'>
                    <Journey />
                </div>

                <div className='mb-28 md:mb-36'>
                    <CarSpecs />
                </div>

                <div className='mb-28 md:mb-36'>
                    <EventsTeaser />
                </div>
            </div>

            {/* Sponsor marquee teaser */}
            <Reveal className='w-11/12 max-w-6xl mx-auto mb-20 text-center'>
                <p className='font-display uppercase tracking-[0.3em] text-f1-red text-sm mb-6'>Backed By</p>
                <SponsorMarquee logos={sponsorLogos} />
            </Reveal>

            {/* CTA banner */}
            <Reveal className='w-11/12 max-w-5xl mx-auto'>
                <div className='f1-card carbon-texture rounded-2xl px-8 py-12 md:py-16 text-center'>
                    <h3 className='font-display uppercase text-3xl md:text-4xl font-bold text-white mb-4'>
                        Interested in Sponsoring Us?
                    </h3>
                    <p className='text-zinc-300 max-w-2xl mx-auto mb-8'>
                        Partner with Formula IUT and put your brand on a car built by the next generation of
                        automotive engineers.
                    </p>
                    <Link
                        to="/sponsors"
                        className='inline-block font-display uppercase tracking-wide px-8 py-3 bg-f1-red text-white font-semibold rounded-sm hover:bg-f1-red-dark transition-colors duration-300'
                    >
                        View Sponsorship Packages
                    </Link>
                </div>
            </Reveal>
        </div>
    );
};

export default Home;
