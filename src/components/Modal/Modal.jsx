import React, { useRef } from "react";
import { Main } from "./style";
import axios from "axios";
import { BASE_URL } from "../..";

function Modal({ open, setOpen, getByIdData, setData }) {
  const name = useRef(null);

  const img = useRef(null);

  const price = useRef(null);

  const about = useRef(null);

  const type = useRef(null);

  async function editData(newObj) {
    await axios
      .put(`${BASE_URL}/mercedes/` + newObj.id, newObj)
      .then((res) => {
        if (res.status == 200) {
          setData((prev) =>
            prev.map((item) => {
              if (item.id == newObj.id) {
                return newObj;
              }
              return item;
            })
          );
        }
        setOpen(false);
      })
      .catch((error) => console.log(error));
  }

  async function editCar(event) {
    event.preventDefault();
    const object = {
      name: name.current.value,
      img: img.current.value,
      price: price.current.value * 1,
      about: about.current.value,
      type: type.current.value,
      id: getByIdData.id,
    };
    editData(object);
  }

  return (
    <>
      <Main>
        <div className="container">
          <div className={open ? "modal" : "none"}>
            <div className="remove" onClick={() => setOpen(false)}>
              X
            </div>
            <form onSubmit={(event) => editCar(event)}>
              <div>
                <input
                  ref={name}
                  placeholder="please enter name..."
                  type="text"
                  defaultValue={getByIdData.name}
                />
              </div>
              <div>
                <input
                  ref={img}
                  placeholder="please enter url..."
                  type="text"
                  defaultValue={getByIdData.img}
                />
              </div>
              <div>
                <input
                  ref={price}
                  placeholder="please enter price..."
                  type="number"
                  defaultValue={getByIdData.price}
                />
              </div>
              <div>
                <textarea
                  ref={about}
                  placeholder="please enter information..."
                  defaultValue={getByIdData.about}
                ></textarea>
              </div>
              <div>
                <select ref={type} defaultValue={getByIdData.type}>
                  <option value="A-class">SELECT CLASS</option>
                  <option value="A-class">A CLASS</option>
                  <option value="B-class">B CLASS</option>
                  <option value="C-class">C CLASS</option>
                  <option value="E-class">E CLASS</option>
                  <option value="G-class">G CLASS</option>
                </select>
              </div>
              <button>SUBMIT</button>
            </form>
          </div>
        </div>
      </Main>
    </>
  );
}

export default Modal;
