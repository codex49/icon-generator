import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import downloadIcon from '../../../lib/canvas-to-image';
import SocialMedia from './components/SocialMedia';
import FooterPopUp from './components/FooterPopUp';
import { showPopupDownload } from '../../../src/redux/actions';

import androidIcon from '../../public/assets/img/icons/android.png';
import iosIcon from '../../public/assets/img/icons/ios.png';

class Download extends Component {
  constructor() {
    super();

    this.state = {
      size: 1024,
      showButtonSendIcon: true,
      showInputSendIcon: false,
    };
  }

  handleDownloadIcon = event => {
    event.preventDefault();
    const canvas = this.props.canvas;
    const size = this.state.size;
    downloadIcon(canvas, size);
  };

  handleSendIcon = event => {
    event.preventDefault();
    this.setState({
      showButtonSendIcon: false,
      showInputSendIcon: true,
    });
  };

  handleChooseSize = size => {
    this.setState({ size });
  };

  renderSocialsMedia = social =>
    <SocialMedia key={social.url} link={social.url}>
      {social.children}
    </SocialMedia>;

  renderSocialMedia = () => {
    if (!this.props.socialsMedia) return null;

    return (
      <ul className="slink">
        {this.props.socialsMedia.map(this.renderSocialsMedia)}
      </ul>
    );
  };

  renderMobileIcon = () => {
    return (
      <ul className="download-mobile">
        <li className="android">
          <a href="">
            <img src={androidIcon} />
          </a>
        </li>
        <li className="ios">
          <a href="">
            <img src={iosIcon} />
          </a>
        </li>
      </ul>
    );
  };

  renderButtonsSize = () => {
    const sizeBig = classNames({ 'btn-size': this.state.size === 1024 });
    const sizeSmall = classNames({ 'btn-size': this.state.size === 512 });

    return (
      <div className="btns-size">
        <button className={sizeBig} onClick={() => this.handleChooseSize(1024)}>
          1024px
        </button>
        <button
          className={sizeSmall}
          onClick={() => this.handleChooseSize(512)}
        >
          512px
        </button>
      </div>
    );
  };

  renderButtonSendIcon = () => {
    if (!this.state.showButtonSendIcon) return null;

    return (
      <a href="" className="btn-download-mobile" onClick={this.handleSendIcon}>
        For iOS & Android
        <em>All the necessary sizes</em>
      </a>
    );
  };

  renderInputSendIcon = () => {
    if (!this.state.showInputSendIcon) return null;

    return (
      <div className="send-icon">
        <form>
          <input
            type="text"
            className="text"
            rel="email"
            placeholder="Write your email to receive the icons"
          />
          <input type="submit" className="btn-green" value="Send" />
        </form>
      </div>
    );
  };

  render() {
    if (!this.props.showPopup) return null;

    return (
      <div className="popup">
        <div
          className="popupClose"
          onClick={() => this.props.showPopupDownload(false)}
        />
        <div className="block-download">
          <h1 className="title-popup">Thank you!</h1>
          <p className="description">
            Now it's time to brag about your new icon
          </p>
          {this.renderSocialMedia()}
          <div className="icon" id="icon-result">
            <img src="" />
          </div>
          {this.renderButtonsSize()}
          <a
            onClick={this.handleDownloadIcon}
            className="btn-download btn-green"
          >
            Download icon
            <em>
              {this.state.size} x {this.state.size} px
            </em>
          </a>
          <hr className="ligne" />
          <p className="description">
            Download the necessary sizes for Android and iOS
          </p>
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

const mapStateToProps = state => ({
  showPopup: state.board.showPopup,
});

const mapDispatchToProps = dispatch => ({
  showPopupDownload: bindActionCreators(showPopupDownload, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Download);
