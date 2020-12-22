import { initialCart } from '../../pages/home';
import { AddRemoveCart, Product } from '../types';

const addItem = (state: Product[], action: Product) => {
  let newState: Product[] = [...state];
  newState.map(item => (item.id === action.id ? [item.id, item.item, item.inCart = true] : item));
  return newState = state;
}

const removeItem = (state: Product[], action: Product) => {
  let newState: Product[] = [...state];
  newState.map(item => (item.id === action.id ? [item.id, item.item, item.inCart = false] : item));
  return newState = state;
}


const cartReducer = (state: Product[] = initialCart, action: AddRemoveCart) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return {
        addItem(state: Product[], action.payload: Product)
      }
    };
    case 'REMOVE_FROM_CART': {
      return {
        removeItem(state: Product[], action: AddRemoveCart)
      };
    }
    default:
      return state;
  }
};

export default cartReducer;