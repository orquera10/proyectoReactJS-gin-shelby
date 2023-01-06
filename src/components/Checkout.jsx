import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";

const Checkout = () => {
    const {cart, sumTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const order = {
            buyer: {name:nombre, email:email, phone:telefono},
            items: cart.map(item=>({id:item.id, title:item.nombre, price:item.precio, quantity:item.quantity, priceTotal:item.precio*item.quantity})),
            total: sumTotal()
        }

        const db = getFirestore();
        const orderColection = collection(db, "orders");
        addDoc(orderColection, order).then((snapshot)=>{
            setOrderId(snapshot.id);
            
        });
        
    }

    return (
       <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" id="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" placeholder="Ingrese su nombre" onInput={(e)=>{setNombre(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" id="email" className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Ingrese su Email" onInput={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" id="telefono" className="form-label">Telefono</label>
                            <input type="tel" className="form-control" placeholder="Ingrese su Telefono" onInput={(e)=>{setTelefono(e.target.value)}}/>
                        </div>
                        <div className="text-end mt-5">
                            <button type="submit" onClick={generarOrden} className="btn btn-dark btn-outline-light fw-bold">Generar Orden</button>
                        </div>
                        
                    </form>
                </div>
                <div className="col">
                    <table className="table text-white">
                        <tbody>
                            {cart.map(item=>(
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={40} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">{item.quantity * item.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    {orderId ? <div className="alert alert-success text-center" role="alert">
                        <h1>Felicitaciones</h1> 
                        <p>Tu numero de orden es: {orderId}</p>
                    </div> : ""} 
                </div>
            </div>
       </div>
    )
}

export default Checkout;