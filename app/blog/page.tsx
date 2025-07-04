'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GradientText } from "@/components/ui/gradient-text"
import { Header, Footer } from "@/components/sections"
import {
  ArrowLeft,
  Calendar,
  User,
  Eye,
  Search
} from "lucide-react"

interface Blog {
  _id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featuredImage: {
    url: string
    publicId: string
  }
  author: {
    _id: string
    username: string
    firstName: string
    lastName: string
    avatar: string
  }
  category: string
  tags: string[]
  status: string
  views: number
  readTime: number
  createdAt: string
  updatedAt: string
  publishedAt: string
}

interface BlogResponse {
  blogs: Blog[]
  pagination: {
    currentPage: number
    totalPages: number
    totalBlogs: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [categories, setCategories] = useState<string[]>(['all'])

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://blogs-server-phi.vercel.app/api/blogs')
      if (!response.ok) {
        throw new Error('فشل في تحميل المقالات')
      }
      const data: BlogResponse = await response.json()
      setBlogs(data.blogs)
      
      // Extract unique categories from blogs
      const uniqueCategories = ['all', ...new Set(data.blogs.map(blog => blog.category).filter(Boolean))]
      setCategories(uniqueCategories)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ غير متوقع')
    } finally {
      setLoading(false)
    }
  }

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = searchTerm === '' || 
                         blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">جاري تحميل المقالات...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={fetchBlogs} variant="outline">
            إعادة المحاولة
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <AnimatedContainer animation="fade-in-up" className="text-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-lg border border-blue-200">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  مدونة صدارة
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  <span className="block">أحدث المقالات والنصائح</span>
                  <span className="block mt-2">في عالم <GradientText variant="primary" animated>الـ SEO</GradientText></span>
                </h1>
                <p className="max-w-3xl text-lg md:text-xl text-gray-600 mx-auto leading-relaxed">
                  ابق على اطلاع بآخر التحديثات والاستراتيجيات لتعزيز وجودك الرقمي وتحقيق أفضل النتائج في محركات البحث.
                </p>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* Search Section */}
        <section className="w-full py-8 bg-white border-b">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex justify-center">
              <div className="relative max-w-md w-full">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts with Category Tabs */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            {/* Category Tabs */}
            <div className="flex justify-center mb-12">
              <div className="flex gap-2 bg-gray-100 p-2 rounded-full flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'الكل' : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">لا توجد مقالات في هذا التصنيف</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog, index) => (
                  <AnimatedContainer key={blog._id} animation="fade-in-up" delay={index * 100}>
                    <InteractiveCard variant="lift" intensity="strong">
                      <Card className="h-full bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                        <div className="relative overflow-hidden">
                          <Image
                            src={blog.featuredImage?.url || "/placeholder.svg"}
                            width={400}
                            height={250}
                            alt={blog.title}
                            className="w-full h-60 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                            priority={index < 6}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-lg">
                            {blog.readTime} دقائق
                          </div>
                          <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {blog.category}
                          </div>
                        </div>
                        <CardContent className="p-6 flex flex-col flex-grow space-y-4">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(blog.publishedAt)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{blog.author.firstName} {blog.author.lastName}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              <span>{blog.views}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold flex-grow leading-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed line-clamp-3">
                            {blog.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Link
                            href={`/blog/${blog.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group/link mt-auto"
                          >
                            <span>اقرأ المزيد</span>
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </CardContent>
                      </Card>
                    </InteractiveCard>
                  </AnimatedContainer>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}