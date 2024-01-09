import styled from "styled-components";

export const Main = styled.div`
  margin-top: 33px;
  height: calc(100vh - 110px);
  overflow: auto;
  .items {
    display: flex;
    gap: 30px;
    justify-content: space-between;
    border: 1px solid yellow;
    margin-top: 11px;
    backdrop-filter: blur(7px);
    border-radius: 15px;
    p {
      font-size: large;
      letter-spacing: 1px;
      font-weight: 700;
      padding: 5px 5px;
    }
  }
  .item {
    display: flex;
    gap: 30px;
  }
  .item-button {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-right: 10px;
    button {
      width: 99px;
      height: 22px;
      cursor: pointer;
      border-radius: 15px;
      border: 0;
      font-weight: 700;
      background-color: magenta;
      color: yellow;
    }
  }
  .none {
    display: none;
  }
  .modal {
    width: 70%;
    text-align: center;
    position: fixed;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    backdrop-filter: blur(5px);
    border: 7px solid yellow;
    border-radius: 15px;
    height: 77vh;
    input {
      width: 55%;
      height: 55px;
      margin-top: 11px;
      border-radius: 15px;
      border: 0;
      outline: 0;
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
    textarea {
      width: 55%;
      max-width: 55%;
      min-width: 55%;
      height: 200px;
      max-height: 200px;
      min-height: 200px;
      margin-top: 11px;
      border-radius: 15px;
      border: 0;
      outline: 0;
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
    select {
      width: 55%;
      height: 55px;
      margin-top: 11px;
      border-radius: 15px;
      border: 0;
      outline: 0;
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
    button {
      width: 55%;
      height: 55px;
      margin-top: 11px;
      border-radius: 15px;
      border: 0;
      outline: 0;
      border: 1.1px solid magenta;
      background-color: inherit;
      padding: 0 25px;
      color: greenyellow;
      font-weight: 700;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .remove {
    position: absolute;
    top: -20px;
    right: -20px;
    color: yellow;
    background-color: magenta;
    width: 33px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
  }
`;
