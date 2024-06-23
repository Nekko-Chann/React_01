import { useState } from "react";

const TodoNew = (props) => {
    // useState hook
    const [valueInput, setValueInput] = useState("Edan") //destructuring array

    const { addNewTodo } = props;
    // addNewTodo("Edan");

    const handleClick = () => {
        console.log("Check valueInput: ", valueInput)

    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <div className='todo-new'>
            <input
                type="text"
                className="todo-input"
                onChange={(event) => handleOnChange(event.target.value)}
                placeholder='Enter your task' />
            <button
                className='btn'
                onClick={handleClick}
            >Add
            </button>
            <div>
                My text input is: {valueInput}
            </div>
        </div>
    );
}

export default TodoNew;