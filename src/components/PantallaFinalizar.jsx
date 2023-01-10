import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore"

const  PantallaFinalizar = () => {
    const {id} =useParams();
    const [orden, setOrden] = useState({});  

    useEffect(()=>{
        const db = getFirestore()
        const documento = doc(db, "orders", id)
        getDoc(documento).then((snapshot)=>{
            if (snapshot.exists()) {
                setOrden({id:snapshot.id, ...snapshot.data()})
            } else{
                console.warn("Error, no se encontro la orden!!!");
            }
        })
    },[id])

    return(
        
        <div className="container my-5 d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center p-4 text-black bg-light border rounded-4 tickets">
                <h2 className="my-4 text-center"><b>Felicidades por tu pedido</b></h2>
                <div className="d-flex flex-md-row flex-column align-items-center">
                    <img src={"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+orden.id} alt="codigo qr" width={200} className="my-4"/>
                    <div className="px-4">
                        <h5>Codigo: {orden.id}</h5>
                        <h5>Nombre: {orden.buyer.name}</h5>
                        <h5>Fecha: {orden.date}</h5>
                        <h5>Productos:</h5>
                        <div className="text-end" key={id}>
                            {orden.items.map(item=>(<h6>{item.quantity} {item.title} ${item.price_total}</h6>))}
                        </div>
                        <h5 className="text-end"><b>Total: ${orden.total}</b></h5>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <button className="btn btn-dark btn-outline-light fw-bold" onClick={()=>{window.print()}}>Imprimir</button>
            </div>
        </div>
    )
}

export default PantallaFinalizar;