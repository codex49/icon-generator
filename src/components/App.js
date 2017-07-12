import React, { Component } from 'react';
import drawSvgIcons from '../../lib/draw-svg';

import AppAPI from '../main/mocks/appAPI';
import Header from './Header';
import Icons from './Icons';
import Board from './Board';
import Backgrounds from './Backgrounds';
import Footer from './Footer';
import Download from './Download';

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
            canvas: null,
        };
    }

    componentDidMount () {
        drawSvgIcons();
    }

    handleChangeBgTop = bgBoardTop => {
        this.setState({
            bgBoardTop,
        });
    }

    handleChangeBgBottom = bgBoardBottom => {
        this.setState({
            bgBoardBottom,
        });
    }

    handleChangeBackground = bgImage => {
        this.setState({
            bgImage,
        });
    }

    getCanvasToDownload = canvas => {
        this.setState({
            canvas,
        });
    }

    render () {
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
                        handleChangeBackground={this.handleChangeBackground}
                        listCategories={ListBackgrounds}
                    />
                </main>
                <Footer getCanvasToDownload={this.getCanvasToDownload}/>
                <Download
                    socialsMedia={SocialsMedia}
                    canvas={this.state.canvas}
                />
            </div>
        );
    }
}