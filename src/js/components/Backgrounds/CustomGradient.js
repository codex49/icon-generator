var React = require('react'),
	AppStore 	  = require('../../stores/AppStore'),
	AppActions    = require('../../actions/AppActions'),
	GradientColorTop = require('./GradientColorTop'),
	GradientColorBottom = require('./GradientColorBottom');

function getAppState(){
	return {
		topColor: AppStore.getColorGradientTop(),
		bottomColor: 'green'//AppStore.getColorGradientBottom()
	}
}
var CustomGradient = React.createClass({
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
		//console.log(AppStore.getColorGradientTop());
		var backgroundGradient = {
			background: this.state.topColor,
			background: 'linear-gradient('+this.state.topColor+', '+this.state.bottomColor+')'
		};
		return (
			<div className="gradient">
				<h3>Custom gradient</h3>
				<div className="box" onClick={this.change}>
					<div className="result" style={backgroundGradient}></div>
					<div className="inputs">
						<GradientColorTop/>
						<GradientColorBottom class="MT-44"/>
					</div>
				</div>
			</div>
		);
	},
	_onChange: function() {
        this.setState(getAppState());
    }
});

module.exports = CustomGradient;