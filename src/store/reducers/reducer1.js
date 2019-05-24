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

export default reducer1;