import React, { use, useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  function doubleValue(num) {
    return num * 2;
  }

  const doubledValue = doubleValue(number);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>count:{count} </h3>

      <input
        placeholder="Enter Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>

      <h3>Doubled Value : {doubledValue}</h3>
    </div>
  );
}

export default Memo;
