import { combineReducers } from 'redux';

import reducer1 from './reducer1';
import reducer2 from './reducer2';

const allReducers = combineReducers({
    one: reducer1,
    two: reducer2,
});

export default allReducers;