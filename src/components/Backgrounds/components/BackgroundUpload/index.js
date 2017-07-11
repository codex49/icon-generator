import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import upload from '../../../../../lib/Upload';

export default class BackgroundUpload extends Component {
    handleUploadBackground = e => {
        const link = e.target;
        const elem = '.upload-bg';
        upload(link, elem);
    }

    handleChangeBackground = () => {
        const bgImg = $(ReactDOM.findDOMNode(this)).find('.up-bg').attr('src');
        this.props.handleChangeBackground(bgImg);
    }

    render () {
        return (
            <div className="upload-block">
                <a className="title-catagorie">
                    <img className="icon-categorie" src={this.props.link} alt=""/>
                    <span className="label">Upload</span>
                </a>
                <div className="upload-elment">
                    <div className="icon-upload upload-bg" onClick={this.handleChangeBackground}>
                        <img className="up-bg background" src=""/>
                    </div>
                    <p>Use your own background</p>
                    <form ref="uploadForm" className="uploader" encType="multipart/form-data">
                        <input ref="file" type="file" onChange={this.handleUploadBackground} className="btn-upload" />
                    </form>
                </div>
            </div>
        );
    }
}