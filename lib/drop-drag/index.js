import $ from 'jquery';
require("jquery-ui-browserify");

export default (state) => {
    $('.board-resultat').droppable({
        drop: function(event, ui) {
            const $icon = $(ui.draggable);
            let iconDropped;

            const offset = $(this).offset();
            const relX = event.pageX - offset.left + $(this).scrollLeft() - $icon.innerHeight() / 2;
            const relY = event.pageY - offset.top + $(this).scrollTop() - $icon.innerWidth() / 2;

            const positionMouse = {
                left: relX,
                top: relY,
            };

            if(!$icon.hasClass('svg-drag')) {
                iconDropped = $icon.clone().addClass('svg-drag').css(positionMouse);
                $(this).append(iconDropped);
            }

            const $item = $('.board-resultat .item');
            $item.draggable({
                drag: function(e){
                    // return icon moved in board
                    state.setState({
                         iconDropped: e.target,
                    });
                }
            });
            $item.resizable();
        }
    });
}