import React, { FC } from 'react';
import Card from '../components/card/card';
import { Product } from '../store/types';

export const initialCart: Product[] = [
  {
    id: 1,
    item: 'TV',
    image: 'https://cdn4.vectorstock.com/i/1000x1000/45/18/old-tv-vector-1804518.jpg',
    inCart: false,
  },
  {
    id: 2,
    item: 'Radio',
    image: 'https://cdn2.vectorstock.com/i/1000x1000/79/66/radio-vector-15467966.jpg',
    inCart: true,
  }
];

const Home: FC = () => {

  return (
    <div className="container">
      <div className="row center-xs">
        <h1>Pick a product!</h1>
      </div>
      <div className="row ">
        {initialCart.map((item) => {
          return (
            <Card item={item} key={item.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
