import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  // sate for shopping cart
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //
  const handelShoppingCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="Shop">
      <div className="productContainer">
        {products.map((product) => (
          <Product
            product={product}
            handelShoppingCart={handelShoppingCart}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="OrderContainer">
        <h1>this is cart</h1>
        <p>Selected Items {cart.length} </p>
      </div>
    </div>
  );
};

export default Shop;
