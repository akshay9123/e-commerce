import React, { useState } from "react";
import { items } from "./data";
import Card from "./Card";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ filterCatogary}) => {
  let element = items;
 
  if(filterCatogary != ""){
    element = items.filter((p)=>
    p.category === filterCatogary
  )}
  
  

  return (
    <>
      <div className="product-container">
        <div className="product">
          <div className="product-card">

            {element.map((product) => {
                  return (
                    <Link to={`/product/${product.id}`}>
                      <Card
                        key={product.id}
                        category={product.category}
                        imgSrc={product.imgSrc}
                        price={product.price}
                        title={product.title}
                        description={product.description}
                      />
                    </Link>
                  );
                })
              }
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
