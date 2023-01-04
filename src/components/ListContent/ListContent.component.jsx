import React from "react";
import ListFooter from "../ListFooter/ListFooter.component";
import ListItem from "../ListItem/ListItem.component";
import './ListContent.styles.css'

const ListContent = () => {
    return(
        <div className="item-content-wrapper">
            <div className="content">
                {new Array(20).fill("hey").map((x,i) => {
                    return ( <ListItem key={i}></ListItem>)
                })}
            </div>

           <ListFooter> </ListFooter>
        </div>
    )
}

export default ListContent