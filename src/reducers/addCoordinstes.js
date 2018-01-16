import { ADD_COORDS } from './constants';

const initialState = {
    markers: [{ lat: 51.667242, lng: 39.195113 }]
}

const ACTION_HANDLERS = {

    [ADD_COORDS]: (state = [], action) => {
        const markers = [...state.markers];
        markers.push(action.data);
        return ({
            ...state,
            markers
        })
    }
}

export default function coordReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}