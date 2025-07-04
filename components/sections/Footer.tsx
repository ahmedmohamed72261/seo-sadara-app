import Link from "next/link"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { InteractiveCard } from "@/components/ui/interactive-card"
import {
  Rocket,
  Linkedin,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

const quickLinks = [
  { href: "/#features", label: "خدماتنا" },
  { href: "/#results", label: "النتائج" },
  { href: "/#portfolio", label: "أعمالنا" },
  { href: "/#pricing", label: "الأسعار" },
  { href: "/blog", label: "المدونة" }
]

const contactInfo = [
  {
    icon: MapPin,
    text: "الرياض، المملكة العربية السعودية"
  },
  {
    icon: Mail,
    text: "info@sadara.sa"
  },
  {
    icon: Phone,
    text: "+966 11 123 4567"
  }
]

const socialLinks = [
  { href: "#", icon: Twitter },
  { href: "#", icon: Linkedin },
  { href: "#", icon: Instagram }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-6">
        <AnimatedContainer animation="fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Rocket className="h-7 w-7 text-blue-500 animate-float" />
                <span className="text-2xl font-bold">صدارة</span>
              </div>
              <p className="text-gray-400">
                شريكك الموثوق لتصدر نتائج البحث في المملكة العربية السعودية. نقدم حلول SEO مبتكرة لتحقيق أهدافك الرقمية.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
              <ul className="space-y-3 text-gray-400">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <info.icon className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span>{info.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <InteractiveCard key={index} variant="scale" intensity="medium">
                    <Link href={social.href} className="text-gray-400 hover:text-white transition-colors">
                      <social.icon className="h-6 w-6" />
                    </Link>
                  </InteractiveCard>
                ))}
              </div>
            </div>
          </div>
        </AnimatedContainer>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <AnimatedContainer animation="fade-in-up" delay={200}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
              <p>&copy; {new Date().getFullYear()} صدارة. جميع الحقوق محفوظة.</p>
              <div className="flex flex-col sm:flex-row items-center gap-2 text-sm">
                <span>تطوير:</span>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-blue-400">أحمد محمد</span>
                  <div className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full border border-gray-700 hover:border-green-500 transition-colors">
                    <Phone className="h-3 w-3 text-green-400" />
                    <a href="https://wa.me/201501417241_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors font-medium">
                      01501417241
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </footer>
  )
}