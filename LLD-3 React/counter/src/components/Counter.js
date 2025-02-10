import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="p-4">
      <h1 data-testid="counter" className="text-2xl mb-4">Count: {count}</h1>
      <div className="space-x-2">
        <button 
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          data-testid="increment"
        >Increment</button>
        <button 
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded"
          data-testid="decrement"
        >
          Decrement
        </button>
        <button 
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded"
          data-testid="reset"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter