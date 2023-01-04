import React from "react";
import { useDispatch } from "react-redux";
import './ListItem.styles.css'
import {deleteTodo, setTodoFilter, updateTodo} from '../../store/actions/todoActions'


const ListItem = (props) => {

    const dispatch= useDispatch()
    return(
        <div className="list-item hover:bg-gray-100">
            <div className={props.className}>
            <input type="checkbox" checked={props.item.complete} onChange={() => {
                dispatch(updateTodo(props.item.id,!props.item.complete))
            }}></input>
            <span> {props.item.text} </span>
            </div>
            {!props.item.complete &&  <div className="remove-list-item" onClick={() => {
                dispatch(deleteTodo(props.item.id) )
            }}>SİL</div> }
           
        </div>
    )
}

export default ListItem