'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const newspapers = [
  { name: 'NewsPapers', logo: '/newspapers/1.svg' },
  { name: 'NewsPapers', logo: '/newspapers/2.svg' },
  { name: 'NewsPapers', logo: '/newspapers/3.svg' },
  { name: 'NewsPapers', logo: '/newspapers/4.svg' },
  { name: 'NewsPapers', logo: '/newspapers/5.svg' },
  { name: 'NewsPapers', logo: '/newspapers/6.svg' },
  { name: 'NewsPapers', logo: '/newspapers/7.svg' },
  { name: 'NewsPapers', logo: '/newspapers/3.svg' },
  { name: 'NewsPapers', logo: '/newspapers/7.svg' },
  { name: 'NewsPapers', logo: '/newspapers/2.svg' },
  { name: 'NewsPapers', logo: '/newspapers/5.svg' },
  { name: 'NewsPapers', logo: '/newspapers/4.svg' },
  { name: 'NewsPapers', logo: '/newspapers/1.svg' },
  { name: 'NewsPapers', logo: '/newspapers/6.svg' }
];

export const NewspapersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">شركاؤنا من الصحف العربية</h2>
          <p className="text-gray-400 text-lg">نفخر بتعاوننا مع أكبر الصحف في العالم العربي</p>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              el: '.newspapers-pagination'
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            loop={true}
            speed={1000}
            allowTouchMove={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 35,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
            }}
            className="newspapers-swiper !pb-12"
          >
            {newspapers.map((newspaper, index) => (
              <SwiperSlide key={`${newspaper.logo}-${index}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 rounded-xl p-6 flex items-center justify-center group hover:bg-gray-700/50 transition-all duration-300 h-32"
                >
                  <div className="relative w-full h-24">
                    <Image
                      src={newspaper.logo}
                      alt={newspaper.name}
                      fill
                      className="object-contain filter invert group-hover:invert-0 transition-all duration-300"
                      priority={index < 6}
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="newspapers-pagination flex justify-center mt-8"></div>
        </div>
      </div>

      <style jsx global>{`
        .newspapers-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .newspapers-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(45deg, #ffffff, #3b82f6);
          transform: scale(1.2);
        }
        
        .newspapers-swiper .swiper-slide {
          transition: all 0.5s ease;
        }
      `}</style>
    </section>
  );
};