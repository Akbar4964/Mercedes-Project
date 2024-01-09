import React, { forwardRef, useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
export const CustomInput = forwardRef((props, ref) => {
  const count = useSelector(state=> state.count);
  return <>
  <h1 style={{color:"red"}}>{count}</h1>
  <input ref={ref} {...props} />
  </>;
});

const ForwardRef = () => {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div>
        <h2>Forward Ref Example</h2>
        <CustomInput ref={inputRef} placeholder="Type here..." />
        <button onClick={() => setCount((a) => a + 1)}>btn</button>
      </div>
    </>
  );
};

export default ForwardRef;
