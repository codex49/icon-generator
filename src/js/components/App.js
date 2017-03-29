import React, { Component } from 'react';

import AppAPI from '../utils/appAPI';
import Header from './Header';
import Icons from './Icons';
import Board from './Board';
import Backgrounds from './Backgrounds';
import Footer from './Footer';
import Popup from './Download';

const MenuItems = AppAPI.getMenuItems();
const ListIcons = AppAPI.getIcons();
const ListBackgrounds = AppAPI.getBackgrounds();
const SocialsMedia = AppAPI.getSocialsMedia();

export default class App extends Component {
    render (){
        return (
            <div className="content">
                <Header menu={MenuItems}/>
                <main className="main">
                    <Icons listCategories={ListIcons}/>
                    <Board />
                    <Backgrounds listCategories={ListBackgrounds}/>
                </main>
                <Footer />
                <Popup socialsMedia={SocialsMedia}/>
            </div>
        );
    }
}