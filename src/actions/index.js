import { ADD_COORDS } from '../reducers/constants';

export const addCoords = (lat, lng) => {
    return {
        type: ADD_COORDS,
        data: {
            lat,
            lng
        }
    }
}