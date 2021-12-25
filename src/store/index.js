//import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit'

export const INCREMENT = 'increment';

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

const inititalAuthState = {
    isAuthenticated: false
}
const authSlice = createSlice({
    name: 'authentication',
    initialState: inititalAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true ;
        },
        logout(state) {
            state.isAuthenticated = false ;
        }
    }
});



//const store =  createStore(counterSlice.reducer) ; // create the central data
//ALWAYS return a new abject state
const store = configureStore({
    reducer: { counter : counterSlice.reducer,
                auth   : authSlice.reducer },
});
export const counterActions =  counterSlice.actions;
export const authActions = authSlice.actions ;
export default store ;


