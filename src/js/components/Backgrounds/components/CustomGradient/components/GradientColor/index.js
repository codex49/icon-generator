import React, { Component } from 'react';

import SketchPicker from 'react-color';

export default class extends Component {
    constructor() {
        super();

        this.state = {
            displayColorPicker: false,
            color: {
                r: '179',
                g: '179',
                b: '179',
                a: '1',
            }
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleCloseColorPicker = this.handleCloseColorPicker.bind(this);
    }

    handleClick () {
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
    }

    handleChangeColor (color) {
        this.setState({ color: color.rgb });
    }

    handleCloseColorPicker (){
        this.setState({ displayColorPicker: false });
    }

    renderColorPicker () {
        if (!this.state.displayColorPicker) return null;

        return (
            <div className="popover">
                <div className="cover" onClick={ this.handleCloseColorPicker }/>
                <SketchPicker color={ this.state.color } onChange={ this.handleChangeColor } />
            </div>
        );
    }

    render () {
        const  background = {
            background: 'rgba('+this.state.color.r +', '+this.state.color.g +', '+this.state.color.b +', '+this.state.color.a +')',
        };

        return (
            <div>
                <div className={"swatch "+this.props.class} onClick={ this.handleClick }>
                    <div style={background} className="color" />
                </div>
                {this.renderColorPicker()}
            </div>
        );
    }
}