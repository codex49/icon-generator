import React, { Component } from 'react';

export default class DownloadMobile extends Component {
    send (event) {
        event.preventDefault();
        const that = $(ReactDOM.findDOMNode(this));
        that.fadeOut(60);
        const sendIcons = $('.send-icon');
        sendIcons.fadeIn(300);
    }

    render () {
        return (
            <a href="" className="btn-download-mobile" onClick={this.send}>
                For iOS & Android
                <em>All the necessary sizes</em>
            </a>
        );
    }
}