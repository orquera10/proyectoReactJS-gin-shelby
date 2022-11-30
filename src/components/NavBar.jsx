import React from "react";
import CartWidget from "./CarWidget";

const NavBar = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column container">
            <div className="position-relative encabezado d-flex justify-content-center">
                <img src="./images/logo.png" alt="Logo Gin Shelby" width={142} className="my-4"/>
                <div className="position-absolute top-50 end-0">
                    <CartWidget/>
                </div>
            </div>
            
            <div className="d-flex justify-content-center">
                <nav className="navbar navbar-expand-lg bg-black">
                    <div className="container-fluid">

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon text-white"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link text-white mx-3 active" aria-current="page" href="/">
                                        Inicio
                                    </a>
                                </li>
                                <li className="nav-item text-white dropdown">
                                    <a
                                        className="nav-link text-white mx-3 dropdown-toggle"
                                        href="/"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Productos
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Botelllas
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Latas
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Especiales
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-white" href="/">
                                        Promociones
                                    </a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-white" href="/">
                                        Nosotros
                                    </a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-white" href="/">
                                        Contacto
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar