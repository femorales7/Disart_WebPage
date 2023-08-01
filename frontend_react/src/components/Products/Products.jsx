import React from "react";
import { SlideImages } from "../../components";
import "./Products.scss";

const Products = () => {
  return (
    <div className="products">
      <div>
        <h1>Popular Products</h1>
        <p>Product with more demand</p>
      </div>
      <div id="eachProduct">
        <div>
          <SlideImages />
        </div>

        <div>
          <h1>Posters</h1>
          <p>Posters with unique design and costumized photos</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
