import { ADD_COORDS } from './constants';

const addCoordinates =  {
    
    [ADD_COORDS]: (state, action) => {
            return [
                ...state,
                {
                    id: action.id,
                    let: action.let,
                    lng: action.lng
                }
            ]
    }
}

export default addCoordinates;