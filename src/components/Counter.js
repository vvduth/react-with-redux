import { useSelector} from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {

  //pass a a func into useSelector, a fuc that decide the data we want to take
  const counter = useSelector(state => state.counter) ;
  // auto set up a subcription, compo will receive the changes automatically


  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
