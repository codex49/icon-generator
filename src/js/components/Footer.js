var React 		= require('react'),
    AppStore    = require('../stores/AppStore'),
    AppActions  = require('../actions/AppActions'),
	html2canvas = require('html2canvas');

var Footer = React.createClass({
	openPopUp: function(e){
		e.preventDefault();
		//$('.board .board-resultat').css('transform','scale(0.5)');
		var popUp = $('.popup');
		
		popUp.fadeIn(500);
		//$('.board').css('overflow','scroll');	    

        html2canvas($(".board-resultat"), {
        	useCORS: true,
			allowTaint: true,
			letterRendering: true,
            onrendered: function(canvas) {
                //theCanvas = canvas;
                /*var ctx = canvas.getContext('2d');
				ctx.webkitImageSmoothingEnabled = false;
				ctx.mozImageSmoothingEnabled = false;
				ctx.imageSmoothingEnabled = false;
				var extra_canvas = document.createElement("canvas");
				extra_canvas.setAttribute('width',1024);
                extra_canvas.setAttribute('height',1024);
                var ctx = extra_canvas.getContext('2d');
                ctx.drawImage(canvas,0,0,canvas.width, canvas.height,0,0,1024,1024);*/

                AppActions.getIconToDownload(canvas);
                $('#icon-result').html(canvas);
            }
        });        
	},
	render: function() {
		return (
			<footer>
				<p>When you done, you can download your icon by clicking on the download buttons bellow</p>
				<a href="" className="btn-green" onClick={this.openPopUp}>Download icon</a>
			</footer>
		);
	}
});

module.exports = Footer;