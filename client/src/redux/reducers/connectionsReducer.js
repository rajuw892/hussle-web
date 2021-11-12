import { CONN_TYPES } from '../actions/connectionsAction'

const initialState = {
    loading: false,
    users: []
}

 

const connectionsReducer = (state = initialState, action) => {
     switch (action.type){
        case CONN_TYPES.LOADING:
             return {
                 ...state,
                 loading: action.payload
             };

        case CONN_TYPES.GET_USERS:
             return {
                ...state,
                users: action.payload.users
             };
        default:
            return state;     
     }  
}

export default connectionsReducer
