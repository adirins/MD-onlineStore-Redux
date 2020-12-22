import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Nav: FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Nav;
