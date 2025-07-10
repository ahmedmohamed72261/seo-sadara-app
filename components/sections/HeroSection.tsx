import Link from "next/link"
import Image from "next/image"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GradientText } from "@/components/ui/gradient-text"
import { TrendingUp, Search, Target, Award, Zap, Globe, BarChart3 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent animate-pulse"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 bg-opacity-20 rounded-full animate-bounce"></div>
      <div className="absolute top-40 left-20 w-24 h-24 bg-purple-500 bg-opacity-20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-indigo-500 bg-opacity-20 rounded-full animate-bounce" style={{ animationDelay: '4s' }}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        <div className="text-center space-y-12">
          {/* Main Content */}
          <div className="max-w-5xl mx-auto space-y-8">
            <AnimatedContainer animation="fade-in-up" delay={200}>
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 text-blue-300 rounded-full text-sm font-medium shadow-lg border border-blue-500/20 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2 animate-pulse" />
                الشركة الرائدة في تحسين محركات البحث بالمملكة
              </div>
            </AnimatedContainer>
            
            <AnimatedContainer animation="fade-in-up" delay={400}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-tight">
                <GradientText variant="primary" animated className="block">
                  تصدر نتائج البحث
                </GradientText>
                <span className="block mt-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  مع خبراء SEO المحترفين
                </span>
              </h1>
            </AnimatedContainer>
            
            <AnimatedContainer animation="fade-in-up" delay={600}>
              <p className="max-w-3xl mx-auto text-xl md:text-2xl lg:text-3xl text-blue-100 leading-relaxed font-light">
                نحقق لك المرتبة الأولى في جوجل بأحدث استراتيجيات SEO المتقدمة والمبنية على البيانات الحقيقية
              </p>
            </AnimatedContainer>
          </div>
          
          {/* CTA Buttons */}
          <AnimatedContainer animation="fade-in-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <InteractiveCard variant="lift" intensity="strong">
                <Link
                  href="#pricing"
                  className="group inline-flex h-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-10 text-lg font-semibold text-white shadow-2xl transition-all duration-500 hover:shadow-blue-500/50 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">ابدأ رحلتك للصدارة</span>
                  <svg className="w-6 h-6 mr-3 transition-transform group-hover:translate-x-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </InteractiveCard>
              
              <InteractiveCard variant="scale" intensity="medium">
                <Link
                  href="#results"
                  className="group inline-flex h-16 items-center justify-center rounded-full border-2 border-blue-400/50 bg-white/10 backdrop-blur-md px-10 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:bg-white/20 hover:border-blue-300"
                >
                  <span>شاهد النتائج المذهلة</span>
                  <TrendingUp className="w-6 h-6 mr-3 transition-transform group-hover:translate-x-2" />
                </Link>
              </InteractiveCard>
            </div>
          </AnimatedContainer>

          {/* Stats Section */}
          <AnimatedContainer animation="fade-in-up" delay={1000}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16">
              <InteractiveCard variant="lift" intensity="medium">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-blue-300 mb-2">+500</div>
                  <div className="text-blue-100 font-medium">موقع في المرتبة الأولى</div>
                </div>
              </InteractiveCard>
              
              <InteractiveCard variant="lift" intensity="medium">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-purple-300 mb-2">98%</div>
                  <div className="text-blue-100 font-medium">معدل رضا العملاء</div>
                </div>
              </InteractiveCard>
              
              <InteractiveCard variant="lift" intensity="medium">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-indigo-300 mb-2">+300%</div>
                  <div className="text-blue-100 font-medium">زيادة متوسط الزيارات</div>
                </div>
              </InteractiveCard>
            </div>
          </AnimatedContainer>

          {/* Features Grid */}
          <AnimatedContainer animation="fade-in-up" delay={1200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-16">
              <div className="flex flex-col items-center space-y-3 group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-8 h-8 text-blue-300" />
                </div>
                <span className="text-blue-100 font-medium text-center">تحليل الكلمات المفتاحية</span>
              </div>
              
              <div className="flex flex-col items-center space-y-3 group">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-purple-300" />
                </div>
                <span className="text-blue-100 font-medium text-center">استهداف دقيق</span>
              </div>
              
              <div className="flex flex-col items-center space-y-3 group">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-indigo-300" />
                </div>
                <span className="text-blue-100 font-medium text-center">تقارير مفصلة</span>
              </div>
              
              <div className="flex flex-col items-center space-y-3 group">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-green-300" />
                </div>
                <span className="text-blue-100 font-medium text-center">نتائج مضمونة</span>
              </div>
            </div>
          </AnimatedContainer>

          {/* Social Proof */}
          <AnimatedContainer animation="fade-in-up" delay={1400}>
            <div className="flex items-center justify-center space-x-8 pt-12">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2 me-3">
                  <Image
                    src="/user1.jpg"
                    width={40}
                    height={40}
                    alt="عميل راضٍ"
                    className="w-10 h-10 rounded-full border-2 border-blue-400 shadow-lg object-cover"
                  />
                  <Image
                    src="/user2.jpg"
                    width={40}
                    height={40}
                    alt="عميل راض"
                    className="w-10 h-10 rounded-full border-2 border-blue-400 shadow-lg object-cover"
                  />
                  <Image
                    src="/user3.jpg"
                    width={40}
                    height={40}
                    alt="عميل راضٍ"
                    className="w-10 h-10 rounded-full border-2 border-blue-400 shadow-lg object-cover"
                  />
                  <Image
                    src="/user4.jpg"
                    width={40}
                    height={40}
                    alt="عميل راضٍ"
                    className="w-10 h-10 rounded-full border-2 border-blue-400 shadow-lg object-cover"
                  />
                </div>
                <span className="text-blue-200 font-medium">+500 عميل راضٍ</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-blue-200 font-medium mr-2">4.9/5</span>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  )
}