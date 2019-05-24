import { ADD_ONE, SUBTRACT_ONE, CHANGE_NAME } from './action-types';

export const addOne = () => {
    return {
        type: ADD_ONE,
    }
};

export const subtractOne = () => {
    return {
        type: SUBTRACT_ONE,
    }
};

export const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        payload: {
            name: name
        }
    }
};