import React, { Component } from 'react';
import $ from 'jquery';

export default class Icon extends Component {
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
