var React 	      = require('react'),
	AppStore 	  = require('../../stores/AppStore'),
	AppActions    = require('../../actions/AppActions')
	SketchPicker  = require('react-color').default;

function getAppState(){
	return {
		displayColorPicker: false,
		color: {
	      r: '179',
	      g: '179',
	      b: '179',
	      a: '1'
	    }
	}
}
var GradientColor = React.createClass({
	getInitialState: function(){
		return getAppState();
	},
	componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
    componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
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
	_onChange: function() {
        this.setState(getAppState());
    }
});

module.exports = GradientColor;