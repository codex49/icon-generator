import {
  SHOW_GRID,
  CHANGE_BORDER,
  CHANGE_BACKGROUND_BOARD,
  CHANGE_GRADIENT_BOARD_TOP,
  CHANGE_BACKGROUND_BOARD_BOTTOM,
  SHOW_POPUP_DOWNLOAD,
} from '../actionTypes';

export const showGrid = () => ({
  type: SHOW_GRID,
});

export const changeBorder = valueBorder => ({
  type: CHANGE_BORDER,
  valueBorder,
});

export const changeBackgroundBoard = (backgroundBoard, typeBg) => ({
  type: CHANGE_BACKGROUND_BOARD,
  backgroundBoard,
  typeBg,
});

export const changeGradientBoardTop = (gradientBoardTop, typeBg) => ({
  type: CHANGE_GRADIENT_BOARD_TOP,
  gradientBoardTop,
  typeBg,
});

export const changeGradientBoardBottom = (gradientBoardBottom, typeBg) => ({
  type: CHANGE_BACKGROUND_BOARD_BOTTOM,
  gradientBoardBottom,
  typeBg,
});

export const showPopupDownload = showPopup => ({
  type: SHOW_POPUP_DOWNLOAD,
  showPopup,
});
