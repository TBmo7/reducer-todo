import React from "react"
import Todo from "./Todo"

const TodoList = props =>{
    console.log("props in TodoList", props)
    return(
        <div className = "todo-list">
            {props.map(item=>(
                <Todo
                key = {item.id}
                taskItem = {item}
                toggleDone = {props.toggleDone}
                />

            ))}
            <button onClick = {props.clearDone}>Done!</button>
        </div>
    )
}

export default TodoList;