import React, {useState, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import {todoReducer, defaultState} from "./Reducers/Reducer"
import TodoList from "./Components/TodoList";





function App() {
  const [todoState, dispatch] = useReducer(todoReducer,defaultState)
  const [newTodoItem,setNewTodoItem] = useState("");
  const handleChanges = e => {
    setNewTodoItem(e.target.value)
  }

  console.log(defaultState);

  const toggleDone = itemId =>{
    setNewTodoItem({
      defaultState : defaultState.map(item =>{
        if(item.id === itemId){
          return{
            ...item,
            completed: !item.completed
          };
        }
        return item
      })
    })
  }

  const addTask = taskName => {
    setNewTodoItem({
      defaultState: [
        ...defaultState,
        {
          task: taskName,
          completed: false,
          id: Date.now()
        }
      ]
    })
  }

 const clearDone = () => {
    setNewTodoItem({
      defaultState: defaultState.filter(task =>{
        return !task.completed
      })
    })
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <input
      onSubmit = {addTask}
      className = "todo-input"
      placeholder = "Your next todo item goes here"
      type = "text"
      name = "newTodoItem"
      value = {newTodoItem}
      onChange = {handleChanges}
      />
      <button>Add Item</button>

      <TodoList
      items = {defaultState}
      toggleDone = {toggleDone}
      clearDone = {clearDone}
      />

    </div>
  );
}

export default App;
