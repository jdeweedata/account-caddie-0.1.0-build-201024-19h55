'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://res.cloudinary.com/drnjxfm8t/image/upload/v1729255155/Account_Caddie_Email_Logo_114_x_40_px_bjbewa.png"
              alt="Account Caddie Logo"
              width={114}
              height={40}
              className="mr-2"
            />
          </Link>

          <nav className="hidden lg:flex space-x-4">
            <Link href="/" className="text-te-papa-green hover:text-chelsea-cucumber">Home</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-te-papa-green hover:text-chelsea-cucumber">
                Services <ChevronDown className="inline-block ml-1" size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/services/accounting-reporting">Accounting & Reporting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/tax-services">Tax Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/financial-planning">Financial Planning</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/risk-compliance">Risk & Compliance</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/about" className="text-te-papa-green hover:text-chelsea-cucumber">About</Link>
            <Link href="/pricing" className="text-te-papa-green hover:text-chelsea-cucumber">Pricing</Link>
            <Link href="/faq" className="text-te-papa-green hover:text-chelsea-cucumber">FAQ</Link>
          </nav>

          <Link href="/contact" passHref>
            <Button className="hidden lg:block bg-chelsea-cucumber text-white hover:bg-te-papa-green">
              Contact Us
            </Button>
          </Link>

          <button
            className="lg:hidden text-te-papa-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="mt-4 lg:hidden">
            <Link href="/" className="block py-2 text-te-papa-green hover:text-chelsea-cucumber">Home</Link>
            <Link href="/services" className="block py-2 text-te-papa-green hover:text-chelsea-cucumber">Services</Link>
            <Link href="/about" className="block py-2 text-te-papa-green hover:text-chelsea-cucumber">About</Link>
            <Link href="/pricing" className="block py-2 text-te-papa-green hover:text-chelsea-cucumber">Pricing</Link>
            <Link href="/faq" className="block py-2 text-te-papa-green hover:text-chelsea-cucumber">FAQ</Link>
            <Link href="/contact" passHref>
              <Button className="mt-4 w-full bg-chelsea-cucumber text-white hover:bg-te-papa-green">
                Contact Us
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}