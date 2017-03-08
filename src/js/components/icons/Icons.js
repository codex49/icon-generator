var React         = require('react'),
    ReactDOM      = require('react-dom'),
    Icon          = require('./Icon'),
    IconUpload    = require('./IconUpload'),
    TitleCategori = require('./TitleCategori');

var Icons = React.createClass({
    getIntialState: function(){},
    listIcons: function(e){
        e.preventDefault();
    },
    componentDidMount: function() {
       $('.items .icon-svg').each(function(){
            var $img = $(this);
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
        });
    },
    componentWilMount: function() {
       /*$('.items .icon-svg').each(function(){
            var $img = $(this);
            console.log($img);
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
    },
    render: function(){
        var self = this;
        return (
            <div className="nav-element">
                <h2 className="title-catagories">Design Elements</h2>
                <ul className="catagories">
                <IconUpload active='active' link="img/icons/upload.png">Upload</IconUpload>
                {
                    this.props.listCategories.map(function(catagorie, i){
                        var items = catagorie.items.map(function(item, f){
                            return( 
                                <Icon 
                                    id={catagorie.name.toLowerCase()+f}
                                    key={f} 
                                    link={item}/>
                            );
                        }.bind(this));
                        return (
                            <li key={i} className="catagorie">
                                <TitleCategori link={catagorie.iconCat}>{catagorie.name}</TitleCategori>
                                <ul className="items">{items}</ul>
                            </li>
                        );                 
                    }.bind(this))
                }                   
                </ul>
            </div>
        );
    }
});

module.exports = Icons;