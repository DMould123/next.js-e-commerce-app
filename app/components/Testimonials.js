'use client'
import React, { useState, useEffect } from 'react'
import TestimonialCard from '../TestimonialCard'

// Testimonial data for each product category
const englishTestimonials = [
  {
    name: 'Bob',
    rating: 5,
    review: 'Great English product!',
    image:
      'https://res.cloudinary.com/dele4dvi9/image/upload/v1695037581/avatars/bob_r3jgoi.png'
  }
  // Add more English testimonials as needed
]

const mathsTestimonials = [
  {
    name: 'Alice',
    rating: 4,
    review: 'Excellent Maths service!',
    image:
      'https://res.cloudinary.com/dele4dvi9/image/upload/v1695039400/avatars/b337fbb0004599d97edbfd583b2667ad-removebg-preview_vguri6.png'
  },
  {
    name: 'Colin',
    rating: 4,
    review: 'Excellent Maths service!',
    image:
      'https://res.cloudinary.com/dele4dvi9/image/upload/v1695039025/avatars/colin_dqzq5w.png'
  }
  // Add more Maths testimonials as needed
]

const scienceTestimonials = [
  {
    name: 'Maggie',
    rating: 5,
    review: 'Highly recommended Science!',
    image:
      'https://res.cloudinary.com/dele4dvi9/image/upload/v1695039505/avatars/fbc0bbaa29d36321c5fc681e04ed0c7b-removebg-preview_egpfvo.png'
  }
  // Add more Science testimonials as needed
]

const programmingTestimonials = [
  {
    name: 'Sunita',
    rating: 5,
    review: 'Awesome Programming course!',
    image:
      'https://res.cloudinary.com/dele4dvi9/image/upload/v1695039673/avatars/8fd440a414f6ab5f3767e39e70faee0c-removebg-preview_hkxrrg.png'
  }
  // Add more Programming testimonials as needed
]

// Combine testimonial data for all product categories
const testimonialData = [
  ...englishTestimonials,
  ...mathsTestimonials,
  ...scienceTestimonials,
  ...programmingTestimonials
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
