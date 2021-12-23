import { Component } from 'react';

import { useSelector , useDispatch, connect} from 'react-redux';

import classes from './Counter.module.css';
import {counterActions} from '../store/index'

const Counter = () => {

  const dispatch = useDispatch();
  // use dispatch return a function that can be executed

  //pass a a func into useSelector, a fuc that decide the data we want to take
  const counter = useSelector(state => state.counter) ;
  // auto set up a subcription, compo will receive the changes automatically

  const show = useSelector( state => state.showCounter)

  const minusHanlder = () =>{
    dispatch(counterActions.decrement());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); 
  }
  const addHandler = () => {
      dispatch(counterActions.increment());
  }

  const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={addHandler}>Add</button>
        <button onClick={increaseHandler}>Add 5 </button>
        <button onClick={minusHanlder}>Minus</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {

//   // connect hook helps connecting class based-compo to central data
//   addHandler() {
//     this.props.increment() ;
//   };

//   minusHanlder() {
//     this.props.decrement() ;
//   };

//   toggleCounterHandler() {};
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.addHandler.bind(this)}>Add</button>
//           <button onClick={this.minusHanlder.bind(this)}>Minus</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDisptachToProps = dispatch => {
//   return  {
//     increment: () =>  dispatch({type: 'increment'}) ,
//     decrement : () => dispatch({type: 'decrement'}) ,
//   };
// }
export default Counter; // dis for functional compo

//export default connect(mapStateToProps,mapDisptachToProps)(Counter) ;

// connect when executed returns a new fuc and excetuced it as a value 
// pass counter to the new function
// connect wants 2 arguments ( 2 functions)
// the first function maps redux state to props that we will receive in the compo props
