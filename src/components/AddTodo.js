import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../index';

class AddTodo extends Component {
    state = {
        task: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
        console.log(this.state.task);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.task)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type='text'
                name='task'
                placeholder='Task'
                value={this.state.task}
                onChange={this.handleChange}
                ></input>

                <button>Add task</button>
            </form>
        )
    }
}

/* const mapStateToProps = (state) => {
    return state;
} */

const mapActionsToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo))
    }
}

export default connect(null, mapActionsToProps)(AddTodo);
