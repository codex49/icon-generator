import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import downloadIcon from '../../../lib/canvas-to-image';
import SocialMedia from './components/SocialMedia';
import FooterPopUp from './components/FooterPopUp';

export default class Download extends Component {
    constructor() {
        super();

        this.state = {
            size: 1024,
            showButtonSendIcon: true,
            showInputSendIcon: false,
        };

        this.handleChooseSize = this.handleChooseSize.bind(this);
        this.handleDownloadIcon = this.handleDownloadIcon.bind(this);
        this.handleSendIcon = this.handleSendIcon.bind(this);
    }

    handleDownloadIcon (e) {
        e.preventDefault();
        const canvas = this.props.canvas;
        const size = this.state.size;
        downloadIcon(canvas, size);
    }

    handleSendIcon (event) {
        event.preventDefault();
        /* $('.btn-download-mobile').fadeOut(60);
        const sendIcons = $('.send-icon');
        sendIcons.fadeIn(300); */
        this.setState({
            showButtonSendIcon: false,
            showInputSendIcon: true,
        });
        console.log('this.state.showInputSendIcon', this.state.showInputSendIcon);
    }

    handleChooseSize (size) {
        this.setState({
            size: size,
        });
    }

    renderSocialMedia () {
        if (!this.props.socialsMedia) return null;

        return this.props.socialsMedia.map((social) =>
            <SocialMedia
                key={social.url}
                link={social.url}>
                {social.children}
            </SocialMedia>
        )
    }

    renderMobileIcon () {
        return (
			<ul className="download-mobile">
				<li className="android"><a href=""><img src="img/icons/android.png"/></a></li>
				<li className="ios"><a href=""><img src="img/icons/ios.png"/></a></li>
			</ul>
        );
    }

    renderButtonsSize () {
        const sizeBig = this.state.size === 1024 && 'btn-size';
        const sizeSmall = this.state.size  === 512  && 'btn-size';

        return (
            <div className="btns-size">
                <button
                    className={sizeBig}
                    onClick={() => this.handleChooseSize(1024)}>
                    1024px
                </button>
                <button
                    className={sizeSmall}
                    onClick={() => this.handleChooseSize(512)}>
                    512px
                </button>
            </div>
        );
    }

    renderButtonSendIcon () {
        if (!this.state.showButtonSendIcon) return null;

        return (
            <a href="" className="btn-download-mobile" onClick={this.handleSendIcon}>
                For iOS & Android
                <em>All the necessary sizes</em>
            </a>
        )
    }

    renderInputSendIcon () {
        if (!this.state.showInputSendIcon) return null;

        return (
            <div className="send-icon">
                <form>
                    <input type="text" className="text" rel="email" placeholder="Write your email to receive the icons"/>
                    <input type="submit" className="btn-green" value="Send"/>
                </form>
            </div>
        );
    }

    render () {
        return (
			<div className="popup">
				<div className="block-download">
					<h1 className="title-popup">Thank you!</h1>
					<p className="description">Now it's time to brag about your new icon</p>
					<ul className="slink">
                        { this.renderSocialMedia() }
					</ul>
					<div className="icon" id="icon-result">
						<img src="img/icons/pdf.png"/>
					</div>
                    {this.renderButtonsSize()}
					<a onClick={this.handleDownloadIcon}
                       className="btn-download btn-green">
                        Download icon
						<em>{this.state.size} x {this.state.size} px</em>
					</a>
					<hr className="ligne"/>
					<p className="description">Download the necessary sizes for Android and iOS</p>
                    {this.renderMobileIcon()}
					<div className="block-mobile">
                        {this.renderButtonSendIcon()}
                        {this.renderInputSendIcon()}
					</div>
					<FooterPopUp />
				</div>
			</div>
        );
    }
}