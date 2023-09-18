import React from 'react'

export default function TestimonialCard({ name, rating, review, image }) {
  return (
    <div className="bg-white p-4 border rounded-lg shadow">
      <div className="flex items-center mb-2">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
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
