import * as types from '../constants/counterConstants'

export const addCounter= () =>{
    return {
        type : types.ADD_COUNTER
    }
};

export const minusCounter= () =>{
    return {
        type : types.MINUS_COUNTER
    }
};

export const ChangeCounter= (newCounter) =>{
    return {
        type : types.CHANGE_COUNTER,
        newCounter : newCounter
    }
};

export const InitializeCounter= () =>{
    return {
        type : types.INITIALIZE_COUNTER,
        newCounter : 0
    }
};