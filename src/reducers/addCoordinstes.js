import { ADD_COORDS } from './constants';

const initialState = {
    coords: [{ lat: 51.667242, lng: 39.195113 }]
}

const ACTION_HANDLERS = {

    [ADD_COORDS]: (state = [], action) => {
        const coords = state.coords.push(action.data);
        return [
            ...state,
            coords
        ]
    }
}

export default function coordReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}