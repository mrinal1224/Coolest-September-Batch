import React, { useState } from "react";
import Child from "./Child";

function MemoComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>count:{count} </h3>

      <Child buttonName='Click Me'/>
    </div>
  );
}

export default MemoComponent;
