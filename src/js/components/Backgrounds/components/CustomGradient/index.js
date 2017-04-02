import React, { Component } from 'react';
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

    handleChangeColorTop (topColor) {
        console.log('handleChangeColorTop', color);
        this.setState({
            topColor,
        });
        this.props.handleChangeBgColorTop(color);
    }

    handleChangeColorBottom (bottomColor) {
        this.setState({
            bottomColor
        });
        this.props.handleChangeBgBottom(color);
    }

    render () {
        const backgroundGradient = {
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