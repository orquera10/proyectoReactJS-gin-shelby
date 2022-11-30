import React from "react";

const Footer = () => {
    return(
        <div className="bg-black d-flex justify-content-between container">
            <div className="my-3">
                <h3 className="text-white">Gin Shelby</h3>
            </div>
            <div className="my-3">
                <a href="/" className="mx-3"><img src="./images/face.png" alt="enlace facebook" /></a>
                <a href="/" className="mx-3"><img src="./images/insta.png" alt="enlace instagram" /></a>
                <a href="/" className="mx-3"><img src="./images/youtube.png" alt="enlace youtube" /></a>
                <a href="/" className="mx-3"><img src="./images/twitter.png" alt="enlace twitter" /></a>
            </div>
        </div>
    )
}

export default Footer