"use client"

import { useState, useEffect } from "react"
import { ProfessionalLoader } from "./professional-loader"

interface ClientWrapperProps {
  children: React.ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
      setShowContent(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && (
        <ProfessionalLoader 
          onComplete={() => setIsLoading(false)}
          duration={2500}
        />
      )}
      <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </>
  )
}