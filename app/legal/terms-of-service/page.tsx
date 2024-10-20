'use client'

import React from 'react'
import { CTAWrapper } from '@/components/CTAWrapper'

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="bg-white py-16 flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-te-papa-green mb-8">Terms of Service</h1>
          <div className="prose max-w-none">
            <p>This page contains the Terms of Service for Account Caddie, compliant with South African regulations.</p>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using Account Caddie's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.</p>
            <h2>2. Description of Service</h2>
            <p>Account Caddie provides financial management and accounting services for businesses in South Africa. Our services include, but are not limited to, bookkeeping, tax preparation, financial planning, and strategic advisory services.</p>
            <h2>3. User Responsibilities</h2>
            <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
            <h2>4. Privacy Policy</h2>
            <p>Your use of Account Caddie's services is also governed by our Privacy Policy, which is incorporated into these Terms of Service by reference.</p>
            <h2>5. Modifications to Service</h2>
            <p>Account Caddie reserves the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice at any time.</p>
            {/* Add more sections as needed */}
          </div>
        </div>
      </section>
      <CTAWrapper />
    </main>
  )
}