import { LoadingSkeleton } from "@/components/ui/loading-skeleton"
import { ResponsiveContainer, ResponsiveGrid } from "@/components/ui/responsive-container"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <div className="h-20 bg-white shadow-sm flex items-center">
        <ResponsiveContainer size="full" padding="lg" className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LoadingSkeleton variant="circular" width="28px" height="28px" />
            <LoadingSkeleton variant="rectangular" width="80px" height="24px" />
          </div>
          <div className="hidden lg:flex gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <LoadingSkeleton key={i} variant="rectangular" width="60px" height="16px" />
            ))}
          </div>
          <LoadingSkeleton variant="rectangular" width="140px" height="40px" className="rounded-full" />
        </ResponsiveContainer>
      </div>

      {/* Hero Section Skeleton */}
      <section className="pt-16 pb-20 bg-white">
        <ResponsiveContainer size="xl" padding="lg">
          <ResponsiveGrid cols={{ default: 1, lg: 2 }} gap="lg" className="items-center">
            <div className="space-y-6 text-center lg:text-right">
              <LoadingSkeleton variant="text" lines={3} />
              <div className="flex gap-3 justify-center lg:justify-start">
                <LoadingSkeleton variant="rectangular" width="120px" height="48px" className="rounded-full" />
                <LoadingSkeleton variant="rectangular" width="120px" height="48px" className="rounded-full" />
              </div>
            </div>
            <LoadingSkeleton variant="rectangular" width="100%" height="400px" className="rounded-2xl" />
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Features Section Skeleton */}
      <section className="py-16 bg-gray-50">
        <ResponsiveContainer size="xl" padding="lg">
          <div className="text-center mb-16">
            <LoadingSkeleton variant="rectangular" width="200px" height="32px" className="mx-auto mb-4" />
            <LoadingSkeleton variant="text" lines={2} className="max-w-3xl mx-auto" />
          </div>
          
          <ResponsiveGrid cols={{ default: 1, sm: 2, lg: 3 }} gap="lg">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-8 bg-white rounded-xl shadow-md">
                <LoadingSkeleton variant="circular" width="64px" height="64px" className="mx-auto mb-6" />
                <LoadingSkeleton variant="rectangular" width="150px" height="24px" className="mx-auto mb-4" />
                <LoadingSkeleton variant="text" lines={3} />
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Portfolio Section Skeleton */}
      <section className="py-16 bg-white">
        <ResponsiveContainer size="xl" padding="lg">
          <div className="text-center mb-16">
            <LoadingSkeleton variant="rectangular" width="300px" height="32px" className="mx-auto mb-4" />
            <LoadingSkeleton variant="text" lines={2} className="max-w-3xl mx-auto" />
          </div>
          
          <ResponsiveGrid cols={{ default: 1, sm: 2, lg: 3 }} gap="lg">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                <LoadingSkeleton variant="rectangular" width="100%" height="192px" />
                <div className="p-6">
                  <LoadingSkeleton variant="rectangular" width="80px" height="20px" className="rounded-full mb-3" />
                  <LoadingSkeleton variant="rectangular" width="180px" height="24px" className="mb-2" />
                  <LoadingSkeleton variant="text" lines={2} />
                </div>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Blog Section Skeleton */}
      <section className="py-16 bg-gray-50">
        <ResponsiveContainer size="xl" padding="lg">
          <div className="text-center mb-16">
            <LoadingSkeleton variant="rectangular" width="250px" height="32px" className="mx-auto mb-4" />
            <LoadingSkeleton variant="text" lines={2} className="max-w-3xl mx-auto" />
          </div>
          
          <ResponsiveGrid cols={{ default: 1, sm: 2, lg: 3 }} gap="lg">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                <LoadingSkeleton variant="rectangular" width="100%" height="160px" />
                <div className="p-4">
                  <LoadingSkeleton variant="text" lines={3} />
                  <LoadingSkeleton variant="rectangular" width="100px" height="16px" className="mt-4" />
                </div>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section Skeleton */}
      <section className="py-16 bg-white">
        <ResponsiveContainer size="xl" padding="lg">
          <div className="text-center mb-16">
            <LoadingSkeleton variant="rectangular" width="200px" height="32px" className="mx-auto mb-4" />
            <LoadingSkeleton variant="text" lines={2} className="max-w-3xl mx-auto" />
          </div>
          
          <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }} gap="lg" className="max-w-5xl mx-auto">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-6 bg-white border rounded-xl shadow-sm">
                <LoadingSkeleton variant="rectangular" width="120px" height="24px" className="mb-2" />
                <LoadingSkeleton variant="rectangular" width="180px" height="16px" className="mb-6" />
                <LoadingSkeleton variant="rectangular" width="100px" height="40px" className="mb-6" />
                <div className="space-y-3">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <LoadingSkeleton variant="circular" width="20px" height="20px" />
                      <LoadingSkeleton variant="rectangular" width="150px" height="16px" />
                    </div>
                  ))}
                </div>
                <LoadingSkeleton variant="rectangular" width="100%" height="44px" className="rounded-full mt-6" />
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>
    </div>
  )
}