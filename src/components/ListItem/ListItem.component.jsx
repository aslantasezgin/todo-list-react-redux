import React from "react";
import './ListItem.styles.css'

const ListItem = (props) => {
    return(
        <div className="list-item hover:bg-gray-100">
            <div>
            <input type="checkbox"></input>
            <span>Görev 1</span>
            </div>
            <div className="remove-list-item">SİL</div>
        </div>
    )
}

export default ListItem