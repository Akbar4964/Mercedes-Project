import React, { useReducer } from "react";
import { Main } from "./style";
import axios from "axios";
import { BASE_URL } from "../..";

const state = {
  name: "",
  img: "",
  price: 0,
  about: "",
  type: "",
};

const handleReduce = (state, action) => {
  switch (action.type) {
    case "CHANGE_DATA":
      return { ...state, [action.key]: action.payload };
    default:
      return state;
  }
};

function ReducerModal({ open, setOpen, getByIdData, setData }) {
  const [store, dispatch] = useReducer(handleReduce, state);

  async function editData(newObj) {
    await axios
      .put(`${BASE_URL}/mercedes/` + getByIdData.id, newObj)
      .then((res) => {
        setOpen(false);
      })
      .catch((error) => console.log(error));
  }

  async function editCar(event) {
    event.preventDefault();
    const object = {
      name: store.name,
      img: store.img,
      price: store.price * 1,
      about: store.about,
      type: store.type,
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
                  required
                  onChange={(event) =>
                    dispatch({
                      type: "CHANGE_DATA",
                      payload: event.target.value,
                      key: "name",
                    })
                  }
                  placeholder="please enter name..."
                  type="text"
                  defaultValue={getByIdData.name}
                />
              </div>
              <div>
                <input
                  required
                  onChange={(event) =>
                    dispatch({
                      type: "CHANGE_DATA",
                      payload: event.target.value,
                      key: "img",
                    })
                  }
                  placeholder="please enter url..."
                  type="text"
                  defaultValue={getByIdData.img}
                />
              </div>
              <div>
                <input
                  required
                  onChange={(event) =>
                    dispatch({
                      type: "CHANGE_DATA",
                      payload: event.target.value,
                      key: "price",
                    })
                  }
                  placeholder="please enter price..."
                  type="number"
                  defaultValue={getByIdData.price}
                />
              </div>
              <div>
                <textarea
                  required
                  onChange={(event) =>
                    dispatch({
                      type: "CHANGE_DATA",
                      payload: event.target.value,
                      key: "about",
                    })
                  }
                  placeholder="please enter information..."
                  defaultValue={getByIdData.about}
                ></textarea>
              </div>
              <div>
                <select
                  required
                  onChange={(event) =>
                    dispatch({
                      type: "CHANGE_DATA",
                      payload: event.target.value,
                      key: "type",
                    })
                  }
                  defaultValue={getByIdData.type}
                >
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

export default ReducerModal;
