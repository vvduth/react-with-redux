import {createSlice} from '@reduxjs/toolkit'

const initialCounterState = {counter: 0 , showCounter : true};

// create slice: prepare a silce of our global state
// name, initialState and reducer
// clone new state and override it
// dont have to return the whole objects with tons of states
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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
export const counterActions =  counterSlice.actions;
export default counterSlice.reducer ;