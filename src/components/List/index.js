import React from "react";
import PropTypes from "prop-types";
import { StyledList } from "./List.styled";

const List = ({ items = [], onRemoveItem }) => (
  <StyledList>
    {!!items.length ? (
      <ul className="list">
        {items.map((item, index) => (
          <li key={item.id} className="list__item">
            <div className="list__item__data">
              <div>{item.name}</div>
              <div>{item.age}</div>
              <div>{item.email}</div>
            </div>
            <span
              onClick={() => onRemoveItem(index)}
              className="list__item__remove-item"
            >
              x
            </span>
          </li>
        ))}
      </ul>
    ) : (
      <h3>Nenhum item cadastrado...</h3>
    )}
  </StyledList>
);

List.propTypes = {
  items: PropTypes.array.isRequired,
  onRemoveItem: PropTypes.func
};

export { List };
