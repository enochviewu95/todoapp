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
            ...todos, { text: inputText, completed: false,id: Math.floor((Math.random()*1000)) }
        ]);
        setInputText('');
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }


    return (
        <form>
            <div className="d-flex">
                <div className="input-group">
                    <input value={inputText} type="text" className="form-control" onChange={inputTextHandler} placeholder="Add Todo..." />
                    <button type="button" onClick={submitTodoHandler} className="btn btn-primary">
                        <i><FontAwesomeIcon icon={faPlusSquare} /></i>
                    </button>
                </div>
                <div>
                    <select className="form-select w-auto ms-2" onChange={statusHandler} name="todos" id="">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
        </form>
    );
}

export default Form;