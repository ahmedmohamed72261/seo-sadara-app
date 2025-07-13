'use client'

import Image from "next/image"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GradientText } from "@/components/ui/gradient-text"
import { Building2 } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const brands = [
  {
    id: 1,
    logo: "/brands/1.svg",
    alt: "Brand 1"
  },
  {
    id: 2,
    logo: "/brands/2.svg",
    alt: "Brand 2"
  },
  {
    id: 3,
    logo: "/brands/3.svg",
    alt: "Brand 3"
  },
  {
    id: 4,
    logo: "/brands/4.svg",
    alt: "Brand 4"
  },
  {
    id: 5,
    logo: "/brands/5.svg",
    alt: "Brand 5"
  },
  {
    id: 6,
    logo: "/brands/6.svg",
    alt: "Brand 6"
  },
  {
    id: 7,
    logo: "/brands/7.svg",
    alt: "Brand 7"
  },
  {
    id: 8 ,
    logo: "/brands/8.svg",
    alt: "Brand 8"
  }
]

export function BrandsSection() {
  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        <AnimatedContainer animation="fade-in-up" className="text-center mb-12">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium shadow-lg border border-gray-200">
              <Building2 className="w-4 h-4 mr-2" />
              شركاؤنا في النجاح
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="block">ثقة نعتز بها من أهم العلامات التجارية</span>
              <span className="block mt-2"><GradientText variant="primary">أهم العلامات التجارية</GradientText></span>
            </h2>
            <p className="max-w-3xl text-lg md:text-xl text-gray-600 mx-auto leading-relaxed">
              نفتخر ببناء علاقات استراتيجية مع علامات تجارية كبرى، تستند إلى الثقة، الجودة، والتأثير المستدام في السوق.
            </p>
          </div>
        </AnimatedContainer>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              el: '.brands-pagination'
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
            className="brands-swiper !pb-12"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={brand.id}>
                <AnimatedContainer animation="fade-in-up" delay={index * 100}>
                  <InteractiveCard variant="lift" intensity="medium">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden group p-6 h-32 flex items-center justify-center">
                      <Image
                        src={brand.logo}
                        width={150}
                        height={80}
                        alt={brand.alt}
                        className="max-w-full max-h-full object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                        priority={index < 6}
                      />
                    </div>
                  </InteractiveCard>
                </AnimatedContainer>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="brands-pagination flex justify-center mt-8"></div>
        </div>
      </div>

      <style jsx global>{`
        .brands-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(0, 0, 0, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .brands-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(45deg, #6b7280, #3b82f6);
          transform: scale(1.2);
        }
        
        .brands-swiper .swiper-slide {
          transition: all 0.5s ease;
        }
      `}</style>
    </section>
  )
}