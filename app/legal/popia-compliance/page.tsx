import React from 'react'
import { CTAWrapper } from '@/components/CTAWrapper'

export default function POPIACompliancePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="bg-white py-16 flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-te-papa-green mb-8">POPIA Compliance</h1>
          <div className="prose max-w-none">
            <p>This page will detail Account Caddie&apos;s compliance with the Protection of Personal Information Act (POPIA).</p>
            {/* Add more content here */}
          </div>
        </div>
      </section>
      <CTAWrapper />
    </main>
  )
}