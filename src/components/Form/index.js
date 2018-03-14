import React from "react";
import { StyledForm } from "./Form.styled"

const Form = ({ children, onSubmit }) => (
  <StyledForm onSubmit={onSubmit}>
    {children}
  </StyledForm>
)

export { Form }
