import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
//import arrayProductos from "./json/arrayProductos.json"
import {doc, getDoc, getFirestore} from "firebase/firestore"


const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})
    const {id} = useParams()
    
    //Promesa que accede con un JSON con un Array de objetos
    // useEffect(() => {
    //     const promesa = new Promise((resolve) =>{
            
    //         setTimeout(() => {
    //             resolve(arrayProductos.find(elemento => elemento.id === parseInt(id)));
    //         }, 2000);
    //     });
    //     promesa.then((data) => {
    //         setItem(data);
    //     })
    // }, [id])

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
        })
    },[id])

    return(
        <div className="container my-4">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;