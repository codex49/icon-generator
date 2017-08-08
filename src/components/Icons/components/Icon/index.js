import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Icon extends Component {
  componentDidMount() {
    const $this = $(ReactDOM.findDOMNode(this));

    $this.draggable({
      helper: 'clone',
      appendTo: '.board-resultat',
    });
  }

  render() {
    return (
      <li className="item">
        <img id={this.props.id} className="icon-svg" src={this.props.link} />
      </li>
    );
  }
}
