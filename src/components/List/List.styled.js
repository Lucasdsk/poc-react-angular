import styled from "styled-components";

const StyledList = styled.div`
  margin: 15px 0;
  padding: 5px 10px;
  border: 1px solid #cecece;
  max-height: 300px;
  overflow-y: auto;

  .list {
    display: flex;
    flex-direction: column;

    &__item {
      display: flex;
      padding: 8px 0;

      &:not(:last-child) {
        border-bottom: 1px solid #cecece;
      }

      &__data,
      &__remove-item {
        flex: 1;
      }

      &__data {
        display: flex;

        div {
          flex: 1;
          text-align: left;
          padding-left: 5px;
        }
      }

      &__remove-item {
        max-width: 20px;
        cursor: pointer;
        color: #fff;
        background-color: #cecece;
      }
    }
  }
`;

export { StyledList };
