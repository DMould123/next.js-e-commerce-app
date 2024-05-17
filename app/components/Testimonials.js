'use client'
import React, { useState, useEffect } from 'react'

export default function Testimonials() {
  const [testimonialData, setTestimonialData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Fetch the testimonials data from the JSON file
    fetch('/data/testimonials.json')
      .then((response) => response.json())
      .then((data) => {
        // Flatten the testimonials array
        const flattenedData = data.flatMap((category) => category.testimonials)
        setTestimonialData(flattenedData)
      })
      .catch((error) => console.error('Error fetching testimonials:', error))
  }, [])

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    )
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    )
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const interval = setInterval(nextTestimonial, 5000)
      return () => clearInterval(interval)
    }
  }, [])

  const numColumns =
    typeof window !== 'undefined' && window.innerWidth < 640 ? 2 : 4

  const rows = []
  for (let i = 0; i < testimonialData.length; i += numColumns) {
    rows.push(testimonialData.slice(i, i + numColumns))
  }

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <div className="relative overflow-x-hidden">
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
