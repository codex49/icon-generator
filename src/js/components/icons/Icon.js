var React    = require('react'),
	ReactDOM = require('react-dom');

var Icon = React.createClass({
	getIntialState: function(){},
    componentDidMount: function() {
        var $this = $(ReactDOM.findDOMNode(this));
        /*$('.items .icon-svg').each(function(){
            var $img = $this.find('img');
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            $.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');
                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass);
                }
                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');
                // Replace image with new SVG
                $img.replaceWith($svg);
            }, 'xml');
        });*/

        
    	$this.draggable({
    		helper: 'clone',
    		appendTo: ".board-resultat"
    	});
    },
    render: function(){
        return (
            <li className="item">
                <img  
                	id={this.props.id}
                	className="icon-svg" 
                	src={this.props.link} alt=""/>
            </li>
        );
    }
});

module.exports = Icon;
