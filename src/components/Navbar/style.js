import styled from "styled-components";

export const Header = styled.header`
  .navbar {
    width: 100%;
    height: 70px;
    box-shadow: 0 0 5px steelblue;
    backdrop-filter: blur(3px);
  }

  .navbar-logo {
    width: 70px;
    height: 70px;
    animation-name: logo;
    animation-duration: 7s;
    animation-iteration-count: infinite;
    @keyframes logo {
      from {
        transform: rotate(360deg);
        transition: all 0.5s ease-out;
      }
      to {
        transform: rotate(-360deg);
        transition: all 0.5s ease-out;
      }
    }
  }

  .navbar-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-menu {
    display: flex;
    align-items: center;
    gap: 77px;
    li {
      letter-spacing: 1px;
      font-weight: 600;
      color: magenta;
    }
  }
`;
