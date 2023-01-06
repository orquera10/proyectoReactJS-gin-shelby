import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const {cart, removeItem, clear, sumTotal, cartTotal} = useContext(CartContext)

    if (cartTotal() === 0) {
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">
                            <b>No se encontraron productos en el carrito de compras!</b>
                        </div>
                        <Link to={"/"} className="btn btn-dark btn-outline-light fw-bold" title="ir al inicio">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        )
    } else{
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                    <table className="table text-white">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-end" colSpan={5}><Link onClick={()=>{clear()}} className="btn btn-dark btn-outline-light fw-bold" title="Vaciar Carrito">Vaciar Carrito</Link></th>
                                </tr>
                                <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item=>(
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="text-center align-middle">{item.quantity}</td>
                                        <td className="text-center align-middle">{item.quantity * item.precio}</td>
                                        <td className="text-end align-middle"><Link title="Eliminar Porducto" onClick ={()=> {removeItem(item.id)}}><img src={"/images/trash.svg"} alt="Eliminar producto" width={24} /></Link></td>
                                    </tr>
                                ))}
                                    <tr>
                                        <th colSpan={2}>&nbsp;</th>
                                        <th className="text-center align-middle">Suma Total</th>
                                        <th className="text-center align-middle"><b>${sumTotal()}</b></th>
                                        <th className="text-end"><Link to={"/checkout"} className="btn btn-dark btn-outline-light fw-bold" title="finalizar compra">Finalizar Compra</Link></th>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    
}

export default Cart;