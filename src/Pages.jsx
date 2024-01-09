import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import Mercedes from "./components/Mercedes/Mercedes";
import Add from "./components/Add/Add";
import EditDelete from "./components/EditDelete/EditDelete";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mercedes" element={<Mercedes />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/editdelete" element={<EditDelete />}></Route>
      </Routes>
    </>
  );
}

export default Pages;
