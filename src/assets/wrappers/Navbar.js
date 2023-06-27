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
    // margin-left:auto;
  }
  .search-input {
    margin-left: 10px;
    flex: 1;
    font-weight: bold;
    color:black;
  }
  .search-button {
    padding: 5px;
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
