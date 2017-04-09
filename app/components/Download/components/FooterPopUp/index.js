import React, { Component } from 'react';
// import $ from 'jquery';

export default class FooterPopUp extends Component {
    handleClosePopUp (e) {
        const popUp = $('.popup');
        e.preventDefault();
        popUp.fadeOut(500);
    }

    render () {
        return (
            <div className="footer">
                <a href="" className="like-fb">
                    <img className="btn-like" src="img/icons/fb-like.png"/>
                    54,222 people like this. Be the first of your friends.
                </a>
                <a href="" className="close" onClick={this.handleClosePopUp}>Build another? Click here</a>
            </div>
        );
    }
}