import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Product } from '../../store/types';
import { addToCart, removeFromCart } from '../../store/actions/actions';


type Props = {
  item: Product,
};

const Card: FC<Props> = (item) => {
  const dispatch = useDispatch();

  return (
    <div className="col-xs-3 center-xs card" key={item.item.id}>
      {item.item.item}
      <div className="row">
        <img src={item.item.image} alt="bilde" className="image" />
      </div>
      <div className="row">
        <div className="col-xs-6">
          <button type="button" onClick={() => dispatch(addToCart)}>Add to Cart</button>
        </div>
        <div className="col-xs-6">
          <button type="button" onClick={() => dispatch(removeFromCart)}>Remove from Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
