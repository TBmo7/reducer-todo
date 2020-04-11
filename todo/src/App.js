import React, {useState, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./Components/TodoForm"
import TodoList from "./Components/TodoList"
import {defaultState,todoReducer} from "./Reducers/Reducer"





function App() {
  // const StandardToDoList = defaultState;
  const [todoList, setTodoList] = useState(defaultState);
  console.log("App todoList State", todoList)
  const[todos, dispatch] = useReducer(todoReducer, {todos: todoList});


  const toggleDone = itemId => {
    // let newTodo = [];
    // setTodoList(
    //   newTodo = todoList.map(item=>{
    //     if(item.id === itemId){
    //       return{
    //         ...item,
    //         completed: !item.completed
    //       }
    //     }
    //     return item;
    //   })
    // )
    dispatch({type:"TOGGLEDONE",itemId})
  }

  const addTask = taskName => {
    // let newTodo = [];
    // setTodoList(
    //   newTodo = [
    //     ...todoList,
    //     {
    //       task:taskName,
    //       completed:false,
    //       id: Date.now()
    //     }
    //   ]
    // )
      dispatch({type:"ADD_TODO",taskName})
  }

  const clearDone = () => {
    // console.log("App: clearDone");
    // let newTodo = []
    // setTodoList(
    //   newTodo = todoList.filter(task=>{
    //     return !task.completed;
    //   })
    // )
      dispatch({type:"CLEAR_TODO"})
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <TodoForm addTask = {addTask}/>
      
      <TodoList
      items = {todos}
      toggleDone = {toggleDone}
      clearDone = {clearDone}
      />
      
    </div>
  );
}

export default App;
