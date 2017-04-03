import React, { Component } from 'react';

import AppActions from '../../actions/AppActions';
import Outils from './components/Outils';
import Border from './components/Border';

export default class Board extends Component {
    constructor() {
        super();

        this.state = {
            showGrid: false,
            valueBorder: 0,
        };

        this.hangeChangeBorder = this.hangeChangeBorder.bind(this);
        this.handleShowGrid = this.handleShowGrid.bind(this);
    }

    componentDidMount () {
        $('.board-resultat').droppable({
            drop: function(event, ui) {
                if(!$(ui.draggable).hasClass('svg-drag')){
                    $(this).append($(ui.draggable).addClass('svg-drag').clone());
                }
                $('.catagories .item').removeClass('svg-drag');

                const $item = $('.board-resultat .item');

                $item.draggable({
                    drag: function(){
                        const id = $(this).find('svg').attr('id');
                        AppActions.iconChecked(id);
                    }
                });
                $item.resizable();
            }
        });
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

    render () {
        const style = {
            background: 'linear-gradient('+this.props.bgBoardTop+', '+this.props.bgBoardBottom+')',
            borderRadius: this.state.valueBorder+'px',
        };

        return (
            <div className="board">
                <Border />
                <p>Artboard <span className="text-regular">1024 x 1024 px (50%)</span></p>
                <div className="parent-board">
                    <div style={style} className="board-resultat" id="board">
                        {this.renderGrid()}
                    </div>
                </div>
                <Outils
                    handleShowGrid={this.handleShowGrid}
                    hangeChangeBorder={this.hangeChangeBorder}
                />
            </div>
        );
    }
}
