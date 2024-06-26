'use client'
import Link from 'next/link'
import React from 'react'
import useCart from '../(store)/store'
import Modal from '../modal'

export default function Header() {
  const cartItems = useCart((state) => state.cart)
  const openModal = useCart((state) => state.openModal)
  const setOpenModal = useCart((state) => state.setOpenModal)

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between">
      {openModal && <Modal />}
      <Link href={'/'} passHref>
        <img src="/logo.png" alt="Logo" className="w-40 h-auto" />
      </Link>
      <div
        onClick={setOpenModal}
        className="relative cursor-pointer group grid place-items-center"
      >
        {totalItems > 0 && (
          <div className="absolute aspect-square pointer-events-none h-5 sm:h-6 grid place-items-center top-0 bg-blue-400 text-white rounded-full right-0 -translate-y-1/2 translate-x-1/2">
            <p className="text-xs sm:text-sm">{totalItems}</p>
          </div>
        )}
        <i className="fa-solid cursor-pointer group-hover:text-slate-500 fa-cart-shopping"></i>
      </div>
    </header>
  )
}
