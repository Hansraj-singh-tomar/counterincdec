import changeTheNumber from "./incDec";
import multiplyTheNumber from "./multDivi";

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    changeTheNumber,
    multiplyTheNumber
})

export default rootReducer;