import styled from "styled-components";

export const Main = styled.div`
  text-align: center;
  margin-top: 22px;
  .add-car {
    width: 55%;
    height: 55px;
    margin-top: 11px;
    border-radius: 15px;
    border: 0;
    outline: 0;
    backdrop-filter: blur(7px);
    border: 1.1px solid magenta;
    background-color: inherit;
    padding: 0 25px;
    color: greenyellow;
    font-weight: 700;
    font-size: 20px;
    &::placeholder {
      color: yellowgreen;
    }
  }

  .add-car-info {
    width: 55%;
    max-width: 55%;
    min-width: 55%;
    height: 222px;
    max-height: 222px;
    min-height: 222px;
    margin-top: 11px;
    border-radius: 15px;
    border: 0;
    outline: 0;
    backdrop-filter: blur(7px);
    border: 1.1px solid magenta;
    background-color: inherit;
    padding: 10px 25px;
    color: greenyellow;
    font-weight: 700;
    font-size: 20px;
    &::placeholder {
      color: yellowgreen;
    }
  }

  .add-car-class {
    width: 55%;
    height: 55px;
    margin-top: 11px;
    border-radius: 15px;
    border: 0;
    outline: 0;
    backdrop-filter: blur(7px);
    border: 1.1px solid magenta;
    background-color: inherit;
    padding: 0 25px;
    color: greenyellow;
    font-weight: 700;
    font-size: 20px;
    option {
      color: yellowgreen;
      background-color: black;
      border-radius: 15px;
    }
  }
  .add-car-button {
    width: 55%;
    height: 55px;
    margin-top: 11px;
    border-radius: 15px;
    border: 0;
    outline: 0;
    backdrop-filter: blur(7px);
    border: 1.1px solid magenta;
    background-color: inherit;
    padding: 0 25px;
    color: greenyellow;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
  }
`;
