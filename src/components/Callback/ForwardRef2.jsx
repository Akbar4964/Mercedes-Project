import React from "react";
import { CustomInput } from "./ForwardRef";

function ForwardRef2() {
  return (
    <>
      <div>
        <h2>Forward Ref Example</h2>
        <CustomInput ref={inputRef} placeholder="Type here..." />
      </div>
    </>
  );
}

export default ForwardRef2;
