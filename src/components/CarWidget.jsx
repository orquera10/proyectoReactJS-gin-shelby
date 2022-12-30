import React from "react"

const CartWidget = () =>{
    return(
        <div>
            <button type="button" className="btn position-relative">
                <img src="/images/cart1.svg" alt="carrito de compras" width={30}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    1
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </div>
    )  
}

export default CartWidget
