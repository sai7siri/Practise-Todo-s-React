import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./todo.css"

function Todo() {
  const [todo, setTodo] = useState([{task: "sleep", id:uuidv4() , isDone : false  }]);
  const [newtodo, setNewtodo] = useState("");

  const newTodoUpload = () => {
    if (newtodo.trim() !== ""){
      setTodo( (prevTodo)=> [...prevTodo, {task: newtodo , id:uuidv4() , isDone: false }])
      setNewtodo("");
    }
   
  };

  const newTodoUpdate = (event) => { 

    setNewtodo(event.target.value);
  };

  const removeTodo=(id)=> {

    setTodo( todo.filter((elemnt) => elemnt.id !== id));
    
  }

  function todoUpperCase(){
    setTodo(  todo.map((allTodo)=> {
     return {
      ...allTodo, task: allTodo.task.toUpperCase() 
     }
    }) );  
  }

  function markDone(id){
   setTodo(todo.map((one)=>{
      if (one.id === id){
        return {
          ...one, isDone: true
        }
      } else {
        return one ;
      }
   }) );
  }

  const allRemoveTodos = ()=>{

     setTodo([ ]);
      
   
  }
  return (
    <div className="conatiner">
      <h2 style={{ textDecoration: "underline 2px blue " }}>Daily Tasks</h2>
      <ul>
        {
          todo.map((todos)=>{
            return <li key={todos.id}>  
            <span style={todos.isDone ? {textDecoration:"line-through"} : {} }>{todos.task}</span> &nbsp;&nbsp;&nbsp;&nbsp;
            <button id="red" onClick={()=> removeTodo(todos.id)}> Remove Task</button>
            &nbsp;
            <button id="but-yellow" onClick={()=>markDone(todos.id)}>Mark Done</button>
            </li>
          })
          
        }
      </ul>
      <button id="but-yellow" onClick={todoUpperCase}>view UppeCase</button>
      
      <hr />
      <input className="init" value={newtodo} onChange={newTodoUpdate} /> <br /> <br />
      <button id="but-green" onClick={newTodoUpload}>Add Task</button> &nbsp;
      <button id="but-red" onClick={allRemoveTodos}>Delete Tasks</button>
    </div>
  );
}

export default Todo;
