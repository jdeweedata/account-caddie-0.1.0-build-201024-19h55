'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calculator, FileText, PieChart, Shield, ChevronRight } from "lucide-react"

export default function ServiceSection() {
  const services = [
    {
      id: 'accounting',
      title: 'Accounting & Reporting',
      icon: Calculator,
      description: 'Comprehensive accounting solutions to keep your finances in order.',
      features: [
        'Monthly accounting and bookkeeping',
        'Financial statement preparation',
        'Management reporting',
        'Annual financial statements'
      ],
      link: '/services/accounting-reporting'
    },
    {
      id: 'tax',
      title: 'Tax Services',
      icon: FileText,
      description: 'Expert tax planning and compliance to optimize your financial position.',
      features: [
        'Tax planning and strategy',
        'Corporate and individual tax returns',
        'VAT compliance',
        'Tax dispute resolution'
      ],
      link: '/services/tax-services'
    },
    {
      id: 'planning',
      title: 'Financial Planning',
      icon: PieChart,
      description: "Strategic financial planning to secure your business's future.",
      features: [
        'Budgeting and forecasting',
        'Cash flow management',
        'Investment planning',
        'Retirement planning for business owners'
      ],
      link: '/services/financial-planning'
    },
    {
      id: 'risk',
      title: 'Risk & Compliance',
      icon: Shield,
      description: 'Proactive risk management and compliance solutions for peace of mind.',
      features: [
        'Risk assessment and management',
        'Internal audit',
        'Regulatory compliance',
        'Fraud prevention and detection'
      ],
      link: '/services/risk-compliance'
    }
  ]

  return (
    <section className="bg-te-papa-green py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Accordion type="single" collapsible className="w-full">
              {services.map((service) => (
                <AccordionItem key={service.id} value={service.id}>
                  <AccordionTrigger className="text-left py-4 text-white hover:text-chelsea-cucumber">
                    <div className="flex items-center">
                      <service.icon className="w-6 h-6 mr-2" />
                      {service.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-300 mb-2">{service.description}</p>
                    <Link href={service.link} passHref>
                      <Button variant="link" className="text-chelsea-cucumber p-0">
                        Learn More <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="md:col-span-2">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-te-papa-green">
                  Comprehensive Financial Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our range of services is designed to support your business at every stage of growth. From essential accounting to strategic financial planning, we've got you covered.
                </p>
                <Link href="/services" passHref>
                  <Button className="mt-6 bg-chelsea-cucumber text-white hover:bg-te-papa-green">
                    Explore All Services
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}