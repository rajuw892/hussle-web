import { GLOBALTYPES } from '../actions/globalTypes'
import { getDataAPI } from '../../utils/fetchData'


export const CONN_TYPES = {
    LOADING: 'LOADING_CONN',
    GET_USERS: 'GET_USERS_CONN',
}

export const getConnections = (token) => async (dispatch) => {
    try {
        dispatch({type: CONN_TYPES.LOADING, payload: true})

        const res = await getDataAPI('connectionsUser', token)
        dispatch({ type: CONN_TYPES.GET_USERS, payload: res.data })

        dispatch({ type: CONN_TYPES.LOADING, payload: false })
        
    } catch (err) {
        dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}})
    }
}