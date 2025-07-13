'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GradientText } from "@/components/ui/gradient-text"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageCircle,
  FileText,
  Link,
  Newspaper,
  Calculator,
  Globe,
  CheckCircle,
  Sparkles,
  Check
} from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

interface CurrencyInfo {
  code: string
  symbol: string
  rate: number
}

const currencies: Record<string, CurrencyInfo> = {
  SA: { code: 'SAR', symbol: 'ر.س', rate: 1 },
  AE: { code: 'AED', symbol: 'د.إ', rate: 1.02 },
  EG: { code: 'EGP', symbol: 'ج.م', rate: 12.3 },
  KW: { code: 'KWD', symbol: 'د.ك', rate: 0.31 },
  QA: { code: 'QAR', symbol: 'ر.ق', rate: 3.64 },
  BH: { code: 'BHD', symbol: 'د.ب', rate: 0.38 },
  OM: { code: 'OMR', symbol: 'ر.ع', rate: 0.38 },
  JO: { code: 'JOD', symbol: 'د.أ', rate: 0.71 },
  US: { code: 'USD', symbol: '$', rate: 0.27 }
}

const pricingPlans = [
  {
    name: "الأساسية",
    description: "للشركات الناشئة والصغيرة",
    price: "1,500",
    currency: "ر.س/شهرياً",
    features: [
      "تحليل 10 كلمات مفتاحية",
      "فحص فني أساسي للموقع",
      "تقرير أداء شهري",
      "دعم فني عبر البريد الإلكتروني"
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
      "تقارير أسبوعية مفصلة",
      "دعم فني على مدار الساعة"
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
      "تح��ين مستمر للموقع",
      "بناء روابط خارجية مكثف",
      "مدير حساب مخصص",
      "تقارير يومية وتحليلات متقدمة"
    ],
    buttonText: "تواصل مع المبيعات",
    buttonVariant: "outline" as const,
    popular: false,
    delay: 600
  }
]


export function CustomSEOPackageSection() {
  const [articles, setArticles] = useState([5])
  const [backlinks, setBacklinks] = useState([10])
  const [newspapers, setNewspapers] = useState([3])
  const [currency, setCurrency] = useState<CurrencyInfo>(currencies.SA)
  const [isLoading, setIsLoading] = useState(true)

  // Detect user location and set currency with multiple fallback APIs
  useEffect(() => {
    const detectLocation = async () => {
      const apis = [
        'https://ipapi.co/json/',
        'https://api.ipify.org?format=json',
        'https://ipinfo.io/json',
        'https://api.country.is/'
      ]
      
      for (const api of apis) {
        try {
          const response = await fetch(api, { 
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
            signal: AbortSignal.timeout(5000) // 5 second timeout
          })
          
          if (!response.ok) continue
          
          const data = await response.json()
          let countryCode = ''
          
          // Handle different API response formats
          if (data.country_code) {
            countryCode = data.country_code
          } else if (data.country) {
            countryCode = data.country
          } else if (data.countryCode) {
            countryCode = data.countryCode
          }
          
          if (countryCode && currencies[countryCode]) {
            setCurrency(currencies[countryCode])
            console.log(`Currency detected: ${countryCode}`)
            break
          }
        } catch (error) {
          console.log(`API ${api} failed:`, error)
          continue
        }
      }
      
      // If all APIs fail, use Saudi Arabia as default
      setCurrency(currencies.SA)
      setIsLoading(false)
    }

    detectLocation()
  }, [])

  const calculateTotal = () => {
    const articlesTotal = articles[0] * 150  // 150 SAR per article
    const backlinksTotal = backlinks[0] * 80  // 80 SAR per backlink
    const newspapersTotal = newspapers[0] * 300  // 300 SAR per newspaper subscription
    
    const totalSAR = articlesTotal + backlinksTotal + newspapersTotal
    return Math.round(totalSAR * currency.rate)
  }

  const handleWhatsAppContact = () => {
    const message = `مرحباً! أريد طلب باقة SEO مخصصة:\n\n` +
      `📝 عدد المقالات: ${articles[0]} مقال\n` +
      `🔗 عدد الباك لينكس: ${backlinks[0]} رابط\n` +
      `📰 اشتراكات الصحف: ${newspapers[0]} اشتراك\n\n` +
      `💰 إجمالي السعر: ${calculateTotal()} ${currency.symbol}\n\n` +
      `يرجى التواصل معي لمناقشة التفاصيل.`
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=966566599744&text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <AnimatedContainer animation="fade-in-up" className="text-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-lg border border-blue-200">
              <Calculator className="w-4 h-4 mr-2" />
              احسب باقتك المخصصة
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <GradientText variant="primary">صمم باقتك</GradientText>{" "}
              <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">حسب احتياجاتك</span>
            </h2>
            <p className="max-w-4xl text-lg md:text-xl lg:text-2xl text-gray-600 mx-auto leading-relaxed">
              اختر عدد المقالات والباك لينكس والاشتراكات التي تحتاجها واحصل على عرض سعر فوري
            </p>
          </div>
        </AnimatedContainer>

        {/* Standard Pricing Plans with Slider */}
        <div className="relative mb-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              el: '.custom-pricing-pagination'
            }}
            autoplay={{
              delay: 3500,
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
            className="custom-pricing-swiper !pb-16"
          >
            {pricingPlans.map((plan, index) => (
              <SwiperSlide key={plan.name} className="!h-auto">
                <AnimatedContainer
                  animation="fade-in-up"
                  delay={plan.delay}
                >
                  <InteractiveCard variant="lift" intensity="strong">
                    <Card className={`h-full bg-white shadow-2xl border-0 hover:shadow-3xl transition-all duration-700 overflow-hidden group relative transform-gpu ${
                      plan.popular ? 'border-blue-500 border-2' : ''
                    }`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                            الأكثر شعبية
                          </span>
                        </div>
                      )}
                      
                      <CardContent className={`p-8 text-center space-y-6 ${plan.popular ? 'pt-12' : ''}`}>
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{plan.name}</h3>
                          <p className="text-gray-600">{plan.description}</p>
                          <div className="space-y-2">
                            <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                            {plan.currency && (
                              <div className="text-gray-600 text-lg">{plan.currency}</div>
                            )}
                          </div>
                        </div>
                        
                        <ul className="space-y-3 text-right">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <Check className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button 
                          className={`w-full transition-all duration-300 ${
                            plan.buttonVariant === 'default' 
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl' 
                              : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                          }`}
                          variant={plan.buttonVariant}
                          onClick={() => {
                            const message = `مرحب��ً، أريد الاستفسار عن باقة ${plan.name}`
                            const whatsappUrl = `https://api.whatsapp.com/send/?phone=966566599744&text=${encodeURIComponent(message)}`
                            window.open(whatsappUrl, '_blank')
                          }}
                        >
                          {plan.buttonText}
                        </Button>
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
          <div className="custom-pricing-pagination flex justify-center mt-8"></div>
        </div>

        {/* Currency Display */}
        <AnimatedContainer animation="fade-in-up" delay={200}>
          <div className="flex justify-center mb-8">
            <Badge variant="outline" className="px-4 py-2 text-lg">
              <Globe className="w-4 h-4 mr-2" />
              العملة: {currency.code} ({currency.symbol})
            </Badge>
          </div>
        </AnimatedContainer>

        {/* Package Customization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Controls */}
          <AnimatedContainer animation="fade-in-left" delay={300}>
            <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 p-8">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                  خصص باقتك
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Articles */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold">عدد المقالات</span>
                    </div>
                    <Badge variant="secondary">{articles[0]} مقال</Badge>
                  </div>
                  <Slider
                    value={articles}
                    onValueChange={setArticles}
                    max={20}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-sm text-gray-600">
                    السعر: {Math.round(articles[0] * 150 * currency.rate)} {currency.symbol}
                  </div>
                </div>

                {/* Backlinks */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Link className="h-5 w-5 text-green-600" />
                      <span className="font-semibold">عدد الباك لينكس</span>
                    </div>
                    <Badge variant="secondary">{backlinks[0]} رابط</Badge>
                  </div>
                  <Slider
                    value={backlinks}
                    onValueChange={setBacklinks}
                    max={50}
                    min={5}
                    step={5}
                    className="w-full"
                  />
                  <div className="text-sm text-gray-600">
                    السعر: {Math.round(backlinks[0] * 80 * currency.rate)} {currency.symbol}
                  </div>
                </div>

                {/* Newspapers */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Newspaper className="h-5 w-5 text-purple-600" />
                      <span className="font-semibold">اشتراكات الصحف</span>
                    </div>
                    <Badge variant="secondary">{newspapers[0]} اشتراك</Badge>
                  </div>
                  <Slider
                    value={newspapers}
                    onValueChange={setNewspapers}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-sm text-gray-600">
                    السعر: {Math.round(newspapers[0] * 300 * currency.rate)} {currency.symbol}
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedContainer>

          {/* Right Side - Summary */}
          <AnimatedContainer animation="fade-in-right" delay={400}>
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl border-0">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <Calculator className="h-6 w-6" />
                  ملخص الباقة
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5" />
                      <span>المقالات</span>
                    </div>
                    <span className="font-bold">{articles[0]} مقال</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Link className="h-5 w-5" />
                      <span>الباك لينكس</span>
                    </div>
                    <span className="font-bold">{backlinks[0]} رابط</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Newspaper className="h-5 w-5" />
                      <span>اشتراكات الصحف</span>
                    </div>
                    <span className="font-bold">{newspapers[0]} اشتراك</span>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="text-center space-y-2">
                    <p className="text-lg opacity-90">إجمالي السعر</p>
                    <p className="text-4xl font-bold">{calculateTotal()} {currency.symbol}</p>
                    <p className="text-sm opacity-75">شامل جميع الخدمات</p>
                  </div>
                </div>

                <Button 
                  onClick={handleWhatsAppContact}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  طلب عبر واتساب
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm opacity-75">
                  <CheckCircle className="w-4 h-4" />
                  <span>استشارة مجانية مع كل باقة</span>
                </div>
              </CardContent>
            </Card>
          </AnimatedContainer>
        </div>

              </div>

      <style jsx global>{`
        .custom-pricing-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(0, 0, 0, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .custom-pricing-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          transform: scale(1.2);
        }
        
        .custom-pricing-swiper .swiper-slide {
          height: auto;
          transition: all 0.5s ease;
        }
        
        .custom-pricing-swiper .swiper-slide > div {
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