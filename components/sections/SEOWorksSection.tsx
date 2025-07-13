'use client'

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GradientText } from "@/components/ui/gradient-text"
import { 
  TrendingUp, 
  ExternalLink, 
  Eye, 
  Users, 
  MousePointer,
  Calendar,
  Award,
  Target,
  X
} from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { useState } from 'react'

const seoWorks = [
  {
    id: 1,
    title: "متجر الأزياء السعودي",
    description: "تحسين محركات البحث لمتجر أزياء نسائية متخصص في العبايات والفساتين",
    image: "/portfolio-clothing.svg",
    websiteUrl: "https://example-fashion.com",
    category: "تجارة إلكترونية",
    duration: "6 أشهر",
        achievements: [
      "الصفحة الأولى في جوجل لـ 150+ كلمة مفتاحية",
      "زيادة المبيعات بنسبة 190%",
      "تحسين سرعة الموقع بنسبة 85%"
    ]
  },
  {
    id: 2,
    title: "عيادة طبية في الرياض",
    description: "تحسين الظهور المحلي لعيادة متخصصة في طب الأسنان والتجميل",
    image: "/portfolio-clinic.svg",
    websiteUrl: "https://example-clinic.com",
    category: "خدمات طبية",
    duration: "4 أشهر",
        achievements: [
      "المركز الأول في البحث المحلي",
      "زيادة الحجوزات بنسبة 240%",
      "تحسين تجربة المستخدم بشكل كامل"
    ]
  },
  {
    id: 3,
    title: "متجر التمور الفاخرة",
    description: "تحسين محركات البحث لمتجر متخصص في بيع التمور السعودية الفاخرة",
    image: "/portfolio-dates.svg",
    websiteUrl: "https://example-dates.com",
    category: "منتجات غذائية",
    duration: "5 أشهر",
        achievements: [
      "الصفحة الأولى لكلمات التمور الرئيسية",
      "زيادة المبيعات الإلكترونية بنسبة 220%",
      "توسع في الأسواق الخليجية"
    ]
  }
]

export function SEOWorksSection() {
  const [selectedWork, setSelectedWork] = useState<typeof seoWorks[0] | null>(null)

  const openPopup = (work: typeof seoWorks[0]) => {
    setSelectedWork(work)
  }

  const closePopup = () => {
    setSelectedWork(null)
  }

  return (
    <>
      <section id="seo-works" className="relative w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
          <AnimatedContainer animation="fade-in-up" className="text-center mb-16">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-lg border border-blue-200">
                <Award className="w-4 h-4 mr-2" />
                أعمالنا ونتائجنا
              </div>
              <h2 className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <GradientText variant="primary">مشاريع SEO ناجحة</GradientText>{" "}
                <span className="block md:leading-[1.4]  mt-3 md:mt-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">نتائج حقيقية لعملاء حقيقيين</span>
              </h2>
              <p className="max-w-4xl text-lg md:text-xl lg:text-2xl text-gray-600 mx-auto leading-relaxed">
                اكتشف كيف ساعدنا عملاءنا في تحقيق نمو استثنائي في الزيارات والمبيعات من خلال استراتيجيات SEO مدروسة ومخصصة.
              </p>
            </div>
          </AnimatedContainer>

          <div className="relative">
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ 
                clickable: true,
                dynamicBullets: true,
                el: '.seo-works-pagination'
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              loop={true}
              speed={1000}
              effect="fade"
              fadeEffect={{
                crossFade: true
              }}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  effect: "slide",
                  speed: 1200,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  effect: "slide",
                  speed: 1200,
                },
              }}
              className="seo-works-swiper !pb-16"
            >
              {seoWorks.map((work, index) => (
                <SwiperSlide key={work.id} className="!h-auto">
                  <AnimatedContainer animation="fade-in-up" delay={index * 200}>
                    <InteractiveCard variant="lift" intensity="medium">
                      <Card className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-700 bg-white/95 backdrop-blur-sm h-full transform-gpu">
                        {/* Project Image - Full Height */}
                        <div 
                          className="relative overflow-hidden group cursor-pointer h-96 md:h-[500px]"
                          onClick={() => openPopup(work)}
                        >
                          <Image
                            src={work.image}
                            alt={work.title}
                            width={600}
                            height={500}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-blue-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                              {work.category}
                            </Badge>
                          </div>

                          {/* Content Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl md:text-2xl font-bold">{work.title}</h3>
                              <div className="flex items-center text-sm opacity-80">
                                <Calendar className="w-4 h-4 mr-1" />
                                {work.duration}
                              </div>
                            </div>
                            <p className="text-white/90 leading-relaxed mb-4">
                              {work.description}
                            </p>
                            
                            {/* Click to view more indicator */}
                            <div className="flex items-center justify-between">
                              <span className="text-sm opacity-80">انقر لعرض التفاصيل الكاملة</span>
                              <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30">
                                <Eye className="w-4 h-4 mr-2" />
                                عرض المراجعة
                              </Button>
                            </div>
                          </div>
                          
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                        </div>
                      </Card>
                    </InteractiveCard>
                  </AnimatedContainer>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="seo-works-pagination flex justify-center mt-8"></div>
          </div>

          {/* Call to Action */}
          <AnimatedContainer animation="fade-in-up" delay={800} className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                هل تريد نتائج مماثلة لموقعك؟
              </h3>
              <p className="text-lg mb-6 opacity-90">
                احصل على استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق نمو استثنائي
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="#contact">
                  احصل على استشارة مجانية الآن
                </Link>
              </Button>
            </div>
          </AnimatedContainer>
        </div>

        <style jsx global>{`
          .seo-works-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: rgba(0, 0, 0, 0.3);
            opacity: 1;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border: 2px solid rgba(255, 255, 255, 0.5);
          }
          
          .seo-works-swiper .swiper-pagination-bullet-active {
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
            transform: scale(1.3);
            border-color: rgba(255, 255, 255, 0.8);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          
          .seo-works-swiper .swiper-slide {
            height: auto;
            transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .seo-works-swiper .swiper-wrapper {
            transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
        `}</style>
      </section>

      {/* Full Review Popup Modal */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="relative">
              <Image
                src={selectedWork.image}
                alt={selectedWork.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl"></div>
              
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-600 text-white shadow-lg">
                  {selectedWork.category}
                </Badge>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl md:text-3xl font-bold">{selectedWork.title}</h2>
                  <div className="flex items-center text-sm opacity-80">
                    <Calendar className="w-4 h-4 mr-1" />
                    {selectedWork.duration}
                  </div>
                </div>
                <p className="text-white/90 text-lg">{selectedWork.description}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Achievements */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-5 h-5 text-yellow-500 mr-2" />
                  الإنجازات الرئيسية
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedWork.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href={selectedWork.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    زيارة الموقع ومشاهدة النتائج
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={closePopup}
                  className="flex-1 border-gray-300 hover:bg-gray-50"
                >
                  إغلاق
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}