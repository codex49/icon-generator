import React, { Component } from 'react';
import $ from 'jquery';

export default class TitleCategorie extends Component {
    constructor() {
        super();

        this.state = {
            isOpenMenu: -1,
        };

        this.showMenu = this.showMenu.bind(this);
    }

    showMenu (event) {
        event.preventDefault();

        const that = $(event.target);
        const isOpenMenu = this.state.isOpenMenu;

        if(isOpenMenu != -1 && !that.is(isOpenMenu)){
            isOpenMenu.next().slideUp(500);
        }

        that.next().slideToggle(500);
        this.setState({isOpenMenu : that});

        that.delay(150).queue(function(){
            $(this).toggleClass('active').clearQueue();
        });
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