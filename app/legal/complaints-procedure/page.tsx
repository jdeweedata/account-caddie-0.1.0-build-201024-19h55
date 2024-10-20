import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ComplaintsProcedure() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-te-papa-green mb-8">Complaints Procedure</h1>
          <div className="prose max-w-none">
            <p>This page will outline the procedure for filing and handling complaints, in compliance with South African financial services regulations.</p>
            {/* Add more content here */}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}