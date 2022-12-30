import React from "react";

const Footer = () => {
    return(
        <div className="bg-black d-flex justify-content-md-between align-items-center flex-column flex-md-row container my-4">
            <h3 className="text-white my-md-0 my-3">Gin Shelby</h3>
            <div>
                <a href="/" className="mx-3"><img src="/images/face.png" alt="enlace facebook" /></a>
                <a href="/" className="mx-3"><img src="/images/insta.png" alt="enlace instagram" /></a>
                <a href="/" className="mx-3"><img src="/images/youtube.png" alt="enlace youtube" /></a>
                <a href="/" className="mx-3"><img src="/images/twitter.png" alt="enlace twitter" /></a>
            </div>
        </div>
    )
}

export default Footer