import Reveal from "../../../components/shared/Reveal/Reveal";
import ParallaxImage from "../../../components/shared/ParallaxImage/ParallaxImage";

const Intro = () => {
    return (
        <div className='md:w-9/12 mx-auto space-y-16 md:space-y-24'>
            {/* Who We Are */}
            <div>
                <div className='flex flex-col md:flex-row items-stretch gap-8 md:gap-12 lg:gap-16'>
                    <Reveal className='w-full md:w-7/12 h-full min-h-72'>
                        <ParallaxImage
                            src="/images/event1.png"
                            alt="Formula IUT car at a recent event"
                            className='w-full h-full rounded-xl'
                        />
                    </Reveal>
                    <Reveal delay={0.1} className='w-full md:w-7/12'>
                        <h2 className='font-display uppercase text-white text-4xl md:text-5xl font-bold mb-4'>Who We Are</h2>
                        <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200'>
                            Formula IUT is the Formula SAE (FSAE) team of the Islamic
                            University of Technology, made up of students from across engineering disciplines who
                            design, build, and race a formula-style vehicle from scratch. Working on an intensive
                            build cycle each year, the team manufactures and tests an entirely in-house design while
                            self-managing finances, sponsorship, and outreach. <em>(Placeholder copy &mdash; replace
                            with the team&apos;s own story.)</em>
                        </p>
                    </Reveal>
                </div>
            </div>

            {/* The Competition */}
            <div>
                <div className='flex flex-col-reverse md:flex-row items-stretch gap-8 md:gap-12 lg:gap-16'>
                    <Reveal className='w-full md:w-7/12'>
                        <h2 className='font-display uppercase text-white text-4xl md:text-5xl font-bold mb-4'>The Competition</h2>
                        <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200 mb-4'>
                            Formula SAE is one of the largest engineering student-design competitions in the world,
                            with hundreds of teams competing globally. Each team designs, builds, and presents a
                            prototype open-wheel racecar as if pitching it to a fictional manufacturer, and the car
                            is then rigorously assessed across static and dynamic events &mdash; from cost and design
                            judging to acceleration, autocross, and endurance.
                        </p>
                        <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200'>
                            Formula IUT represents the Islamic University of Technology at these competitions,
                            aiming to bring rigorous engineering and teamwork from Bangladesh to the international
                            stage. <em>(Placeholder copy &mdash; update with real competition history and results.)</em>
                        </p>
                    </Reveal>
                    <Reveal delay={0.1} className='w-full md:w-6/12 h-full min-h-72'>
                        <ParallaxImage
                            src="/images/event2.png"
                            alt="Formula IUT car on track"
                            className='w-full h-full rounded-xl'
                        />
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default Intro;
