import React,{useContext} from 'react'
import {Link} from "react-router-dom";
import "./Header.css";
import { cartContext } from './cartContext'

export const Header = () => {
  const {isCart} = useContext(cartContext);

  return (
    <div className="navbar">
        <div className="logo">Food Cart</div>
        <ul>
            <li>
                <Link to={"/"}>HOME</Link>
            </li>
            <li>
                <Link to={"/Cart"}>
                  <span className="cart-count">{isCart.length}</span>
                    VIEW CART</Link>
            </li>
        </ul>

    </div>
  )
}
