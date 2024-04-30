import React from 'react'
import "./Product.css";
import { useContext } from 'react';
import { cartContext } from './cartContext'

export const Product = ({product}) => {
    const {isCart,setIsCart} = useContext(cartContext);
    const addCart = () => {
        setIsCart([...isCart, product])
    };
    const removeCart = () => {
        setIsCart(isCart.filter((c) => c.id !== product.id))
    };

    return (
        <div className="productContainer">
            
            <div className="productContainer-img">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="productContainer-details">
                <h3>{product.name}</h3>
                <p>Price Rs:{product.price}</p>

                {isCart.includes(product) ? (
                    <button className="btnRemove" onClick={removeCart}>Remove from Cart</button>
                ) : (
                    <button onClick={addCart}>Add to Cart</button>
                )}
            </div>
        </div>)
}

/* things to know :
use of spread operator 
setIsCart([...isCart,product])- adding previous pdt and particular pdt
filter(c)=>each prt passing through c
c.id !== product.id(particular pdt)
*/