import React, { Component } from 'react';
import dragDrop from '../../../lib/drop-drag';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showGrid } from '../../redux/actions';

import Outils from './components/Outils';

class Board extends Component {
    constructor() {
        super();

        this.state = {
            showGrid: false,
            valueBorder: 0,
            iconDroped: false,
        };

        this.hangeChangeBorder = this.hangeChangeBorder.bind(this);
        this.handleShowGrid = this.handleShowGrid.bind(this);
    }

    componentDidMount() {
        // update icon in each moved
        dragDrop(this);
    }

    handleShowGrid (showGrid) {
        this.setState({
            showGrid,
        });
    }

    hangeChangeBorder (valueBorder) {
        this.setState({
            valueBorder,
        });
    };

    renderGrid () {
        if (!this.state.showGrid) return null;

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
        console.log('state');
        const style = {
            backgroundImage: this.getBackGroundBoad(),
            borderRadius: this.state.valueBorder+'px',
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
                    handleShowGrid={this.handleShowGrid}
                    hangeChangeBorder={this.hangeChangeBorder}
                    getIconDroped={this.state.iconDroped}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        showGrid: state.showGrid,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(showGrid, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
