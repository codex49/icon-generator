import React, { Component } from 'react';
import $ from 'jquery';

export default class Background extends Component {
    constructor() {
        super();

        this.handleChangeBackground = this.handleChangeBackground.bind(this);
    }

    handleChangeBackground (event){
        const bgImg = $(event.target).attr('src');

        $('.board-resultat').css({
            'background-color': 'transparent',
            'background-image': 'url('+bgImg+')',
            'background-size': 'cover'
        });
    }

    render (){
        return (
            <li className="item" onClick={this.handleChangeBackground}>
                <img className="background" src={this.props.link} alt=""/>
            </li>
        );
    }
}