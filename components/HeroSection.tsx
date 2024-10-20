'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-pampas py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-te-papa-green mb-4">
              Expert Financial Guidance for Your Business
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Let us handle your finances so you can focus on what you do best.
            </p>
            <Button className="bg-chelsea-cucumber text-white hover:bg-te-papa-green text-lg px-8 py-3">
              Get Started
            </Button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="https://res.cloudinary.com/drnjxfm8t/image/upload/v1729258188/download_11_ra457x.jpg"
              alt="Financial Guidance"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}