import { SHOW_GRID } from '../../actionTypes';

export default (state=[], payload) => {
    switch (payload) {
        case SHOW_GRID:
            return [...state, payload.etat];
        default:
            return state;
    }
}