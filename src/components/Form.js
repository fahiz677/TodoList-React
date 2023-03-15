import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)




 export const Form = ({setInputText,todos,setTodos,inputText,setStatus,inputEl}) => {
    const inputTextHandler = (e) =>{
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        if(document.getElementById('inputTodo').value.trim() === ""){
          MySwal.fire({
            title: <p>Todo Cannot be Empty</p>,
            didOpen: () => {
              MySwal.showLoading()
            },
          })
        }else{
          setTodos([
            ...todos , {text:inputText,completed:false,id:Math.random() * 1000}
        ])
        setInputText("");
      }


    }
    const statusHandler = (e) =>{
     setStatus(e.target.value)
    }
    return (
        <form>
        <input  ref={inputEl} value={inputText} onChange={inputTextHandler} type="text" className="todo-input"  id="inputTodo" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div  className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}
