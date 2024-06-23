
import TodoData from './component/todo/TodoData'
import TodoNew from './component/todo/TodoNew'
import './component/todo/todo.css'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React " },
    { id: 2, name: "Watching Youtube" }
  ])

  // Test với biến 
  const name = "Edan";
  const age = 25;
  const data = {
    address: "Ha Noi",
    country: "Viet Nam"
  }

  // Test vs function 
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 20000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData
        name={name}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' alt="" />
      </div>
    </div>
  )
}

export default App
