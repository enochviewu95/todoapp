import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import React,{useState,useEffect} from 'react';

function App() {

  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(()=>{
    const filteredHandler = () =>{
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo=>todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo=>todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }

    const saveLocalTodos = ()=>{
      localStorage.setItem('todos',JSON.stringify(todos));
  }


    filteredHandler();
    saveLocalTodos();

  },[todos,status])

  return (
    <div className="container-sm p-3 vw-75">
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
