import React, { Component } from 'react';
import AppActions from '../../actions/AppActions';

var BackgroundUpload = React.createClass({
    getDefaultProps: function(){
        return {
            url: 'img/bg/bg-up.png'
        };
    },
    uploadBackground: function(e){
        var link = e.target;
        AppActions.uploadBackground(link);
    },
    changeBackgournd: function(){
        var bgImg = $(ReactDOM.findDOMNode(this)).find('.up-bg').attr('src');
        AppActions.changeBackground(bgImg);
        console.log(bgImg);
    },
    render: function(){
        return (
            <div className="upload-block">
                <a className={"title-catagorie " + this.props.active}>
                    <img className="icon-categorie" src={this.props.link} alt=""/>
                    <span className="label">{this.props.children}</span>
                </a>
                <div className="upload-elment">
                    <div className="icon-upload upload-bg" onClick={this.changeBackgournd}>
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
});

module.exports = BackgroundUpload;