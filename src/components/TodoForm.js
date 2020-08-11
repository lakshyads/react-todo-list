import React from 'react';

const TodoForm = ({ todoVal, setTodoItem, createTodoItem }) => {
    const handleClick = (e) => {
        e.preventDefault();
        createTodoItem({ value: todoVal, isDone: false });
    }

    const handleChange = (e) => { setTodoItem(e.target.value) }

    return (
        <div>
            <div className="form">
                <input type="text" value={todoVal} name="inputToDoItem" onChange={handleChange} />
                <button type="submit" name="btnTodoItem" onClick={handleClick}> + </button>
            </div>
        </div>
    )
}

export default TodoForm;