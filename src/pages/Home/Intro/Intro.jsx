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
                            FormulaIUT is one of Bangladesh&apos;s leading formula student teams, having started
                            its journey in late 2021 under the umbrella of IUT Automobile Society. We are a
                            multi-disciplinary operation spanning Mechanical, Electrical, Software, and Business
                            subteams &mdash; learning CAD modelling, hands-on manufacturing, electronics,
                            accounting, logistics, and marketing under real deadlines and real budget
                            constraints. What started as a vision by a few passionate students without funding,
                            experience, or mentorship has consistently represented the green and red flag
                            alongside the best teams in the world.
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
                            Formula Student is widely regarded as the largest student engineering competition in
                            the world, organised principally by the Institution of Mechanical Engineers (IMechE)
                            in partnership with SAE International and national affiliate bodies. Industry veterans
                            judge students on real-world constraints &mdash; material selection, tolerances,
                            manufacturing, cost-efficiency &mdash; across Static and Dynamic rounds and the
                            Business Plan Presentation.
                        </p>
                        <p className='text-base text-justify md:text-lg leading-relaxed text-gray-200'>
                            Formula IUT has carried Bangladesh&apos;s flag to Formula Student UK, Formula Bharat,
                            IMechE FSUK, Formula Imperial, Formula Student China, and the IMechE FSUK Sim Racing
                            Series &mdash; from an international finalist debut in 2022 to becoming the first
                            Bangladeshi team to reach the FSUK Sim Racing live finals at Williams F1 HQ in 2026.
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
