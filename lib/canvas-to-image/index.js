import { downloadFile } from '../download';

export default (canvas, size) => {
  const extraCanvas = document.createElement('canvas');
  extraCanvas.setAttribute('width', size);
  extraCanvas.setAttribute('height', size);

  const ctx = extraCanvas.getContext('2d');
  ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, size, size);

  const image = extraCanvas.toDataURL('image/octet-stream');

  downloadFile(image, 'icon.png');
};
