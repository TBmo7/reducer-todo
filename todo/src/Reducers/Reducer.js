import React from "react"






export const defaultState = 
[
    {
        task:'Learn about reducers',
        completed:false,
        id:3892987589

    },
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




export function todoReducer(state, action){

    switch(action.type){
       
        case "TOGGLEDONE":
            console.log("TOGGLESTATE",action)
            return{
             todos: state.todos.map((val,itemId)=> itemId === action.itemId ? {...val, completed: !val.completed} : val)
                       
            };

        case "ADD_TODO":
            
            
            return{
                
                ...state,
                todos:[
                    ...state.todos,
                    {
                
                    task: action.taskName,
                    completed: false,
                    id: Date.now()
                    }
                ]
                
                }
                
        case "CLEAR_TODO":
            return{
                todos: state.todos.filter(task=>{return !task.completed})
            }        
                
        default:
            return{
                state
            }    
    }


}

