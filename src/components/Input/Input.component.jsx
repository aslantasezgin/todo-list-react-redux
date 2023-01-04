import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './Input.styles.css'
import {addTodo} from '../../store/actions/todoActions'

const Input = () => {

    const [text,setText] = useState('')
    const dispatch = useDispatch()

    return(
        <div className="input-wrapper">
            <input value={text} onChange={(e) => {setText(e.target.value)}} 
            onKeyPress={(e) => {
               if(e.key==="Enter" && text.trim()!==""){
                dispatch(addTodo({id:new Date().getTime(),text:text,complete:false}))
                setText('')
               }
            }}
            autoFocus placeholder="Create New Todo"></input>
        </div>
    )
}

export default Input