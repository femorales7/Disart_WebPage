import React from "react";
import {SlideImages} from '../../components'
import './Products.scss'

const Products = () => {
  return (
    <div className="products">
      <h1>Popular Products</h1>
      <p>Product with more demand</p>
      <div>
      <SlideImages/>
      </div>
    </div>

  );
};

export default Products;
