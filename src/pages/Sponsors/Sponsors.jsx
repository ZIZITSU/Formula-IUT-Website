import { useEffect } from 'react';
import { ChevronDown, Eye, Users, Wrench } from 'lucide-react';
import { Link } from 'react-router';
import TeamPhoto from "../../assets/SLider1.jpg";
import titleSponsor from "../../assets/title_sponsor.png";
import diamondPartner from "../../assets/diamond_partner.png";
import goldPartner1 from "../../assets/gold_partner_1.png";
import goldPartner2 from "../../assets/gold_partner_2.png";
import goldPartner3 from "../../assets/gold_partner_3.jpg";
import goldPartner4 from "../../assets/gold_partner_4.png";
import bronzePartner1 from "../../assets/Bronze_partner_1.png";
import bronzePartner2 from "../../assets/Bronze_partner_2.png";
import bronzePartner3 from "../../assets/Bronze_partner_3.png";
import bronzePartner4 from "../../assets/Bronze_partner_4.png";
import contributor1 from "../../assets/contributer1.png";
import contributor2 from "../../assets/contributer2.png";
import contributor3 from "../../assets/contributer3.png";
import contributor4 from "../../assets/contributer4.png";
import contributor5 from "../../assets/contributer5.png";
import contributor6 from "../../assets/contributer6.png";
import mediaPartner from "../../assets/media_partner.png";
import toolsPartner from "../../assets/tools_partner.png";
import Reveal from '../../components/shared/Reveal/Reveal';
import TiltCard from '../../components/shared/TiltCard/TiltCard';
import FlagDivider from '../../components/shared/FlagDivider/FlagDivider';

const TIERS = [
    { title: 'Title Sponsor', gridClass: 'grid-cols-1 max-w-2xl', imgClass: 'max-w-lg sm:max-w-xl', logos: [{ src: titleSponsor, alt: 'Title Sponsor' }] },
    { title: 'Diamond Partner', gridClass: 'grid-cols-1 max-w-md', imgClass: 'max-w-[280px] md:max-w-[320px]', logos: [{ src: diamondPartner, alt: 'Diamond Partner' }] },
    {
        title: 'Gold Partner', gridClass: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-310', imgClass: 'max-w-55', logos: [
            { src: goldPartner1, alt: 'Gold Partner 1' },
            { src: goldPartner2, alt: 'Gold Partner 2' },
            { src: goldPartner3, alt: 'Gold Partner 3' },
            { src: goldPartner4, alt: 'Gold Partner 4' },
        ]
    },
    {
        title: 'Bronze Partner', gridClass: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-310', imgClass: 'max-w-55', logos: [
            { src: bronzePartner1, alt: 'Bronze Partner 1' },
            { src: bronzePartner2, alt: 'Bronze Partner 2' },
            { src: bronzePartner3, alt: 'Bronze Partner 3' },
            { src: bronzePartner4, alt: 'Bronze Partner 4' },
        ]
    },
    {
        title: 'Contributors', gridClass: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-240', imgClass: 'max-w-55', logos: [
            { src: contributor1, alt: 'Contributor 1' },
            { src: contributor2, alt: 'Contributor 2' },
            { src: contributor3, alt: 'Contributor 3' },
            { src: contributor4, alt: 'Contributor 4' },
            { src: contributor5, alt: 'Contributor 5' },
            { src: contributor6, alt: 'Contributor 6' },
        ]
    },
    { title: 'Media Partner', gridClass: 'grid-cols-1 max-w-md', imgClass: 'max-w-[240px] md:max-w-55', logos: [{ src: mediaPartner, alt: 'Media Partner' }] },
    { title: 'Tools Partner', gridClass: 'grid-cols-1 max-w-md', imgClass: 'max-w-[240px] md:max-w-55', logos: [{ src: toolsPartner, alt: 'Tools Partner' }] },
];

const VALUE_PROPS = [
    {
        icon: Eye,
        title: 'Brand Visibility',
        body: 'Your logo travels on the car, our uniforms, and every competition livestream and paddock photo — in front of engineers, industry judges, and fellow universities.',
    },
    {
        icon: Users,
        title: 'Talent Pipeline',
        body: "Get early access to a pool of hands-on engineers who've already shipped a real vehicle under real constraints, before they graduate.",
    },
    {
        icon: Wrench,
        title: 'Applied R&D',
        body: 'Sponsorship funds directly translate into tested designs, manufacturing processes, and data that push what a student team can build.',
    },
];

function SponsorTier({ title, logos, gridClass, imgClass, startIndex }) {
    return (
        <div className='py-12 md:py-24'>
            <Reveal>
                <h2 className='font-display uppercase text-2xl md:text-4xl font-bold text-center text-white'>{title}</h2>
                <div className='border-2 border-f1-red w-2/3 md:max-w-4/12 my-5 mx-auto mb-10'></div>
            </Reveal>
            <div className={`grid ${gridClass} gap-8 mx-auto px-6 justify-center`}>
                {logos.map((logo, i) => (
                    <TiltCard key={logo.alt} index={startIndex + i}>
                        <div className='f1-card flex items-center justify-center min-h-60 w-full rounded-2xl p-7 transition-colors duration-300 hover:border-f1-red'>
                            <img src={logo.src} alt={logo.alt} loading='lazy' className={`${imgClass} w-full h-auto object-contain`} />
                        </div>
                    </TiltCard>
                ))}
            </div>
        </div>
    );
}

const Sponsors = () => {

    // Dynamic title handling
    useEffect(() => {
        document.title = 'FormulaIUT | Sponsors';
    }, []);

    // Scroll to team content after clicking the down arrow
    const scrollToSection = () => {
        const section = document.getElementById('sponsors-content');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-black'>
            {/* Team Photo */}
            <div className='relative w-full h-svh min-h-80'>
                <img src={TeamPhoto} alt="Formula IUT car" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black/40 pointer-events-none'></div>
                <div className='absolute left-0 right-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-black pointer-events-none'></div>
                <button type="button" onClick={scrollToSection} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white cursor-pointer">
                    <ChevronDown className="scroll-arrow w-9 h-9 md:w-10 md:h-10" />
                </button>
            </div>

            {/* Sponsors Content */}
            <div id="sponsors-content" className='px-4 md:px-8 pb-16'>
                <Reveal>
                    <h2 className='font-display uppercase text-4xl md:text-6xl font-extrabold text-white text-center mt-16 md:mt-24 mb-10 w-11/12 mx-auto'>Our Sponsors</h2>
                </Reveal>

                {/* Why sponsor us */}
                <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20'>
                    {VALUE_PROPS.map((prop, i) => {
                        const Icon = prop.icon;
                        return (
                            <Reveal key={prop.title} delay={i * 0.1}>
                                <div className='f1-card h-full rounded-2xl p-7 text-center'>
                                    <Icon className='w-8 h-8 text-f1-red mx-auto mb-4' />
                                    <h3 className='font-display uppercase font-bold text-white text-lg mb-2'>{prop.title}</h3>
                                    <p className='text-sm text-zinc-400 leading-relaxed'>{prop.body}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                <FlagDivider label="Our Partners" className='max-w-4xl mx-auto mb-4' />

                {TIERS.map((tier, tierIndex) => (
                    <SponsorTier key={tier.title} {...tier} startIndex={tierIndex} />
                ))}

                {/* CTA */}
                <Reveal className='max-w-3xl mx-auto text-center pt-8'>
                    <h3 className='font-display uppercase text-2xl md:text-3xl font-bold text-white mb-4'>Want to Join Them?</h3>
                    <p className='text-zinc-400 mb-8'>Get in touch to discuss sponsorship tiers and what Formula IUT can offer in return.</p>
                    <Link
                        to="/contact"
                        className='inline-block font-display uppercase tracking-wide px-8 py-3 bg-f1-red text-white font-semibold rounded-sm hover:bg-f1-red-dark transition-colors duration-300'
                    >
                        Get In Touch
                    </Link>
                </Reveal>
            </div>
        </div>
    );
};

export default Sponsors;
