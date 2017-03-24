import React, { Component } from 'react';
import AppStore from '../../stores/AppStore';
import AppActions from '../../actions/AppActions';
import BorderRadius from './BorderRadius.js';
import SketchPicker from 'react-color';

export default class Outils extends Component {
    constructor() {
        super();

        this.state = {
            displayGrid: false,
            displayColorPicker: false,
            iconChecked: AppStore.getIdIconCheked()
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.grid = this.grid.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.remove = this.remove.bind(this);
    }

    handleClick () {
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

    remove (e) {
        e.preventDefault();
        var idIconCheked = this.state.iconChecked;
        $('.board #'+idIconCheked).parent('li').fadeOut(100);
    }

    render () {
        console.log('iconChecked', this.state.iconChecked);
        return (
            <div className="outils">
                <div className="left">
                    <a
                        onClick={ this.handleClick }
                        className="color btn-green">
                            <i className="color-icon"></i>
                            Color
                    </a>
                    {
                        this.state.displayColorPicker ? 
                        <div className="popover">
                            <div className="cover" onClick={ this.handleClose }/>
                            <SketchPicker onChange={ this.handleChangeColor }/>
                        </div> : null 
                    }
                    <button onClick={this.remove} className="delete"><i className="delete-icons"></i></button>    
                </div>
                <div className="right">
                    <i className="icons-radius"></i>
                    <BorderRadius />
                    <button
                        onClick={this.grid}
                        className="grid">
                            <i className="lignes"></i>
                    </button>
                </div>
            </div>      
        );
    }
}
