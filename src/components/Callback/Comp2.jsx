import React, { memo } from "react";
import { CustomInput } from "./ForwardRef";

function Comp2({ count }) {

  return (
    <>
      <h1>title2</h1>
    </>
  );
}

export default memo(Comp2);
