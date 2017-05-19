import { SHOW_GRID, CHANGE_BORDER } from '../../actionTypes';

const initialState = {
    toggleGrid: false,
    valueBorder: 0,
}

export default (state=initialState, action) => {
    switch (action.type) {
        case SHOW_GRID:
            return Object.assign({}, state, { toggleGrid: !action.toggleGrid });
        case CHANGE_BORDER:
            return Object.assign({}, state, { valueBorder: action.valueBorder });
        default:
            return state;
    }
}