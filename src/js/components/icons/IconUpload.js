import React, { Component } from 'react';

import AppActions from '../../actions/AppActions';
import Icon from './Icon';

var IconUpload = React.createClass({
    getDefaultProps: function(){
        return {
            url: 'img/icons/star.png'
        };
    },
    getInitialState: function(){
        return {

        };
    },
    uploadIcon: function(e){
        var link = e.target;
        AppActions.uploadIcon(link);
        /*var fReader = new FileReader();
        fReader.readAsDataURL(input.files[0]);
        $(fReader).on('loadend', function(){
            var img = $('.upload-elment img')[0];
            img.src = event.target.result;
        });*/
    },
    render: function(){
        return (
            <div className="upload-block">
                <a className={"title-catagorie " + this.props.active}>
                    <img className="icon-categorie" src={this.props.link} alt=""/>
                    <span className="label">{this.props.children}</span>
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
});

module.exports = IconUpload;