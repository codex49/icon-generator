import React, { Component } from 'react';
import dragDrop from '../../../lib/drop-drag';

import Outils from './components/Outils';
import { connect } from 'react-redux';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      iconDropped: false,
    };
  }

  componentDidMount() {
    dragDrop(this);
  }

  renderGrid() {
    if (!this.props.toggleGrid) return null;

    return (
      <div className="lines-grid">
        <hr className="verticale" />
        <hr className="horizontale" />
      </div>
    );
  }

  getBackGroundBoard() {
    let style = {
      borderRadius: `${this.props.valueBorder}px`,
      background: `linear-gradient(${this.props.gradientBoardTop}, ${this.props
        .gradientBoardBottom})`,
    };

    if (this.props.typeBg === 'image') {
      style = {
        borderRadius: `${this.props.valueBorder}px`,
        backgroundImage: `url(${this.props.backgroundBoard})`,
        backgroundColor: 'transparent',
      };
    }
    return style;
  }

  renderBorderStyle() {
    const positions = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];
    return positions.map(position =>
      <span key={position} className={`border ${position}`} />,
    );
  }

  render() {
    return (
      <div className="board">
        {this.renderBorderStyle()}
        <p>
          Artboard <span className="text-regular">1024 x 1024 px (50%)</span>
        </p>
        <div className="parent-board">
          <div
            style={this.getBackGroundBoard()}
            className="board-resultat"
            id="board"
          >
            {this.renderGrid()}
          </div>
        </div>
        <Outils getIconDroped={this.state.iconDropped} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toggleGrid: state.board.toggleGrid,
  valueBorder: state.board.valueBorder,
  backgroundBoard: state.board.backgroundBoard,
  gradientBoardTop: state.board.gradientBoardTop,
  gradientBoardBottom: state.board.gradientBoardBottom,
  typeBg: state.board.typeBg,
});

export default connect(mapStateToProps)(Board);
