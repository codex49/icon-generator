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
        // update icon in each moved
        dragDrop(this);
    }

    renderGrid () {
        if (!this.props.toggleGrid) return null;

        return (
            <div className="lines-grid">
                <hr className="verticale"/>
                <hr className="horizontale"/>
            </div>
        );
    }

    getBackGroundBoad () {
        let background = 'linear-gradient('+this.props.bgBoardTop+', '+this.props.bgBoardBottom+')';

        if (this.props.bgImage) background = 'url('+this.props.bgImage+')';

        return background;
    }

    renderBorderStyle () {
        return (
            <div>
                <span className="border top-left"></span>
                <span className="border top-right"></span>
                <span className="border bottom-right"></span>
                <span className="border bottom-left"></span>
            </div>
        );
    }

    render () {
        const style = {
            backgroundImage: this.getBackGroundBoad(),
            borderRadius: this.props.valueBorder+'px',
        };

        return (
            <div className="board">
                {this.renderBorderStyle()}
                <p>Artboard <span className="text-regular">1024 x 1024 px (50%)</span></p>
                <div className="parent-board">
                    <div style={style} className="board-resultat" id="board">
                        {this.renderGrid()}
                    </div>
                </div>
                <Outils
                    getIconDroped={this.state.iconDropped}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    toggleGrid: state.board.toggleGrid,
    valueBorder: state.board.valueBorder,
});

export default connect(mapStateToProps)(Board);