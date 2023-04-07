import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewOrderItem from "../ReviewOrderItem/ReviewOrderItem";
import './Order.css'
import { removeFromDb } from "../../utilities/fakedb";
const Order = () => {
  const saveCart=useLoaderData()

  const [cart,setCart]=useState(saveCart)

  const handelDeleteFromCart=(id)=>{
    const remaining=cart.filter(pd=>pd.id !==id)
    setCart(remaining)
    removeFromDb(id)
  }
  return (
    <div className="Shop">
      <div className="Review-Container">
        {
          cart.map(product=><ReviewOrderItem {...product} handelDeleteFromCart={handelDeleteFromCart} key={product.id}></ReviewOrderItem>)
        }
      </div>
      <div className="OrderContainer">
        <Cart cart={cart} ></Cart>
      </div>
    </div>
  );
};

export default Order;
