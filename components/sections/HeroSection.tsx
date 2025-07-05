import Link from "next/link"
import Image from "next/image"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GradientText } from "@/components/ui/gradient-text"
import { TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-right">
            <AnimatedContainer animation="fade-in-right" delay={200}>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-lg border border-blue-200">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  خبراء SEO في المملكة العربية السعودية
                </div> 
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                  <GradientText variant="primary" animated>
                    خبراء تحسين محركات البحث
                  </GradientText>{" "}
                  <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">في المملكة العربية السعودية</span>
                </h1>
                <p className="max-w-xl text-lg md:text-xl lg:text-2xl text-gray-600 mx-auto lg:mx-0 leading-relaxed">
                  نحن لا نعد بالصدارة فقط، بل نحققها. استراتجيات SEO متقدمة ومبنية على البيانات لتحقيق أهدافك في السوق السعودي.
                </p>
              </div>
            </AnimatedContainer>
            
            <AnimatedContainer animation="fade-in-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <InteractiveCard variant="lift" intensity="strong">
                  <Link
                    href="#pricing"
                    className="group inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    <span>شاهد باقاتنا</span>
                    <svg className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </InteractiveCard>
                <InteractiveCard variant="scale" intensity="medium">
                  <Link
                    href="#results"
                    className="group inline-flex h-14 items-center justify-center rounded-full border-2 border-gray-300 bg-white/80 backdrop-blur-sm px-8 text-base font-semibold text-gray-800 shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-blue-300"
                  >
                    <span>شاهد النتائج</span>
                    <TrendingUp className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </InteractiveCard>
              </div>
            </AnimatedContainer>

            <AnimatedContainer animation="fade-in-up" delay={600}>
              <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2 me-3">
                    <Image
                      src="/user1.jpg"
                      width={32}
                      height={32}
                      alt="عميل راضٍ"
                      className="w-8 h-8 rounded-full border-2 border-white shadow-md object-cover"
                    />
                    <Image
                      src="/user2.jpg"
                      width={32}
                      height={32}
                      alt="عميل راض"
                      className="w-8 h-8 rounded-full border-2 border-white shadow-md object-cover"
                    />
                    <Image
                      src="/user3.jpg"
                      width={32}
                      height={32}
                      alt="عميل راضٍ"
                      className="w-8 h-8 rounded-full border-2 border-white shadow-md object-cover"
                    />
                    <Image
                      src="/user4.jpg"
                      width={32}
                      height={32}
                      alt="عميل راضٍ"
                      className="w-8 h-8 rounded-full border-2 border-white shadow-md object-cover"
                    />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">+200 عميل راضٍ</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600 font-medium mr-2">4.9/5</span>
                </div>
              </div>
            </AnimatedContainer>
          </div>
          
          <AnimatedContainer animation="fade-in-left" delay={800}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <InteractiveCard variant="lift" intensity="medium">
                <div className="relative bg-white rounded-3xl shadow-2xl p-3 backdrop-blur-sm border border-white/20">
                  <Image
                    src="/saudi-seo-hero.png"
                    width={1200}
                    height={800}
                    alt="لوحة تحكم SEO"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                    نتائج حقيقية
                  </div>
                </div>
              </InteractiveCard>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  )
}