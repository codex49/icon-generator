var React        = require('react'),
    AppStore     = require('../../stores/AppStore'),
    AppActions   = require('../../actions/AppActions'),
    Outils       = require('./Outils.js');

function getAppState() {
  return {
        showGrid: AppStore.getStatGrid()
  };
}
var Board = React.createClass({
    getDefaultProps: function(){
        return {

        }
    },
    getInitialState: function () {
        return getAppState();
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
        $('.board li').click(function(){
            alert("The paragraph was clicked.");
        });
        var that = this;
        $('.board-resultat').droppable({
            drop: function(event, ui) {  
                if(!$(ui.draggable).hasClass('svg-drag')){
                    $(this).append($(ui.draggable).addClass('svg-drag').clone()); 
                }
                $('.catagories .item').removeClass('svg-drag');
                $item = $('.board-resultat .item');
                $item.draggable({
                    drag: function(){
                        var id = $(this).find('svg').attr('id');
                        AppActions.iconChecked(id);
                    }/*,
                    containment: '.board-resultat', */
                    //cursor: 'move', 
                });
                $item.resizable();
            }
        });
    },
    render: function() {
       var style = {
            borderRadius: AppStore.getBorderRaduis()+'px'/*,
            backgroundImage: 'url(' + AppStore.getBackground() + ')',*/
        };
        return (
            <div className="board">
            	<Border />
                    <p>Artboard <span className="text-regular">1024 x 1024 px (50%)</span></p>
                    <div className="parent-board">
                        <div style={style} className="board-resultat" id="board">
                            { this.state.showGrid ? <Grid /> : null }
                        </div>                        
                    </div>

                    <Outils />
            </div>
        );
    },
    _onChange: function() {
        this.setState(getAppState());
    },
});

var Border = React.createClass({
    render: function(){
        return (
            <div>
                <span className="border top-left"></span>
                <span className="border top-right"></span>
                <span className="border bottom-right"></span>
                <span className="border bottom-left"></span> 
            </div>
        );
    }
});

var Grid = React.createClass({
    render: function() {
        return (
            <div className="lines-grid">
                <hr className="verticale"/>
                <hr className="horizontale"/>
            </div>
        );
    }
});

module.exports = Board;
