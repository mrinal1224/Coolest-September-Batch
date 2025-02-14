import React, { useState , useCallback, useEffect} from "react";
import Child from "./Child";

function MemoComponent() {
  const [count, setCount] = useState(0);

  // function sayHello(){
  //   return "hello"
  // }


  let sayHello = useCallback(()=>{
    return 'Hello'
  }, [])
  
 




  // A
  // B

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>count:{count} </h3>

      <Child buttonName='Click Me' sayHelloFn={sayHello}/>
    </div>
  );
}

export default MemoComponent;
