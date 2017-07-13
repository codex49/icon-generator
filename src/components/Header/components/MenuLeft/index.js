import React, { Component } from 'react';

export default class MenuLeft extends Component {
    getMenu = (item) => (
        <li className='link' key={item.url}>
            <a href={item.url}>
                {item.item}
            </a>
        </li>
    );

    renderMenu = () => (this.props.menu.map(this.getMenu));

    render (){
        return (
            <ul className='useful-links'>
                {this.renderMenu()}
            </ul>
        );
    }
}
