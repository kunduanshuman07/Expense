import styled from 'styled-components'

const Wrapper = styled.article`
  padding: 2rem;
  background: #a5b6c2;
  border-radius: 5px;
  border-bottom: 5px solid #0d1936;
  margin:10px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: black;
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: 2px;
    text-align: left;
    margin-top: 0.5rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    background: #0d1936;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: white;
    }
  }
`

export default Wrapper