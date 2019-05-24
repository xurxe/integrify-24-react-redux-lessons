import React from 'react'
import { connect } from 'react-redux';

import { deleteTodo } from '../index'

const Todo = ({todo, index, deleteTodo}) => {

    return (
        <li>
            {todo} 
            <button
            onClick={() => deleteTodo(index)}
            >Delete</button> 
            <button>Edit</button>
        </li>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        deleteTodo: (index) => dispatch(deleteTodo(index))
    }
}

export default connect(null, mapActionsToProps)(Todo);
