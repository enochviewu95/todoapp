import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import React,{useState,useEffect} from 'react';

function App() {

  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  return (
    <div className="container-md">
      <header>
        <h1>What's up</h1>
      </header>
      <main>
        <Form
        inputText = {inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}/>
        <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
      </main>
    </div>
  );
}

export default App;
