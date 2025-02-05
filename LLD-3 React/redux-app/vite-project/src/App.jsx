
import "./App.css";
import { useSelector , useDispatch } from "react-redux";
import { increment, decrement ,reset } from "./slices/counterSlice";


function App() {

  let count = useSelector((state)=> state.counter.value)

  const dispatch = useDispatch()

  console.log(count)
 

  function handleIncrement() {
     dispatch(increment())
  }

  function handleDecrement() {
    dispatch(decrement())
  }

  function resetCounter(){
    dispatch(reset())
  }

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
}

export default App;
