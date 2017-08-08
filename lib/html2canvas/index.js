import $ from 'jquery';
import html2canvas from 'html2canvas';

export default (props) => {
  html2canvas($('.board-resultat'), {
    useCORS: true,
    allowTaint: true,
    letterRendering: true,
    onrendered(canvas) {
      props.getCanvasToDownload(canvas);
      $('#icon-result').html(canvas);
    },
  });
};
