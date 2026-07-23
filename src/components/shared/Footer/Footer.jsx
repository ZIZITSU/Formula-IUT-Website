import iutLogo from "../../../assets/IUT.png";
import { FaFacebook } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import FlagDivider from '../FlagDivider/FlagDivider';

const Footer = () => {
    return (
        <div>
            <FlagDivider label="Formula IUT" />

            <div className="carbon-texture bg-black text-white py-14">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-10xl flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

                    {/* Contact Us Section */}
                    <nav className="w-full md:w-1/2">
                        <h6 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-left">
                            Contact <span className="text-f1-red">Us</span>
                        </h6>
                        <div className="space-y-4 mt-5 text-left text-zinc-300">
                            <div className="flex gap-3 items-center justify-start">
                                <FaFacebook className="w-5 h-5 text-f1-red shrink-0" />
                                <p>facebook.com/_____</p>
                            </div>
                            <div className="flex gap-3 items-center justify-start">
                                <MdEmail className="w-5 h-5 text-f1-red shrink-0" />
                                <p>_____@____.com</p>
                            </div>
                            <div className="flex gap-3 items-center justify-start">
                                <MdLocationOn className="w-5 h-5 text-f1-red shrink-0" />
                                <p>Boardbazar, Gazipur, Bangladesh</p>
                            </div>
                        </div>
                    </nav>

                    {/* University Info */}
                    <aside className="flex flex-col items-center text-center w-full md:w-1/2">
                        <a href="https://www.iutoic-dhaka.edu/">
                            <img src={iutLogo} alt="Islamic University of Technology logo" className="w-24 sm:w-28 md:w-32 h-auto block mx-auto" />
                        </a>
                        <a href="https://www.iutoic-dhaka.edu/" className="text-sm sm:text-base text-zinc-300 mt-3 hover:text-f1-red transition-colors">
                            Islamic University of Technology
                            <br />
                            A subsidiary organ of Organisation of Islamic Cooperation (OIC)
                        </a>
                    </aside>
                </div>
            </div>

            <div className="bg-carbon border-t border-white/10">
                <aside className="p-5 text-center text-sm text-zinc-400">
                    <p>
                        Copyright &copy; {new Date().getFullYear()} - All rights reserved by{' '}
                        <span className="font-display font-bold uppercase tracking-wide text-white">
                            Formula<span className="text-f1-red">IUT</span>
                        </span>
                    </p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;
