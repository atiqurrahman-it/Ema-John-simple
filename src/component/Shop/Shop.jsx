import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
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

  // localStore
  useEffect(() => {
    // console.log("products", products);
    // localStore theke data niye asbe
    const storedCart = getShoppingCart();
    const saveCart = [];
    // step-1: get id
    for (const id in storedCart) {
      // step-2 get the product by Using id
      const addedProduct = products.find((product) => product.id === id);

      //step-3 get quantity of the product
      const quantity = storedCart[id];
      if (addedProduct) {
        //step-3 added quantity
        addedProduct.quantity = quantity;
        // step-4 add the added product to save the card
        saveCart.push(addedProduct);
      }
      console.log(addedProduct);
    }
    setCart(saveCart);
  }, [products]);

  //
  const handelShoppingCart = (product) => {
    // const newCart = [...cart, product];

    // if product does not exist in the cart , then set  quantity =1
    // if exist  update quantity  by 1
    let newCart = [];

    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      //  je ta amar  first time add to cart kortechi (new product add kortechi) oi tar quantity 1 kore ditechi
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      // product cart a add age but abar addToCart kortechi oi product er quantity increment kortechi
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    // added to localStore
    addToDb(product.id);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
