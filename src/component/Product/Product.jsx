import React from "react";
import "./Product.css";
const Product = (props) => {
  const { name, price, seller, img, ratings } = props.product;
  console.log(props.product);
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name} </h6>
        <p>Price : ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings} star </p>
      </div>
    
     <button className="addToCart">AddToCart</button>
      
    </div>
  );
};

export default Product;