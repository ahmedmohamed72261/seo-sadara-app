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
  Target
} from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const seoWorks = [
  {
    id: 1,
    title: "متجر الأزياء السعودي",
    description: "تحسين محركات البحث لمتجر أزياء نسائية متخصص في العبايات والفساتين",
    image: "/portfolio-clothing.png",
    websiteUrl: "https://example-fashion.com",
    category: "تجارة إلكترونية",
    duration: "6 أشهر",
    results: {
      monthlyVisits: "45,000",
      organicGrowth: "+280%",
      keywordRanking: "150+",
      conversionRate: "+190%"
    },
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
    image: "/portfolio-clinic.png",
    websiteUrl: "https://example-clinic.com",
    category: "خدمات طبية",
    duration: "4 أشهر",
    results: {
      monthlyVisits: "12,500",
      organicGrowth: "+320%",
      keywordRanking: "85+",
      conversionRate: "+240%"
    },
    achievements: [
      "المركز الأول في البحث المحلي",
      "زيادة الحجوزات بنسبة 240%",
      "تحسين تجربة المستخدم بشكل كامل"
    ]
  },
  {
    id: 3,
    title: "شركة عقارات جدة",
    description: "استراتيجية SEO شاملة لشركة عقارات متخصصة في الفلل والشقق الفاخرة",
    image: "/portfolio-real-estate.png",
    websiteUrl: "https://example-realestate.com",
    category: "عقارات",
    duration: "8 أشهر",
    results: {
      monthlyVisits: "28,000",
      organicGrowth: "+350%",
      keywordRanking: "200+",
      conversionRate: "+180%"
    },
    achievements: [
      "تصدر نتائج البحث لكلمات عقارية مهمة",
      "زيادة الاستفسارات بنسبة 180%",
      "تحسين معدل البقاء في الموقع بنسبة 150%"
    ]
  },
  {
    id: 4,
    title: "متجر التمور الفاخرة",
    description: "تحسين محركات البحث لمتجر متخصص في بيع التمور السعودية الفاخرة",
    image: "/portfolio-dates.png",
    websiteUrl: "https://example-dates.com",
    category: "منتجات غذائية",
    duration: "5 أشهر",
    results: {
      monthlyVisits: "18,500",
      organicGrowth: "+290%",
      keywordRanking: "120+",
      conversionRate: "+220%"
    },
    achievements: [
      "الصفحة الأولى لكلمات التمور الرئيسية",
      "زيادة المبيعات الإلكترونية بنسبة 220%",
      "توسع في الأسواق الخليجية"
    ]
  }
]

export function SEOWorksSection() {
  return (
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              <GradientText variant="primary">مشاريع SEO ناجحة</GradientText>{" "}
              <span className="block mt-3 md:mt-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">نتائج حقيقية لعملاء حقيقيين</span>
            </h2>
            <p className="max-w-4xl text-lg md:text-xl lg:text-2xl text-gray-600 mx-auto leading-relaxed">
              اكتشف كيف ساعدنا عملاءنا في تحقيق نمو استثنائي في الزيارات والمبيعات من خلال استراتيجيات SEO مدروسة ومخصصة.
            </p>
          </div>
        </AnimatedContainer>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          className="seo-works-swiper"
        >
          {seoWorks.map((work, index) => (
            <SwiperSlide key={work.id}>
              <AnimatedContainer animation="fade-in-up" delay={index * 200}>
                <InteractiveCard variant="lift" intensity="medium">
                  <Card className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm">
                    {/* Project Image */}
                    <div className="relative overflow-hidden group">
                      <Image
                        src={work.image}
                        alt={work.title}
                        width={600}
                        height={300}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600 text-white shadow-lg">
                          {work.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button asChild size="sm" className="bg-white text-blue-600 hover:bg-blue-50">
                          <Link href={work.websiteUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            زيارة الموقع
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {work.title}
                        </CardTitle>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {work.duration}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {work.description}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Results Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
                          <div className="flex items-center justify-center mb-1">
                            <Eye className="w-4 h-4 text-green-600 mr-1" />
                          </div>
                          <div className="text-lg font-bold text-green-600">{work.results.monthlyVisits}</div>
                          <div className="text-xs text-gray-600">زيارة شهرية</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                          <div className="flex items-center justify-center mb-1">
                            <TrendingUp className="w-4 h-4 text-blue-600 mr-1" />
                          </div>
                          <div className="text-lg font-bold text-blue-600">{work.results.organicGrowth}</div>
                          <div className="text-xs text-gray-600">نمو عضوي</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-100">
                          <div className="flex items-center justify-center mb-1">
                            <Target className="w-4 h-4 text-purple-600 mr-1" />
                          </div>
                          <div className="text-lg font-bold text-purple-600">{work.results.keywordRanking}</div>
                          <div className="text-xs text-gray-600">كلمة مفتاحية</div>
                        </div>
                        <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-100">
                          <div className="flex items-center justify-center mb-1">
                            <MousePointer className="w-4 h-4 text-orange-600 mr-1" />
                          </div>
                          <div className="text-lg font-bold text-orange-600">{work.results.conversionRate}</div>
                          <div className="text-xs text-gray-600">معدل التحويل</div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Award className="w-4 h-4 text-yellow-500 mr-2" />
                          الإنجازات الرئيسية
                        </h4>
                        <ul className="space-y-2">
                          {work.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Website Link */}
                      <div className="pt-4 border-t border-gray-100">
                        <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                          <Link href={work.websiteUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            زيارة الموقع ومشاهدة النتائج
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </InteractiveCard>
              </AnimatedContainer>
            </SwiperSlide>
          ))}
        </Swiper>

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
    </section>
  )
}