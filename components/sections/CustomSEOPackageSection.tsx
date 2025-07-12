'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { GradientText } from "@/components/ui/gradient-text"
import {
  MessageCircle,
  FileText,
  Link,
  Newspaper,
  Calculator,
  CheckCircle,
  Sparkles
} from "lucide-react"

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

const packageFeatures = [
  {
    icon: FileText,
    title: "المقالات المحسنة",
    description: "مقالات عالية الجودة محسنة لمحركات البحث",
    basePrice: 150,
    unit: "مقال"
  },
  {
    icon: Link,
    title: "الباك لينكس",
    description: "روابط خارجية عالية الجودة من مواقع موثوقة",
    basePrice: 30,
    unit: "رابط"
  },
  {
    icon: Newspaper,
    title: "اشتراكات الصحف",
    description: "نشر في الصحف والمواقع الإخبارية الكبرى",
    basePrice: 200,
    unit: "اشتراك"
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
    const articlesTotal = articles[0] * packageFeatures[0].basePrice
    const backlinksTotal = backlinks[0] * packageFeatures[1].basePrice
    const newspapersTotal = newspapers[0] * packageFeatures[2].basePrice
    
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
    const whatsappUrl = `https://wa.me/966123456789?text=${encodedMessage}`
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
              اختر عدد المقالات وال��اك لينكس والاشتراكات التي تحتاجها واحصل على عرض سعر فوري
            </p>
          </div>
        </AnimatedContainer>

        {/* Package Customization - Only Two Main Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - خصص باقتك */}
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
                    السعر: {Math.round(articles[0] * packageFeatures[0].basePrice * currency.rate)} {currency.symbol}
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
                    السعر: {Math.round(backlinks[0] * packageFeatures[1].basePrice * currency.rate)} {currency.symbol}
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
                    السعر: {Math.round(newspapers[0] * packageFeatures[2].basePrice * currency.rate)} {currency.symbol}
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedContainer>

          {/* Right Side - ملخص الباقة */}
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
    </section>
  )
}