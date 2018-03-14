import React from "react";
import { StyledInput } from "./Input.styled";

const Input = ({ ...rest }) => (
  <StyledInput
    className="input"
    {...rest}
  />
)

export { Input }