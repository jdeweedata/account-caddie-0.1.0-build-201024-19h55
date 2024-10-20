'use client'

import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function CTASection() {
  const features = ['Tailored for SMEs', 'Scalable Solutions', 'Growth-Focused Strategies']

  return (
    <section className="bg-gradient-to-br from-chelsea-cucumber to-te-papa-green py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-te-papa-green mb-6 leading-tight">
                Ready to Accelerate Your Business Growth?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of thriving SMEs that trust Account Caddie for their financial success.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-te-papa-green">
                    <CheckCircle className="w-6 h-6 mr-3 text-chelsea-cucumber" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 lg:pl-12 w-full">
              <div className="bg-pampas rounded-xl p-8 shadow-inner">
                <h3 className="text-2xl font-semibold text-te-papa-green mb-6">Start Your Growth Journey Today</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-chelsea-cucumber"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-chelsea-cucumber"
                  />
                  <Button type="button" className="w-full bg-chelsea-cucumber hover:bg-te-papa-green text-white text-lg py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    Get Your Free Consultation
                    <ArrowRight className="ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection