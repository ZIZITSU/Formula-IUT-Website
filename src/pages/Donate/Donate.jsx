import { useEffect, useState } from 'react';
import { Smartphone, Landmark, Copy, Check, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router';
import Reveal from '../../components/shared/Reveal/Reveal';
import FlagDivider from '../../components/shared/FlagDivider/FlagDivider';

// NOTE: placeholder payment details — replace with Formula IUT's real
// bKash number and bank account information before going live.
const BKASH = {
    type: 'Merchant',
    number: '01XXX-XXXXXX',
    reference: 'Your name + "FIUT donation"',
};

const BANK = [
    { label: 'Account Name', value: 'Formula IUT' },
    { label: 'Account Number', value: '0000 0000 0000 00' },
    { label: 'Bank', value: 'Bank Name Ltd.' },
    { label: 'Branch', value: 'Branch Name' },
    { label: 'Routing Number', value: '000000000' },
    { label: 'SWIFT / BIC', value: 'XXXXXXXX' },
];

function CopyButton({ text }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            setCopied(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy ${text}`}
            className="shrink-0 inline-flex items-center gap-1.5 rounded-sm border border-white/15 px-3 py-1.5 text-xs font-display uppercase tracking-wide text-zinc-300 hover:border-f1-red hover:text-white transition-colors cursor-pointer"
        >
            {copied ? <Check className="w-3.5 h-3.5 text-f1-red" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied' : 'Copy'}
        </button>
    );
}

const Donate = () => {
    useEffect(() => {
        document.title = 'FormulaIUT | Donate';
    }, []);

    return (
        <div className='bg-black carbon-texture min-h-screen'>
            <div className='max-w-11/12 mx-auto pb-20'>
                <Reveal>
                    <h2 className='font-display uppercase text-4xl md:text-6xl font-extrabold text-white text-center border-b-3 border-f1-red pb-5 mt-30 mb-10 md:mb-14 mx-auto w-11/12'>
                        Support The Team
                    </h2>
                </Reveal>

                <Reveal>
                    <p className='text-center text-zinc-300 max-w-2xl mx-auto mb-14 md:mb-20 leading-relaxed'>
                        Every donation goes straight into building the car &mdash; raw material, machining,
                        electronics, and getting the team to competition. If you&apos;d like to back Formula IUT,
                        you can send a contribution through bKash or a direct bank transfer below.
                    </p>
                </Reveal>

                <div className='flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-10 max-w-5xl mx-auto'>
                    {/* bKash */}
                    <Reveal className='w-full md:w-1/2'>
                        <div className='f1-card h-full rounded-2xl p-7 md:p-9'>
                            <div className='flex items-center gap-3 mb-6'>
                                <Smartphone className='w-7 h-7 text-f1-red shrink-0' />
                                <h3 className='font-display uppercase text-2xl md:text-3xl font-bold text-white'>bKash</h3>
                            </div>

                            <dl className='space-y-4'>
                                <div>
                                    <dt className='text-xs uppercase tracking-widest text-zinc-500'>Account Type</dt>
                                    <dd className='text-white mt-1'>{BKASH.type}</dd>
                                </div>
                                <div>
                                    <dt className='text-xs uppercase tracking-widest text-zinc-500'>Number</dt>
                                    <dd className='flex items-center justify-between gap-3 mt-1'>
                                        <span className='text-white font-semibold tabular-nums text-lg'>{BKASH.number}</span>
                                        <CopyButton text={BKASH.number} />
                                    </dd>
                                </div>
                                <div>
                                    <dt className='text-xs uppercase tracking-widest text-zinc-500'>Reference</dt>
                                    <dd className='text-zinc-300 mt-1'>{BKASH.reference}</dd>
                                </div>
                            </dl>

                            <p className='text-zinc-500 text-xs mt-6 leading-relaxed'>
                                Use the <span className='text-zinc-300'>Send Money</span> option and add the reference
                                note so we can identify your donation. <em>(Placeholder number &mdash; replace with the
                                team&apos;s real bKash account.)</em>
                            </p>
                        </div>
                    </Reveal>

                    {/* Bank transfer */}
                    <Reveal delay={0.1} className='w-full md:w-1/2'>
                        <div className='f1-card h-full rounded-2xl p-7 md:p-9'>
                            <div className='flex items-center gap-3 mb-6'>
                                <Landmark className='w-7 h-7 text-f1-red shrink-0' />
                                <h3 className='font-display uppercase text-2xl md:text-3xl font-bold text-white'>Bank Transfer</h3>
                            </div>

                            <dl className='space-y-4'>
                                {BANK.map((row) => (
                                    <div key={row.label}>
                                        <dt className='text-xs uppercase tracking-widest text-zinc-500'>{row.label}</dt>
                                        <dd className='flex items-center justify-between gap-3 mt-1'>
                                            <span className='text-white'>{row.value}</span>
                                            <CopyButton text={row.value} />
                                        </dd>
                                    </div>
                                ))}
                            </dl>

                            <p className='text-zinc-500 text-xs mt-6 leading-relaxed'>
                                International donors can use the SWIFT / BIC code. <em>(Placeholder details &mdash;
                                replace with the team&apos;s real bank account.)</em>
                            </p>
                        </div>
                    </Reveal>
                </div>

                <FlagDivider label="Thank You" className='max-w-3xl mx-auto mt-16 md:mt-24 mb-10' />

                <Reveal className='max-w-3xl mx-auto text-center'>
                    <div className='f1-card carbon-texture rounded-2xl px-8 py-12 md:py-16'>
                        <HeartHandshake className='w-9 h-9 text-f1-red mx-auto mb-4' />
                        <h3 className='font-display uppercase text-2xl md:text-3xl font-bold text-white mb-4'>
                            Donated, Or Want To Give In Another Way?
                        </h3>
                        <p className='text-zinc-400 max-w-xl mx-auto mb-8'>
                            Send us your transfer confirmation or ask about sponsorship, in-kind support, and
                            equipment donations &mdash; we&apos;ll get back to you.
                        </p>
                        <Link
                            to="/contact"
                            className='inline-block font-display uppercase tracking-wide px-8 py-3 bg-f1-red text-white font-semibold rounded-sm hover:bg-f1-red-dark transition-colors duration-300'
                        >
                            Contact The Team
                        </Link>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default Donate;
