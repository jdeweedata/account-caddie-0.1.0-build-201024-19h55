'use client'

import React from 'react'
import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CTAWrapper } from '@/components/CTAWrapper'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-te-papa-green mb-4">Get in touch</h2>
            <h1 className="text-4xl font-bold text-chelsea-cucumber mb-6">We look forward to hearing from you</h1>
            <p className="text-gray-600 mb-8">
              We're here to help you transform your financial operations. Whether you have questions about our services,
              need support, or are ready to take the next step in your financial journey, our team of experts is ready to assist you.
            </p>
            <p className="text-gray-600 mb-8">
              Contact us today to discuss how Account Caddie can empower your business with innovative and cost-effective financial solutions.
            </p>
          </div>
          <div>
            <div className="bg-pampas p-6 rounded-lg mb-8 text-gray-800">
              <h3 className="text-2xl font-bold text-te-papa-green mb-4">Contact info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-chelsea-cucumber" />
                  <span>7 Autumn Road | West House<br />Devcon Park | Rivonia<br />Johannesburg | 2128</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-chelsea-cucumber" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-chelsea-cucumber" />
                  <span>contact@accountcaddie.com</span>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2 text-te-papa-green">Follow us</h4>
                <div className="flex gap-4">
                  <Facebook className="text-chelsea-cucumber cursor-pointer hover:text-te-papa-green" />
                  <Linkedin className="text-chelsea-cucumber cursor-pointer hover:text-te-papa-green" />
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <Input type="text" placeholder="Name" required />
              <Input type="email" placeholder="Email" required />
              <Textarea placeholder="Message" required />
              <div className="flex items-center gap-2">
                <input type="checkbox" id="consent" required className="rounded text-chelsea-cucumber focus:ring-chelsea-cucumber" />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  You agree to receive email communication from us by submitting this form.
                </label>
              </div>
              <Button type="submit" className="w-full bg-chelsea-cucumber hover:bg-te-papa-green">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </main>
      <CTAWrapper />
    </div>
  )
}