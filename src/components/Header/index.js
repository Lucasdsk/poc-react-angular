import React from "react";
import PropTypes from "prop-types";
import { StyledHeader } from "./Header.styled";
import { ContentContainer } from "./../ContentContainer";
import { LanguageSelector } from "./../LanguageSelector"
import { Menu } from "./../Menu";
import logo from "./../../images/logo.svg";

const Header = ({ itensMenu = [] }) => (
  <StyledHeader>
    <ContentContainer>
      <LanguageSelector />
      <img src={logo} className="App-logo" alt="logo" />
      {!!itensMenu.length && <Menu itensMenu={itensMenu} />}
    </ContentContainer>
  </StyledHeader>
);

Header.propTypes = {
  itensMenu: PropTypes.array
};

export { Header };
