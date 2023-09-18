'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import useCart from './(store)/store'

export default function ProductCard(props) {
  const { product } = props
  const { id: price_id, unit_amount: cost, product: productInfo } = product
  const { name, description } = productInfo

  const setProduct = useCart((state) => state.setProduct)

  const router = useRouter()

  function onProductClick() {
    const newProduct = {
      name,
      description,
      price_id,
      cost,
      productInfo
    }
    setProduct({ newProduct })
    router.push('/product?price_id=' + price_id)
  }

  return (
    <div
      onClick={onProductClick}
      className="flex flex-col shadow bg-white hover:shadow-lg cursor-pointer rounded-md"
    >
      <img
        src={productInfo.images[0]}
        alt={name}
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">{name}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-lg font-semibold">{cost / 100}SEK</p>
      </div>
    </div>
  )
}
