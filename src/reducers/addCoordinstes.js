const addCoordinates = (state = [], action) => {
    switch (action.tipe) {
        case 'ADD_COORDS':
            return [
                ...state,
                {
                    id: action.id,
                    let: action.let,
                    lng: action.lng
                }
            ]
        default:
            return state
    }
}

export default addCoordinates;