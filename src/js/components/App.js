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
    constructor() {
        super();

        this.state = {
            bgBoardTop: '#b3b3b3',
            bgBoardBottom: '#b3b3b3',
            bgImage: false,
        };

        this.handleChangeBgTop = this.handleChangeBgTop.bind(this);
        this.handleChangeBgBottom = this.handleChangeBgBottom.bind(this);
        this.handleChangeBackgournd = this.handleChangeBackgournd.bind(this);
    }

    handleChangeBgTop (bgBoardTop) {
        this.setState({
            bgBoardTop,
        });
    }

    handleChangeBgBottom (bgBoardBottom) {
        this.setState({
            bgBoardBottom,
        });
    }

    handleChangeBackgournd (bgImage) {
        this.setState({
            bgImage,
        });
    }

    render (){
        return (
            <div className="content">
                <Header menu={MenuItems}/>
                <main className="main">
                    <Icons listCategories={ListIcons}/>
                    <Board
                        bgBoardTop={this.state.bgBoardTop}
                        bgBoardBottom={this.state.bgBoardBottom}
                        bgImage={this.state.bgImage}
                    />
                    <Backgrounds
                        handleChangeBgTop={this.handleChangeBgTop}
                        handleChangeBgBottom={this.handleChangeBgBottom}
                        handleChangeBackgournd={this.handleChangeBackgournd}
                        listCategories={ListBackgrounds}
                    />
                </main>
                <Footer />
                <Popup socialsMedia={SocialsMedia}/>
            </div>
        );
    }
}