import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import openMenu from '../../../lib/open-menu';

export default class TitleCategorie extends Component {
    showMenu = event => {
        const elem = $(ReactDOM.findDOMNode(this));
        openMenu(elem, event);
    }

    render () {
        return (
            <a className="title-category" onClick={this.showMenu} href="">
                <img className="icon-category" src={this.props.link} alt=""/>
                <span className="label">{this.props.children}</span>
            </a>
        );
    }
}