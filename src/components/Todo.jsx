import React from "react";

const Todo = (props) =>{ 
    const value = props.value; 
    const text = props.text;
    return (
        <div>
            <input className="form-check-input" id="checkboxNoLabel" type="checkbox" value={value}/>
            <p>{text}</p>
        </div>
    );
};

export default Todo;