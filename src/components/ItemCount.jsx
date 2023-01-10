import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    
    const [counter, setCounter] = useState(1);
    const [stockItem, setStockItem] = useState(stock);
    const [vendido, setVendido] = useState(false);

    useEffect(()=>{
        setStockItem(stock)
    },[stock])


    const incrementarStock = () =>{
        if (counter < stockItem) {
            setCounter(counter+1)
        }
    }

    const decrementarStock = () =>{
        if (counter > 1){
           setCounter(counter-1) 
        }
        
    }
    const addToCar = (cantidad) =>{
        setVendido(true);
        setStockItem(stockItem-cantidad);
        onAdd(cantidad);
        setCounter(1);
    }
    return (
        <div className="my-3">
            <div className="row mb-3 d-flex justify-content-center">
                <div>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-dark btn-outline-light fw-bold" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-dark btn-outline-light fw-bold">{counter}</button>
                        <button type="button" className="btn btn-dark btn-outline-light fw-bold" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div>
                    {vendido ? <Link to={"/cart"} className="btn btn-dark btn-outline-light fw-bold">Terminar mi compra</Link> :
                    <button type="button" className="btn btn-dark btn-outline-light fw-bold"  onClick={()=>{addToCar(counter)}}>Agregar al Carrito</button>
                    }
                </div>
            </div> 
        </div>
        
    )
}

export default ItemCount