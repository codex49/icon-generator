import React, { Component } from 'react';
import downloadIcon from '../../../lib/canvas-to-image';
import SocialMedia from './components/SocialMedia';
import DownloadMobile from './components/DownloadMobile';
import FooterPopUp from './components/FooterPopUp';

export default class Download extends Component {
    constructor() {
        super();

        this.state = {
            size     : 1024,
            stl_1024 : true,
            stl_512  : false,
        };

        this.fc_1024 = this.fc_1024.bind(this);
        this.fc_512 = this.fc_512.bind(this);
        this.handleDownloadIcon = this.handleDownloadIcon.bind(this);
    }

    socialMedia (social, i) {
        return (
			<SocialMedia
				key={i}
				link={social.url}>
                {social.children}
			</SocialMedia>
        );
    }

    fc_1024 () {
        this.setState({
            size: 1024,
            stl_1024: true,
            stl_512: false
        });
    }

    fc_512 () {
        this.setState({
            size: 512,
            stl_1024: false,
            stl_512: true
        });
    }

    handleDownloadIcon (e) {
        e.preventDefault();

        const canvas = this.props.canvas;
        const size = this.state.size;

        downloadIcon(canvas, size);
    }

    renderSendIcon () {
        return (
			<div className="send-icon">
				<form>
					<input type="text" className="text" rel="email" placeholder="Write your email to recive the icons"/>
					<input type="submit" className="btn-green" value="Send"/>
				</form>
			</div>
        );
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
        const sizeBig = this.state.stl_1024 && 'btn-size';
        const sizeSmall = this.state.stl_512 && 'btn-size';

        return (
            <div className="btns-size">
                <button
                    className={sizeBig}
                    onClick={this.fc_1024}>
                    1024px
                </button>
                <button
                    className={sizeSmall}
                    onClick={this.fc_512}>
                    512px
                </button>
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
                        { this.props.socialsMedia.map(this.socialMedia) }
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
						<DownloadMobile />
                        {this.renderSendIcon()}
					</div>
					<FooterPopUp />
				</div>
			</div>
        );
    }
}