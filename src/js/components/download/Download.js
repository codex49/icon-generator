import React from 'react';
import ReactDOM from 'react-dom';
import AppStore from '../../stores/AppStore';

var Download = React.createClass({
	getInitialState: function(){
        return {
            size     : 1024,
            stl_1024 : true,
            stl_512  : false,
        };
    },
	socialMedia: function(social, i){
		return <SocialMedia key={i} link={social.url}>{social.children}</SocialMedia>;
	},
    fc_1024: function(){
    	this.setState({ size: 1024,  stl_1024: true, stl_512: false});
    },
	fc_512: function(){
		this.setState({ size: 512,  stl_1024: false, stl_512: true});
    },    
    fc_256: function(){
		this.setState({ size: 256 });
		$('.btns-size button').removeClass('btn-size');
		$(ReactDOM.findDOMNode(this)).addClass('btn-size');
    },
	
    fc_128: function(){
		this.setState({ size: 128 });
		$('.btns-size button').removeClass('btn-size');
		$(ReactDOM.findDOMNode(this)).addClass('btn-size');
    },
    fc_64: function(){
		this.setState({ size: 64 });
		$('.btns-size button').removeClass('btn-size');
		$(ReactDOM.findDOMNode(this)).addClass('btn-size');
    },
	download: function(e){
		//e.preventDefault();
		var canvas = AppStore.getCanvas();

		//Get size buttons
		var size = this.state.size;

	    var ctx = canvas.getContext('2d');
		ctx.webkitImageSmoothingEnabled = false;
		ctx.mozImageSmoothingEnabled = false;
		ctx.imageSmoothingEnabled = false;
		var extra_canvas = document.createElement("canvas");
		extra_canvas.setAttribute('width',size);
        extra_canvas.setAttribute('height',size);
        var ctx = extra_canvas.getContext('2d');
        ctx.drawImage(canvas,0,0,canvas.width, canvas.height,0,0,size,size);

	    var imgageData = extra_canvas.toDataURL("image/png");
	    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
	    $("#icon-download").attr("download", "icon-generate.png").attr("href", newData);
	},
	render: function() {
		return (
			<div className="popup">
				<div className="block-download">
					<h1 className="title-popup">Thank you!</h1>
					<p className="description">Now it's time to brag about your new icon</p>
					<ul className="slink">
						{ this.props.SocialsMedia.map(this.socialMedia) }
					</ul>
					<div className="icon" id="icon-result">
						<img src="img/icons/pdf.png"/>
					</div>
					<div className="btns-size">
						<button className={this.state.stl_1024 == true ? "btn-size" : ""} onClick={this.fc_1024}>1024px</button>
						<button className={this.state.stl_512 == true ? "btn-size" : ""} onClick={this.fc_512}>512px</button>					
					</div>
					<a href="" id="icon-download" onClick={this.download} className="btn-download btn-green">Download icon 
						<em>{this.state.size} x {this.state.size} px</em>
					</a>
					<hr className="ligne"/>
					<p className="description">Download the necessary sizes for Android and iOS</p>
					<MobileIcon />
					<div className="block-mobile">
						<DownloadMobile />
						<SendIcon />						
					</div>
					<FooterPopUp />			
				</div>
			</div>
		);
	}
});

var SocialMedia = React.createClass({
	render: function(){
		return (			
			<li className="social-media">
				<a href="">
					<img src={this.props.link} alt={this.props.children}/>
				</a>
			</li>
		);
	}
});

var DownloadMobile = React.createClass({
	send: function(e){
		e.preventDefault();
		var that = $(ReactDOM.findDOMNode(this));
		that.fadeOut(60);
		var sendIcons = $('.send-icon');
		sendIcons.fadeIn(300);
	},
	render: function() {
		return (
			<a href="" className="btn-download-mobile" onClick={this.send}>
				For iOS & Android
				<em>All the necessary sizes</em>
			</a>
		);
	}
});

var SendIcon = React.createClass({
	render: function() {
		return (
			<div className="send-icon">
				<form>
					<input type="text" className="text" rel="email" placeholder="Write your email to recive the icons"/>
					<input type="submit" className="btn-green" value="Send"/>
				</form>
			</div>
		);
	}
});

var MobileIcon = React.createClass({
	render: function() {
		return (
			<ul className="download-mobile">
				<li className="android"><a href=""><img src="img/icons/android.png"/></a></li>
				<li className="ios"><a href=""><img src="img/icons/ios.png"/></a></li>
			</ul>
		);
	}
});

var FooterPopUp = React.createClass({
	close: function(e){
		var popUp = $('.popup');
		e.preventDefault();
		popUp.fadeOut(500);
	},
	render: function() {
		return (
			<div className="footer">
				<a href="" className="like-fb">
					<img className="btn-like" src="img/icons/fb-like.png"/>
					54,222 people like this. Be the first of your friends.
				</a>
				<a href="" className="close" onClick={this.close}>Build another? Click here</a>
			</div>
		);
	}
});

module.exports = Download;