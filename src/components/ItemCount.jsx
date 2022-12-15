import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({stockItem}) => {
    
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItem);

    useEffect(()=>{
        setStock(stockItem)
    },[stockItem])

    const incrementarStock = () =>{
        if (counter < stock) {
            setCounter(counter+1)
        }
    }
    const decrementarStock = () =>{
        if (counter > 1){
           setCounter(counter-1) 
        }
        
    }
    const onAdd = () =>{
        if (counter <= stock){
            setStock(stock - counter)
            setCounter(1)
            console.log("Agregaste "+counter+" Productos al Carrito!")
        }
        
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
                    <button type="button" className="btn btn-dark btn-outline-light fw-bold"  onClick={onAdd}>Agrgar al Carrito</button>
                </div>
            </div> 
        </div>
        
    )
}

export default ItemCount