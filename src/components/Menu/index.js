import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { StyledMenu } from "./Menu.styled";

const Menu = ({itensMenu = []}) => (
  <StyledMenu>
    <ul>
      {itensMenu.map((item, index) => (
        <li key={index}>
          <Link to={item.path}><FormattedMessage id={item.id} /></Link>
        </li>
      ))}
    </ul>
  </StyledMenu>
);

Menu.propTypes = {
  itensMenu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
      id: PropTypes.string      
    })
  ).isRequired
};

export { Menu };
