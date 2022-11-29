
import {MULTIPLY, DIVIDE} from "../actions";

const initialState = 4;

const multiplyTheNumber = (state = initialState, action)=>{
    switch(action.type){
        case MULTIPLY : return state * action.payload;
        
        case DIVIDE : return state / action.payload;

        default : return state;
    }
}

export default multiplyTheNumber;