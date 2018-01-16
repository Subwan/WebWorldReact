import { combineReducers } from 'redux';

import coordReducer from './addCoordinstes';


const webWorldApp = combineReducers({
    coords: coordReducer
})

export default webWorldApp;