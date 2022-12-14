import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext)

    const onAdd = (cantidad) =>{
        addItem(item, cantidad);
        
    }
    
    return(
        
        <div className="row my-5">
            <div className="col-md-6 offset-md-3 text-center bg-black">
                <img src={item.imagen} className="img-fluid my-3 w-75 border rounded-2 border-white" alt={item.nombre}/>
                <h1><b>{item.nombre}</b></h1>
                <p>{item.descripcion}</p>
                <h2><b>${item.precio}</b></h2>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail;