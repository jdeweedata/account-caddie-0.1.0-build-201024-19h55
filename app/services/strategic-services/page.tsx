'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Briefcase, Target, Users, ChevronRight, CheckCircle } from 'lucide-react'
import { CTAWrapper } from '@/components/CTAWrapper'
import OnboardingWizard from '@/components/OnboardingWizard'

const services = [
  {
    title: "Caddie Support",
    description: "Expert guidance tailored to your business needs.",
    icon: Briefcase,
    link: "/services/caddie-support"
  },
  {
    title: "Driving Range",
    description: "Catch-up and clean-up of bookkeeping and tax issues.",
    icon: Target,
    form: true
  }
]

const consultingServices = [
  {
    title: "Teeing off",
    description: "Strong accounting and administrative setup.",
  },
  {
    title: "On the fairway",
    description: "Precision payroll services.",
  },
  {
    title: "Approach Shot",
    description: "Strategic tax planning and compliance.",
  },
  {
    title: "The perfect putt",
    description: "Comprehensive audit and compliance services.",
  }
]

export default function StrategicServicesPage() {
  const [isWizardOpen, setIsWizardOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const handleGetStarted = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsWizardOpen(true)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <section className="bg-pampas py-16 flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-te-papa-green mb-8">Strategic Services</h1>
          <p className="text-xl text-center text-gray-600 mb-12">Tailored solutions to drive your business forward</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-te-papa-green">
                    <service.icon className="w-6 h-6 mr-2 text-chelsea-cucumber" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {service.link ? (
                    <Link href={service.link} passHref>
                      <Button className="w-full bg-chelsea-cucumber text-white hover:bg-te-papa-green">
                        Choose your caddie
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      className="w-full bg-chelsea-cucumber text-white hover:bg-te-papa-green"
                      onClick={() => handleGetStarted(service.title)}
                    >
                      Get in touch
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-te-papa-green">
                  <Users className="w-6 h-6 mr-2 text-chelsea-cucumber" />
                  Specialized Consultancy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Ad-hoc consulting services for your business challenges.</p>
                <ul className="mt-4 space-y-2">
                  {consultingServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-chelsea-cucumber mr-2 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-te-papa-green">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-4 bg-chelsea-cucumber text-white hover:bg-te-papa-green"
                  onClick={() => handleGetStarted('Specialized Consultancy')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTAWrapper />

      {isWizardOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <OnboardingWizard 
              planName={selectedService}
              onClose={() => setIsWizardOpen(false)}
            />
          </div>
        </div>
      )}
    </main>
  )
}