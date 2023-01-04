import React from "react";
import './ListFooter.styles.css'

const ListFooter = () => {
    return(
        <div className="content-footer">
        <div className="left-item">3 Kaldı</div>
        <div className="menu-item active">
            Tümü
        </div>

        <div className="menu-item">Tamamlanan</div>

        </div>
    )
}

export default ListFooter