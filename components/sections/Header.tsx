import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import {
  Rocket,
  Menu,
} from "lucide-react"

const navigationItems = [
  { href: "#features", label: "خدماتنا" },
  { href: "#results", label: "النتائج" },
  { href: "#portfolio", label: "أعمالنا" },
  { href: "#blog", label: "المدونة" },
  { href: "#contact", label: "تواصل معنا" }
]

const mobileNavigationItems = [
  { href: "#features", label: "خدماتنا", icon: "🎯" },
  { href: "#results", label: "النتائج", icon: "📈" },
  { href: "#portfolio", label: "أعمالنا", icon: "💼" },
  { href: "#blog", label: "المدونة", icon: "📝" },
  { href: "#contact", label: "تواصل معنا", icon: "📞" }
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-lg">
      <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-3 hover:scale-105 transition-all duration-300 group">
          <div className="relative">
            <Rocket className="h-6 w-6 md:h-8 md:w-8 text-blue-600 animate-float group-hover:text-blue-700 transition-colors" />
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 animate-ping"></div>
          </div>
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            صدارة
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          {navigationItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="relative text-lg font-xl text-gray-700 hover:text-blue-600 transition-all duration-300 group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-green-50 rounded-full border-2 border-transparent bg-clip-padding hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
            <Image 
              src="/google-partner-logo.svg" 
              alt="شريك جوجل معتمد" 
              width={80} 
              height={26}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          <Button asChild className="hidden lg:inline-flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-6 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link href="#contact" className="flex items-center gap-2">
              <span>استشارة مجانية</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                <Menu className="h-5 w-5" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-md">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <Rocket className="h-7 w-7 text-blue-600" />
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">صدارة</span>
                </Link>
                
                <nav className="flex flex-col gap-4">
                  {mobileNavigationItems.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-300"
                    >
                      <span className="text-xl">{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </nav>
                
                <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full py-3 shadow-lg hover:shadow-xl transition-all duration-300 mt-4">
                  <Link href="#contact" className="flex items-center justify-center gap-2">
                    <span>اطلب استشارة مجانية</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </Button>
                
                <div className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-full border-2 border-transparent bg-clip-padding shadow-md mt-4">
                  <Image 
                    src="/google-partner-logo.svg" 
                    alt="شريك جوجل معتمد" 
                    width={80} 
                    height={26}
                    className="object-contain"
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}