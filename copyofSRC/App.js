import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./Components/TodoForm"
import TodoList from "./Components/TodoList"

const StandardToDoList = [
  {
  task:"Organize Life",
  id:1,
  completed: false
  },
  {
    task:"Master Blockchain",
    id:2,
    completed:false
  }
]



function App() {

  const [todoList, setTodoList] = useState(StandardToDoList);
  console.log("App todoList State", todoList)
  const toggleDone = itemId => {
    setTodoList({
      todoList : todoList.map(item=>{
        if(item.id === itemId){
          return{
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  const addTask = taskName => {
    setTodoList({
      todoList:[
        ...todoList,
        {
          task:taskName,
          completed:false,
          id: Date.now()
        }
      ]
    })
  }

  const clearDone = () => {
    console.log("App: clearDone");
    setTodoList({
      todoList: todoList.filter(task=>{
        return !task.completed;
      })
    })

  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <TodoForm addTask = {addTask}/>
      <TodoList
      items = {todoList}
      toggleDone = {toggleDone}
      clearDone = {clearDone}
      />
      
    </div>
  );
}

export default App;
