import React from 'react'

import Todo from './Todo';

const TodoList = (props) => {
    const todos = props.todos.map((todo, index) => 
        <Todo todo={todo} key={todo} index={index}></Todo>
    )
    return (
        <ul>
            {todos}
        </ul>
    )
}

export default TodoList;
