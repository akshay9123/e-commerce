import React, { useState } from "react";
import CartList from "./CartList";
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = ({ carts, setCart,setCount }) => {

  const [price,setPrice] = useState(0);

 function clicker(){
  setCart("")
  setCount(0)
 }

  return (
    <div className="parent-cart">
      <div className="child-cart">
        {
          carts.length == 0 ? (
            <div className="cart-empty">
            <p >Your Cart is Empty</p>
            <Link to={'/'} className="conti">Continue Shopping...</Link>
            </div>
            
          ):(carts.map((item) => {
          return (
            <CartList
              key={item.id}
              category={item.category}
              imgSrc={item.imgSrc}
              price={(item.price - item.price * 0.1).toFixed(2)}
              title={item.title}
              description={item.description}
              
            />
            
          );
          <button onClick={()=>setCart('')}>Clear</button>
        }))
        
          }
      </div>
      {
        carts.length !=0 ? (
          <div className="container">
        <button className="check-out"> Check Out</button>
        <button onClick={clicker}  className="clear-cart">Clear Cart</button>
      </div>
        ):(<div></div>)
      }
      
    </div>
  );
};

export default Cart;
