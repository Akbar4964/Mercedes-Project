import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  /* justify-content: space-between; */
  .card-row {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 55px;
    gap: 50px;
    margin-top: 33px;
    height: calc(100vh - 103px);
    overflow: auto;
    mask-image: linear-gradient(to top, transparent, black),
      linear-gradient(to left, transparent 17px, black 17px);
    mask-size: 100% 20000px;
    mask-position: left bottom;
    -webkit-mask-image: linear-gradient(to top, transparent, black),
      linear-gradient(to left, transparent 17px, black 17px);
    -webkit-mask-size: 100% 20000px;
    -webkit-mask-position: left bottom;
    transition: mask-position 0.3s, -webkit-mask-position 0.3s;
  }
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #fff;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: black;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  .filter {
    min-width: 252px;
    height: calc(100vh - 103px);
    margin-top: 33px;
    backdrop-filter: blur(5px);
    box-shadow: -3px 3px 10px slateblue;
    border-radius: 15px;
    padding: 15px;
    .sort > button {
      width: 100%;
      height: 33px;
      border: 0;
      border-radius: 15px;
      color: aquamarine;
      font-weight: 700;
      box-shadow: inset 0 0 5px magenta;
      background-color: inherit;
      cursor: pointer;
    }
  }
`;

export const Filter = styled.div`
  position: relative;
  .filter-cards {
    position: absolute;
    width: 255px;
    height: 33px;
    top: -50px;
    border-radius: 15px;
    left: 200px;
    border: 3px solid aquamarine;
    outline: 0;
    padding: 0 15px;
    font-weight: 700;
    background-color: inherit;
    animation-name: filt;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    &::placeholder {
      color: aquamarine;
    }
    @keyframes filt {
      0% {
        color: yellow;
      }
      25% {
        color: green;
      }
      50% {
        color: blueviolet;
      }
      75% {
        color: magenta;
      }
      100% {
        color: yellow;
      }
    }
  }
`;
export const d = styled.div`
  display: flex;
`;
