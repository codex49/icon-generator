import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';

import { changeBackgroundBoard } from '../../../../redux/actions';
import upload from '../../../../../lib/upload';

class BackgroundUpload extends Component {
  static defaultProps = {
    changeBackgroundBoard: () => undefined,
    link: null,
  }

  static propTypes = {
    changeBackgroundBoard: PropTypes.func,
    link: PropTypes.string,
  }

  handleUploadBackground = (e) => {
    const link = e.target;
    const elem = '.upload-bg';
    upload(link, elem);
  };

  handleChangeBackground = () => {
    const bgImg = $(this.node).find('.up-bg').attr('src');
    this.props.changeBackgroundBoard(bgImg, 'image');
  };

  render() {
    return (
      <div className="upload-block">
        <a className="title-category active">
          <img
            className="icon-category"
            src={this.props.link}
            alt=""
          />
          <span className="label">Upload</span>
        </a>
        <div className="upload-element">
          <div
            className="icon-upload upload-bg"
            onClick={this.handleChangeBackground}
            ref={node => this.node = node}
          >
            <img className="up-bg background" src="" />
          </div>
          <p>Use your own background</p>
          <form className="uploader" encType="multipart/form-data">
            <input
              type="file"
              onChange={this.handleUploadBackground}
              className="btn-upload"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeBackgroundBoard: bindActionCreators(changeBackgroundBoard, dispatch),
});

export default connect(null, mapDispatchToProps)(BackgroundUpload);
