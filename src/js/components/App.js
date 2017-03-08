var React       = require('react'),
    AppActions  = require('../actions/AppActions'),
    AppStore    = require('../stores/AppStore'),
    AppAPI      = require('../utils/appAPI'),
    Header      = require('./Header'),
    Icons       = require('./icons/Icons'),
    Board       = require('./board/Board'),
    Backgrounds = require('./backgrounds/Backgrounds'),
    Footer      = require('./Footer'),
    Popup       = require('./download/Download');

var MenuItems       = AppAPI.getMenuItems(),
    ListIcons       = AppAPI.getIcons(),
    ListBackgrounds = AppAPI.getBackgrounds(),
    SocialsMedia    = AppAPI.getSocialsMedia();

function getAppState() {
  return {
   
  };
}

var App = React.createClass({
    getInitialState: function () {
        return getAppState();
    },
    componentWillUnmount: function() {
        console.log('componentWillUnmount');
    },
    componentDidMount: function() {

    },
    render: function(){
        return (
            <div className="content">
              <Header  Menu={MenuItems}/>
              <main className="main">
                    <Icons listCategories={ListIcons}/> 
                    <Board />
                    <Backgrounds listCategories={ListBackgrounds}/>
              </main>
              <Footer />
              <Popup SocialsMedia={SocialsMedia}/>
           </div>
        );
    },
    _onChange: function() {
        this.setState(getAppState());
    }
});

module.exports = App;