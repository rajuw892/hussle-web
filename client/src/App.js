import { useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom' 
import PageRender from './customRouter/PageRender'
import PrivateRouter from './customRouter/privateRouter'
import Home from './pages/home'
import Login from './pages/login'
import Landing from './pages/landing'
import Register from './pages/register'
import Privacy from './pages/privacy'
import About from './pages/about'
import Alert from './components/alert/Alert'
import { useSelector, useDispatch} from 'react-redux'
import { refreshToken } from './redux/actions/authAction'
import Header from './components/header/Header' 
import './App.css'
import FeedModal from './components/FeedModal'
import { getPosts } from './redux/actions/postAction'
import { getSuggestions } from './redux/actions/suggestionsAction'
import { getConnections } from './redux/actions/connectionsAction'
import io from 'socket.io-client'
import { GLOBALTYPES } from './redux/actions/globalTypes'
import SocketClient from './SocketClient'
import { getNotifies } from './redux/actions/notifyAction'
import CallModal from './components/message/CallModal'
import Peer from 'peerjs'


function App() {
  const { auth, feed, call } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())

    const socket = io()
    dispatch({type: GLOBALTYPES.SOCKET, payload: socket})
    return () => socket.close()
  },[dispatch] )


  useEffect(() => {
    if(auth.token) {
      dispatch(getPosts(auth.token))
      dispatch(getSuggestions(auth.token))
      dispatch(getNotifies(auth.token))
      dispatch(getConnections(auth.token))

    }  
  }, [dispatch, auth.token])

  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support dekstop notification");
    }
    else if (Notification.permission === "granted") {}
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {}
      });
    }
  },[])


  useEffect(() => {
    const newPeer = new Peer(undefined, {
      path: '/', secure: true
    })
    
    dispatch({ type: GLOBALTYPES.PEER, payload: newPeer })
  },[dispatch])

   

  return (
    <Router>
      <Alert />
    

    <div className="App">
       <div className="main"> 
           { auth.token && <Header /> }
           {feed && <FeedModal />}
           {auth.token && <SocketClient />}
           {call && <CallModal />}
            
            
            
          <Route exact path="/" component={auth.token ? Home : Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route exact path="/privacy" component={Privacy} />

         <div style={{marginBottom: '60px'}}>
           <PrivateRouter exact path="/:page" component={PageRender} />
           <PrivateRouter exact path="/:page/:id" component={PageRender} />
          
         </div>  
          
          
       

            

       
       
          </div>  
    </div>
    </Router>
  );
}

export default App;
