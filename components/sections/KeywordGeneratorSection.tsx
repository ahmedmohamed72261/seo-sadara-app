'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Loader2 } from 'lucide-react'

interface Keyword {
  text: string
  count: number
}

const mockKeywords: Keyword[] = [
  { text: 'منتجات', count: 5121 },
  { text: 'تذكارات شخصية', count: 1977 },
  { text: 'تجارب فريدة', count: 8542 },
  { text: 'هدايا مميزة', count: 2126 },
  { text: 'هدايا للأطفال', count: 6651 },
  { text: 'هدايا للنساء', count: 8659 },
  { text: 'تجربة تسوق', count: 3202 },
  { text: 'عروض خاصة', count: 8861 },
  { text: 'هدايا تذكارية', count: 8081 },
  { text: 'تجربة', count: 5727 },
  { text: 'هدايا للمناسبات الخاصة', count: 4536 },
  { text: 'اختيارات', count: 1223 },
  { text: 'هدايا للرجال', count: 6651 },
  { text: 'تسوق إلكتروني', count: 4321 },
  { text: 'خدمات مميزة', count: 3456 },
  { text: 'عروض حصرية', count: 7890 },
  { text: 'منتجات عالية الجودة', count: 2345 },
  { text: 'خدمة العملاء', count: 5678 }
]

// Group keywords into rows of 3
const keywordRows = [
  mockKeywords.slice(0, 3),
  mockKeywords.slice(3, 6),
  mockKeywords.slice(6, 9),
  mockKeywords.slice(9, 12),
  mockKeywords.slice(12, 15),
  mockKeywords.slice(15, 18)
]

export function KeywordGeneratorSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [keywords, setKeywords] = useState<Keyword[]>([])
  const [showKeywords, setShowKeywords] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  useEffect(() => {
    if (isInView && !showKeywords && keywords.length === 0) {
      setIsLoading(true)
      
      // Simulate API loading
      const timer = setTimeout(() => {
        setKeywords(mockKeywords)
        setIsLoading(false)
        setShowKeywords(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isInView, showKeywords, keywords.length])

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🔍 استهدف جمهورك بدقة وتصدر نتائج محركات البحث  
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ذكاء اصطناعي مصمم خصيصًا للإعلانات الرقمية
          </p>
          <p className="text-lg text-gray-400 mt-2">
            بنقرة واحدة فقط، أنشئ العناوين والكلمات المفتاحية والوصف الإعلاني بكل سهولة.
          </p>
        </motion.div>

        {/* Loading State */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <Loader2 className="w-12 h-12 animate-spin text-blue-400 mb-4" />
              <p className="text-gray-300 text-lg">Generating keywords...</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Keywords Display */}
        <AnimatePresence>
          {showKeywords && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex flex-col gap-4">
                {keywordRows.map((row, rowIndex) => (
                  <motion.div
                    key={rowIndex}
                    initial={{ opacity: 0, y: -50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: rowIndex * 0.15,
                      type: "spring",
                      stiffness: 120,
                      damping: 12
                    }}
                    className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 justify-items-center"
                  >
                    {row.map((keyword, keywordIndex) => (
                      <motion.div
                        key={keyword.text}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (rowIndex * 0.15) + (keywordIndex * 0.05),
                          type: "spring",
                          stiffness: 150
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
                          y: -2
                        }}
                        className="w-full bg-gradient-to-r from-gray-800/60 to-gray-700/60 backdrop-blur-sm border border-gray-600/40 rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 py-2 sm:py-3 hover:border-blue-400/60 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2">
                          <span className="text-white font-medium group-hover:text-blue-300 transition-colors text-xs sm:text-sm md:text-base leading-tight">
                            #{keyword.text}
                          </span>
                          <motion.span 
                            className="text-green-400 font-bold text-xs sm:text-sm bg-green-400/15 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
                            whileHover={{ scale: 1.1 }}
                          >
                            ↑ {keyword.count.toLocaleString()}
                          </motion.span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}