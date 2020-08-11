import React from 'react';

const TodoItem = (props) => {

    return (        
        <div className="todo-item">
            <input type="checkbox" name="inputToDoItem" checked={props.isDone} />
            {props.value}
        </div>
    )
}

export default TodoItem;