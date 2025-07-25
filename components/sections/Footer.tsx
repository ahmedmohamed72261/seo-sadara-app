import Link from "next/link"
import Image from "next/image"
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
  MessageCircle,
  CreditCard,
  Shield,
  Clock,
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
    text: "info@sadara.sa",
    href: "mailto:info@sadara.sa"
  },
  {
    icon: Phone,
    text: "+966 56 659 9744",
    href: "tel:+966566599744"
  },
  {
    icon: MessageCircle,
    text: "واتساب: +966 56 659 9744",
    href: "https://api.whatsapp.com/send/?phone=966566599744",
    whatsapp: true
  }
]

const socialLinks = [
  { href: "#", icon: Twitter, label: "تويتر" },
  { href: "#", icon: Linkedin, label: "لينكد إن" },
  { href: "#", icon: Instagram, label: "إنستغرام" }
]

const paymentMethods = [
  { name: "مدى", image: "/payment-icon/mada_mini.webp" },
  { name: "فيزا وماستركارد", image: "/payment-icon/credit_card_mini.webp" },
  { name: "أبل باي", image: "/payment-icon/apple_pay_mini.webp" },
  { name: "تحويل بنكي", image: "/payment-icon/bank_mini.webp" },
  { name: "الدفع عند الاستلام", image: "/payment-icon/cod_mini.webp" },
  { name: "تابي", image: "/payment-icon/tabby_installment_mini.webp" },
  { name: "تمارا", image: "/payment-icon/tamara_installment_mini.webp" },
  // { name: "STC Pay", image: "/payment-icon/sbc.webp" }
]

const features = [
  { icon: Shield, text: "ضمان الجودة" },
  { icon: Clock, text: "دعم 24/7" },
  { icon: CreditCard, text: "دفع آمن" }
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/20"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative">
        <AnimatedContainer animation="fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6 text-center md:text-right">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Rocket className="h-8 w-8 text-blue-500 animate-float" />
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">صدارة</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                شريكك الموثوق لتصدر نتائج البحث في المملكة العربية السعودية. نقدم حلول SEO مبتكرة ومقالات احترافية في أشهر الصحف العربية لتحقيق أهدافك الرقمية.
              </p>
              
              {/* Logos and Certifications */}
              <div className="space-y-4 mb-6">
                {/* Trade License Logo */}
                <div className="flex items-center gap-3 p-3 bg-gray-200 rounded-lg border border-blue-500/30 backdrop-blur-sm justify-center md:justify-start">
                  <Image
                    src="/trade.png"
                    alt="مرخص من وزارة التجارة"
                    width={160}
                    height={70}
                    className="object-contain"
                  />
                  <div className="text-center md:text-right">
                    <p className="text-base font-bold text-blue-600">مرخص من وزارة التجارة</p>
                  </div>
                </div>
                
                {/* Google Partner Logo */}
                <div className="flex items-center gap-3 p-3 bg-gray-200 rounded-lg border border-blue-500/30 backdrop-blur-sm justify-center md:justify-start">
                  <Image
                    src="/google.png"
                    alt="شريك جوجل"
                    width={60}
                    height={40}
                    className="object-contain"
                  />
                  <div className="text-center md:text-right">
                    <p className="text-base font-bold text-blue-600">شريك جوجل</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="text-right">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">روابط سريعة</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.href}>
                    <AnimatedContainer animation="fade-in-left" delay={index * 100}>
                      <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">
                        {link.label}
                      </Link>
                    </AnimatedContainer>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="text-right">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">تواصل معنا</h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <AnimatedContainer animation="fade-in-right" delay={index * 100}>
                      {info.href ? (
                        <Link 
                          href={info.href} 
                          className={`flex  gap-3 text-gray-300 hover:text-white transition-all duration-300 group justify-start ${
                            info.whatsapp ? 'hover:text-green-400' : ''
                          }`}
                          target={info.whatsapp ? '_blank' : undefined}
                          rel={info.whatsapp ? 'noopener noreferrer' : undefined}
                        >
                          <info.icon className={`h-5 w-5 flex-shrink-0 transition-all duration-300 ${
                            info.whatsapp ? 'text-green-500 group-hover:scale-110' : 'text-blue-500'
                          }`} />
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{info.text}</span>
                        </Link>
                      ) : (
                        <div className="flex gap-3 text-gray-300 justify-start">
                          <info.icon className="h-5 w-5 text-blue-500 flex-shrink-0" />
                          <span>{info.text}</span>
                        </div>
                      )}
                    </AnimatedContainer>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Social Links */}
            <div className="text-right">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">تابعنا</h3>
              <div className="flex flex-col gap-4 items-start">
                {socialLinks.map((social, index) => (
                  <AnimatedContainer key={index} animation="scale-in" delay={index * 150}>
                    <InteractiveCard variant="scale" intensity="strong">
                      <Link 
                        href={social.href} 
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group p-2 rounded-lg hover:bg-gray-800"
                      >
                        <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm">{social.label}</span>
                      </Link>
                    </InteractiveCard>
                  </AnimatedContainer>
                ))}
              </div>
            </div>
          </div>
        </AnimatedContainer>
        
        {/* Payment Methods Section */}
        <AnimatedContainer animation="fade-in-up" delay={300}>
          <div className="border-t border-gray-700 pt-8 mb-8">
            <h3 className="text-lg font-semibold mb-6 text-center text-blue-400">طرق الدفع المتاحة</h3>
            <div className="flex flex-nowrap justify-center items-center gap-2 sm:gap-1 md:gap-2 lg:gap-3 max-w-full overflow-x-auto scrollbar-hide px-2">
              {paymentMethods.map((method, index) => (
                <InteractiveCard key={index} variant="lift" intensity="medium">
                  <div className="bg-white p-0.5 sm:p-1 md:p-2 rounded shadow-md hover:shadow-lg transition-all duration-300 group w-8 h-6 sm:w-10 sm:h-7 md:w-12 md:h-8 lg:w-16 lg:h-10 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={method.image}
                      alt={method.name}
                      width={32}
                      height={22}
                      className="object-contain group-hover:scale-105 transition-transform duration-300 w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-12 lg:h-7 max-w-full max-h-full"
                    />
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </AnimatedContainer>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <AnimatedContainer animation="fade-in-up" delay={400}>
            <div className="flex flex-row justify-center items-center gap-6 text-gray-400">
              <div className="text-center">
                <p className="text-lg font-medium">&copy; {new Date().getFullYear()} صدارة. جميع الحقوق محفوظة.</p>
                <p className="text-sm mt-1">شركة رائدة في مجال تحسين محركات البحث والتسويق الرقمي</p>
              </div>
            </div>
          </AnimatedContainer>
        </div>
        
        {/* Enhanced Floating WhatsApp Button */}
        <div className="fixed bottom-6 left-6 z-50">
          <AnimatedContainer animation="bounce-in" delay={1000}>
            <div className="relative group">
              {/* Pulsing rings */}
              <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
              <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-30"></div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl border border-gray-700">
                  تواصل معنا عبر الواتساب
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
              
              <InteractiveCard variant="scale" intensity="strong">
                <a
                  href="https://api.whatsapp.com/send/?phone=966566599744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full shadow-2xl hover:shadow-green-500/60 transition-all duration-500 group overflow-hidden whatsapp-float whatsapp-glow"
                  title="تواصل معنا عبر الواتساب"
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  {/* WhatsApp Icon */}
                  <MessageCircle className="relative h-8 w-8 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 drop-shadow-lg" />
                  
                  {/* Notification dot */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </a>
              </InteractiveCard>
              
              {/* Floating message bubble */}
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                <div className="bg-white rounded-lg px-3 py-1 shadow-lg border border-gray-200 text-xs text-gray-700 font-medium animate-bounce">
                  مرحباً! 👋
                </div>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </footer>
  )
}