"use client"

import { useEffect, useState } from "react"
import { Rocket } from "lucide-react"

interface ProfessionalLoaderProps {
  onComplete?: () => void
  duration?: number
}

export function ProfessionalLoader({ onComplete, duration = 2500 }: ProfessionalLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsVisible(false)
            onComplete?.()
          }, 300)
          return 100
        }
        return prev + 2
      })
    }, duration / 50)

    return () => clearInterval(interval)
  }, [duration, onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center space-y-8">
        {/* Logo and Brand */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="relative">
            <Rocket className="h-16 w-16 text-blue-600 animate-bounce" />
            <div className="absolute inset-0 h-16 w-16 bg-blue-600 rounded-full opacity-20 animate-ping"></div>
          </div>
          <div className="text-right">
            <h1 className="text-4xl font-bold text-gray-900 mb-1">صدارة</h1>
            <p className="text-lg text-gray-600">خبراء تحسين محركات البحث</p>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>

          {/* Progress Bar */}
          <div className="w-80 mx-auto">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>جاري التحميل...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-gray-600 text-lg font-medium">
            {progress < 30 && "تحضير المحتوى..."}
            {progress >= 30 && progress < 60 && "تحميل الموارد..."}
            {progress >= 60 && progress < 90 && "تحسين الأداء..."}
            {progress >= 90 && "تقريباً انتهينا..."}
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-12">
          <div className="text-center space-y-2 opacity-60">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-xs text-gray-500">سرعة فائقة</p>
          </div>
          <div className="text-center space-y-2 opacity-60">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs text-gray-500">نتائج مضمونة</p>
          </div>
          <div className="text-center space-y-2 opacity-60">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <p className="text-xs text-gray-500">تحليل متقدم</p>
          </div>
        </div>
      </div>
    </div>
  )
}