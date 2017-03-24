import React, { Component } from 'react';

import AppStore from '../../../../stores/AppStore';
import AppActions from '../../../../actions/AppActions';

import BorderRadius from './components/BorderRadius';
import SketchPicker from 'react-color';
import IconButton from '../../../IconButton'

export default class Outils extends Component {
    constructor() {
        super();

        this.state = {
            displayGrid: false,
            displayColorPicker: false,
            iconChecked: AppStore.getIdIconCheked(),
        };

        this.handleOpenSketchPicker = this.handleOpenSketchPicker.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.grid = this.grid.bind(this);
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
        const idIconCheked = $('.board #'+this.state.iconChecked+' path');
        const c = color.rgb;
        idIconCheked.css('fill', 'rgba('+c.r+', '+c.g+', '+c.b+','+c.a+')');
    }

    grid (e) {
        e.preventDefault();
        this.setState({ displayGrid: !this.state.displayGrid });
        AppActions.showGrid(!this.state.displayGrid);
    }

    handleRemoveIcon (e) {
        e.preventDefault();
        const idIconCheked = this.state.iconChecked;
        $('.board #'+idIconCheked).parent('li').fadeOut(100);
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
        console.log('icon', AppStore.getIdIconCheked());
        return (
            <div className="outils">
                <div className="left">
                    <IconButton
                      type='link'
                      classButton='color btn-green'
                      classIcon=''
                    >
                      Color
                    </IconButton>

                    {this.renderBlockColor()}
                    <button onClick={this.handleRemoveIcon} className="delete"><i className="delete-icons"></i></button>
                </div>
                <div className="right">
                    <i className="icons-radius"></i>
                    <BorderRadius />
                    <button onClick={this.grid} className="grid"><i className="lignes"></i></button>
                </div>
            </div>
        );
    }
}
