import React,{ useState, useEffect } from 'react'
import {Link } from 'react-router-dom'
import LikeButton from '../../LikeButton'
import { useSelector, useDispatch} from 'react-redux'
import { likePost, unLikePost } from '../../../redux/actions/postAction'
import ShareModal from '../../ShareModal'
import { BASE_URL } from '../../../utils/config'


const CardFooter = ({post}) => {
    const [isLike, setIsLike] =  useState(false)
    const [loadLike, setLoadLike] =  useState(false)

    const [isShare, setIsShare] = useState(false)

    const { auth, socket } = useSelector(state => state )
    const dispatch = useDispatch()

    useEffect(() => {
       if(post.likes.find(like => like._id === auth.user._id)){
           setIsLike(true)
       }
    }, [post.likes, auth.user._id])

    const handleLike = async () => {
        if(loadLike) return;
        setIsLike(true)
        setLoadLike(true)
        await dispatch(likePost({post, auth, socket}))
        setLoadLike(false)
     }
    const handleUnLike = async () => {
        if(loadLike) return;
        setIsLike(false)
        
        setLoadLike(true)
        await dispatch(unLikePost({post, auth, socket}))
        setLoadLike(false)
     }

    return (     
        <div className="card_footer">
          <div className="lineHorizontal__container">
          <div className="lineHorizontal"></div>
          </div>
            <div className="card_icon_menu">
                <div> 
                <LikeButton
                isLike={isLike}
                handleLike={handleLike}
                handleUnLike={handleUnLike}
                />

                <Link to ={`/post/${post._id}`} className="text-secondary">
                    <i className="far fa-comment" />
                </Link>

                <i className="far fa-share-square text-secondary" onClick={() => setIsShare(!isShare)} />
                </div>
            </div>
            <div className="d-flex justify-content-between">
                 <h6 style={{padding: '0 26px', cursor: 'pointer'}}>
                 {post.likes.length} likes
                 </h6>

                 <h6 style={{padding: '0 25px', cursor: 'pointer'}}>
                 {post.comments.length} comments
                 </h6>
            </div>
            {
                isShare && 
                <ShareModal url={`${BASE_URL}/post/${post._id}`}/>

            }
        </div>
    )
}

export default CardFooter
