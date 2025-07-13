import { Button } from "@/components/ui/button"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { GradientText } from "@/components/ui/gradient-text"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <AnimatedContainer animation="fade-in-up" className="text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              مستعد للوصول إلى <GradientText variant="rainbow" animated>قمة نتائج البحث</GradientText>؟
            </h2>
            <p className="mx-auto max-w-xl text-lg md:text-xl text-gray-300">
              دعنا نساعدك في تحقيق أهدافك. تواصل معنا اليوم للحصول على استشارة مجانية وخطة عمل مخصصة.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-gray-200 rounded-full h-12 px-8 text-base font-semibold"
              onClick={() => {
                const message = "مرحباً! أريد التواصل معكم للحصول على استشارة مجانية حول خدمات SEO"
                const whatsappUrl = `https://api.whatsapp.com/send/?phone=966566599744&text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
            >
              تواصل معنا الآن
            </Button>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  )
}