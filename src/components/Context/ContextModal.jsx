import React, { useContext, useState } from "react";
import { Main } from "../Reducer/style";
import axios from "axios";
import { BASE_URL } from "../..";
import { CreateContextData } from "../../context/Context";

function ContextModal({ open, setOpen, setDatas }) {
  const { data, setData } = useContext(CreateContextData);

  async function editData(newObj) {
    await axios
      .put(`${BASE_URL}/mercedes/` + data.id, newObj)
      .then((res) => {
        // if (res.status == 200) {
        //   setDatas((prev) =>
        //     prev.map((item) => {
        //       if (item.id == newObj.id) {
        //         return newObj;
        //       }
        //       return item;
        //     })
        //   );
        // }
        setOpen(false);
      })
      .catch((error) => console.log(error));
  }

  async function editCar(event) {
    event.preventDefault();
    const object = {
      name: data.name,
      img: data.img,
      price: data.price * 1,
      about: data.about,
      type: data.type,
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
                    setData({ ...data, name: event.target.value })
                  }
                  placeholder="please enter name..."
                  type="text"
                  defaultValue={data.name}
                />
              </div>
              <div>
                <input
                  required
                  onChange={(event) =>
                    setData({ ...data, img: event.target.value })
                  }
                  placeholder="please enter url..."
                  type="text"
                  defaultValue={data.img}
                />
              </div>
              <div>
                <input
                  required
                  onChange={(event) =>
                    setData({ ...data, price: event.target.value })
                  }
                  placeholder="please enter price..."
                  type="number"
                  defaultValue={data.price}
                />
              </div>
              <div>
                <textarea
                  required
                  onChange={(event) =>
                    setData({ ...data, about: event.target.value })
                  }
                  placeholder="please enter information..."
                  defaultValue={data.about}
                ></textarea>
              </div>
              <div>
                <select
                  required
                  onChange={(event) =>
                    setData({ ...data, type: event.target.value })
                  }
                  defaultValue={data.type}
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

export default ContextModal;
