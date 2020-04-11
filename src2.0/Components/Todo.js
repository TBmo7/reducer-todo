import React from "react"

const Todo = props =>{
    return(

        <div className = "todo-holder">
            <div className = {`todo-item${props.taskItem.completed ? " done": "" }`}
                onClick = {e=> props.toggleDone(props.taskItem.id)}
            >

            <p>{props.taslItem.task}</p>


            </div>



        </div>

    )
}

export default Todo;