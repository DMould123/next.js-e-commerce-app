'use client'
import React from 'react'
import { useRouter } from 'next/navigation' // Import the useRouter hook
import Testimonials from '../components/Testimonials'
import useCart from '../(store)/store'

export default function ProductPage(props) {
  const { searchParams } = props
  const { price_id } = searchParams
  const product = useCart((state) => state.product)
  const addItemToCart = useCart((state) => state.addItemToCart)
  const { cost, productInfo, name, description } = product

  const router = useRouter() // Get the router object

  function handleAddToCart() {
    console.log('PRICE ID: ', price_id)
    const newItem = {
      quantity: 1,
      price_id,
      name,
      cost
    }
    addItemToCart({ newItem })
  }

  const isHomepage = router.pathname === '/' // Check the current route path

  // Conditionally render the Testimonials component only on the homepage
  const testimonialsComponent = isHomepage ? <Testimonials /> : null

  return (
    <div className="flex flex-col p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
        <div className="md:p-2">
          <img
            src={productInfo?.images?.[0]}
            alt={name}
            className="w-full h-full object-cover border border-black"
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex md:flex-col md:items-start text-xl items-center justify-between gap-2">
            <h3>{name}</h3>
            <p className="md:text-base">{cost / 100}SEK</p>
          </div>
          <p className="text-sm flex-1">{description}</p>
          <button
            onClick={handleAddToCart}
            className="bg-slate-700 text-white hover:bg-slate-500 cursor-pointer ml-auto px-4 py-2"
          >
            Add to Cart
          </button>
        </div>
        {testimonialsComponent}
      </div>
    </div>
  )
}
