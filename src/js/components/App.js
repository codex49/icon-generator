import React, { Component } from 'react';

import AppAPI from '../utils/appAPI';
import Header from './Header';
import Icons from './icons/Icons';
import Board from './board/Board';
import Backgrounds from './backgrounds/Backgrounds';
import Footer from './Footer';
import Popup from './download/Download';

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
                <Popup SocialsMedia={SocialsMedia}/>
            </div>
        );
    }
}