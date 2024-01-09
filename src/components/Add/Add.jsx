import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Main } from "./style";
import axios from "axios";
import { BASE_URL } from "../..";
import { useNavigate } from "react-router";

function Add() {
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const name = useRef(null);

  const image = useRef(null);

  const price = useRef(null);

  const info = useRef(null);

  const type = useRef(null);

  async function postFunc(data) {
    await axios
      .post(`${BASE_URL}/mercedes`, data)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: name.current.value.trim(),
      img: image.current.value.trim(),
      price: price.current.value.trim() * 1,
      about: info.current.value.trim(),
      type: type.current.value.trim(),
    };
    postFunc(data);
    navigate("/mercedes");
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Main>
          <form onSubmit={(event) => handleSubmit(event)}>
            <div>
              <input
                ref={name}
                placeholder="please enter car__name..."
                className="add-car"
                type="text"
              />
            </div>
            <div>
              <input
                ref={image}
                placeholder="please enter car__image__url..."
                className="add-car"
                type="text"
              />
            </div>
            <div>
              <input
                ref={price}
                placeholder="please enter car__price..."
                className="add-car"
                type="number"
              />
            </div>
            <div>
              <textarea
                ref={info}
                placeholder="please enter car__information..."
                className="add-car-info"
              ></textarea>
            </div>
            <div>
              <select ref={type} className="add-car-class">
                <option value="A-class">SELECT CLASS</option>
                <option value="A-class">A CLASS</option>
                <option value="B-class">B CLASS</option>
                <option value="C-class">C CLASS</option>
                <option value="E-class">E CLASS</option>
                <option value="G-class">G CLASS</option>
              </select>
            </div>
            <button className="add-car-button" type="submit">
              SUBMIT
            </button>
          </form>
        </Main>
      </div>
    </>
  );
}

export default Add;
