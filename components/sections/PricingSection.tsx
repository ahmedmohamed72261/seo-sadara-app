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
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
    currency: "ر.س/شهرياً",
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
  const [articles, setArticles] = useState(5)
  const [backlinks, setBacklinks] = useState(10)
  const [selectedNewspapers, setSelectedNewspapers] = useState<string[]>([])
  
  const articlePrice = 80 // ر.س per article
  const backlinkPrice = 50 // ر.س per backlink
  
  const calculateTotal = () => {
    const articlesTotal = articles * articlePrice
    const backlinksTotal = backlinks * backlinkPrice
    const newspapersTotal = selectedNewspapers.reduce((total, name) => {
      const newspaper = newspaperLogos.find(n => n.name === name)
      return total + (newspaper?.price || 0)
    }, 0)
    return articlesTotal + backlinksTotal + newspapersTotal
  }
  
  const toggleNewspaper = (name: string) => {
    setSelectedNewspapers(prev => 
      prev.includes(name) 
        ? prev.filter(n => n !== name)
        : [...prev, name]
    )
  }
  
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Calculator className="h-6 w-6 text-blue-600" />
          حاسبة الباقة المخصصة
        </CardTitle>
        <CardDescription>
          اختر عدد المقالات والباك لينكس والصحف لحساب التكلفة الإجمالية
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Articles Counter */}
        <div className="space-y-3">
          <Label className="flex items-center gap-2 text-lg font-semibold">
            <Newspaper className="h-5 w-5 text-blue-600" />
            عدد المقالات ({articlePrice} ر.س للمقال)
          </Label>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setArticles(Math.max(1, articles - 1))}
              className="h-10 w-10 p-0"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Input 
              type="number" 
              value={articles} 
              onChange={(e) => setArticles(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20 text-center"
              min="1"
            />
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setArticles(articles + 1)}
              className="h-10 w-10 p-0"
            >
              <Plus className="h-4 w-4" />
            </Button>
            <span className="text-sm text-gray-600">= {articles * articlePrice} ر.س</span>
          </div>
        </div>
        
        {/* Backlinks Counter */}
        <div className="space-y-3">
          <Label className="flex items-center gap-2 text-lg font-semibold">
            <Link className="h-5 w-5 text-green-600" />
            عدد الباك لينكس ({backlinkPrice} ر.س للرابط)
          </Label>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setBacklinks(Math.max(1, backlinks - 1))}
              className="h-10 w-10 p-0"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Input 
              type="number" 
              value={backlinks} 
              onChange={(e) => setBacklinks(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20 text-center"
              min="1"
            />
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setBacklinks(backlinks + 1)}
              className="h-10 w-10 p-0"
            >
              <Plus className="h-4 w-4" />
            </Button>
            <span className="text-sm text-gray-600">= {backlinks * backlinkPrice} ر.س</span>
          </div>
        </div>
        
        {/* Newspapers Selection */}
        <div className="space-y-3">
          <Label className="text-lg font-semibold">اختر الصحف والمجلات</Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {newspaperLogos.map((newspaper) => (
              <div 
                key={newspaper.name}
                onClick={() => toggleNewspaper(newspaper.name)}
                className={`p-3 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                  selectedNewspapers.includes(newspaper.name)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center space-y-2">
                  <div className="h-8 w-8 mx-auto bg-gray-100 rounded flex items-center justify-center">
                    <Newspaper className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="text-xs font-medium">{newspaper.name}</div>
                  <div className="text-xs text-gray-500">{newspaper.country}</div>
                  <div className="text-xs font-semibold text-blue-600">{newspaper.price} ر.س</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Total Calculation */}
        <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>المقالات ({articles} × {articlePrice})</span>
              <span>{articles * articlePrice} ر.س</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>الباك لينكس ({backlinks} × {backlinkPrice})</span>
              <span>{backlinks * backlinkPrice} ر.س</span>
            </div>
            {selectedNewspapers.length > 0 && (
              <div className="flex justify-between text-sm">
                <span>الصحف المختارة ({selectedNewspapers.length})</span>
                <span>{selectedNewspapers.reduce((total, name) => {
                  const newspaper = newspaperLogos.find(n => n.name === name)
                  return total + (newspaper?.price || 0)
                }, 0)} ر.س</span>
              </div>
            )}
            <hr className="my-2" />
            <div className="flex justify-between text-lg font-bold text-blue-600">
              <span>الإجمالي</span>
              <span>{calculateTotal().toLocaleString()} ر.س</span>
            </div>
          </div>
          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
            طلب الباقة المخصصة
          </Button>
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
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="pricing-swiper max-w-5xl mx-auto"
            >
              {pricingPlans.map((plan, index) => (
                <SwiperSlide key={index}>
                  <AnimatedContainer 
                    animation={plan.popular ? "scale-in" : "fade-in-up"} 
                    delay={plan.delay}
                  >
                    <InteractiveCard variant="lift" intensity={plan.popular ? "strong" : "medium"}>
                      <Card className={`h-full bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 flex flex-col ${
                        plan.popular ? 'border-blue-600 border-2 relative shadow-xl' : ''
                      }`}>
                        {plan.popular && (
                          <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                            <div className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
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
                            className={`w-full h-11 rounded-full text-base ${
                              plan.buttonVariant === 'default' 
                                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
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
    </section>
  )
}