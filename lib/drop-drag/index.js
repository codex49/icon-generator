import $ from 'jquery';
require("jquery-ui-browserify");

export default (state) => {
    $('.board-resultat').droppable({
        drop: function(event, ui) {
            const $icon = $(ui.draggable);
            const offset = $(this).offset();
            const positionMouse = {
                left: event.pageX - offset.left + $(this).scrollLeft() - $icon.innerHeight() / 2,
                top: event.pageY - offset.top + $(this).scrollTop() - $icon.innerWidth() / 2,
            };

            if(!$icon.hasClass('svg-drag')) {
                const iconDropped = $icon.clone().addClass('svg-drag').css(positionMouse);
                $(this).append(iconDropped);
                state.setState({ iconDropped });
            }

            const $item = $('.board-resultat .item');
            $item.draggable({
                drag: function(e){
                    state.setState({ iconDropped: e.target });
                }
            });
            $item.resizable();
        }
    });
}