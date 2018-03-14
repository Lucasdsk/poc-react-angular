import styled from "styled-components"

const StyledModal = styled.div`
  .modal {
    &-title,
    &-content,
    &-footer {
      display: flex;
      padding: 10px;
    }

    &-title {
      font-size: 1.5em;
      padding-bottom: 15px;
      border-bottom: 1px solid #cecece;
    }

    &-content {
      padding-bottom: 15px;
    }

    &-footer {
      display: flex;
      justify-content: flex-end;

      .btn {
        &-save,
        &-cancel {
          padding: 10px 15px;
          margin-left: 5px;
          border: 0;
          color: #fff;
          cursor: pointer;
          outline: 0;
        }

        &-save {
          background-color: #62ade0;
        }

        &-cancel {
          background-color: #cecece;
        }
      }
    }
  }
`
export { StyledModal }
