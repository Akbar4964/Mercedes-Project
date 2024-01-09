import React, { createContext, useState } from "react";

export const CreateContextData = createContext(null);

function Context({ children }) {
  const [data, setData] = useState({
    id: 1,
    name: "",
    img: "",
    price: 0,
    about: "",
    type: "",
  });

  return (
    <>
      <CreateContextData.Provider value={{ data, setData }}>
        {children}
      </CreateContextData.Provider>
    </>
  );
}

export default Context;
