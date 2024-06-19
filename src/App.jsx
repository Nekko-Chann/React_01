
import TodoData from './component/todo/TodoData'
import TodoNew from './component/todo/TodoNew'
import './component/todo/todo.css'
import reactLogo from './assets/react.svg'

const App = () => {

  const name = "Edan";
  const age = 25;
  const data = {
    address: "Ha Noi",
    country: "Viet Nam"
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData
        name={name}
        age={age}
        data={data}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' alt="" />
      </div>
    </div>
  )
}

export default App
