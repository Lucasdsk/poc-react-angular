import React from "react";
import PropTypes from "prop-types";
import { StyledContentContainer } from "./ContentContainer.styled";

const ContentContainer = ({ children, className }) => (
  <StyledContentContainer className={className}>
    {children}
  </StyledContentContainer> 
)

ContentContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export { ContentContainer }