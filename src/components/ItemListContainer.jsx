import React, { useState, useEffect }  from "react";
import arrayProductos from "./json/arrayProductos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer =() =>{

    const [items, setItems] = useState([]);
    const {id} =useParams()

    useEffect(() => {
        const promesa = new Promise((resolve) =>{
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) :arrayProductos);
            }, 2000);
        });
        promesa.then((data) =>{
            
            setItems(data)
        })
    }, [id])

    return(
        <div className="container py-4">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer