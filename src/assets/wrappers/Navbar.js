import styled from "styled-components";

const Wrapper = styled.div`
  .navbar-container {
    display: flex;
    justify-content: space-between;
    padding: 2px;
    background-color: #0d1936;
  }
  .navbar-header{
    color:white;
    display:flex;
    align-items:center;
    font-weight:bold;
    padding-left:1.5 rem;
  }
  .toggle-button{
    color:white;
    cursor:pointer;
  }
  .search-box {
    display: flex;
    background-color: whitesmoke;
    border-radius: 3px;
  }
  .search-input {
    margin-left: 2px;
    flex: 1;
    font-weight: bold;
    color:black;
  }
  .search-button {
    padding: 1px;
    color:black;
  }
  .icons {
    display: flex;
  }
  .icon {
    color: white;
  }
`;

export default Wrapper;
