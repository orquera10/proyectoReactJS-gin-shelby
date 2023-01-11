import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Contacto = () =>{

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [contacto, setContacto] = useState("");

    const generarContacto = () => {
        const fecha = new Date();
        const contacto = {
            datos: {name:nombre, email:email, phone:telefono},
            date: `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} | ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        }

        const db = getFirestore();
        const orderColection = collection(db, "contactos");
        addDoc(orderColection, contacto).then((snapshot) => {
            setContacto(snapshot.id);
        }); 
    }

    return(
        <div className="bg-contacto">
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6 py-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" onInput={(e)=>{setNombre(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" onInput={(e)=>{setTelefono(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Telefono</label>
                                <input type="tel" className="form-control" id="telefono" placeholder="Ingrese su Telefono" onInput={(e)=>{setEmail(e.target.value)}}/>
                            </div>
                            <div className="text-end mt-5">
                                <button type="button" className="btn btn-dark btn-outline-light fw-bold" onClick={generarContacto}>Enviar Datos</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 d-flex align-items-end justify-content-center">
                        <img src="/images/fotoGin3.png" alt="foto botella de gin" className="w-50" />
                    </div>
                </div>
            </div>
            {contacto ? <Navigate to="/success" /> : ""}
        </div>
    )
}

export default Contacto;