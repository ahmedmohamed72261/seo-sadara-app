import { Card, CardContent } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GradientText } from "@/components/ui/gradient-text"
import { Target, Wrench, Link2 } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "استراتيجية SEO",
    description: "تحليل السوق والمنافسين وبناء استراتيجية مخصصة تتوافق مع أهدافك التجارية في السعودية.",
    animation: "animate-pulse-slow"
  },
  {
    icon: Wrench,
    title: "التحسين الداخلي والتقني",
    description: "تحسين بنية الموقع، سرعته، والمحتوى ليتوافق مع معايير جوجل ويقدم أفضل تجربة للمستخدم.",
    animation: "animate-bounce-slow"
  },
  {
    icon: Link2,
    title: "بناء الروابط الخارجية",
    description: "بناء ملف روابط خارجية (Backlinks) قوي وموثوق من مواقع ذات صلة لتعزيز سلطة موقعك.",
    animation: "animate-spin-slow"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <AnimatedContainer animation="fade-in-up" className="text-center mb-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              خدماتنا الأساسية
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <GradientText variant="secondary">منهجية متكاملة</GradientText> لتصدر نتائج البحث
            </h2>
            <p className="max-w-3xl text-lg md:text-xl text-gray-600 mx-auto">
              نغطي جميع جوانب الـ SEO لضمان تحقيق أفضل النتائج الممكنة لموقعك.
            </p>
          </div>
        </AnimatedContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <AnimatedContainer key={index} animation="fade-in-up" delay={(index + 1) * 200}>
              <InteractiveCard variant="lift" intensity="medium">
                <Card className="h-full bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white mb-6 ${feature.animation}`}>
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600 text-base md:text-lg">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </InteractiveCard>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  )
}