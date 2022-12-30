import React, { useState, useEffect }  from "react";
//import arrayProductos from "./json/arrayProductos.json"
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer =() =>{

    const [items, setItems] = useState([]);
    const {id} =useParams()

    //Consultar datos de un JSON
    // useEffect(() => {
    //     const promesa = new Promise((resolve) =>{
    //         setTimeout(() => {
    //             resolve(id ? arrayProductos.filter(item => item.categoria === id) :arrayProductos);
    //         }, 2000);
    //     });
    //     promesa.then((data) =>{
            
    //         setItems(data)
    //     })
    // }, [id])

    //Inserto los productos de mi JSON a firestore
    // useEffect(()=>{
    //     const db = getFirestore()
    //     const itemCollection = collection(db, "items")
    //     arrayProductos.forEach((item)=>{
    //         addDoc(itemCollection, item)
    //     })
    // },[])

    //Consultar la collection de firestore
     useEffect(()=>{
         const db = getFirestore();
         const itemCollection = collection(db, "items");
         const q = (id ? query(itemCollection, where("categoria","==",id)) : itemCollection);
         getDocs(q).then((snapshot)=>{
            setItems(snapshot.docs.map((item)=>({id:item.id, ...item.data()})));
        });
     },[id]);

    return(
        <div className="container py-4">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer