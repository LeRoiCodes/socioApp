import React, {useEffect} from 'react'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../../redux/redux'
import PostWidget from './PostWidget'

function PostsWidget({userId, isProfile=false}) {

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts)
    const token = useSelector((state) => state.token)

    const getPosts  = async () => {
        const response = await fetch("http://localhost:5000/posts", {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
        })
        const data = await response.json()
        dispatch(setPosts({posts: data}))
    }
    const getUserPosts  = async () => {
        const response = await fetch(`http://localhost:5000/posts/${userId}/posts`, {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
        })
        const data = await response.json()
        dispatch(setPosts({posts: data}))
    }

    useEffect(() => {
        if(isProfile) {
            getUserPosts();
        } else {
            getPosts()
        }
    }, [])

  return (
    <>
        {posts.map(
            ({
                _id, userId, firstName, lastName, description,location, imageUrl, userImageUrl, likes, comments
            }) => (
                <PostWidget
                key={_id}
                postId={_id}
                postUserId={userId}
                name={`${firstName} ${lastName}`}
                description={description}
                location={location}
                imageUrl={imageUrl}
                userImageUrl={userImageUrl}
                likes={likes}
                comments={comments}
                 />
            ))}
    </>
  )
}

export default PostsWidget