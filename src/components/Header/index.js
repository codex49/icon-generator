import React from 'react';
import PropTypes from 'prop-types';
import MenuLeft from './components/MenuLeft';
import  MenuItems from '../../main/mocks/Menu.mock.json';

const Header = props => (
    <header>
        <div className='other-links'>
            <p className=''>Other links: </p>
            <MenuLeft menu={MenuItems} />
        </div>
        <h1 className='logo'>App Icon <span className='green'>Generator</span></h1>
        <ul className='social-media'></ul>
    </header>
);

Header.defaultProps = {
    menu: null,
}

Header.propTypes = {
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            item: PropTypes.string,
            url: PropTypes.string,
        }),
    ),
}

export default Header;