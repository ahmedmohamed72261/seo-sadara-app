'use client'

import { useState, useEffect } from 'react'
import {
  Header,
  HeroSection,
  FeaturesSection,
  KeywordGeneratorSection,
  ResultsSection,
  SEOWorksSection,
  CustomSEOPackageSection,
  PortfolioSection,
  BrandsSection,
  BlogSection,
  ContactSection,
  Footer,
  NewspapersSection
} from '@/components/sections'

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

export default function SaudiSeoLandingPage() {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://blogs-server-phi.vercel.app/api/blogs?limit=3')
        if (response.ok) {
          const data = await response.json()
          setBlogPosts(data.blogs)
        }
      } catch (error) {
        console.error('فشل في تحميل المقالات:', error)
        // Fallback to static content if API fails
        setBlogPosts([
          {
            _id: '1',
            title: "كيف يساعد تحسين محركات البحث (SEO) في نمو أعمالك في السعودية؟",
            slug: "seo",
            excerpt: "اكتشف كيف يمكن لاستراتيجيات SEO المدروسة أن تعزز نمو أعمالك في السوق السعودي وتضعك في صدارة نتائج البحث.",
            featuredImage: {
              url: "/blog/1.png",
              publicId: ""
            },
            category: "تقنية",
            readTime: 5,
            publishedAt: new Date().toISOString()
          }
        ])
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <KeywordGeneratorSection />
        <NewspapersSection />
        <SEOWorksSection />
        <ResultsSection />
        <CustomSEOPackageSection />
        <PortfolioSection />
        <BlogSection posts={blogPosts} />
        <BrandsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}