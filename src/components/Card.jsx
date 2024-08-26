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
          <button className="price">
            <div className="price-logo"><FaRupeeSign /></div>
            <div className="price2"> 
            {(price - price * 0.1).toFixed(2)}
            </div>
          </button>
          <button className="price1">
            <FaRupeeSign />
            {price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
