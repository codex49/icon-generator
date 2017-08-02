import React from 'react';

const getMenu = item => (
    <li className='link' key={item.url}>
        <a href={item.url}>{item.item}</a>
    </li>
);

const MenuLeft = props => (
    <ul className='useful-links'>
        { props.menu.map(getMenu) }
    </ul>
);

export default MenuLeft;