import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

import App from './App';

/* const reducer = (state = 'Initial state') => {
    if (action.type === 'ChangeState') {
        return action.payload;
    }

    else {
        return state
    }
} */

const initialState = {
    count: 0,
    name: 'Xurxe',
};

// reducers are functions that take two parameters: the initial state, and an action. The action is an object that has type and may have payload.
const reducer1 = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'ADD_ONE': {
            return {...state, count: state.count + 1};
        }

        case 'SUBTRACT_ONE': {
            return {...state, count: state.count - 1};
        }

        case 'CHANGE_NAME': {
            return {...state, name: payload.name};
        }

        default: {
            return state;
        }
    };
};

const actionAdd = {
    type: 'ADD_ONE',
};

const actionSubtract = {
    type: 'SUBTRACT_ONE',
};

const actionChangeName = {
    type: 'CHANGE_NAME',
    payload: {
        name: 'Asabeneh'
    },
};

const initialTodos = ['Todo 1', 'Todo 2', 'Todo 3']

const reducer2 = (state = initialTodos, {type, payload}) => {
    switch (type) {
        case 'ADD_TODO': {
            return [...state, payload.todo]
        }

        case 'DELETE_TODO': {
            const todos = [...state]
            todos.splice(payload.index, 1)

            return todos;
        }

        case 'EDIT_TODO': {
            return
        }

        default: {
            return state;
        }
    }
}

const allReducers = combineReducers({
    one: reducer1,
    two: reducer2,
})

// needs at least one parameter (reducer)
const store = createStore(
    allReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// console.log(store);
// console.log(store.getState());

store.dispatch(actionAdd);
// console.log(store.getState());

store.dispatch(actionSubtract);
// console.log(store.getState());

store.dispatch(actionChangeName);
// console.log(store.getState());

export const addOne = () => {
    return {
        type: 'ADD_ONE'
    }
};

export const subtractOne = () => {
    return {
        type: 'SUBTRACT_ONE'
    }
};

export const changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        payload: {
            name: name
        }
    }
};

export const addTodo = (newTodo) => {
    return {
        type: 'ADD_TODO',
        payload: {
            todo: newTodo,
        }
    }
}

export const deleteTodo = (index) => {
    return {
        type: 'DELETE_TODO',
        payload: {
            index: index,
        }
    }
}

store.dispatch(addOne());
// console.log(store.getState());

store.dispatch(subtractOne());
// console.log(store.getState());

store.dispatch(changeName('Xurxe'));
// console.log(store.getState());

ReactDOM.render(
    // Provider has one mandatory prop: store
    <Provider store = {store}>
        <App title='I am the title'/>
    </Provider>
    , document.getElementById('root')
);