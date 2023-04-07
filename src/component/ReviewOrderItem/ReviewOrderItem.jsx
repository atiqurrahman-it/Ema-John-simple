import React from "react";
import './ReviewItem.css';

// font Awesome
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReviewOrderItem = ({id,price,img,name,quantity}) => {
  return (
  <div className="ReviewItem">
       <img src={img} alt="" />
       <div className="review-info">
          <p className="review-title"> {name}</p>
          <p> price :<span className="orange-text"> {price}</span></p>
          <p> Order Quantity : <span className="orange-text">{quantity} </span></p>        
        </div>
        <button className="btn-delete"> 
        <FontAwesomeIcon icon={faTrash} size="xl" style={{color: "#EB5757",}} />
         </button>
  </div>
  );
};

export default ReviewOrderItem;
