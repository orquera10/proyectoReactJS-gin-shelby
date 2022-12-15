import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return(
        <div className="row my-5">
            <div className="col-md-6 offset-md-3 text-center bg-black">
                <img src={item.imagen} className="img-fluid my-3 w-75" alt={item.nombre}/>
                <h1><b>{item.nombre}</b></h1>
                <p>{item.descripcion}</p>
                <h2><b>${item.precio}</b></h2>
                <ItemCount stockItem={item.stock}/>
            </div>
            
            
        </div>
    )
}

export default ItemDetail;