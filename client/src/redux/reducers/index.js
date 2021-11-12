import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import profile from './profileReducer'
import feed from './feedReducer'
import homePosts from './postReducer'
import detailPost from './detailPostReducer'
import suggestions from './suggestionsReducer'
import connections from './connectionsReducer'
import socket from './socketReducer'
import notify from './notifyReducer'
import message from './messageReducer'
import online from './onlineReducer'
import call from './callReducer'
import peer from './peerReducer'

export default combineReducers({
    auth,
    alert,
    profile,
    feed,
    homePosts,
    detailPost,
    suggestions,
    connections,
    socket,
    notify,
    message,
    online,
    call,
    peer


})