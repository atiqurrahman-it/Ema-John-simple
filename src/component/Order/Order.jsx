import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewOrderItem from "../ReviewOrderItem/ReviewOrderItem";
import './Order.css'
const Order = () => {
  const cart=useLoaderData()
  console.log(cart)
  return (
    <div className="Shop">
      <div className="Review-Container">
        {
          cart.map(product=><ReviewOrderItem {...product} key={product.id}></ReviewOrderItem>)
        }
      </div>
      <div className="OrderContainer">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
