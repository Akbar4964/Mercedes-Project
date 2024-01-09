import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { BASE_URL } from "../..";
import { Main } from "./style";
import { useNavigate } from "react-router";
import Modal from "../Modal/Modal";
import ReducerModal from "../Reducer/ReducerModal";
import ContextModal from "../Context/ContextModal";
import { CreateContextData } from "../../context/Context";

function EditDelete() {
  const [open, setOpen] = useState(false);

  const [datas, setDatas] = useState([]);

  const { data, setData } = useContext(CreateContextData);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/mercedes`)
      .then((res) => setDatas(res.data.reverse()))
      .catch((error) => console.log(error));
  }, []);

  async function deleteCar(id) {
    await axios
      .delete(`${BASE_URL}/mercedes/` + id)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    navigate("/mercedes");
  }

  const handleEdiData = (changeData) => {
    setOpen(true);
    setData(changeData);
  };

  return (
    <>
      <Navbar />
      <Main>
        <div className="container">
          {datas.map((item) => (
            <div className={open ? "none" : "items"} key={item.id}>
              <div className="item">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.type}</p>
              </div>
              <div className="item-button">
                <button onClick={() => handleEdiData(item)}>EDIT</button>
                <button
                  onClick={() => {
                    const coniform = window.confirm("Do you want to delete?");
                    if (coniform) {
                      alert("The data deleted successfully :)");
                      deleteCar(item.id);
                    }
                  }}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* {open && (
          <Modal
            open={open}
            setOpen={setOpen}
            getByIdData={getByIdData}
            setData={setData}
          />
        )} */}
        {/* {open && (
          <ReducerModal
            open={open}
            setOpen={setOpen}
            getByIdData={getByIdData}
            setData={setData}
          />
        )} */}
        {open && (
          <ContextModal
            open={open}
            setOpen={setOpen}
            data={data}
            setDatas={setDatas}
          />
        )}
      </Main>
    </>
  );
}

export default EditDelete;
