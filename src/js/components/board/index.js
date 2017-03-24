import React, { Component } from 'react';
import AppStore from '../../stores/AppStore';
import AppActions from '../../actions/AppActions';
import Outils from './components/Outils';
import Grid from './components//Grid';
import Border from './components//Border';

export default class Board extends Component {
    constructor() {
        super();

        this.state = {
            showGrid: AppStore.getStatGrid(),
        };
    }

    componentDidMount () {
        $('.board li').click(function(){
            alert("The paragraph was clicked.");
        });

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

    render () {
        const style = {
            borderRadius: AppStore.getBorderRaduis()+'px'
        };

        return (
            <div className="board">
                <Border />
                <p>Artboard <span className="text-regular">1024 x 1024 px (50%)</span></p>
                <div className="parent-board">
                    <div style={style} className="board-resultat" id="board">
                        { this.state.showGrid ? <Grid /> : null }
                    </div>
                </div>

                <Outils />
            </div>
        );
    }
}
