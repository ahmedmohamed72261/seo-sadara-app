'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GradientText } from "@/components/ui/gradient-text"
import { Users } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const portfolioItems = [
  {
    img: "/search engine1.jpg",
    category: "عقارات",
    categoryColor: "bg-purple-100 text-purple-800 border-purple-200",
    title: "شركة تطوير عقاري",
    description: "تصدر نتائج البحث لكلمة \"شقق للبيع في الرياض\" مع نمو استثنائي في الزيارات ��لعضوية.",
    growth: "+285%",
    metric: "زيادة في الاستفسارات"
  },
  {
    img: "/search engine2.jpg",
    category: "أزياء",
    categoryColor: "bg-pink-100 text-pink-800 border-pink-200",
    title: "متجر عبايات فاخرة",
    description: "زيادة المبيعات عبر الإنترنت مع تحسين ترتيب محركات البحث للكلمات المفتاحية الرئيسية.",
    growth: "+340%",
    metric: "زيادة في المبيعات"
  },
  {
    img: "/search engine3.jpg",
    category: "خدمات طبية",
    categoryColor: "bg-red-100 text-red-800 border-red-200",
    title: "عيادة تجميل",
    description: "زيادة حجوزات الاستشارات عبر الموقع مع تحسين الظهور في البحث المحلي.",
    growth: "+420%",
    metric: "زيادة في الحجوزات"
  },
  {
    img: "/search engine4.jpg",
    category: "تجارة إلكترونية",
    categoryColor: "bg-green-100 text-green-800 border-green-200",
    title: "متجر إلكتروني للتمور",
    description: "زيادة المبيعات عبر البحث العضوي مع تحسين معدل التحويل وتجربة المستخدم.",
    growth: "+395%",
    metric: "زيادة في المبيعات"
  }
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        <AnimatedContainer animation="fade-in-up" className="text-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium shadow-lg border border-purple-200">
              <Users className="w-4 h-4 mr-2" />
              أعمالنا
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <GradientText variant="warning">نتائج ملموسة</GradientText>{" "}
              <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">في مختلف القطاعات</span>
            </h2>
            <p className="max-w-4xl text-lg md:text-xl lg:text-2xl text-gray-600 mx-auto leading-relaxed">
              نحن نطبق خبراتنا في تحسين محركات البحث لمساعدة الشركات على النمو، بغض النظر عن مجال عملها.
            </p>
          </div>
        </AnimatedContainer>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              el: '.portfolio-pagination'
            }}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            loop={true}
            speed={1000}
            allowTouchMove={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 35,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="portfolio-swiper !pb-16"
          >
            {portfolioItems.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <AnimatedContainer animation="fade-in-up" delay={index * 100}>
                  <InteractiveCard variant="lift" intensity="strong">
                    <Card className="h-full bg-white shadow-2xl border-0 hover:shadow-3xl transition-all duration-700 overflow-hidden group relative transform-gpu">
                      <div className="relative overflow-hidden">
                        <Image
                          src={item.img}
                          width={400}
                          height={300}
                          alt={item.title}
                          className="w-full h-64 object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                          priority={index < 3}
                        />
                        
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        
                        {/* Growth indicator with animation */}
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <span className="inline-block animate-pulse">{item.growth}</span>
                        </div>

                        {/* Category badge */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border ${item.categoryColor}`}>
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <CardContent className="p-6 space-y-4 relative z-10">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                        <div className="pt-2 border-t border-gray-100 group-hover:border-purple-200 transition-colors duration-300">
                          <span className="text-sm text-gray-500 group-hover:text-purple-600 transition-colors duration-300 font-medium">{item.metric}</span>
                        </div>
                      </CardContent>

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
                    </Card>
                  </InteractiveCard>
                </AnimatedContainer>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="portfolio-pagination flex justify-center mt-8"></div>
        </div>
      </div>

      <style jsx global>{`
        .portfolio-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(0, 0, 0, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .portfolio-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(45deg, #f59e0b, #ec4899);
          transform: scale(1.2);
        }
        
        .portfolio-swiper .swiper-slide {
          height: auto;
          transition: all 0.5s ease;
        }
        
        .portfolio-swiper .swiper-slide > div {
          height: 100%;
        }

        /* Enhanced shadow for professional look */
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </section>
  )
}