import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faTrash } from "@fortawesome/free-solid-svg-icons";
import '../styles/todo.css'

const Todo = ({setTodo,todos,todo,text}) =>{ 

    const completeHandler = ()=>{
        setTodo(todos.map((item)=>{
            if(item.id === todo.id){
                console.log(item.id);
                console.log(item.completed);
                return{
                    ...item,
                    completed: !item.completed
                };
            }

            return item;
        }));
    }

    const deleteHandler = () =>{
        setTodo(todos.filter(el=>el.id !== todo.id));
    }

    
    return (
        <div className={`d-flex  ${todo.completed ? "completed-list":'bg-info'} mt-3 mx-auto rounded shadow input-group`}>              
            <li className={`flex-grow-1 text-center fs-5 m-auto ${todo.completed ? "text-color text-decoration-line-through":''}`}>{text}</li>
            <button className=" btn btn-primary" onClick={completeHandler}>
                <i><FontAwesomeIcon icon={faCheck}/></i>
            </button>
            <button className="btn btn-warning" onClick={deleteHandler}>
                <i><FontAwesomeIcon icon={faTrash}/></i>
            </button>
        </div>
    );
};

export default Todo;