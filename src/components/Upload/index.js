import React, { Component } from 'react';
import PropTypes from 'prop-types';
import upload from '../../../lib/Upload';

import Icon from '../icons/components/Icon';

export default class Upload extends Component {
  static defaultProps = {
    link: null,
  }

  static propTypes = {
    link: PropTypes.string,
  }

  uploadIcon = (e) => {
    const link = e.target;
    const elem = '.upload-element';
    upload(link, elem);
  };

  render() {
    return (
      <div className="upload-block">
        <a className="title-category active">
          <img className="icon-category" src={this.props.link} alt="" />
          <span className="label">Upload</span>
        </a>
        <div className="upload-element">
          <div className="icon-upload">
            <Icon link="" id="icon-upload" />
          </div>
          <p>Use your own graphics</p>
          <form className="uploader" encType="multipart/form-data">
            <input type="file" onChange={this.uploadIcon} className="btn-upload" />
          </form>
        </div>
      </div>
    );
  }
}
