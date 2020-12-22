import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/card/card';
import { RootState } from '../store/types';





const Cart: FC = () => {

  const userCart = useSelector((state: RootState) => state.cart);
  console.log(userCart);

  return (
    <div className="container">
      <div className="row center-xs">
        <h1>Your Cart!</h1>
      </div>
      <div className="row ">
        {userCart.filter(item => item.inCart === true).length < 1 ? 'Nav izvēlēts neviens produkts' :
          userCart.filter(item => item.inCart === true).map(item => {
            return (
              <Card item={item} key={item.id} />
            );
          })}
      </div>
    </div>
  );
};

export default Cart;
