'use client'
import React, { useState, useEffect } from 'react'
import TestimonialCard from '../TestimonialCard'

// Testimonial data for each product category

const englishTestimonials = [
  {
    name: 'Bob',
    rating: 5,
    review:
      'Great English product! I improved my English skills significantly with this course.',
    image:
      'https://res.cloudinary.com/dele4dvi9/image/upload/v1695037581/avatars/bob_r3jgoi.png'
  },
  {
    name: 'Alice',
    rating: 4,
    review:
      'Excellent English course! The lessons were engaging, and the materials were helpful.',
    image:
      'https://res.cloudinary.com/dele4dvi9/image/upload/v1695039400/avatars/b337fbb0004599d97edbfd583b2667ad-removebg-preview_vguri6.png'
  }
  // Add more English testimonials as needed
]

const mathsTestimonials = [
  {
    name: 'Colin',
    rating: 4,
    review: 'Great Maths service! The tutor was knowledgeable and patient.',
    image:
      'https://res.cloudinary.com/dele4dvi9/image/upload/v1695039025/avatars/colin_dqzq5w.png'
  },
  {
    name: 'Diana',
    rating: 5,
    review:
      'Outstanding Maths course! I found the course materials very helpful in my studies.',
    image:
      'https://res.cloudinary.com/dele4dvi9/image/upload/v1695055282/avatars/f57a3f5066e44b7da979ea5f4d104bbc-removebg-preview_1_dz5ib9.png'
  }
  // Add more Maths testimonials as needed
]

const scienceTestimonials = [
  {
    name: 'Maggie',
    rating: 5,
    review:
      'Highly recommended Science! The course content was comprehensive, and the instructor was excellent.',
    image:
      'https://res.cloudinary.com/dele4dvi9/image/upload/v1695039505/avatars/fbc0bbaa29d36321c5fc681e04ed0c7b-removebg-preview_egpfvo.png'
  },
  {
    name: 'Eva',
    rating: 4,
    review:
      'Science course was fantastic! I learned a lot and enjoyed the practical experiments.',
    image:
      'https://res.cloudinary.com/dele4dvi9/image/upload/v1695051425/avatars/7698e1c844546919e6833affc4a8143c-removebg-preview_hripza.png'
  }
  // Add more Science testimonials as needed
]

const programmingTestimonials = [
  {
    name: 'Sunita',
    rating: 5,
    review:
      'Awesome Programming course! The coding projects were challenging and fun to work on.',
    image:
      'https://res.cloudinary.com/dele4dvi9/image/upload/v1695039673/avatars/8fd440a414f6ab5f3767e39e70faee0c-removebg-preview_hkxrrg.png'
  },
  {
    name: 'Mike',
    rating: 4,
    review:
      'Great programming content! I gained valuable skills through this course.',
    image:
      'https://res.cloudinary.com/dele4dvi9/image/upload/v1695039618/avatars/ff84315dded56902466f782cb2ee1340-removebg-preview_1_b8jtdw.png'
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

  // Function to navigate to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    )
  }

  // Function to navigate to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    )
  }

  useEffect(() => {
    // Access the window object only on the client side
    if (typeof window !== 'undefined') {
      const interval = setInterval(nextTestimonial, 5000) // Adjust the interval duration (in milliseconds) as needed

      return () => {
        clearInterval(interval)
      }
    }
  }, [])

  // Calculate the number of columns based on the screen width
  const numColumns = window.innerWidth < 640 ? 2 : 4

  // Split testimonialData into rows based on the number of columns
  const rows = []
  for (let i = 0; i < testimonialData.length; i += numColumns) {
    rows.push(testimonialData.slice(i, i + numColumns))
  }

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <div className="relative overflow-x-hidden">
        {' '}
        {/* Add overflow-x-hidden */}
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex space-x-4 justify-between"
            style={{ marginBottom: rowIndex === rows.length - 1 ? 0 : '1rem' }}
          >
            {row.map((testimonial, index) => (
              <div
                key={index}
                className={`w-${100 / numColumns}% transform ${
                  index === currentIndex ? 'scale-100' : 'scale-90'
                } transition-transform duration-500 ease-in-out`}
              >
                <div className="bg-white p-4 border rounded-lg shadow">
                  <div className="flex items-center mb-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">
                        {testimonial.name}
                      </h3>
                      {Array.from(
                        { length: testimonial.rating },
                        (_, index) => (
                          <span key={index} className="text-yellow-500 mr-1">
                            ★
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.review}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
