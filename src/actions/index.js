let nextCoordinate = 0;
export const addCoords = (lat, lng) => {
    return {
        type: 'ADD_COORDS',
        id: nextCoordinate,
        lat,
        lng
    }
}