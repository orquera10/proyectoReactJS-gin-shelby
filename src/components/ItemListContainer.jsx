import React, { useState, useEffect }  from "react";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import SeccionPublicidad from "./SeccionPublicidad";

const ItemListContainer =() =>{

    const [items, setItems] = useState([]);
    const {id} =useParams()
    const [loading, setLoading] = useState(true)

     useEffect(()=>{
         const db = getFirestore();
         const itemCollection = collection(db, "items");
         const q = (id ? query(itemCollection, where("categoria","==",id)) : itemCollection);
         getDocs(q).then((snapshot)=>{
            setItems(snapshot.docs.map((item)=>({id:item.id, ...item.data()})));
            setLoading(false);
        });
     },[id]);

    return(
        <div className="py-4">
            {loading ? <Loading/> : <ItemList items={items}/>}
            <SeccionPublicidad />
        </div>
    )
}

export default ItemListContainer