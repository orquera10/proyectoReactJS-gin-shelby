import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () =>{
    const {cartTotal} = useContext(CartContext)
    
    
    return cartTotal() ?
                <Link title="Ir al Carrito" to={"/cart"} className="btn position-relative">
                    <img src="/images/cart1.svg" alt="carrito de compras" width={30}/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
                </Link> : "";
            
         
    
}

export default CartWidget;