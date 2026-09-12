import { useEffect } from 'react';
import { ChevronDown, Trophy } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Reveal from '../../components/shared/Reveal/Reveal';
import ParallaxImage from '../../components/shared/ParallaxImage/ParallaxImage';
import TiltCard from '../../components/shared/TiltCard/TiltCard';

// Remaining photos from public/images/about us (SLider1.jpg is used on the home hero)
const ABOUT_SLIDES = [
    '/images/about%20us/Slider2.jpg',
    '/images/about%20us/Slider3.jpg',
    '/images/about%20us/hero.jpg',
    '/images/about%20us/748097046_982367438142905_7564755648499429963_n%20(2).jpg',
];

const ACHIEVEMENTS = [
    {
        comp: 'Formula Student UK (FSUK) 2022',
        text: 'Selected as one of 38 international finalists in the Concept Class and ranked 5th in the Lap Time Simulation (LTS) event.',
    },
    {
        comp: 'Formula Bharat 2023 (Class I)',
        text: 'Finished 3rd place overall, securing 4th in the Business Plan Presentation and 5th in Engineering Design while qualifying for the On-Site Finals.',
    },
    {
        comp: 'IMechE FSUK 2023 (Class II)',
        text: 'Qualified for the prestigious On-Site Finals at the historic Silverstone Circuit in the UK.',
    },
    {
        comp: 'Formula Bharat 2024 (Class II)',
        text: 'Finished 3rd overall out of 26 competing finalist teams.',
    },
    {
        comp: 'Formula Imperial 2024',
        text: 'Ranked 7th overall in Combustion and 4th overall in Engineering Design, with 4th in the Business Plan Presentation.',
    },
    {
        comp: 'Formula Student China 2025',
        text: 'Placed 8th in the Business Plan Presentation, earned three technical recognition stickers, and was honoured as the 2nd Best Foreign Team overall.',
    },
    {
        comp: 'IMechE FSUK Sim Racing 2026',
        text: 'Reached the live finals at the Williams F1 Team Headquarters as the first Bangladeshi finalist team, finishing 9th in Final B and 9th in the Race Engineering Challenge.',
    },
];

const About = () => {

    // Dynamic Title handling
    useEffect(() => {
        document.title = 'FormulaIUT | About Us';
    }, []);

    // Scroll to content when the down-arrow is clicked
    const scrollToSection = () => {
        const section = document.getElementById('about-content');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-black'>

            {/* Hero Slider */}
            <div className='relative w-full h-svh min-h-80'>
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    effect='fade'
                    fadeEffect={{ crossFade: true }}
                    loop
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ dynamicBullets: true }}
                    className='w-full h-full'
                >
                    {ABOUT_SLIDES.map((src, i) => (
                        <SwiperSlide key={src}>
                            <img src={src} alt={`Formula IUT ${i + 1}`} className='w-full h-full object-cover' />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='absolute inset-0 bg-black/40 pointer-events-none z-10'></div>
                <div className='absolute left-0 right-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-black pointer-events-none z-10'></div>

                {/* Down Arrow */}
                <button type="button" onClick={scrollToSection} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white cursor-pointer">
                    <ChevronDown className="scroll-arrow w-9 h-9 md:w-10 md:h-10" />
                </button>
            </div>

            {/* Content: About Us */}
            <div id="about-content" className='px-5 md:px-0 pb-16'>
                <Reveal>
                    <h2 className='font-display uppercase text-4xl md:text-6xl font-extrabold text-white text-center mt-20 mb-20 w-11/12 mx-auto'>About Us</h2>
                </Reveal>
                <div className='w-full md:max-w-8/12 mx-auto'>
                    {/* Our Mission */}
                    <Reveal>
                        <h2 className='font-display uppercase text-2xl md:text-4xl font-bold text-center pb-5 border-b-3 border-f1-red mb-10'>Our Mission</h2>
                        <div>
                            <p className='text-base md:text-lg text-center text-gray-200'>
                                Formula IUT designs, builds, and races a formula-style vehicle from scratch each
                                season, competing in the Formula SAE circuit. The team strives for excellence with
                                five core values in mind:
                            </p>
                            <p className='font-display uppercase text-lg md:text-2xl font-bold text-center text-white mt-5 pb-10 mb-10'>Competition &middot; Education &middot; Innovation &middot; Community &middot; Challenge</p>
                            <p className='text-base md:text-lg text-center text-gray-200 pb-10 border-b-3 border-f1-red mb-20'>
                                Our goal is to put the final touches to the car currently under construction &mdash;
                                giving it the speed and endurance to compete across every segment of Formula Student
                                China 2026 &mdash; and to keep hoisting Bangladesh&apos;s red and green flag on
                                international grounds.
                            </p>
                        </div>
                    </Reveal>
                    <div className='space-y-16 md:space-y-24'>
                        <div>
                            <div className='flex flex-col md:flex-row items-stretch gap-8 md:gap-12 lg:gap-16'>
                                {/* Who We Are */}
                                <Reveal className='w-full md:w-7/12 h-full min-h-72'>
                                    <ParallaxImage src="/images/1.jpg" alt="Formula IUT workshop" className='w-full h-full rounded-xl' />
                                </Reveal>
                                <Reveal delay={0.1} className='w-full md:w-7/12'>
                                    <h2 className='font-display uppercase text-white text-2xl font-bold mb-4'>Who are we?</h2>
                                    <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200'>
                                        FormulaIUT is one of Bangladesh&apos;s leading formula student teams, having
                                        started its journey in late 2021 under the umbrella of IUT Automobile Society.
                                        We are a multi-disciplinary operation spanning Mechanical, Electrical, Software,
                                        and Business subteams; formula student competitions demand CAD modelling,
                                        hands-on manufacturing, electronics, accounting, logistics, and marketing &mdash;
                                        all learned under real deadlines and real budget constraints. The team started
                                        as a vision by a few passionate students without funding, experience, or
                                        mentorship, and has consistently represented the green and red flag across
                                        numerous virtual and on-site platforms alongside the best teams in the world.
                                    </p>
                                </Reveal>
                            </div>
                        </div>

                        {/* Our Achievements */}
                        <div>
                            <Reveal>
                                <h2 className='font-display uppercase text-white text-2xl font-bold mb-4 text-center'>Our Achievements</h2>
                                <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200 mb-10 text-center max-w-3xl mx-auto'>
                                    Formula IUT has achieved rapid, credible progression from a concept-class team to
                                    a competitive physical and virtual racing outfit on the global stage:
                                </p>
                            </Reveal>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                {ACHIEVEMENTS.map((item, i) => (
                                    <TiltCard key={item.comp} index={i} className="h-full">
                                        <div className='f1-card h-full rounded-2xl p-6'>
                                            <Trophy className='w-6 h-6 text-f1-red mb-3' />
                                            <h3 className='font-display uppercase font-bold text-white text-lg mb-2'>{item.comp}</h3>
                                            <p className='text-zinc-400 text-sm leading-relaxed'>{item.text}</p>
                                        </div>
                                    </TiltCard>
                                ))}
                            </div>
                        </div>

                        {/* About Formula Student Competition */}
                        <div>
                            <Reveal>
                                <h2 className='font-display uppercase text-white text-2xl font-bold mb-4 text-center'>About Formula Student Competition</h2>
                                <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200 max-w-3xl mx-auto'>
                                    Formula Student is widely regarded as the largest student engineering competition
                                    in the world, organised principally under the umbrella of the Institution of
                                    Mechanical Engineers (IMechE) in partnership with SAE International and national
                                    affiliate bodies in various host countries. Industry veterans challenge and judge
                                    students on real-world constraints &mdash; material selection, tolerances,
                                    manufacturing machinery, cost-efficiency, and feasibility in local industries
                                    &mdash; across Engineering events like Static and Dynamic rounds, as well as the
                                    Business Plan Presentation. Students gain experience in how actual industries
                                    operate, global automotive networking opportunities, and mentorship from industry
                                    leaders. The competition gives industries pre-vetted, elite recruitment
                                    opportunities, and gives students substantial CV value, direct internship offers,
                                    and technical visits.
                                </p>
                            </Reveal>
                        </div>

                        <div>
                            {/* Message from team lead */}
                            <div className='flex flex-col-reverse md:flex-row items-stretch gap-8 md:gap-12 lg:gap-16'>
                                <Reveal className='w-full md:w-7/12'>
                                    <h2 className='font-display uppercase text-white text-2xl font-bold mb-4'>A Message from our Team Lead</h2>
                                    <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200 mb-4'>
                                        Being part of Formula IUT means picking up skills you won&apos;t find in a
                                        classroom &mdash; CAD modelling, manufacturing, electronics, accounting,
                                        logistics, and marketing, alongside teamwork and professionalism under real
                                        deadlines. Whatever level of experience someone joins with, they leave as a
                                        far more well-rounded engineer and teammate.
                                    </p>
                                    <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200 mb-4'>
                                        Every part of how the team runs is managed by students themselves, which
                                        means members take on leadership and decision-making responsibility far
                                        earlier than they typically would elsewhere.
                                    </p>
                                    <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200'>
                                        We hope our sponsors see this as an investment in the next generation of
                                        engineers and business professionals who will carry these skills through
                                        their careers. <em>(Placeholder message &mdash; replace with the Team Lead&apos;s own words.)</em>
                                    </p>
                                </Reveal>
                                {/* Team Lead info */}
                                <Reveal delay={0.1} className='w-full md:w-4/12'>
                                    <img
                                        src="/images/panel/592256981_843249348291000_6988243912846599422_n.jpg"
                                        alt="Farhan Ibtahsum — Team Lead"
                                        className='w-full h-auto rounded-2xl border border-white/10'
                                    />
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
