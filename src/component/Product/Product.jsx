import React from "react";
import "./Product.css";

// font Awesome
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = (props) => {
  const { name, price, seller, img, ratings } = props.product;
  // console.log(props);
  // this is handelShoppingCart function import  from shop.js
  const handelShoppingCart = props.handelShoppingCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name} </h6>
        <p>Price : ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings} star </p>
      </div>

      <button
        className="addToCart"
        onClick={() => handelShoppingCart(props.product)}
      >
        AddToCart &nbsp;
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Product;
