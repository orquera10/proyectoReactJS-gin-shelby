import React from "react";

const ItemListContainer =({greeting}) =>{
    return(
        <div className="container py-4">
            <div className="row">
                <div className="col-12">
                    <div class="alert alert-danger text-center" role="alert">
                        {greeting}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ItemListContainer