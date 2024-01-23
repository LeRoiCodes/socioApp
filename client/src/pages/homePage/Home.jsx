import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar'
import { useSelector } from 'react-redux'
import UserWidget from '../widgets/UserWidget'
import MyPostWidget from '../widgets/MyPostWidget'

function Home() {
  const isNotMobile = useMediaQuery("(min-width:1000px)")
  const {_id, imageUrl} = useSelector((state) => state.user)
  return (
    <Box>
      <Navbar />
      <Box width={"100%"} padding={"2rem 6%"} display={isNotMobile ? "flex" : "block"} gap={"0.5rem"} justifyContent={"space-between"}>
        <Box flexBasis={isNotMobile ? "26%" : undefined}>
          <UserWidget userId={_id} imageUrl={imageUrl}/>
        </Box>
        <Box flexBasis={isNotMobile ? "42%" : undefined} mt={isNotMobile ? undefined : "2rem"}>
          <MyPostWidget imageUrl={imageUrl} />
        </Box>
          {isNotMobile && (
            <Box flexBasis={"26%"}></Box>
          ) }
      </Box>
    </Box>
  )
}

export default Home