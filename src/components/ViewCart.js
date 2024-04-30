import React, { useEffect, useState,useContext } from 'react'
import "./ViewCart.css";
import { cartContext } from './cartContext'

export const ViewCart = () => {

  const {isCart} = useContext(cartContext);

  const [total,setTotal] = useState(0);
  useEffect(() =>{
    setTotal(isCart.reduce((acc,curr) => acc + parseInt(curr.price),0));
  },[isCart]);
  return (
    <>
    <h1 className="cart-heading">CART PRODUCTS</h1>
    <div className="cartContainer">
      {isCart.map((product) =>(
        <div className="cartContainer-product" key={product.id}>
        <div className="cartContainer-img">
          <img src={product.image} alt={product.name}/>
        </div>
        <div className="cartContainer-product-details">
          <h3>{product.name}</h3>
          <p>Price Rs {product.price}</p>
        </div>
      </div>
      ))}
    </div>
    <h2 className="cartContainer-total">Total Amount : Rs {total}</h2>
    </>
  )
}

/* things to know 
if any changes occur in cart then call useEffect i.e call this whenever changes in isCart
reduce=>accumulator+current value
parseInt change to integer
initial value as 0
*/