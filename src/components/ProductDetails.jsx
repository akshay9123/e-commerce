import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { items } from "./data";
import { FaRupeeSign } from "react-icons/fa";
import Card from "./Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ carts, setCart, count, setCount }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [reletedProduct, setReletedProduct] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);

    const reletedProduct = items.filter((p) => p.category === product.category);
    setReletedProduct(reletedProduct);
  }, [id, product.category]);

  // add to cart ka button handler

  const addToCart = (id, price, imgSrc, description, title) => {
    const obj = {
      id,
      price,
      imgSrc,
      description,
      title,
    };

    setCart([...carts, obj]);

    toast.success("Item Added to Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setCount((prev) => prev + 1);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
              {(product.price - product.price * 0.1).toFixed(2)}
            </button>

            {/* add to cart  */}
            <button
              className="add-to-cart"
              onClick={() =>
                addToCart(
                  product.id,
                  product.price,
                  product.imgSrc,
                  product.description,
                  product.title
                )
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="suggestion">
        <h1>Releted Products</h1>
        <div className="suggestion-product">
          {reletedProduct.map((data) => {
            return (
              <Card
                key={data.id}
                category={data.category}
                imgSrc={data.imgSrc}
                price={data.price}
                title={data.title}
                description={data.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
