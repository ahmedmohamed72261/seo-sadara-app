'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
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
  Clock,
  User,
  Eye,
  Share2,
  Heart,
  MessageCircle,
  ChevronLeft,
  Home
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
  likes: string[]
  comments: any[]
  createdAt: string
  updatedAt: string
  publishedAt: string
}

interface RelatedBlog {
  _id: string
  title: string
  slug: string
  excerpt: string
  featuredImage: {
    url: string
    publicId: string
  }
  readTime: number
  publishedAt: string
}

export default function BlogDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const [blog, setBlog] = useState<Blog | null>(null)
  const [relatedBlogs, setRelatedBlogs] = useState<RelatedBlog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    if (slug) {
      fetchBlog()
      fetchRelatedBlogs()
    }
  }, [slug])

  const fetchBlog = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://blogs-server-phi.vercel.app/api/blogs')
      if (!response.ok) {
        throw new Error('فشل في تحميل المقال')
      }
      const data = await response.json()
      // Find the blog with matching slug
      const foundBlog = data.blogs.find((blog: Blog) => blog.slug === slug)
      if (!foundBlog) {
        throw new Error('المقال غير موجود')
      }
      setBlog(foundBlog)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ غير متوقع')
    } finally {
      setLoading(false)
    }
  }

  const fetchRelatedBlogs = async () => {
    try {
      const response = await fetch('https://blogs-server-phi.vercel.app/api/blogs')
      if (response.ok) {
        const data = await response.json()
        // Filter out current blog and take first 3
        const filtered = data.blogs.filter((b: RelatedBlog) => b.slug !== slug).slice(0, 3)
        setRelatedBlogs(filtered)
      }
    } catch (err) {
      console.error('فشل في تحميل المقالات ذات الصلة:', err)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatContent = (content: string) => {
    return content.split('\\r\\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null
      
      // Check if it's a heading (starts with specific patterns)
      if (paragraph.includes('؟') && paragraph.length < 100) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {paragraph}
          </h2>
        )
      }
      
      // Check if it's a subheading
      if (paragraph.endsWith(':') || (paragraph.length < 80 && !paragraph.includes('.'))) {
        return (
          <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            {paragraph}
          </h3>
        )
      }
      
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4 text-lg">
          {paragraph}
        </p>
      )
    }).filter(Boolean)
  }

  const handleShare = async () => {
    if (navigator.share && blog) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        })
      } catch (err) {
        console.log('مشاركة ملغاة')
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('تم نسخ الرابط!')
    }
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    // Here you would typically send a request to your API to update the like status
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">جاري تحميل المقال...</p>
        </div>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'المقال غير موجود'}</p>
          <Button asChild variant="outline">
            <Link href="/blog">العودة للمدونة</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="w-full py-6 bg-white border-b">
          <div className="container mx-auto px-4 lg:px-6">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                <Home className="h-4 w-4" />
                الرئيسية
              </Link>
              <ChevronLeft className="h-4 w-4" />
              <Link href="/blog" className="hover:text-blue-600 transition-colors">
                ��لمدونة
              </Link>
              <ChevronLeft className="h-4 w-4" />
              <span className="text-gray-900 font-medium truncate">{blog.title}</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <section className="w-full py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <AnimatedContainer animation="fade-in-up">
                <div className="text-center space-y-6">
                  <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {blog.category}
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                    {blog.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  
                  {/* Article Meta */}
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 pt-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{blog.author.firstName} {blog.author.lastName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(blog.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{blog.readTime} دقائق قراءة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      <span>{blog.views} مشاهدة</span>
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="w-full py-8">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <AnimatedContainer animation="scale-in">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={blog.featuredImage?.url || "/placeholder.svg"}
                    width={1200}
                    height={600}
                    alt={blog.title}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="w-full py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <AnimatedContainer animation="fade-in-up">
                    <article className="prose prose-lg max-w-none">
                      <div className="text-gray-700 leading-relaxed space-y-6">
                        {formatContent(blog.content)}
                      </div>
                    </article>
                  </AnimatedContainer>

                  {/* Tags */}
                  <AnimatedContainer animation="fade-in-up" delay={200}>
                    <div className="mt-12 pt-8 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">الكلمات المفتاحية</h3>
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition-colors cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedContainer>

                  {/* Social Actions */}
                  <AnimatedContainer animation="fade-in-up" delay={300}>
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={handleLike}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                              isLiked
                                ? 'bg-red-100 text-red-600 hover:bg-red-200'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                            <span>{blog.likes.length + (isLiked ? 1 : 0)}</span>
                          </button>
                          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-all duration-300">
                            <MessageCircle className="h-5 w-5" />
                            <span>{blog.comments.length}</span>
                          </button>
                        </div>
                        <button
                          onClick={handleShare}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-all duration-300"
                        >
                          <Share2 className="h-5 w-5" />
                          <span>مشاركة</span>
                        </button>
                      </div>
                    </div>
                  </AnimatedContainer>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-8">
                    {/* Author Card */}
                    <AnimatedContainer animation="fade-in-left">
                      <Card className="bg-white shadow-lg border-0">
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                            {blog.author.firstName.charAt(0)}{blog.author.lastName.charAt(0)}
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {blog.author.firstName} {blog.author.lastName}
                          </h3>
                          <p className="text-sm text-gray-600">كاتب محتوى SEO</p>
                        </CardContent>
                      </Card>
                    </AnimatedContainer>

                    {/* Table of Contents */}
                    <AnimatedContainer animation="fade-in-left" delay={200}>
                      <Card className="bg-white shadow-lg border-0">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-gray-900 mb-4">محتويات المقال</h3>
                          <nav className="space-y-2">
                            <a href="#" className="block text-sm text-blue-600 hover:text-blue-800 transition-colors">
                              مقدمة
                            </a>
                            <a href="#" className="block text-sm text-blue-600 hover:text-blue-800 transition-colors">
                              أهمية SEO في السعودية
                            </a>
                            <a href="#" className="block text-sm text-blue-600 hover:text-blue-800 transition-colors">
                              استراتيجيات النجاح
                            </a>
                            <a href="#" className="block text-sm text-blue-600 hover:text-blue-800 transition-colors">
                              الخلاصة
                            </a>
                          </nav>
                        </CardContent>
                      </Card>
                    </AnimatedContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="w-full py-16 bg-gray-100">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="max-w-6xl mx-auto">
                <AnimatedContainer animation="fade-in-up">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                      <GradientText variant="primary">مقالات ذات صلة</GradientText>
                    </h2>
                    <p className="text-lg text-gray-600 mt-4">
                      اكتشف المزيد من المحتوى المفيد
                    </p>
                  </div>
                </AnimatedContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedBlogs.slice(0, 3).map((relatedBlog, index) => (
                    <AnimatedContainer key={relatedBlog._id} animation="fade-in-up" delay={index * 100}>
                      <InteractiveCard variant="lift" intensity="medium">
                        <Card className="h-full bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                          <div className="relative overflow-hidden">
                            <Image
                              src={relatedBlog.featuredImage?.url || "/placeholder.svg"}
                              width={400}
                              height={200}
                              alt={relatedBlog.title}
                              className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-lg">
                              {relatedBlog.readTime} دقائق
                            </div>
                          </div>
                          <CardContent className="p-6 flex flex-col flex-grow space-y-4">
                            <h3 className="text-lg font-bold flex-grow leading-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              {relatedBlog.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                              {relatedBlog.excerpt}
                            </p>
                            <Link
                              href={`/blog/${relatedBlog.slug}`}
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

                <AnimatedContainer animation="fade-in-up" delay={400} className="text-center mt-12">
                  <Button asChild variant="outline" className="rounded-full h-12 px-8 text-base font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link href="/blog">عرض كل المقالات</Link>
                  </Button>
                </AnimatedContainer>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}