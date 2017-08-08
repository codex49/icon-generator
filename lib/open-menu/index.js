import $ from 'jquery';

export default (elem, event) => {
  event.preventDefault();
  let isOpenMenu = -1;

  if (isOpenMenu !== -1 && !elem.is(isOpenMenu)) {
    isOpenMenu.next().slideUp(500);
  }

  elem.next().slideToggle(500);
  isOpenMenu = elem;

  elem.delay(150).queue(() => {
    $(this).toggleClass('active').clearQueue();
  });
};
