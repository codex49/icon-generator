import React, { Component } from 'react';

import MenuLeft from './components/MenuLeft';

export default class Header extends Component {
    render (){
        return (
            <header>
                <div className='other-links'>
                    <p className=''>Other links: </p>
                    <MenuLeft menu={this.props.menu} />
                </div>
                <h1 className='logo'>App Icon <span className='green'>Generator</span></h1>
                <ul className='social-media'></ul>
            </header>
        );
    }
}