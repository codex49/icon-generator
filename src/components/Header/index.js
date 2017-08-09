import React from 'react';
import MenuLeft from './components/MenuLeft';
import MenuItems from '../../main/mocks/Menu.mock.json';

const Header = () => (
  <header>
    <div className="other-links">
      <p className="">Other links: </p>
      <MenuLeft menu={MenuItems} />
    </div>
    <h1 className="logo">
      App Icon <span className="green">Generator</span>
    </h1>
    <ul className="social-media" />
  </header>
);

export default Header;
