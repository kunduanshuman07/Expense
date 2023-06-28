import styled from "styled-components";

const Wrapper = styled.div`
  .link {
    all: unset;
    text-decoration: none;
    color: inherit;
  }
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    text-align: center;
    padding: 40px;
    background: #0d1936;
  }

  .container-header {
    background-color: #f3f3f3;
    padding: 20px;
    border-radius: 8px;
  }

  .get-started-button,
  .learn-more-button,
  .contact-button {
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 4px;
    background-color: #0d1936;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 10px;
  }

  .get-started-button:hover,
  .learn-more-button:hover,
  .contact-button:hover {
    background-color: #0056b3;
  }

  .button-container {
    margin-top: 20px;
  }
  .info {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .features-section,
  .benefits-section {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 50px;
    border: 3px solid white;
    border-radius: 5px;
    color: white;
    space-in-between: 10px;
    padding: 10px;
  }

  h2 {
    margin-bottom: 20px;
    background-color: white;
    color: #0d1936;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    padding: 0;
    text-align: center;
    margin-bottom: 20px;
  }

  .container-footer {
    background-color: #f3f3f3;
    padding: 10px;
    margin-top: auto;
  }
`;

export default Wrapper;
