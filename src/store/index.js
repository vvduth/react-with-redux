//import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter'
import authReducer from './auth';

export const INCREMENT = 'increment';







//const store =  createStore(counterSlice.reducer) ; // create the central data
//ALWAYS return a new abject state
const store = configureStore({
    reducer: { counter : counterReducer,
                auth   : authReducer },
});


export default store ;


