import React, { useEffect } from "react";
import "./cartlist.css";
import { FaRupeeSign } from "react-icons/fa";


const CartList = ({ category, imgSrc, price, description,title }) => {
    
        
      
  return (
    <div className="parent-cartlist">

      <div className="image-sec">
        <img src={imgSrc} alt="" />
      </div>
      <div className="about">
        <p className="title">{title}</p>
        
        <p className="price"><FaRupeeSign className="rupee"/>{price}</p>
      </div>
    </div>
  );
};

export default CartList;
