//import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit'

export const INCREMENT = 'increment';

const initialState = {counter: 0 , showCounter : true};

// create slice: prepare a silce of our global state
// name, initialState and reducer
// clone new state and override it
// dont have to return the whole objects with tons of states
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state){
            state.counter++ ;
        },
        decrement(state){
            state.counter-- ;
        },
        increase(state,action){
           state.counter = state.counter + action.payload; 
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter ;
        },
    }
});



//const store =  createStore(counterSlice.reducer) ; // create the central data
//ALWAYS return a new abject state
const store = configureStore({
    reducer: counterSlice.reducer
});
export const counterActions =  counterSlice.actions;
export default store ;


