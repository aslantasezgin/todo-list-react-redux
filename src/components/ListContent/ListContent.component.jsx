import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ListFooter from "../ListFooter/ListFooter.component";
import ListItem from "../ListItem/ListItem.component";
import './ListContent.styles.css'

const ListContent = () => {
    
    const{todoList,todoFilter} = useSelector(state => state.todo)
    const [list,setList] = useState([])


    useEffect(() => {
        if(todoFilter==='all'){
            setList(todoList)
        }else{
            setList(todoList.filter((x) => x.complete))
        }
    }, [todoList, todoFilter])

    return(
        <div className="item-content-wrapper">
            <div className="content">
               {list.length < 1 && <div className="text-center text-sm text-gray-700 font-normal py-2">Henüz Bir Eleman Mevcut Değil</div>}

                {list.map((item) => {
                    return( <ListItem key={item.id} item={item} className={item.complete?'completed':''}></ListItem> )
                })}
           
           </div>

           <ListFooter> </ListFooter>
        </div>
    )
}

export default ListContent