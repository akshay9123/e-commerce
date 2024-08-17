import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import "./Card.css";
const Card = ({ category, title, imgSrc, price, description }) => {
  return (
    <div className="card">
      <div className="image">
        
        <img src={imgSrc} alt="" />
      </div>
      <div className="about">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="btn">
        
          <button className="price"><FaRupeeSign />{price}</button>
          <button className="add-to-cart">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
