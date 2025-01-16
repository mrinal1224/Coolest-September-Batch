import React, { useState  } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Counter</h1>
      <h2>{count}</h2>
      <button onClick={increment} style={{ marginRight: "10px" }}>
        + Increment
      </button>
      <button onClick={decrement} style={{ marginRight: "10px" }}>
        - Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
