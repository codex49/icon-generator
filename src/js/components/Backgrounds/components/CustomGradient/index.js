import React, { Component } from 'react';
import AppStore from '../../../../stores/AppStore';
import GradientColor from './components/GradientColor';

export default class CustomGradient extends Component {
    constructor() {
        super();

        this.state = {
            topColor: '#b3b3b3',
            bottomColor: '#b3b3b3',
        };

        this.handleChangeColorTop = this.handleChangeColorTop.bind(this);
        this.handleChangeColorBottom = this.handleChangeColorBottom.bind(this);
    }

    handleChangeColorTop (color) {
        this.setState({ topColor: color });
        this.props.handleChangeBgTop(color);
    }

    handleChangeColorBottom (color) {
        this.setState({ bottomColor: color });
        this.props.handleChangeBgBottom(color);
    }

    render () {
        const backgroundGradient = {
            background: this.state.topColor,
            background: 'linear-gradient('+this.state.topColor+', '+this.state.bottomColor+')'
        };
        return (
			<div className="gradient">
				<h3>Custom gradient</h3>
				<div className="box" onClick={this.change}>
					<div className="result" style={backgroundGradient}></div>
					<div className="inputs">
                        <GradientColor handleChangeColor={this.handleChangeColorTop}/>
						<GradientColor handleChangeColor={this.handleChangeColorBottom} class="MT-44"/>
					</div>
				</div>
			</div>
        );
    }
}