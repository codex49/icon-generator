import React from 'react';
import AppStore from '../../../../../../stores/AppStore';
// import SketchPicker  = require('react-color').default;
import SketchPicker from 'react-color';

var GradientColor = React.createClass({
	getInitialState: function(){
        return {
            displayColorPicker: false,
            color: {
                r: '179',
                g: '179',
                b: '179',
                a: '1'
            }
        }
	},
    handleClick: function(){
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
    },
    handleChange: function(color){
        this.setState({ color: color.rgb });
        //AppActions.changeColorGradientBottom(color.rgb);
    },
    handleClose: function(){
        this.setState({ displayColorPicker: false });
    },
	render: function() {
		var background = {
			background: 'rgba('+this.state.color.r +', '+this.state.color.g +', '+this.state.color.b +', '+this.state.color.a +')'
		};
		return (
	      <div>
		        <div className={"swatch "+this.props.class} onClick={ this.handleClick }>
		            <div style={background} className="color" />
		        </div>
		        { 
		            this.state.displayColorPicker ? 
		            <div className="popover">
		                <div className="cover" onClick={ this.handleClose }/>
		                <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
		            </div> : null 
		        }
	      </div>
		);
	},
});

module.exports = GradientColor;