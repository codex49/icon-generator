import { downloadFile } from '../download';

export default (canvas, size) => {
  const extra_canvas = document.createElement('canvas');
  extra_canvas.setAttribute('width', size);
  extra_canvas.setAttribute('height', size);

  const ctx = extra_canvas.getContext('2d');
  ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, size, size);

  const image = extra_canvas.toDataURL('image/octet-stream');

  downloadFile(image, 'icon.png');
};
