import React, { useState } from "react";
import "./Todo.css"


function Todo(){

    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()
        if (todoInput.length<=0){
            return
        }

        let todoID =todos.length +1
        setTodos([...todos, 
            {
                "title":todoInput,
                "complete":false,
                "id": todoID
        }
     ])

        setTodoInput("")
    }

    const completeTodo= (e, todo)=>{
        let checkedIndex = -1
         todos.forEach((element, i)=>{
            if (todo.id === element.id){
                checkedIndex =i
            }
        })
        let newTodoList = todos
        if (e.target.checked){
            newTodoList[checkedIndex].complete =true
        }
        else 
        {
            newTodoList[checkedIndex].complete =false
        }
        setTodos([...newTodoList])
        
    }
    const deleteTodo =(todo)=>{
        let checkedIndex = -1
        todos.forEach((element, i)=>{
           if (todo.id === element.id){
               checkedIndex =i
           }
       })
       let newTodoList = todos
    newTodoList.splice(checkedIndex, 1)  
       setTodos([...newTodoList])
    }
return(
    <>
<form onSubmit={handleSubmit}> 
    <label htmlFor="todo">Enter your todo</label>
    <input type="text" name="todo" id="todo" value={todoInput} onChange={(e)=>{setTodoInput(e.target.value)}}/>
    <button type="submit">Add TODO</button>
</form>
<ul>
{
    todos.map((todo)=>(
        <li key={todo.id} className={todo.complete ? 'strike-through':""}>
            <input type="checkbox" checked={todo.complete} onChange={(e)=>completeTodo(e, todo)}/>
            {todo.title}
            <button onClick={()=> deleteTodo(todo)}>Delete</button>
        </li>
    ))
}
</ul>
</>
);
}

export default Todo;