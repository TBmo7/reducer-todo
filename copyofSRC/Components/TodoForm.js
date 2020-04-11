import React, {useEffect, useState} from "react";


function TodoForm(props) {


    const [taskName, setTaskName] = useState("");

    const handleChange = e =>{
        setTaskName(e.target.value)
    }

    const handleAddTask = e =>{
        e.preventDefault();
        props.addTask(taskName);
    }

    return (
        <div>
            <form className = "form-holder"
            onSubmit = {handleAddTask}>
                <input className = "form-input"
                
                placeholder = "Your next task awaits..."
                type = "text"
                name = "task"
                value = {taskName}
                onChange = {handleChange}
                />
                <button>Add Task</button>



            </form>
        </div>
    )
}

export default TodoForm