
const TodoNew = (props) => {
    // console.log("check props: ", props);
    const { addNewTodo } = props;
    addNewTodo("Edan");
    return (
        <div className='todo-new'>
            <input type="text" className="todo-input" placeholder='Enter your task' />
            <button className='btn'>Add</button>
        </div>
    );
}

export default TodoNew;