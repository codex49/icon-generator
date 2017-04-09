import React, { Component } from 'react';
import upload from '../../../lib/Upload';

import Icon from '../icons/components/Icon';

export default class Upload extends Component {
    uploadIcon (e) {
        const link = e.target;
        const elem = '.upload-elment';
        upload(link, elem);
    }

    render (){
        return (
            <div className="upload-block">
                <a className={"title-catagorie " + this.props.active}>
                    <img className="icon-categorie" src={this.props.link} alt=""/>
                    <span className="label">Upload</span>
                </a>
                <div className="upload-elment">
                    <div className="icon-upload">
                        <Icon link="" id="icon-upload"/>
                    </div>
                    <p>Use your own graphics</p>
                    <form ref="uploadForm" className="uploader" encType="multipart/form-data">
                        <input ref="file" type="file" onChange={this.uploadIcon} className="btn-upload" />
                    </form>
                </div>
            </div>
        );
    }
}