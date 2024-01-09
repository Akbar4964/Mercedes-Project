import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import axios from "axios";
import { BASE_URL } from "../..";
import { Filter, Main } from "./style";

function Mercedes() {
  const [card, setCard] = useState([]);

  const [filtCards, setFiltCards] = useState([]);

  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/mercedes`)
      .then((res) => {
        setCard(res.data.reverse());
        setFiltCards(res.data.reverse());
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    setData(event.target.value);
  };

  const filteredCards = useMemo(() => {
    
    const datas = card.filter((card) =>
      card.name.toLowerCase().includes(data.toLowerCase())
    );
    if(!data) {
      setFiltCards(card);
    }
    return datas;
  }, [card, data]);

  const sortCardsByPrice = () => {
    const sortedCards = [...card].sort((a, b) => a.price - b.price);
    setCard(sortedCards);
  };

  const filterCardsAbovePrice = () => {
    const above = card.filter((card) => card.price > 100000);
    setFiltCards(above);
  };

  const filterCardsDownPrice = () => {
    const down = card.filter((card) => card.price < 100000);
    setFiltCards(down);
  };

  // const mapData = useMemo(() => {
  //   const data = card.map((el) => {
  //     return { ...el, label: el.name };
  //   });
  //   return data;
  // }, [card]);

  // const newData = () => {
  //   console.log("memo1");
  //   const data = card.map(el => {
  //     console.log('maping');
  //     return ({...el,label:el.name})
  //   })
  //   console.log("memo2");

  //   return data
  // }

  // const mapData = newData()

  console.log(filtCards,filteredCards);


  return (
    <>
      <Navbar />
      <div className="container">
        <Filter>
          <input
            className="filter-cards"
            value={data}
            type="text"
            onChange={handleSearch}
            placeholder="search cards..."
          />
        </Filter>
        <Main>
          <div className="card-row">
            <Card filteredCards={!!data ? filteredCards : filtCards} />
          </div>
          <div className="filter">
            <div className="sort">
              <button onClick={sortCardsByPrice}>SORT PRICE DOWN TO UP</button>
            </div>
            <div>
              <button onClick={filterCardsAbovePrice}>
                SORT PRICE UP TO 100K
              </button>
            </div>
            <div>
              <button onClick={filterCardsDownPrice}>
                SORT PRICE DOWN TO 100K
              </button>
            </div>
          </div>
        </Main>
      </div>
    </>
  );
}

export default Mercedes;
