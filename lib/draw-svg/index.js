import $ from 'jquery';

const drawSvg = () => {
  const $img = $(this);
  const imgID = $img.attr('id');
  const imgClass = $img.attr('class');
  const imgURL = $img.attr('src');

  $.get(
    imgURL,
    (data) => {
      let $svg = $(data).find('svg');
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }

      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass);
      }
      $svg = $svg.removeAttr('xmlns:a');
      $img.replaceWith($svg);
    },
    'xml',
  );
};

export default () => {
  $('.items .icon-svg').each(drawSvg);
};
