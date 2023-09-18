import React from 'react'

export default function TestimonialCard({ name, rating, review }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="mb-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex">
          {Array.from({ length: rating }, (_, index) => (
            <span key={index} className="text-yellow-500 mr-1">
              ★
            </span>
          ))}
        </div>
      </div>
      <p className="text-gray-700">{review}</p>
    </div>
  )
}
