import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}

export default App;
