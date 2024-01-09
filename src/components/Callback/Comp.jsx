import React, { memo } from "react";

const Comp = memo(function ({handleClick}) {
  return (
    <>
      <h1>title</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
});

export default Comp;
