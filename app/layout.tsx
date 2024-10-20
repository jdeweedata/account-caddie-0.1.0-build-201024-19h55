import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import ClientLayout from '@/components/ClientLayout'
import ErrorBoundary from '@/components/ErrorBoundary'

const notoSans = Noto_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Account Caddie - Expert Financial Guidance for Your Business',
  description: 'Account Caddie provides expert financial guidance, accounting, and tax services for businesses. Let us handle your finances so you can focus on what you do best.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${notoSans.className} flex flex-col min-h-screen`}>
        <ErrorBoundary>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ErrorBoundary>
      </body>
    </html>
  )
}