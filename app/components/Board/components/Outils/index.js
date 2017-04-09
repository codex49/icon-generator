import React, { Component } from 'react';
// import $ from 'jquery';

import BorderRadius from './components/BorderRadius';
import SketchPicker from 'react-color';

export default class Outils extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayGrid: props.showGrid,
            displayColorPicker: false,
        };

        this.handleOpenSketchPicker = this.handleOpenSketchPicker.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShowGrid = this.handleShowGrid.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleRemoveIcon = this.handleRemoveIcon.bind(this);
    }

    handleOpenSketchPicker () {
        this.setState(() => ({ displayColorPicker: !this.state.displayColorPicker }));
    }

    handleClose () {
        this.setState({ displayColorPicker: false })
    }

    handleChangeColor (color) {
        const idIconCheked = $(".board").find(this.props.getIconDroped).find('path');
        const c = color.rgb;
        idIconCheked.css('fill', 'rgba('+c.r+', '+c.g+', '+c.b+','+c.a+')');
    }

    handleShowGrid () {
        this.setState({ displayGrid: !this.state.displayGrid });
        this.props.handleShowGrid(!this.state.displayGrid);
    }

    handleRemoveIcon (event) {
        event.preventDefault();

        const idIconCheked = $(".board").find(this.props.getIconDroped);
        idIconCheked.fadeOut(100);
    }

    renderBlockColor () {
        if (!this.state.displayColorPicker) return null;

        return (
            <div className="popover">
                <div className="cover" onClick={ this.handleClose }/>
                <SketchPicker onChange={ this.handleChangeColor }/>
            </div>
        );
    }

    render () {
        return (
            <div className="outils">
                <div className="left">
                    <a onClick={ this.handleOpenSketchPicker } className="color btn-green"><i className="color-icon"></i>Color</a>
                    {this.renderBlockColor()}
                    <button onClick={this.handleRemoveIcon} className="delete"><i className="delete-icons"></i></button>
                </div>
                <div className="right">
                    <i className="icons-radius"></i>
                    <BorderRadius hangeChangeBorder={this.props.hangeChangeBorder} />
                    <button onClick={this.handleShowGrid} className="grid"><i className="lignes"></i></button>
                </div>
            </div>
        );
    }
}
