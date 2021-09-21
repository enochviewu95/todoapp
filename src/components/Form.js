import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const Form = ({ inputText, todos, setTodos, setInputText, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false }
        ]);
        setInputText('');
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }


    return (
        <form>
            <div className="input-group mb-3">
                <input value={inputText} type="text" className="form-control" onChange={inputTextHandler} placeholder="Add Todo..." />
                <button type="button" onClick={submitTodoHandler} className="btn btn-primary">
                    <i><FontAwesomeIcon icon={faPlusSquare} /></i>
                </button>
                <select className="ms-3" onChange={statusHandler} name="todos" id="">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;