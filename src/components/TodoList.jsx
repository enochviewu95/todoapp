import React from 'react';
import Todo from './Todo';
import '../styles/todolist.css'

const TodoList = ({todos,setTodos,filteredTodos}) =>{

    console.log(todos);

    return (
        <div className="w-75 mx-auto">
            <ul className="unordered-list">
                {
                    filteredTodos.map(todo =>(
                        <Todo
                        setTodo={setTodos}
                        todos={todos}
                        todo={todo}
                        text={todo.text}
                        key={todo.id}/>
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;