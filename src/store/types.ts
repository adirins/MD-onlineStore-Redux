export type Product =
  {
    id: number,
    item: string,
    image: string;
    inCart: boolean,
  };

export type AddRemoveCart =
  {
    type: 'ADD_TO_CART' | 'REMOVE_FROM_CART',
    payload: Product,    
  };

export type TheState =
  {
    cart: Product[],
  };

export interface  RootState extends TheState { }
