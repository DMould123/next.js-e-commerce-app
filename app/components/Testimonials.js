'use client'
import React, { useState, useEffect } from 'react'
import TestimonialCard from '../TestimonialCard'

const testimonialData = [
  { name: 'Bob', rating: 5, review: 'Great product!' },
  { name: 'Alice', rating: 4, review: 'Excellent service!' },
  { name: 'Charlie', rating: 5, review: 'Highly recommended!' }
  // Add more testimonial data as needed
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Adjust the interval duration (in milliseconds) as needed

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <div className="flex overflow-x-auto space-x-4">
        {testimonialData.map((testimonial, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-64 ${
              index === currentIndex ? 'scale-100' : 'scale-90'
            } transition-transform duration-500 ease-in-out transform`}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  )
}
