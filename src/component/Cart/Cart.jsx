import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  // console.log(cart);

  //   const totaolPrice = cart.map((item) => item.price);
  //   console.log(totaolPrice);

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if (product.quantity === 0) {
    //   product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;

    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const taxRate = 7;
  const tax = (totalPrice * taxRate) / 100;

  const finalTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h1>this is cart</h1>
      <p>Selected Items {quantity} </p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${finalTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
