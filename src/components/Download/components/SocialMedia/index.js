import React, { Component } from 'react';

export default class SocialMedia extends Component {
  render() {
    return (
      <li className="social-media">
        <a href="">
          <img src={this.props.link} alt={this.props.children} />
        </a>
      </li>
    );
  }
}
