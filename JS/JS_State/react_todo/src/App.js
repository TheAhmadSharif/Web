import React, { useState, useRef, useEffect } from 'react';
import uuid from 'react-uuid';

import './App.css';
import TodoList from './TodoList.js';
const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {

  const [todos, setTodos ] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
 
    const items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    console.log(LOCAL_STORAGE_KEY, items)
      if (items) {
        setTodos(items);
      }
        
  }, [])



  useEffect(() => {
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

 
  function addTodo(e) {
    const name = todoNameRef.current.value;
    setTodos(prev => {
      return [...prev, {id: uuid(), name: name, completed: false}]
    });
    todoNameRef.current.value = null;
  }


  const onEnter = (event, callback) => event.key === 'Enter' && callback()


  
  
  return (
    <div className="App">
      <div>
      learn react
      </div>
        <TodoList abcd={todos} />

        <div>
          <input type="text" 
          ref={todoNameRef} 
          placeholder="Add Task" 
          autoFocus
          onKeyDown={e => onEnter(e, addTodo)}
          />
          <button onClick={addTodo} >Add</button>  
          <button>Clear</button>  
          <button>0 Left to do</button>  
        </div>
    </div>
  );
}

export default App;
