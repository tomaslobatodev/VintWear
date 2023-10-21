import { createContext, useContext, useState } from "react"
import products from "../data/products"
import Proptypes from "prop-types"

const StoreContext = createContext()

export function useStore() {
  return useContext(StoreContext)
}

export function StoreProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    product.onCart = true
    setCartItems((prevCartItems) => [...prevCartItems, product])
  }

  const removeFromCart = (product) => {
    product.onCart = false
    setCartItems(cartItems.filter(item=> item !== product))
  }

  const state = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
  }

  return <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
}

StoreProvider.propTypes = {
    children: Proptypes.node
}