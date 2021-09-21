import React from "react";

const Form = ({inputText,todos,setTodos,setInputText,setStatus})=>{

    const inputTextHandler = (e)=>{
        setInputText(e.target.value);
    }

    const statusHandler =(e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text: inputText,completed:false}
        ]);
        setInputText('');
    }


    return(
        <form>
            <input value={inputText} type="text" className="" onChange={inputTextHandler}/>
        </form>
    );
}