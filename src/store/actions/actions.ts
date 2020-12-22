import { Product } from "../types"

export const addToCart = (payload: Product) => {
  return {
    type: 'ADD_TO_CART',
    payload
  }
}

export const removeFromCart = (payload: Product) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload
  }
}

