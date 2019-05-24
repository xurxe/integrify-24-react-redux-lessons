import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import { addOne, subtractOne, changeName } from './index.js'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className="App">
                <h1>Let's learn Redux</h1>
                <h2>Count: {this.props.count}</h2>
                <button onClick={this.props.addOne}>+1</button>
                <button onClick={this.props.subtractOne}>-1</button>

                <h2>Todos: {this.props.todos.length}</h2>

                <AddTodo></AddTodo>

                <TodoList todos={this.props.todos}></TodoList>

            </div>
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        count: state.one.count,
        name: state.one.name,
        todos: state.two,
        title: `${ownProps.title}`,
    };
};

const mapDispatchToProps = (dispatch) => {
// const mapActionToProps = (dispatch) => {
    return {
        addOne: () => dispatch(addOne()),
        subtractOne: () => dispatch(subtractOne()),
        changeName: () => dispatch(changeName()),
    };
};

/* const higherOrderFunction1 = (x) => {
    return (y) => x * 2 * y + 10;
}
console.log(higherOrderFunction1(2)(3));

const higherOrderFunction2 = (x, callback) => {
    return x * callback(3) + 10;
}
const callback1 = (y) => {
    return 2 * y;
}
console.log(higherOrderFunction2(2, callback1));  */

export default connect(mapStateToProps, mapDispatchToProps)(App);
