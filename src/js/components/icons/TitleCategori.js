var React    = require('react');

var TitleCategori = React.createClass({
    getInitialState: function(){
        return { isOpenMenu: -1 };
    },
    showMenu: function(e){
        e.preventDefault();
        var that = $(ReactDOM.findDOMNode(this));
        var isOpenMenu = this.state.isOpenMenu;
        if(isOpenMenu != -1 && !that.is(isOpenMenu)){
            isOpenMenu.next().slideUp(500);
        }
        that.next().slideToggle(500);
        this.setState({isOpenMenu : that});

        that.delay(150).queue(function(){
            $(this).toggleClass('active').clearQueue();
        });
    },
    render: function(){
        return (
            <a className="title-catagorie" onClick={this.showMenu} href="">
                <img className="icon-categorie" src={this.props.link} alt=""/>
                <span className="label">{this.props.children}</span>
            </a>
        );
    }
});

module.exports = TitleCategori;