import React, { useReducer, useContext, useEffect } from 'react'
import reducer from '../reducers/cartReducer'
import { ADD_TO_CART, REMOVE_FROM_CART, GET_TOTAL_AMOUNT } from '../actions'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}
const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (id, image, title, price) => {
    dispatch({ type: ADD_TO_CART, payload: { id, image, title, price } })
  }

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id })
  }

  const getTotalAmount = () => {
    dispatch({ type: GET_TOTAL_AMOUNT })
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
    getTotalAmount()
  }, [state.cart])

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
