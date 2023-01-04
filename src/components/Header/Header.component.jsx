import React from "react";
import './Header.styles.css'

const Header = (props) => {
    return(
        <div className="bg-image">
        <div className="bg-content">
            <div className="header-title"><h2>TODO</h2> </div>
            {props.children}
        </div>

        </div>
    )
}

export default Header