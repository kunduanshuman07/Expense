import styled from "styled-components";
const Wrapper = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .show-sidebar {
      background: #0d1936;
      color: white;
      min-height: 100vh;
      height: 100%;
      width: 200px;
      margin-left: 0px;
      transition: 0.2s ease-in-out all;
    }
    .toggle-button {
      display: flex;
      align-items: center;
      color: white;
      margin: auto;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .sidebar-links {
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      cursor: pointer;
    }
    .sidebar-link {
      display: flex;
      align-items: center;
      color: var(--grey-500);
      padding: 1rem 0;
      // padding-left: 2.5rem;
      text-transform: capitalize;
      transition: 0.3s ease-in-out all;
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: 0.3s ease-in-out all;
      color: white;
    }
    .sidebar-container {
      background: #0d1936;
      color: white;
      min-height: 100vh;
      height: 100%;
      width: 70px;
      transition: 0.2s ease-in-out all;
      .icon {
        margin: auto;
      }
      .sidebar-link-title {
        display: none;
      }
    }
  }
`;

export default Wrapper;
