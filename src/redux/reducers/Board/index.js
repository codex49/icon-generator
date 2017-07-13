import {
    SHOW_GRID,
    CHANGE_BORDER,
    CHANGE_BACKGROUND_BOARD,
    CHANGE_GRADIENT_BOARD_TOP,
    CHANGE_BACKGROUND_BOARD_BOTTOM,
    SHOW_POPUP_DOWNLOAD,
} from '../../actionTypes';


const initialState = {
    toggleGrid: false,
    valueBorder: 0,
    gradientBoardTop: '#b3b3b3',
    gradientBoardBottom: '#b3b3b3',
    showPopup: false,
}

export default (state=initialState, action) => {
    switch (action.type) {
        case SHOW_GRID:
            return { ...state, toggleGrid: !state.toggleGrid };
        case CHANGE_BORDER:
            return { ...state, valueBorder: action.valueBorder };
        case CHANGE_BACKGROUND_BOARD:
            return {
                ...state,
                backgroundBoard: action.backgroundBoard,
                typeBg: action.typeBg
            };
        case CHANGE_GRADIENT_BOARD_TOP:
            return {
                ...state,
                gradientBoardTop:
                action.gradientBoardTop,
                typeBg: action.typeBg,
            };
        case CHANGE_BACKGROUND_BOARD_BOTTOM:
            return {
                ...state,
                gradientBoardBottom: action.gradientBoardBottom,
                typeBg: action.typeBg,
            };
        case SHOW_POPUP_DOWNLOAD:
            return { ...state, showPopup: action.showPopup };
        default:
            return state;
    }
}