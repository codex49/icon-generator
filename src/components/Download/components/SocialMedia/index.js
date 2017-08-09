import React from 'react';
import PropTypes from 'prop-types';

const SocialMedia = props => (
  <li className="social-media">
    <a href="">
      <img src={props.link} alt={props.children} />
    </a>
  </li>
);

SocialMedia.defaultProps = {
  link: null,
  children: null,
};

SocialMedia.propTypes = {
  link: PropTypes.string,
  children: PropTypes.string,
};

export default SocialMedia;
