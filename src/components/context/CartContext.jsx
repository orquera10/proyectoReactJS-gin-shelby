import React, {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) =>{
        if (isInCart(item.id)) {
            let pos = cart.find(x=> x.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}])
        }
    }
    const removeItem = (id) =>{
        const products = cart.filter(x => x.id !== id);
        return setCart(products)
    }
    const clear = () =>{
        setCart([]);
    }
    const isInCart = (id) =>{
        return cart.some(x=> x.id === id);
    }
    const cartTotal = (id) =>{
        return cart.reduce((total,item) => total += item.quantity, 0);
    }
    const sumTotal = (id) =>{
        return cart.reduce((total,item) => total += item.quantity * item.precio, 0);
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;