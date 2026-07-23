import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import FlagDivider from '../../components/shared/FlagDivider/FlagDivider';

const Error = () => {
    const navigate = useNavigate();

    // Dynamic title handling and lottie animation handling
    useEffect(() => {
        document.title = 'FormulaIUT | Error';
        const existing = document.getElementById('lottie-player-script');
        if (!existing) {
            const script = document.createElement('script');
            script.id = 'lottie-player-script';
            script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="min-h-screen bg-black carbon-texture text-white flex flex-col items-center justify-center px-4 py-16">
            <div className="w-full max-w-5xl grid gap-10 md:grid-cols-2 items-center">
                {/* Lottie Animation */}
                <div className="flex justify-center md:justify-start">
                    <lottie-player
                        src="/Search.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                        class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-64 sm:h-72 md:h-80 lg:h-96"
                    ></lottie-player>
                </div>
                {/* Error texts */}
                <div className="text-center md:text-left space-y-4">
                    <p className="font-display uppercase tracking-widest text-f1-red text-sm">Error 404</p>
                    <h1 className="font-display uppercase text-4xl md:text-6xl font-extrabold">Page Not Found</h1>
                    <p className="text-base md:text-lg text-gray-300">The page you are looking for doesn&apos;t exist or was moved.</p>
                    <div>
                        <button
                            onClick={() => navigate(-1)}
                            className="font-display uppercase tracking-wide px-6 py-3 bg-f1-red text-white font-semibold rounded-sm hover:bg-f1-red-dark transition-colors duration-300 cursor-pointer"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
            <FlagDivider className="w-full max-w-xs mt-16" />
        </div>
    );
};

export default Error;
