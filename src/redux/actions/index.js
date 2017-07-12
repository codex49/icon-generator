import { SHOW_GRID, CHANGE_BORDER, CHANGE_BACKGROUND_BOARD  } from '../actionTypes';

export const showGrid = () => ({
    type: SHOW_GRID,
});

export const changeBorder = (valueBorder) => ({
    type: CHANGE_BORDER,
    valueBorder,
});

export const changeBackgroundBoard = (backgroundBoard) => ({
    type: CHANGE_BACKGROUND_BOARD,
    backgroundBoard,
});