'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'
import { CTAWrapper } from '@/components/CTAWrapper'
import OnboardingWizard from '@/components/OnboardingWizard'

const pricingPlans = [
  {
    name: "Core",
    description: "Core package",
    price: "ZAR 4,000",
    features: [
      "Monthly accounting",
      "Monthly management accounts",
      "Annual Financial Statements",
      "Annual Income Tax return"
    ]
  },
  {
    name: "Accountant",
    description: "Essential package",
    price: "ZAR 6,000",
    features: [
      "Monthly accounting",
      "Monthly management accounts",
      "Annual Financial Statements",
      "Annual Income Tax return",
      "Budget support",
      "Cash flow support",
      "Assistance with all technical queries"
    ]
  },
  {
    name: "Financial Manager",
    description: "Advanced package",
    price: "ZAR 10,500",
    features: [
      "Daily accounting",
      "Weekly management accounts",
      "Annual Financial Statements",
      "Annual Income Tax return",
      "Budget support",
      "Cash flow support",
      "Assistance with all technical queries",
      "Management Reporting: Develop and present financial reports to senior management, providing insights into performance and recommendations for improvement",
      "Analysis and forecasting"
    ]
  },
  {
    name: "CFO",
    description: "Strategic package",
    price: "ZAR 20,000",
    features: [
      "Daily accounting",
      "Weekly management accounts",
      "Annual Financial Statements",
      "Annual Income Tax return",
      "Budget support",
      "Cash flow support",
      "Assistance with all technical queries",
      "Risk Management: Identify financial risks (e.g., credit, currency, and operational risks) and implement measures to mitigate them",
      "Tax Strategy",
      "Investment Appraisal: Evaluate potential investments, acquisitions, or new projects through financial modeling and return on investment (ROI) analysis",
      "Cost Reduction Strategies"
    ]
  }
]

export default function PricingPage() {
  const [isWizardOpen, setIsWizardOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const handleChoosePlan = (planName: string) => {
    setSelectedPlan(planName)
    setIsWizardOpen(true)
  }

  return (
    <main className="min-h-screen bg-te-papa-green">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Our Pricing Plans</h1>
          <p className="text-lg md:text-xl text-center text-gray-200 mb-12">Choose the plan that best fits your business needs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="flex flex-col bg-white">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-bold text-te-papa-green">{plan.name}</CardTitle>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-2xl md:text-3xl font-bold text-chelsea-cucumber mb-4">{plan.price}<span className="text-sm font-normal text-gray-600"> / month</span></p>
                  <p className="text-sm text-gray-600 mb-4">Excl. VAT</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-chelsea-cucumber mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 mt-auto">
                  <Button 
                    className="w-full bg-chelsea-cucumber text-white hover:bg-te-papa-green"
                    onClick={() => handleChoosePlan(plan.name)}
                  >
                    Choose Plan
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTAWrapper />

      {isWizardOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <OnboardingWizard 
              planName={selectedPlan}
              onClose={() => setIsWizardOpen(false)}
            />
          </div>
        </div>
      )}
    </main>
  )
}