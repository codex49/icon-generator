import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import openMenu from '../../../lib/open-menu';

export default class TitleCategory extends Component {
  static defaultProps = {
    children: null,
    link: null,
  }

  static propTypes = {
    children: PropTypes.string,
    link: PropTypes.string,
  }

  showMenu = (event) => {
    const elem = $(ReactDOM.findDOMNode(this));
    openMenu(elem, event);
  };

  render() {
    return (
      <a className="title-category" onClick={this.showMenu} href="">
        <img className="icon-category" src={this.props.link} alt="" />
        <span className="label">
          {this.props.children}
        </span>
      </a>
    );
  }
}
