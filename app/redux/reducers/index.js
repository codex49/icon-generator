import { combineReducers }  from 'redux';

import backgrounds from './Backgrounds';
import board from './Board';
import icons from './Icons';

export default combineReducers({
    backgrounds,
    board,
    icons,
});