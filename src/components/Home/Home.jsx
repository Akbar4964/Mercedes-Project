import React, { useMemo, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Callback from "../Callback/Callback";
import ForwardRef from "../Callback/ForwardRef";
import Counter from "../Counter";

function Home() {
  const [data, setData] = useState([
    {
      name: "Akbar",
      age: 16,
      job: "Developer",
    },
  ]);

  const visibleData = useMemo(() => {
    return data.map((obj) => obj.age * 2);
  }, [data]);

  return (
    <>
      <Navbar />
      <Counter/>
      <Callback />
      <ForwardRef></ForwardRef>
      <h1>age:{visibleData}</h1>
    </>
  );
}

export default Home;
