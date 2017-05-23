import { SHOW_GRID } from '../actionTypes';


export const showGrid = etat => {
    console.log('etat', etat);

    return {
        type: SHOW_GRID,
        etat
    }
    /* type: SHOW_GRID,
    etat, */
};