import React, { Component, PropTypes } from 'react';

export default class Menu extends Component {
    getMenu = (item) => {
        return (
            <li className='link'>
                <a key={item.item}
                   href={item.url}>
                    {item.item}
                </a>
            </li>
        );
    }

    renderMenu = () => (this.props.products.map(this.getMenu));

    render (){
        return (
            <ul className='useful-links'>
                {this.renderMenu}
            </ul>
        );
    }
}
