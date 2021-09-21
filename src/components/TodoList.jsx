import React from 'react';
import Todo from './Todo';

const TodoList = ({todos,setTodos,filteredTodos}) =>{
    return (
        <div>
            <ul>
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