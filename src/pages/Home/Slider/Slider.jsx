import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router';
import { motion as Motion } from 'framer-motion';
import slider1 from '../../../assets/SLider1.jpg';
import slider2 from '../../../assets/Slider2.jpg';
import slider3 from '../../../assets/Slider3.jpg';

export default function Slider() {
  return (
    <div className="slider-wrapper">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="Formula IUT car in action" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="Formula IUT team at work" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="Formula IUT at competition" />
        </SwiperSlide>
      </Swiper>

      {/* Left-to-right darkening for hero text legibility */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-black/85 via-black/40 to-black/10" />
      <div className="slider-fade"></div>

      {/* Hero copy */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-10xl">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="font-display uppercase tracking-[0.3em] text-f1-red text-sm sm:text-base mb-3">
              Islamic University of Technology
            </p>
            <h1 className="font-display uppercase text-white font-extrabold leading-[0.95] text-5xl sm:text-6xl lg:text-7xl">
              Formula <span className="text-f1-red">IUT</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-zinc-200 max-w-xl">
              Engineering, building, and racing a Formula-style car from the
              ground up &mdash; competing on the world FSAE stage.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/team"
                className="font-display uppercase tracking-wide px-6 py-3 bg-f1-red text-white font-semibold rounded-sm hover:bg-f1-red-dark transition-colors duration-300"
              >
                Meet The Team
              </Link>
            </div>
          </Motion.div>
        </div>
      </div>
    </div>
  );
}
