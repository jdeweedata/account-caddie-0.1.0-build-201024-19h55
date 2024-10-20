'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const CTASection = dynamic(() => import('./CTASection').then(mod => mod.default), {
  loading: () => <div>Loading...</div>,
  ssr: false
})

export function CTAWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CTASection />
    </Suspense>
  )
}