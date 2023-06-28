import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 100px;
  .registration-page {
    background-color: #0d1936;
    color: #fff;
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 5px #0d1936;
  }

  h2 {
    text-align: center;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    margin: 20px;
    padding: 10px;
    font-weight: bold;
    border: white;
    border-radius: 10px;
    cursor:pointer;
  }
  button {
    width: 20%;
    background-color: #fff;
    color: #0d1936;
    padding: 10px;
    border: none;
    cursor: pointer;
    margin: auto;
    margin-bottom: 10px;
    font-weight: bold;
    border-radius: 10px;
  }
  button:hover {
    background-color: grey;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  p {
    display: flex;
    flex-direction: row;
    margin: auto;
  }
  .link {
    all: unset;
    color: inherit;
    cursor: pointer;
    margin-left: 10px;
    font-weight: bold;
  }
  .link:hover {
    text-decoration: underline;
  }
`;

export default Wrapper;
