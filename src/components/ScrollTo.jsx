import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ScrollTo = () => {

    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setShowScrollTopButton(true)
            } else {
                setShowScrollTopButton(false)
            }
        })
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
        });
    }

    return(
        <div>
            {showScrollTopButton && <div className="container">
                <Link onClick={scrollTop}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-arrow-up-circle-fill text-white mx-5 mb-5 position-fixed bottom-0 end-0 translate-middle-y" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                    </svg></Link>
            </div>}
        </div>
    )
}

export default ScrollTo;