'use client'

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GradientText } from "@/components/ui/gradient-text"
import { TrendingUp, Award } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const statsData = [
  {
    percentage: "+250%",
    description: "زيادة في الزيارات العضوية",
    color: "text-green-600"
  },
  {
    percentage: "+180%",
    description: "تحسن في ترتيب الكلمات المفتاحية",
    color: "text-blue-600"
  },
  {
    percentage: "+320%",
    description: "زيادة في معدل التحويل",
    color: "text-purple-600"
  }
]

export function ResultsSection() {
  return (
    <section id="results" className="relative w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <AnimatedContainer animation="fade-in-up" className="text-center mb-12 md:mb-16">
          <div className="space-y-5 md:space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium shadow-lg border border-green-200">
              <TrendingUp className="w-4 h-4 mr-2" />
              النتائج تتحدث
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <GradientText variant="success">نمو حقيقي</GradientText>{" "}
              <span className="block mt-3 md:leading-[1.4] md:mt-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">يمكنك رؤيته</span>
            </h2>
            <p className="max-w-4xl text-lg  md:text-xl lg:text-2xl text-gray-600 mx-auto leading-relaxed">
              نحن نؤمن بالشفافية. شاهد بنفسك كيف نحول الاستثمار في الـ SEO إلى زيادة في الظهور والنقرات.
            </p>
          </div>
        </AnimatedContainer>

        {/* Stats Cards */}
        <AnimatedContainer animation="fade-in-up" delay={300}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {statsData.map((stat, index) => (
                <InteractiveCard key={index} variant="lift" intensity="medium">
                  <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6 md:p-8 text-center">
                      <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-3`}>{stat.percentage}</div>
                      <div className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">{stat.description}</div>
                    </CardContent>
                  </Card>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </AnimatedContainer>

        {/* Store Sales Section */}
        <AnimatedContainer animation="scale-in" delay={500}>
          <div className="max-w-7xl mx-auto">
            <InteractiveCard variant="lift" intensity="medium">
              <Card className="overflow-hidden shadow-2xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-3xl transition-all duration-700 group">
                <CardHeader className="bg-gradient-to-r from-blue-50 via-green-50 to-purple-50 p-6 md:p-8 lg:p-10 border-b group-hover:from-blue-100 group-hover:via-green-100 group-hover:to-purple-100 transition-all duration-500">
                  <CardTitle className="text-center">
                    <div className="flex flex-col items-center gap-4 md:gap-6">
                      <Award className="h-12 w-12 md:h-16 md:w-16 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-2xl md:text-3xl leading-[1.6] lg:text-4xl xl:text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent">
                        مبيعات المتاجر من خلال تحسين محركات البحث
                      </h3>
                      <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-5xl">
                        شاهد كيف حققت المتاجر الإلكترونية نمواً استثنائياً في المبيعات من خلال استراتيجيات SEO المتقدمة
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6 md:p-8 lg:p-12">
                  <div className="space-y-10 lg:space-y-12">
                    {/* Enhanced Swiper for Search Console Images */}
                    <div className="relative">
                      <Swiper
                        modules={[Pagination, Autoplay, EffectFade]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ 
                          clickable: true,
                          dynamicBullets: true,
                          el: '.results-pagination'
                        }}
                        autoplay={{
                          delay: 3500,
                          disableOnInteraction: false,
                          pauseOnMouseEnter: false,
                        }}
                        loop={true}
                        speed={1200}
                        effect="fade"
                        fadeEffect={{
                          crossFade: true
                        }}
                        breakpoints={{
                          768: {
                            slidesPerView: 1,
                            effect: "slide",
                            speed: 1000,
                          },
                          1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            effect: "slide",
                            speed: 1000,
                          },
                        }}
                        className="results-swiper !pb-16"
                      >
                        {[1, 2, 3, 4].map((num, index) => (
                          <SwiperSlide key={num} className="!h-auto">
                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 group hover:border-blue-300 hover:shadow-2xl transition-all duration-700 transform-gpu">
                              <div className="aspect-[16/10] w-full">
                                <Image
                                  src={`/search${num}.jpg`}
                                  width={600}
                                  height={375}
                                  alt={`تقرير Google Search Console ${num} - نمو المبيعات والزيارات العضوية للمتاجر الإلكترونية`}
                                  className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-110"
                                  priority={index < 2}
                                />
                              </div>
                              
                              {/* Overlay with gradient */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                              
                              {/* Growth badge with animation */}
                              <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2.5 rounded-full text-sm md:text-base font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                                <span className="flex items-center gap-2">
                                  <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></span>
                                  +{250 + (num * 75)}%
                                </span>
                              </div>
                              
                              {/* Store label with slide animation */}
                              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-xl text-sm md:text-base font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                متجر إلكتروني #{num}
                              </div>

                              {/* Shimmer effect */}
                              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>

                      {/* Custom Pagination */}
                      <div className="results-pagination flex justify-center mt-8"></div>
                    </div>
                    
                    {/* Enhanced Performance indicators */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
                      <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:shadow-xl">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-3">+385%</div>
                        <div className="text-base md:text-lg lg:text-xl text-gray-700 font-semibold">مبيعات المتاجر</div>
                        <div className="text-sm md:text-base text-gray-500 mt-2">متوسط النمو</div>
                      </div>
                      <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 hover:shadow-xl">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-3">+440%</div>
                        <div className="text-base md:text-lg lg:text-xl text-gray-700 font-semibold">زيارات عضوية</div>
                        <div className="text-sm md:text-base text-gray-500 mt-2">نمو الزيارات</div>
                      </div>
                      <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border-2 border-purple-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150 hover:shadow-xl">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 mb-3">+295%</div>
                        <div className="text-base md:text-lg lg:text-xl text-gray-700 font-semibold">معدل التحويل</div>
                        <div className="text-sm md:text-base text-gray-500 mt-2">تحسن التحويل</div>
                      </div>
                      <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border-2 border-orange-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-225 hover:shadow-xl">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mb-3">+520%</div>
                        <div className="text-base md:text-lg lg:text-xl text-gray-700 font-semibold">عائد الاستثمار</div>
                        <div className="text-sm md:text-base text-gray-500 mt-2">ROI المحقق</div>
                      </div>
                    </div>
                    
                    {/* Enhanced description */}
                    <div className="text-center bg-gradient-to-r from-blue-50 via-green-50 to-purple-50 rounded-2xl p-8 lg:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 max-w-6xl mx-auto">
                        <span className="font-bold text-blue-600">بيانات حقيقية ومؤكدة</span> من Google Search Console و Google Analytics تُظهر النمو الاستثنائي في مبيعات المتاجر الإلكترونية من خلال تطبيق استراتيجيات تحسين محركات البحث المتقدمة والمخصصة لكل متجر
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </InteractiveCard>
          </div>
        </AnimatedContainer>
      </div>

      <style jsx global>{`
        .results-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(0, 0, 0, 0.3);
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border: 2px solid rgba(255, 255, 255, 0.5);
        }
        
        .results-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(45deg, #10b981, #3b82f6);
          transform: scale(1.3);
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
        }
        
        .results-swiper .swiper-slide {
          height: auto;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .results-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Enhanced shadow for professional look */
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </section>
  )
}