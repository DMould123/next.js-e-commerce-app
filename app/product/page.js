'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation' // Import the useRouter hook
import Testimonials from '../components/Testimonials'
import useCart from '../(store)/store'

export default function ProductPage(props) {
  const { searchParams } = props
  const { price_id } = searchParams
  const product = useCart((state) => state.product)
  const addItemToCart = useCart((state) => state.addItemToCart)
  const emptyCart = useCart((state) => state.emptyCart)
  const { cost, productInfo, name, description } = product || {}

  const router = useRouter()

  const [cartEmpty, setCartEmpty] = useState(true)

  console.log(productInfo)

  // Function to handle refresh and clear data
  const handleRefresh = () => {
    // Clear data in your store (you may need to define a clearData action in your store)
    // Example: useCart((state) => state.clearData());

    // Empty the cart
    emptyCart()

    // Redirect to the homepage
    router.push('/')
  }

  // Redirect to the homepage if the product is not available
  useEffect(() => {
    if (!product?.name) {
      router.push('/')
    }
  }, [product, router])

  function handleAddToCart() {
    console.log('PRICE ID: ', price_id)
    const newItem = {
      quantity: 1,
      price_id,
      name,
      cost
    }
    addItemToCart({ newItem })
    setCartEmpty(false) // Set cartEmpty to false when items are added to the cart
  }

  const isHomepage = router.pathname === '/'

  const testimonialsComponent = isHomepage ? <Testimonials /> : null

  return (
    <div className="flex flex-col p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
        <div className="md:p-2">
          {productInfo && productInfo.images && productInfo.images[0] && (
            <img
              src={productInfo.images[0]}
              alt={name}
              className="w-full h-full object-cover border border-black"
            />
          )}
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
          {!cartEmpty && ( // Render the button only if cart is not empty
            <button
              onClick={handleRefresh}
              className="bg-red-500 text-white hover:bg-red-400 cursor-pointer mt-4 mx-auto px-4 py-2"
            >
              Refresh and Clear Data
            </button>
          )}
        </div>
        {testimonialsComponent}
      </div>
    </div>
  )
}
