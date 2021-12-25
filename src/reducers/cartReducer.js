import { ADD_TO_CART } from '../actions'
import { REMOVE_FROM_CART, GET_TOTAL_AMOUNT } from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, image, title, price } = action.payload

    const tempItem = state.cart.find((item) => item.id === id)

    if (tempItem) {
      alert('Book already in Cart')
    } else {
      const newItem = {
        id: id,
        image,
        title,
        price,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }
  if (action.type === REMOVE_FROM_CART) {
    const tempItem = state.cart.filter((item) => {
      return item.id !== action.payload
    })

    return {
      ...state,
      cart: tempItem,
    }
  }

  if (action.type === GET_TOTAL_AMOUNT) {
    const tempItem = state.cart.reduce((acc, curr) => {
      let total = parseFloat(curr.price.replace(/[^\d.]/g, ''))
      acc += total
      return acc
    }, 0)
    return { ...state, total_amount: tempItem }
  }
  return { ...state }
}

export default cart_reducer
