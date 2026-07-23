import { useEffect, useState } from 'react';
import Reveal from '../../components/shared/Reveal/Reveal';

const Contact = () => {
    useEffect(() => {
        document.title = 'FormulaIUT | Contact Us';
    }, []);

    const [status, setStatus] = useState('idle'); // idle | submitting | success

    // NOTE: no backend/email service is wired up yet — this only simulates a
    // submission locally. Connect a real endpoint (e.g. Formspree, EmailJS,
    // or a custom API route) here before relying on this form in production.
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
            e.target.reset();
        }, 700);
    };

    return (
        <div className='bg-black carbon-texture min-h-screen'>
            <div className='max-w-11/12 mx-auto pb-20'>
                <Reveal>
                    <h2 className='font-display uppercase text-4xl md:text-6xl font-extrabold text-white text-center border-b-3 border-f1-red pb-5 mt-30 mb-12 md:mb-20 mx-auto w-11/12'>
                        Contact Us
                    </h2>
                </Reveal>

                <div className='flex flex-col max-w-11/12 mx-auto md:flex-row items-stretch justify-between gap-10 md:gap-30'>
                    {/* Google map iframe */}
                    <Reveal className='w-full md:w-1/2 h-72 sm:h-80 md:h-auto md:min-h-105'>
                        <iframe
                            title="Islamic University of Technology location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2168.132013167695!2d90.37861788975894!3d23.94810040791917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4abf8334fb1%3A0xbb003124c3dedc91!2sIslamic%20University%20of%20Technology!5e0!3m2!1sen!2sbd!4v1771001910700!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: "16px" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Reveal>

                    {/* Let's get in touch */}
                    <Reveal delay={0.1} className='w-full md:w-1/2'>
                        <div className="f1-card rounded-2xl w-full shrink-0">
                            <div className="card-body">
                                <h2 className='font-display uppercase text-center font-bold text-2xl md:text-4xl mb-5 text-white'>Let&apos;s Get In Touch</h2>

                                {status === 'success' ? (
                                    <div className='text-center py-10'>
                                        <p className='text-lg text-white font-semibold mb-2'>Thanks for reaching out!</p>
                                        <p className='text-zinc-400'>We&apos;ll get back to you soon.</p>
                                        <button
                                            type='button'
                                            onClick={() => setStatus('idle')}
                                            className='mt-6 font-display uppercase tracking-wide text-sm text-f1-red hover:text-white transition-colors cursor-pointer'
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <fieldset className="fieldset gap-3">
                                            <label className="label text-zinc-300">Name</label>
                                            <input type="text" name="name" className="input w-full bg-white/5 border-white/10 text-white" placeholder="Your Name" required />
                                            <label className="label text-zinc-300">Email</label>
                                            <input type="email" name="email" className="input w-full bg-white/5 border-white/10 text-white" placeholder="Your Email" required />
                                            <label className="label text-zinc-300">Subject</label>
                                            <input type="text" name="subject" className="input w-full bg-white/5 border-white/10 text-white" placeholder="Subject" required />
                                            <label className="label text-zinc-300">Message</label>
                                            <textarea className='input min-h-15 md:min-h-20 w-full bg-white/5 border-white/10 text-white' name="message" placeholder='Write your message...' required></textarea>
                                            <button
                                                type='submit'
                                                disabled={status === 'submitting'}
                                                className='btn bg-f1-red hover:bg-f1-red-dark text-white border-none mt-5 disabled:opacity-60'
                                            >
                                                {status === 'submitting' && <span className="loading loading-spinner loading-sm"></span>}
                                                {status === 'submitting' ? 'Sending…' : 'Submit'}
                                            </button>
                                        </fieldset>
                                    </form>
                                )}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default Contact;
