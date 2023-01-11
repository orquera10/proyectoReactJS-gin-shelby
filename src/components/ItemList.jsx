import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    
    return(
        <div className="container">
            <div className="row">{
                items.map(item =>
                    <div className="col-6 col-md-3 my-3" key={item.id}>
                        <Item item={item} />
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default ItemList