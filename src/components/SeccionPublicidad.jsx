import React from "react";

const SeccionPublicidad = () => {
    return(
        <div className="container-fluid seccionPublicidad row">
            <div className="col-6 d-flex justify-content-center">
                <img src="/images/fotoGin.png" alt="imagen botella de Gin" className="w-50" />
            </div>
            <div className="col-6 d-flex align-self-center align-items-center flex-column tarTexto">
                <h3 className="text-black my-3">¿TU BAR AÚN NO ES PARTE DE LA COMUNIDAD SHELBY?</h3>
                <h4 className="text-black my-3">SHELBY quiere que seas parte de la familia. Por eso... ¡Tenemos una propuesta a tu medida!</h4>
                <button className="btn btn-dark text-white p-3 btnContacto rounded my-3">Contáctanos</button>
            </div>
        </div>
    )
}

export default SeccionPublicidad