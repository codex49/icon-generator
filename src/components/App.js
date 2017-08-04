import React, { Component } from 'react';
import drawSvgIcons from '../../lib/draw-svg';

import AppAPI from '../main/mocks/appAPI';
import Header from './Header';
import Icons from './Icons';
import Board from './Board';
import Backgrounds from './Backgrounds';
import Footer from './Footer';
import Download from './Download';

const ListIcons = AppAPI.getIcons();
const ListBackgrounds = AppAPI.getBackgrounds();
const SocialsMedia = AppAPI.getSocialsMedia();

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      canvas: null,
    };
  }

  componentDidMount() {
    drawSvgIcons();
  }

  getCanvasToDownload = canvas => {
    this.setState({
      canvas,
    });
  };

  render() {
    return (
      <div className="content">
        <Header />
        <main className="main">
          <Icons listCategories={ListIcons} />
          <Board />
          <Backgrounds listCategories={ListBackgrounds} />
        </main>
        <Footer getCanvasToDownload={this.getCanvasToDownload} />
        <Download socialsMedia={SocialsMedia} canvas={this.state.canvas} />
      </div>
    );
  }
}
