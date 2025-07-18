'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GradientText } from "@/components/ui/gradient-text"
import { ArrowLeft } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

interface Blog {
  _id: string
  title: string
  slug: string
  excerpt: string
  featuredImage: {
    url: string
    publicId: string
  }
  category: string
  readTime: number
  publishedAt: string
}

interface BlogSectionProps {
  posts: Blog[]
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="relative w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <AnimatedContainer animation="fade-in-up" className="text-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium shadow-lg border border-indigo-200">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              المدونة
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">أحدث المقالات والنصائح</span>
              <span className="block mt-2">في عالم <GradientText variant="ocean">الـ SEO</GradientText></span>
            </h2>
            <p className="max-w-4xl text-lg md:text-xl lg:text-2xl text-gray-600 mx-auto leading-relaxed">
              ابق على اطلاع بآخر التحديثات والاستراتيجيات لتعزيز وجودك الرقمي.
            </p>
          </div>
        </AnimatedContainer>

        {posts && posts.length > 0 ? (
          <div className="relative">
            <Swiper
              modules={[Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ 
                clickable: true,
                dynamicBullets: true,
                el: '.blog-pagination'
              }}
              autoplay={{
                delay: 3800,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              loop={true}
              speed={1100}
              effect="coverflow"
              coverflowEffect={{
                rotate: 15,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: true,
              }}
              centeredSlides={true}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                  effect: "coverflow",
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                  effect: "coverflow",
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                  effect: "coverflow",
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  effect: "coverflow",
                },
              }}
              className="blog-swiper !pb-16 !overflow-visible"
            >
              {posts.map((post, index) => (
                <SwiperSlide key={post._id} className="!h-auto">
                  <AnimatedContainer animation="fade-in-up" delay={index * 200}>
                    <InteractiveCard variant="lift" intensity="strong">
                      <Card className="h-full bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-700 overflow-hidden group transform-gpu">
                        <div className="relative overflow-hidden">
                          <Image
                            src={post.featuredImage?.url || "/placeholder.svg"}
                            width={400}
                            height={250}
                            alt={post.title}
                            className="w-full h-60 object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                            priority={index < 2}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                          
                          {/* Reading time badge */}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-lg transition-transform duration-300 group-hover:scale-110">
                            {post.readTime} دقائق
                          </div>
                          
                          {/* Category badge */}
                          <div className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                            {post.category}
                          </div>

                          {/* Shimmer effect */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                        </div>
                        <CardContent className="p-6 flex flex-col flex-grow space-y-4">
                          <h3 className="text-xl font-bold flex-grow leading-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                            {post.excerpt}
                          </p>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-all duration-300 group/link mt-auto"
                          >
                            <span>اقرأ المزيد</span>
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </CardContent>
                      </Card>
                    </InteractiveCard>
                  </AnimatedContainer>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="blog-pagination flex justify-center mt-8"></div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">لا توجد مقالات متاحة حالياً</h3>
              <p className="text-gray-600">نعمل على إضافة محتوى جديد قريباً</p>
            </div>
          </div>
        )}

        <AnimatedContainer animation="fade-in-up" delay={800} className="text-center mt-16">
          <Button variant="outline" className="rounded-full h-14 w-fit px-8 text-base font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/blog">عرض كل المقالات</Link>
          </Button>
        </AnimatedContainer>
      </div>

      <style jsx global>{`
        .blog-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(0, 0, 0, 0.3);
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border: 2px solid rgba(255, 255, 255, 0.5);
        }
        
        .blog-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(45deg, #6366f1, #06b6d4);
          transform: scale(1.3);
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
        }
        
        .blog-swiper .swiper-slide {
          height: auto;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .blog-swiper .swiper-slide-active {
          transform: scale(1.05);
        }
        
        .blog-swiper .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.8;
          transform: scale(0.95);
        }
        
        .blog-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .blog-swiper .swiper-slide-shadow-left,
        .blog-swiper .swiper-slide-shadow-right {
          background: linear-gradient(to right, rgba(0,0,0,0.2), transparent);
        }
      `}</style>
    </section>
  )
}