import { useEffect } from 'react';
import { ChevronDown, User } from 'lucide-react';
import AboutUs from "../../assets/Slider2.jpg"
import whoWeAre from "../../assets/Slider3.jpg"
import Reveal from '../../components/shared/Reveal/Reveal';
import ParallaxImage from '../../components/shared/ParallaxImage/ParallaxImage';

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

            {/* Hero Image */}
            <div className='relative w-full h-svh min-h-80'>
                <img src={AboutUs} alt="Formula IUT car and team" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black/40 pointer-events-none'></div>
                <div className='absolute left-0 right-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-black pointer-events-none'></div>

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
                            <p className='font-display uppercase text-lg md:text-2xl font-bold text-center text-white mt-5 pb-10 border-b-3 border-f1-red mb-20'>Competition &middot; Education &middot; Innovation &middot; Community &middot; Challenge</p>
                        </div>
                    </Reveal>
                    <div className='space-y-16 md:space-y-24'>
                        <div>
                            <div className='flex flex-col md:flex-row items-stretch gap-8 md:gap-12 lg:gap-16'>
                                {/* Who We Are */}
                                <Reveal className='w-full md:w-7/12 h-full min-h-72'>
                                    <ParallaxImage src={whoWeAre} alt="Formula IUT workshop" className='w-full h-full rounded-xl' />
                                </Reveal>
                                <Reveal delay={0.1} className='w-full md:w-7/12'>
                                    <h2 className='font-display uppercase text-white text-2xl font-bold mb-4'>Who are we?</h2>
                                    <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200'>
                                        Formula IUT is a student-run team at the Islamic University of Technology,
                                        bringing together students from mechanical, electrical, and business
                                        backgrounds to design, manufacture, and test a competition-ready formula car.
                                        The team runs on an intensive build cycle, with members handling everything
                                        from CAD design and fabrication to sponsorship and event logistics. <em>(Placeholder
                                        copy &mdash; replace with the team&apos;s real background.)</em>
                                    </p>
                                </Reveal>
                            </div>
                        </div>
                        <div>
                            {/* Message from project manager */}
                            <div className='flex flex-col-reverse md:flex-row items-stretch gap-8 md:gap-12 lg:gap-16'>
                                <Reveal className='w-full md:w-7/12'>
                                    <h2 className='font-display uppercase text-white text-2xl font-bold mb-4'>A Message from our Project Manager</h2>
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
                                        their careers. <em>(Placeholder message &mdash; replace with the PM&apos;s own words.)</em>
                                    </p>
                                </Reveal>
                                {/* Project Manager info */}
                                <Reveal delay={0.1} className='w-full md:w-4/12'>
                                    <div className='f1-card rounded-2xl p-8 text-center'>
                                        <div className='mx-auto w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center'>
                                            <User className='w-11 h-11 text-zinc-500' />
                                        </div>
                                        <h2 className='font-display uppercase text-2xl font-bold text-white mt-6'>Project Manager Name</h2>
                                        <p className='text-f1-red mt-1'>Project Manager</p>
                                        <p className='text-zinc-500 text-xs mt-4'><em>(Placeholder &mdash; add a real photo and name.)</em></p>
                                    </div>
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
