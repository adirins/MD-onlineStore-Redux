import { initialCart } from '../../pages/home';
import { AddRemoveCart, Product } from '../types';

const addItem = (state: Product[], action: AddRemoveCart) => {
  let newState: Product[] = [...state];
  newState.map(item => (item.id === action.payload.id ? [item.id, item.item, item.image, item.inCart = true] : item));
  return newState = state;
}

const removeItem = (state: Product[], action: AddRemoveCart) => {
  let newState: Product[] = [...state];
  newState.map(item => (item.id === action.payload.id ? [item.id, item.item, item.image, item.inCart = false] : item));
  return newState = state;
}


const cartReducer = (state: Product[] = initialCart, action: AddRemoveCart) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return addItem(state, action)
    };
    case 'REMOVE_FROM_CART': {
      return removeItem(state, action)
    }
    default:
      return state;
  }
};

export default cartReducer;