import styled from "styled-components";

const StyledHome = styled.div`
  .home-content {
    display: flex;
    flex-direction: column;

    .lang-text {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .btn-add-item {
      align-self: flex-end;
      padding: 10px 15px;
      margin-left: 5px;
      border: 0;
      color: #fff;
      cursor: pointer;
      outline: 0;
      background-color: #62ade0;
    }
  }
`;

export { StyledHome };
