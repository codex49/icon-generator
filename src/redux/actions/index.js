import { SHOW_GRID, CHANGE_BORDER } from '../actionTypes';

export const showGrid = () => ({
    type: SHOW_GRID,
});

export const changeBorder = (valueBorder) => ({
    type: CHANGE_BORDER,
    valueBorder,
});