import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GradientText } from "@/components/ui/gradient-text"
import { Check } from "lucide-react"

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
      "تحليل 50 كلم�� مفتاحية",
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

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <AnimatedContainer animation="fade-in-up" className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <GradientText variant="sunset">باقات واضحة ومرنة</GradientText>
            </h2>
            <p className="max-w-3xl text-lg md:text-xl text-gray-600 mx-auto">
              اختر الباقة التي تناسب حجم أعمالك وأهدافك. لا توجد رسوم خفية.
            </p>
          </div>
        </AnimatedContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <AnimatedContainer 
              key={index} 
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
          ))}
        </div>
      </div>
    </section>
  )
}