
const TodoNew = (props) => {
    // console.log("check props: ", props);
    const { addNewTodo } = props;
    // addNewTodo("Edan");

    const handleClick = () => {
        alert("Click me!")
    }

    const handleOnChange = (name) => {
        console.log("HandleOnChange: ", name.target.value)
    }

    return (
        <div className='todo-new'>
            <input
                type="text"
                className="todo-input"
                onChange={(event) => handleOnChange(event)}
                placeholder='Enter your task' />
            <button
                className='btn'
                onClick={handleClick}
            >Add
            </button>
        </div>
    );
}

export default TodoNew;