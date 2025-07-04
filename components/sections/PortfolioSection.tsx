import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GradientText } from "@/components/ui/gradient-text"
import { Users } from "lucide-react"

const portfolioItems = [
  {
    img: "/portfolio-real-estate.png",
    category: "عقارات",
    categoryColor: "bg-purple-100 text-purple-800 border-purple-200",
    title: "شركة تطوير عقاري",
    description: "تصدر نتائج البحث لكلمة \"شقق للبيع في الرياض\".",
    growth: "+150%",
    metric: "زيادة في الاستفسارات"
  },
  {
    img: "/portfolio-abayas.png",
    category: "أزياء",
    categoryColor: "bg-pink-100 text-pink-800 border-pink-200",
    title: "متجر عبايات فاخرة",
    description: "زيادة المبيعات عبر الإنترنت بنسبة 85%.",
    growth: "+85%",
    metric: "زيادة في المبي��ات"
  },
  {
    img: "/portfolio-clinic.png",
    category: "خدمات طبية",
    categoryColor: "bg-red-100 text-red-800 border-red-200",
    title: "عيادة تجميل",
    description: "زيادة حجوزات الاستشارات عبر الموقع بنسبة 120%.",
    growth: "+120%",
    metric: "زيادة في الحجوزات"
  },
  {
    img: "/portfolio-dates.png",
    category: "تجارة إلكترونية",
    categoryColor: "bg-green-100 text-green-800 border-green-200",
    title: "متجر إلكتروني للتمور",
    description: "زيادة المبيعات بنسبة 70% عبر البحث العضوي.",
    growth: "+70%",
    metric: "زيادة في المبيعات"
  },
  {
    img: "/portfolio-clothing.png",
    category: "ملابس",
    categoryColor: "bg-gray-100 text-gray-800 border-gray-200",
    title: "متجر أثواب رجالية",
    description: "الوصول لأفضل 5 نتائج بحث لكلمة \"ثوب سعودي\".",
    growth: "المركز الأول",
    metric: "في نتائج البحث"
  },
  {
    img: "/portfolio-auto.png",
    category: "سيارات",
    categoryColor: "bg-yellow-100 text-yellow-800 border-yellow-200",
    title: "مركز صيانة سيارات",
    description: "زيا��ة العملاء المحتملين من البحث المحلي بنسبة 90%.",
    growth: "+90%",
    metric: "زيادة في العملاء"
  }
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <AnimatedContainer animation="fade-in-up" className="text-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium shadow-lg border border-purple-200">
              <Users className="w-4 h-4 mr-2" />
              أعمالنا
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <GradientText variant="warning">نتائج ملموسة</GradientText>{" "}
              <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">في مختلف القطاعات</span>
            </h2>
            <p className="max-w-4xl text-lg md:text-xl lg:text-2xl text-gray-600 mx-auto leading-relaxed">
              نحن نطبق خبراتنا في تحسين محركات البحث لمساعدة الشركات على النمو، بغض النظر عن مجال عملها.
            </p>
          </div>
        </AnimatedContainer>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <AnimatedContainer key={index} animation="fade-in-up" delay={index * 100}>
              <InteractiveCard variant="lift" intensity="strong">
                <Card className="h-full bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.img}
                      width={400}
                      height={300}
                      alt={item.title}
                      className="w-full h-60 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-green-600 shadow-lg">
                      {item.growth}
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border ${item.categoryColor}`}>
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{item.metric}</span>
                    </div>
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