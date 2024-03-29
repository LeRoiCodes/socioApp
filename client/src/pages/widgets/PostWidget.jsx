import React, { useState } from 'react'
import { ChatBubbleOutlineOutlined, FavoriteBorderOutlined, FavoriteOutlined, ShareOutlined } from '@mui/icons-material'
import {Box, Divider, IconButton, Typography, useTheme} from '@mui/material'
import FlexBetween from '../../components/FlexBetween'
import Friend from '../../components/Friend'
import WidgetWrapper from '../../components/WidgetWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { setPost } from '../../redux/redux'



function PostWidget({
  postId,
  postUserId,
  name,
  description,
  location,
  imageUrl,
  userImageUrl,
  likes,
  comments}) {

    const {palette} = useTheme()
    const dispatch = useDispatch()
    const token = useSelector((state) => state.token)
    const loggedInUserId = useSelector((state) => state.user._id)
    const isLiked = Boolean(likes[loggedInUserId])
    const likeCount = Object.keys(likes).length



    const main = palette.neutral.main
    const primary = palette.primary.main

    const [isComments, setIsComments] = useState(false)

    const patchLike = async () => {
      const response = await fetch(`http://localhost:5000/posts/${postId}/like`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body : JSON.stringify({userId: loggedInUserId})
      })
      const updatedPost = await response.json();
      dispatch(setPost({post : updatedPost}))
    }
  return (
    <WidgetWrapper m="2rem 0">
      <Friend friendId={postUserId} name={name} subtitle={location} userImageUrl={userImageUrl} />
      <Typography color={main} sx={{mt:"1rem"}} >
        {description}
      </Typography>
      {imageUrl && (
        <img width={"100%"} height={"auto"} alt='post' style={{borderRadius: "0.75rem", marginTop: "0.75rem"}} src={`http://localhost:5000/assets/${imageUrl}`} />
      )}
      <FlexBetween mt={"0.25rem"}>
        <FlexBetween gap={"1rem"}>
          <FlexBetween gap={"0.3rem"}>
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{color: primary}} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>
          <FlexBetween gap={"0.3rem"} >
            <IconButton onClick={() => setIsComments(!isComments)}>
                <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>
      </FlexBetween>
    </WidgetWrapper>
  )
}

export default PostWidget