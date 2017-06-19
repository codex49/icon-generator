import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import openMenu from '../../../lib/open-menu';

export default class TitleCategorie extends Component {
    constructor() {
        super();
        this.showMenu = this.showMenu.bind(this);
    }

    showMenu (event) {
        const elem = $(ReactDOM.findDOMNode(this));
        openMenu(elem, event);
    }

    render () {
        return (
            <a className="title-catagorie" onClick={this.showMenu} href="">
                <img className="icon-categorie" src={this.props.link} alt=""/>
                <span className="label">{this.props.children}</span>
            </a>
        );
    }
}