import styled from "styled-components";

const Wrapper = styled.div`
  .form-container {
    margin: 20px;
    height: 100%;
  }
  .form {
    border: 2px solid #0d1936;
  }
  .form-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 80%;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  input[type="text"],
  input[type="file"],
  input[type="date"],
  input[type="number"] {
    all:unset;
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-weight: bold;
  }

  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
  }

  .btn {
    display: flex;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
    padding: 10px 20px;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    color: #fff;
  }

  .btn-primary {
    background-color: #0d1936;
  }

  .btn-primary:hover {
    background-color: #0056b3;
  }
`;

export default Wrapper;
