import React, { useState, useCallback } from "react";
import Comp from "./Comp";
import Comp2 from "./Comp2";

const Callback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  },[]);

  const optHandleClick = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, [count]);

  return (
    <div>
      <Comp handleClick={handleClick}/>
      <p>Count: {count}</p>
      <Comp2 count={count}/>
      <button onClick={optHandleClick}>Click</button>
    </div>
  );
};

export default Callback;
