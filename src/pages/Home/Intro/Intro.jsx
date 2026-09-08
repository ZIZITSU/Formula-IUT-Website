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
                            Formula IUT is the Formula SAE (FSAE) racing team of the Islamic University of
                            Technology &mdash; a multidisciplinary student motorsports team with Engineering,
                            Business, and Management divisions. Its members design, build, and race a
                            formula-style vehicle from scratch while self-managing finances, sponsorship, and
                            outreach, and the team is currently finalising its race car for upcoming
                            international events.
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
                            Formula IUT has carried the Islamic University of Technology to Formula Student UK
                            (Finalist, 2022), Formula Bharat (3rd in the Static Round, 2023), Formula Imperial
                            (7th, 2024), and Formula Student China 2025 &mdash; where it was named 2nd Best
                            Foreign Team on its first on-site international outing with the car.
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
