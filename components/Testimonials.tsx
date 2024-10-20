'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Tech Innovators",
      comment: "Account Caddie has transformed our financial management. Their expertise and personalized service have been invaluable to our growth.",
      avatar: "JD"
    },
    {
      name: "Jane Smith",
      position: "CFO, Global Enterprises",
      comment: "Their expertise in tax planning has saved us significant amounts. The team's proactive approach and attention to detail are commendable.",
      avatar: "JS"
    },
    {
      name: "Mark Brown",
      position: "Owner, Brown's Bakery",
      comment: "Account Caddie's financial planning has been crucial to our expansion. They truly understand the needs of small businesses.",
      avatar: "MB"
    }
  ]

  return (
    <section className="bg-xanadu py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${testimonial.avatar}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-te-papa-green">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}