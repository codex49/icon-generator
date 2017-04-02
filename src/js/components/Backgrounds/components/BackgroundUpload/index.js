import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppActions from '../../../../actions/AppActions';

export default class BackgroundUpload extends Component {
    constructor() {
        super();

        this.uploadBackground = this.uploadBackground.bind(this);
        this.handleChangeBackgournd = this.handleChangeBackgournd.bind(this);
    }

    uploadBackground (e){
        const link = e.target;
        AppActions.uploadBackground(link);
    }

    handleChangeBackgournd (){
        const bgImg = $(ReactDOM.findDOMNode(this)).find('.up-bg').attr('src');
        AppActions.changeBackground(bgImg);

        this.props.handleChangeBackgournd(bgImg);

        console.log('bgImg', bgImg);
    }

    render (){
        return (
            <div className="upload-block">
                <a className={"title-catagorie " + this.props.active}>
                    <img className="icon-categorie" src={this.props.link} alt=""/>
                    <span className="label">{this.props.children}</span>
                </a>
                <div className="upload-elment">
                    <div className="icon-upload upload-bg" onClick={this.handleChangeBackgournd}>
                        <img className="up-bg background" src="" alt=""/>
                    </div>
                    <p>Use your own background</p>
                    <form ref="uploadForm" className="uploader" encType="multipart/form-data">
                        <input ref="file" type="file" onChange={this.uploadBackground} className="btn-upload" />
                    </form>
                </div>
            </div>
        );
    }
}