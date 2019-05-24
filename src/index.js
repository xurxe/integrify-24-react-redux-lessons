import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

import App from './App';

/* const myReducer = (state = 'My initial state') => {
    if (myAction.type === 'ChangeState') {
        return myAction.payload;
    }

    else {
        return state
    }
} */

const initialState = {
    count: 0,
    name: 'Xurxe',
};

const myReducer = (state = initialState, {type, payload}) => {
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

const myStore = createStore(myReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
/* console.log(myStore);
console.log(myStore.getState()); */

myStore.dispatch(actionAdd);
/* console.log(myStore.getState()); */

myStore.dispatch(actionSubtract);
/* console.log(myStore.getState()); */

myStore.dispatch(actionChangeName);
/* console.log(myStore.getState()); */

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

myStore.dispatch(addOne());
/* console.log(myStore.getState()); */

myStore.dispatch(subtractOne());
/* console.log(myStore.getState()); */

myStore.dispatch(changeName('Xurxe'));
/* console.log(myStore.getState()); */

ReactDOM.render(
    <Provider store = {myStore}>
        <App title='I am the title'/>
    </Provider>
    , document.getElementById('root')
);