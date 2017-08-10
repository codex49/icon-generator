import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

export default class Icon extends Component {
  static defaultProps = {
    id: null,
    link: null,
  }

  static propTypes = {
    id: PropTypes.string,
    link: PropTypes.string,
  }

  componentDidMount() {
    const $this = $(this.node);

    $this.draggable({
      helper: 'clone',
      appendTo: '.board-resultat',
    });
  }

  render() {
    return (
      <li className="item" ref={node => this.node = node}>
        <img id={this.props.id} className="icon-svg" src={this.props.link} />
      </li>
    );
  }
}
