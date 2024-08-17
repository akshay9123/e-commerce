import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { items } from "./data";
import { FaRupeeSign } from "react-icons/fa";
import Card from "./Card";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [reletedProduct, setReletedProduct] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);

    const reletedProduct = items.filter((p) => p.category === product.category);
    setReletedProduct(reletedProduct);
  }, [id, product.category]);

  return (
    <>
      <div className="container">
        <div className="image">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="about">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="btn">
            <button className="price">
              <FaRupeeSign />
              {product.price}
            </button>
            <button className="add-to-cart">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="suggestion">
      <h1>Releted Products</h1>
      <div className="suggestion-product">
        {
          reletedProduct.map((data)=>{
            return(
              <Card 
                key={data.id}
                category={data.category}
                imgSrc={data.imgSrc}
                price={data.price}
                title={data.title}
                description={data.description}
              />
            )
          })
        }
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
