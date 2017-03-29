import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Background extends Component {
    constructor() {
        super();

        this.handleChangeBackground = this.handleChangeBackground.bind(this);
    }

    handleChangeBackground (){
        var bgImg = $(ReactDOM.findDOMNode(this)).find('img').attr('src');
        $('.board-resultat').css('background-color', 'transparent');
        $('.board-resultat').css({'background': 'url('+bgImg+') center center','background-size': 'cover'});
    }

    render (){
        return (
            <li className="item" onClick={this.handleChangeBackground}>
                <img className="background" src={this.props.link} alt=""/>
            </li>
        );
    }
}