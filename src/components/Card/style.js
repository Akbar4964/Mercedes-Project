import styled from "styled-components";

export const Cards = styled.div`
  .card {
    width: 277px;
    height: 377px;
    border-radius: 15px;
    padding: 15px;
    background-color: aliceblue;
    position: relative;
  }
  .card-image {
    width: 100%;
    height: 177px;
    border-radius: 15px;
    cursor: pointer;
    &:hover {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 1s ease-out;
    }
  }

  .card-image:hover ~ .block {
    display: none;
  }

  .card-name {
    color: slateblue;
    margin-top: 11px;
  }
  .card-type {
    color: blueviolet;
    position: absolute;
    top: 17px;
    right: 17px;
    font-weight: 700;
    font-size: 25px;
  }
  .card-price {
    color: purple;
    font-size: 20px;
    font-weight: 700;
    margin-top: 7px;
  }
  .card-info {
    color: indigo;
    font-size: 17px;
    margin-top: 7px;
    font-weight: 700;
  }
`;
