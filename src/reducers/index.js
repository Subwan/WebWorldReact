import { combineReducers } from 'redux';

import coordReducer from './addCoordinstes';


const webWorldApp = combineReducers({
    coordReducer
})

export default webWorldApp;