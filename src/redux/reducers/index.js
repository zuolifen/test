import countReducer from './count-reducer';
import personReducer from './person-reducer';
import {combineReducers} from 'redux';
export default combineReducers({
    number:countReducer,
    persons:personReducer
})