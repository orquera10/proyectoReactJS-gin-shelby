import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore"
import Loading from "./Loading";


const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})
    const {id} = useParams()
    const [loading, setLoading] = useState(true);

    //Consultar Firestore por id
    useEffect(()=>{
        const db = getFirestore()
        const documento = doc(db, "items", id)
        getDoc(documento).then((snapshot)=>{
            if (snapshot.exists()) {
                setItem({id:snapshot.id, ...snapshot.data()})
            } else{
                console.log("Error, no se encontro el documento!!!");
            }
        setLoading(false);
        })
    },[id])

    return(
        <div className="container my-4">
            {loading ? <Loading/> : <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;