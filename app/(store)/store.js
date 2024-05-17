import { create } from 'zustand'

const useCart = create((set, get) => ({
  cart: [],
  product: {},
  openModal: false,
  setOpenModal: () => {
    set((state) => {
      return {
        ...state,
        openModal: !state.openModal
      }
    })
  },
  setProduct: (params) => {
    const { newProduct } = params
    set((state) => {
      return {
        ...state,
        product: newProduct
      }
    })
  },
  setCart: (newCart) => {
    set((state) => {
      return {
        ...state,
        cart: newCart
      }
    })
  },
  addItemToCart: (params) => {
    const { newItem } = params
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.price_id === newItem.price_id
      )
      let newCart
      if (existingItemIndex !== -1) {
        // Item already exists, update its quantity
        newCart = state.cart.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
      } else {
        // Item does not exist, add it to the cart
        newCart = [...state.cart, newItem]
      }
      return { ...state, cart: newCart }
    })
  },
  removeItemFromCart: (params) => {
    const { itemIndex } = params
    set((state) => {
      const newCart = state.cart.filter((element, elementIndex) => {
        return elementIndex !== itemIndex
      })
      return {
        ...state,
        cart: newCart
      }
    })
  },
  emptyCart: () => {
    set((state) => {
      return {
        ...state,
        cart: []
      }
    })
  }
}))

export default useCart
