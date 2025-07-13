'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GradientText } from "@/components/ui/gradient-text"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Plus, Minus, Newspaper, Link, Calculator } from "lucide-react"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

// Newspaper and media logos for article publishing
const newspaperLogos = [
  { name: "الأهرام", logo: "/newspapers/ahram.svg", country: "مصر", price: 150 },
  { name: "الوطن", logo: "/newspapers/alwatan.svg", country: "مصر", price: 120 },
  { name: "اليوم السابع", logo: "/newspapers/youm7.svg", country: "مصر", price: 100 },
  { name: "الشرق الأوسط", logo: "/newspapers/asharq.svg", country: "السعودية", price: 200 },
  { name: "عكاظ", logo: "/newspapers/okaz.svg", country: "السعودية", price: 180 },
  { name: "الرياض", logo: "/newspapers/riyadh.svg", country: "السعودية", price: 170 },
  { name: "الجزيرة", logo: "/newspapers/aljazeera.svg", country: "قطر", price: 250 },
  { name: "الخليج", logo: "/newspapers/alkhaleej.svg", country: "الإمارات", price: 220 }
]

const pricingPlans = [
  {
    name: "الأساسية",
    description: "للشركات الناشئة والصغيرة",
    price: "1,500",
    currency: "ر.س/شهرياً",
    features: [
      "تحليل 10 كلمات مفتاحية",
      "فحص فني أساسي للموقع",
      "تقرير أداء شهري"
    ],
    buttonText: "اختر الباقة",
    buttonVariant: "outline" as const,
    popular: false,
    delay: 200
  },
  {
    name: "الاحترافية",
    description: "للشركات المتوسطة والنامية",
    price: "3,500",
    currency: "ر.س/شهريا",
    features: [
      "تحليل 50 كلمة مفتاحية",
      "فحص فني شامل للموقع",
      "بناء 5 روابط خارجية شهرياً",
      "تقارير أسبوعية مفصلة"
    ],
    buttonText: "اختر الباقة",
    buttonVariant: "default" as const,
    popular: true,
    delay: 400
  },
  {
    name: "النخبة",
    description: "للشركات الكبيرة والمتاجر الضخمة",
    price: "تواصل معنا",
    currency: "",
    features: [
      "استراتيجية مخصصة بالكامل",
      "تحسين مستمر للموقع",
      "بناء روابط خارجية مكثف",
      "مدير حساب مخصص"
    ],
    buttonText: "تواصل مع المبيعات",
    buttonVariant: "outline" as const,
    popular: false,
    delay: 600
  }
]

// Custom Package Calculator Component
function CustomPackageCalculator() {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Calculator className="h-6 w-6 text-blue-600" />
          حاسبة الباقة المخصصة
        </CardTitle>
        <CardDescription>
          تواصل معنا للحصول على عرض سعر مخصص لاحتياجاتك
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg border-2 border-blue-200 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">احصل على عرض سعر مخصص</h3>
            <p className="text-gray-600">
              تواصل معنا عبر واتساب للحصول على استشارة مجانية وعرض سعر يناسب احتياجاتك
            </p>
            <Button 
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-semibold"
              onClick={() => {
                const message = "مرحباً! أريد الحصول على عرض سعر مخصص لخدمات SEO"
                const whatsappUrl = `https://api.whatsapp.com/send/?phone=966566599744&text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
            >
              تواصل عبر واتساب
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <AnimatedContainer animation="fade-in-up" className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              <GradientText variant="sunset">باقات تحسين محركات البحث</GradientText>
              <span className="block mt-3 md:mt-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">واضحة ومرنة لجميع الأعمال</span>
            </h2>
            <p className="max-w-3xl text-lg md:text-xl text-gray-600 mx-auto">
              اختر الباقة التي تناسب حجم أعمالك وأهدافك. لا توجد رسوم خفية.
            </p>
          </div>
        </AnimatedContainer>

        <Tabs defaultValue="standard" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="standard" className="text-lg">الباقات الثابتة</TabsTrigger>
            <TabsTrigger value="custom" className="text-lg">باقة مخصصة</TabsTrigger>
          </TabsList>
          
          <TabsContent value="standard">
            <div className="relative">
              <Swiper
                modules={[Pagination, Autoplay, EffectCoverflow]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true,
                  el: '.pricing-pagination'
                }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                loop={true}
                speed={1200}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 20,
                  stretch: 0,
                  depth: 200,
                  modifier: 1,
                  slideShadows: true,
                }}
                centeredSlides={true}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    effect: "slide",
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                    effect: "coverflow",
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    effect: "coverflow",
                  },
                }}
                className="pricing-swiper max-w-5xl mx-auto !pb-16"
              >
                {pricingPlans.map((plan, index) => (
                  <SwiperSlide key={index} className="!h-auto">
                    <AnimatedContainer 
                      animation={plan.popular ? "scale-in" : "fade-in-up"} 
                      delay={plan.delay}
                    >
                      <InteractiveCard variant="lift" intensity={plan.popular ? "strong" : "medium"}>
                        <Card className={`h-full bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-700 flex flex-col transform-gpu ${
                          plan.popular ? 'border-blue-600 border-2 relative shadow-2xl scale-105' : ''
                        }`}>
                          {plan.popular && (
                            <div className="absolute top-14 -translate-y-1/2 w-full flex justify-center">
                              <div className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
                                الأكثر شيوعاً
                              </div>
                            </div>
                          )}
                          <CardHeader className={`pb-4 ${plan.popular ? 'pt-8' : ''}`}>
                            <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                            <CardDescription>{plan.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-6 flex-1">
                            <div className="text-4xl font-bold">
                              {plan.price} {plan.currency && <span className="text-lg font-normal text-gray-500">{plan.currency}</span>}
                            </div>
                            <ul className="space-y-3 text-base">
                              {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center gap-3">
                                  <Check className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                          <CardContent className="pt-0">
                            <Button 
                              variant={plan.buttonVariant} 
                              className={`w-full h-11 rounded-full text-base transition-all duration-300 ${
                                plan.buttonVariant === 'default' 
                                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl' 
                                  : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                              }`}
                            >
                              {plan.buttonText}
                            </Button>
                          </CardContent>
                        </Card>
                      </InteractiveCard>
                    </AnimatedContainer>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Pagination */}
              <div className="pricing-pagination flex justify-center mt-8"></div>
            </div>
          </TabsContent>
          
          <TabsContent value="custom">
            <div className="max-w-4xl mx-auto">
              <AnimatedContainer animation="fade-in-up" delay={200}>
                <CustomPackageCalculator />
              </AnimatedContainer>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <style jsx global>{`
        .pricing-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(0, 0, 0, 0.3);
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border: 2px solid rgba(255, 255, 255, 0.5);
        }
        
        .pricing-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(45deg, #f59e0b, #f97316);
          transform: scale(1.3);
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
        }
        
        .pricing-swiper .swiper-slide {
          height: auto;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .pricing-swiper .swiper-slide-active {
          transform: scale(1.05);
        }
        
        .pricing-swiper .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.8;
          transform: scale(0.95);
        }
        
        .pricing-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </section>
  )
}