import React from "react";
import CartWidget from "./CarWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column container">
            <div className="position-relative encabezado d-flex justify-content-center">
                <Link to={"/"}>
                    <img src="/images/logo.png" alt="Logo Gin Shelby" width={142} className="my-4 logo"/>
                </Link>
                <div className="position-absolute top-50 end-0">
                    <CartWidget/>
                </div>
            </div>
            <div className="d-flex justify-content-center text-center">
                <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                    <div className="container d-flex justify-content-center">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link my-2 active" aria-current="page" to={"/"}>Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link my-2" to={"/category/botellas"}>Botellas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link my-2" to={"/category/latas"}>Latas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link my-2" to={"/category/especiales"}>Especiales</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="linea"></div>
        </div>
    );
}

export default NavBar