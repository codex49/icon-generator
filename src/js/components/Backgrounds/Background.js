import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppActions from '../../actions/AppActions';

var Background = React.createClass({
    change: function(){
        var bgImg = $(ReactDOM.findDOMNode(this)).find('img').attr('src');
        //AppActions.changeBackground(bgImg);
        $('.board-resultat').css('background-color', 'transparent');
        $('.board-resultat').css({'background': 'url('+bgImg+') center center','background-size': 'cover'});
    },
    render: function(){
        return (
            <li className="item" onClick={this.change}>
                <img className="background" src={this.props.link} alt=""/>
            </li>
        );
    }
});

module.exports = Background;