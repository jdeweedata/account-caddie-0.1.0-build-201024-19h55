'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-te-papa-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Account Caddie</h3>
            <p className="mb-4">Expert financial guidance for your business success.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-chelsea-cucumber"><Facebook /></a>
              <a href="#" className="hover:text-chelsea-cucumber"><Linkedin /></a>
              <a href="#" className="hover:text-chelsea-cucumber"><Instagram /></a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/accounting-reporting" className="hover:text-chelsea-cucumber">Accounting & Reporting</Link></li>
              <li><Link href="/services/tax-services" className="hover:text-chelsea-cucumber">Tax Services</Link></li>
              <li><Link href="/services/financial-planning" className="hover:text-chelsea-cucumber">Financial Planning</Link></li>
              <li><Link href="/services/risk-compliance" className="hover:text-chelsea-cucumber">Risk & Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-chelsea-cucumber">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-chelsea-cucumber">Pricing</Link></li>
              <li><Link href="/faq" className="hover:text-chelsea-cucumber">FAQ</Link></li>
              <li><Link href="/careers" className="hover:text-chelsea-cucumber">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-chelsea-cucumber">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/legal/terms-of-service" className="hover:text-chelsea-cucumber">Terms of Service</Link></li>
              <li><Link href="/legal/privacy-policy" className="hover:text-chelsea-cucumber">Privacy Policy</Link></li>
              <li><Link href="/legal/popia-compliance" className="hover:text-chelsea-cucumber">POPIA Compliance</Link></li>
              <li><Link href="/legal/complaints-procedure" className="hover:text-chelsea-cucumber">Complaints Procedure</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Account Caddie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}