var React            = require('react'),
    BackgroundUpload = require('./BackgroundUpload'),
    Background       = require('./Background'),
    CustomGradient   = require('./CustomGradient'),
    TitleCategori    = require('../icons/TitleCategori');

var Backgrounds = React.createClass({
    getIntialState: function(){},
    listIcons: function(e){
        e.preventDefault();
    },
    render: function(){
        var self = this;
        return (
            <div className="nav-element backgrounds">
                <h2 className="title-catagories">Backgrounds</h2>
                <ul className="catagories">
                <BackgroundUpload active='active' link="img/icons/upload.png">Upload</BackgroundUpload>
                {
                    this.props.listCategories.map(function(catagorie, i){
                        var items = catagorie.items.map(function(item, f){
                        	var background = [];
                        	if(catagorie.name == 'Gradients' && f == 0){
								background.push(<CustomGradient />);
                        	}
                        	background.push(<Background key={f} link={item}/>);
                            return background;
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

module.exports = Backgrounds;
