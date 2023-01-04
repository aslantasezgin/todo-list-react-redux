import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './ListFooter.styles.css'
import {setTodoFilter} from '../../store/actions/todoActions'


const ListFooter = () => {

    const{todoFilter,todoList} = useSelector(state => state.todo)
    const dispatch = useDispatch()
    return(
        <div className="content-footer">
        <div className="left-item">
            {todoList.filter((item) => !item.complete).length} Kaldı
        </div>
        <div className={`menu-item ${todoFilter==='all'?'active':''}`} onClick={() => {
            dispatch(setTodoFilter('all'))
        }}>
            Tümü
        </div>

        <div className={`menu-item ${todoFilter==='complete'?'active':''}`} onClick={() => {
            dispatch(setTodoFilter('complete'))
        }}>Tamamlanan</div>

        </div>
    )
}

export default ListFooter