import $ from 'jquery';

require('jquery-ui-browserify');

export default (state) => {
  $('.board-resultat').droppable({
    drop(event, ui) {
      const that = $(this);
      const $icon = $(ui.draggable);
      const offset = that.offset();
      const positionMouse = {
        left: event.pageX - (offset.left + that.scrollLeft()) - ($icon.innerHeight() / 2),
        top: event.pageY - (offset.top + that.scrollTop()) - ($icon.innerWidth() / 2),
      };

      if (!$icon.hasClass('svg-drag')) {
        const iconDropped = $icon.clone().addClass('svg-drag').css(positionMouse);
        that.append(iconDropped);
        state.setState({ iconDropped });
      }

      const $item = $('.board-resultat .item');
      $item.draggable({
        drag(e) {
          state.setState({ iconDropped: e.target });
        },
      });
      $item.resizable({ aspectRatio: true });
    },
  });
};
