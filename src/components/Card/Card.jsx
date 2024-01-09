import React, { useState } from "react";
import { Cards } from "./style";

function Card({ filteredCards, filtCards }) {
  const [mouseData, setMouseData] = useState({ mouse: false, id: null });

  return (
    <>
      {filteredCards.map((item, i) => (
        <Cards key={i}>
          <div className="card">
            <p className="card-type">{item.type}</p>
            <img
              className="card-image"
              src={item.img}
              alt=""
              onMouseMove={() => setMouseData({ mouse: true, id: item.id })}
              onMouseOut={() => setMouseData({ mouse: false, id: item.id })}
              on
            />
            <div
              className="card-body"
              style={{
                display:
                  mouseData.mouse && item.id === mouseData.id
                    ? "none"
                    : "block",
              }}
            >
              <p className="card-name block">name: {item.name}</p>
              <p className="card-price block">price: {item.price} $</p>
              <p className="card-info block">info: {item.about}</p>
            </div>
          </div>
        </Cards>
      ))}
    </>
  );
}

export default Card;
