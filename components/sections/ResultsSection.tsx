import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GradientText } from "@/components/ui/gradient-text"
import { TrendingUp, Award } from "lucide-react"

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
        <AnimatedContainer animation="fade-in-up" className="text-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium shadow-lg border border-green-200">
              <TrendingUp className="w-4 h-4 mr-2" />
              النتائج تتحدث
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <GradientText variant="success">نمو حقيقي</GradientText>{" "}
              <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">يمكنك رؤيته</span>
            </h2>
            <p className="max-w-4xl text-lg md:text-xl lg:text-2xl text-gray-600 mx-auto leading-relaxed">
              نحن نؤمن بالشفافية. شاهد بنفسك كيف نحول الاستثمار في الـ SEO إلى زيادة في الظهور والنقرات.
            </p>
          </div>
        </AnimatedContainer>

        {/* Stats Cards */}
        <AnimatedContainer animation="fade-in-up" delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {statsData.map((stat, index) => (
              <InteractiveCard key={index} variant="lift" intensity="medium">
                <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.percentage}</div>
                    <div className="text-gray-600 font-medium">{stat.description}</div>
                  </CardContent>
                </Card>
              </InteractiveCard>
            ))}
          </div>
        </AnimatedContainer>

        <AnimatedContainer animation="scale-in" delay={500}>
          <InteractiveCard variant="lift" intensity="subtle">
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50 p-8 border-b">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <Award className="h-6 w-6 text-blue-600" />
                  أداء البحث العضوي - آخر 3 أشهر
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/search-console-graph.png"
                    width={1200}
                    height={600}
                    alt="رسم بياني من Google Search Console يوضح نمو النقرات والظهور"
                    className="w-full h-auto transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    نمو مستمر
                  </div>
                </div>
              </CardContent>
            </Card>
          </InteractiveCard>
        </AnimatedContainer>
      </div>
    </section>
  )
}