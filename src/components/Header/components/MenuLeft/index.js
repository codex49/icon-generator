import React from 'react';
import PropTypes from 'prop-types';

const getMenu = item =>
  (<li className="link" key={item.url}>
    <a href={item.url}>
      {item.item}
    </a>
  </li>);

const MenuLeft = props =>
  (<ul className="useful-links">
    {props.menu.map(getMenu)}
  </ul>);

MenuLeft.defaultProps = {
  menu: null,
};

MenuLeft.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

export default MenuLeft;
