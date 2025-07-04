import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ClientWrapper } from "@/components/ui/client-wrapper"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "صدارة - خبراء تحسين محركات البحث في السعودية",
  description:
    "نساعدك على تصدر نتائج البحث والوصول لعملائك في السوق السعودي. حلول SEO متكاملة لتحقيق نتائج حقيقية وملموسة.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
