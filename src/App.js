import "./App.css";
// import { useState } from "react";

// function Todo() {
//   const [todoValues, setTodoValues] = useState([]);

//   const handleSubmit = (event) => {
//     setTodoValues.push(event.target.value);
//     console.log(todoValues);
//     event.preventDefault();
//     alert('end')
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>To Do</h1>
//       </header>
//       <form className="App-form" >
//         <label htmlFor="task" className="App-">
//           Enter task to do!
//         </label>
//         <br></br>
//         <input id="task" type="text" className=""></input>
//         <input type="submit" onClick={ (event) => {handleSubmit(event)}} className="" value="Add"></input>
//       </form>
//       {todoValues}
//     </div>
//   );
// }

// export default Todo;

import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import LoginButton from './LoginButton';

function ToDo() {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleChange = ({ target }) => {
    setTodoText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList((arr) => [...arr, todoText]);
    setTodoText("");
  };

  const deleteTodo = (key) => {
    todoList.splice(key, 1);
    setTodoList((arr) => [...arr, todoText]);
  };
  return (
    <div className="App">
      
      <header className="App-header">
      <LoginButton/>
        <h1>To Do</h1>
      
      </header>
          
      <form onSubmit={handleSubmit}>
        <label className="todoLabel">What do you want to do today?</label>
        <br />
        <input
          type="text"
          value={todoText}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input className="button" type="submit" value="Submit" />
      </form>
      <div className="content">
      {todoList.map((td, index) => (
        td!=="" &&
        <>
          <br />
          <input key={index} id="key" type="checkbox" />
          <label htmlFor="key">{td}</label>
          <IconButton
            aria-label="delete"
            key={index}
            onClick={() => deleteTodo(index)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ))}
      </div>
    </div>
  );
}

export default ToDo;
