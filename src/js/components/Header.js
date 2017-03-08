var React = require('react');

var Menu = React.createClass({
    render: function(){
      return <li className='link'><a href={this.props.url}>{this.props.children}</a></li>
    }
});

var Header = React.createClass({
    render: function(){
        return (
            <header>
                <div className='other-links'>
                    <p className=''>Other links: </p>
                    <ul className='useful-links'>
                    {
                        this.props.Menu.map(function(menu, i){
                           return <Menu key={i} url={menu.url}>{menu.item}</Menu>                  
                        })
                     }
                    </ul>                    
                </div>
                <h1 className='logo'>App Icon <span className='green'>Generator</span></h1>
                <ul className='social-media'>
                 <li>
                   
                 </li>
                 <li>

                 </li>
                </ul>
            </header>
        );
    }
});

module.exports = Header;