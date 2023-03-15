import React, {useEffect, useState , useRef} from 'react';
import './App.css';

//import components
import {Form} from './components/Form';

import { TodoList } from './components/TodoList';

function App() {
  const LOCAL_STORAGE_KEY = "todos";
  const[inputText,setInputText] = useState("");
  const [todos,setTodos] = useState( JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
  const [status, setStatus] = useState("all");
  const [filteredTodos ,setFilteredTodos] = useState([])
  const inputEl  = useRef("");
  
 

  const filterHandler = () =>{
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
         break;  
    
      default:
        setFilteredTodos(todos);
        break;
    }
  }

 

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    filterHandler(); 
  },[todos,status]);

  return (
    <div className="App">
        <header>
      <h1>Todo List</h1>
    </header>
    < Form setInputText ={setInputText} inputText = {inputText} todos = {todos} setTodos ={setTodos} setStatus={setStatus} inputEl ={inputEl}/>
    < TodoList setTodos ={setTodos} todos = {todos} filteredTodos ={filteredTodos}/>
    </div>
  );
}

export default App;
