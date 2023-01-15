import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Checkout = () => {
    const {cart, sumTotal, clear} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, email:email, phone:telefono},
            items: cart.map(item=>({id:item.id, title:item.nombre, price:item.precio, quantity:item.quantity, price_total:item.precio*item.quantity})),
            date: `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} | ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumTotal()
        }

        const db = getFirestore();
        const orderColection = collection(db, "orders");
        addDoc(orderColection, order).then((snapshot) => {
            setOrderId(snapshot.id);

            clear();
        });   
    }
        return (
            <div className="container">
                <div className="row my-5 d-flex flex-md-row flex-column-reverse">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" onInput={(e) => { setNombre(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" onInput={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Telefono</label>
                                <input type="tel" className="form-control" id="telefono" placeholder="Ingrese su Telefono" onInput={(e) => { setTelefono(e.target.value) }} />
                            </div>
                            <div className="text-end mt-5">
                                <button type="button" onClick={generarOrden} className="btn btn-dark btn-outline-light fw-bold">Generar Orden</button>
                            </div>

                        </form>
                    </div>
                    <div className="col-md-6">
                        <table className="table text-white">
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.nombre} width={40} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="text-center align-middle">{item.quantity}</td>
                                        <td className="text-center align-middle">{item.quantity * item.precio}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={3} className="text-end"><b>Total a pagar</b></td>
                                    <td className="text-center" ><b>${sumTotal()}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {orderId ? <Navigate to={"/detalle/" + orderId} /> : ""}
            </div>
        )    
}

export default Checkout;