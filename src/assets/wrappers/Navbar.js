import styled from "styled-components";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  .navbar-container {
    display: flex;
    justify-content: space-between;
    padding: 2px;
    background-color: #0d1936;
  }
  .navbar-header {
    color: white;
    display: flex;
    align-items: center;
    font-weight: bold;
    padding-left: 1.5 rem;
  }
  .toggle-button {
    color: white;
    cursor: pointer;
  }
  .icons {
    display: flex;
  }
  .icon {
    color: white;
  }
`;

export default Wrapper;
