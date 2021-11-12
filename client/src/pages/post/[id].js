import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { getPost } from '../../redux/actions/postAction'
import LoadIcon from '../../images/Loading.gif'
import PostCard from '../../components/PostCard'


const Post = () => {
    const { id } = useParams()
    const [post, setPost] = useState([])

    const { auth, detailPost } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getPost({detailPost, id, auth}))

       if(detailPost.length > 0){
           const newArr = detailPost.filter(post => post._id === id)
           setPost(newArr)
       }
    },[detailPost, dispatch, id, auth])
    return (
        <div className="post" style={{marginLeft: '10%', marginRight: '10%'}}>
          {
             post.length === 0 &&
             <img src={LoadIcon} alt="loading" className="d-block mx-auto my-3"/>
          }

          {
              post.map(item => (
                  <PostCard key={item._id} post={item} />
              ))
          }
            
        </div>
    )
}

export default Post
