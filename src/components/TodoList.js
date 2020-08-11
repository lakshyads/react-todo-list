import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
    return (
        <div className="todo-list">
            {props.todoList.map(item => <TodoItem value={item.value} isDone={item.isDone} />)}
        </div>
    )
}