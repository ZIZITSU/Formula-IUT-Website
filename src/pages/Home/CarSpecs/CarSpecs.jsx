import { Cog, Zap, Gauge, Weight, Timer, Wind } from 'lucide-react';
import Reveal from '../../../components/shared/Reveal/Reveal';
import ParallaxImage from '../../../components/shared/ParallaxImage/ParallaxImage';

const SPECS = [
    { icon: Cog, label: 'Chassis', value: 'Tubular steel spaceframe' },
    { icon: Zap, label: 'Engine', value: '321cc Yamaha R3 (2020)' },
    { icon: Gauge, label: 'Power Output', value: '42 hp' },
    { icon: Weight, label: 'Weight', value: '~230 kg' },
    { icon: Timer, label: '0-60 mph', value: '4.8s' },
    { icon: Wind, label: 'Top Speed', value: '~120 km/h' },
];

export default function CarSpecs() {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal className="h-80 md:h-[28rem]">
                <ParallaxImage
                    src="/images/this%20year%20car.jpg"
                    alt="Formula IUT car"
                    className="w-full h-full rounded-2xl"
                />
            </Reveal>
            <div>
                <Reveal>
                    <p className="font-display uppercase tracking-[0.3em] text-f1-red text-sm mb-3">Under The Skin</p>
                    <h2 className="font-display uppercase text-4xl md:text-5xl font-extrabold text-white mb-8">
                        This Year&apos;s Car
                    </h2>
                </Reveal>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {SPECS.map((spec, i) => {
                        const Icon = spec.icon;
                        return (
                            <Reveal key={spec.label} delay={i * 0.06}>
                                <div className="f1-card rounded-xl p-4 h-full">
                                    <Icon className="w-5 h-5 text-f1-red mb-2" />
                                    <p className="text-xs uppercase tracking-widest text-zinc-500">{spec.label}</p>
                                    <p className="text-white font-semibold text-sm mt-1">{spec.value}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
