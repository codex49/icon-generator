import $ from 'jquery';
require("jquery-ui-browserify");

export default (state) => {
    $('.board-resultat').droppable({
        drop: function(event, ui) {

            if(!$(ui.draggable).hasClass('svg-drag')){
                $(this).append($(ui.draggable).addClass('svg-drag').clone());
            }
            $('.catagories .item').removeClass('svg-drag');

            const $item = $('.board-resultat .item');

            $item.draggable({
                drag: function(e){
                    // return icon moved in board
                    state.setState({
                         iconDroped: e.target
                    });
                }
            });
            $item.resizable();
        }
    });
}