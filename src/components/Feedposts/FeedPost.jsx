import React, { useState } from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Image, Box } from '@chakra-ui/react'

function FeedPost({img, username, avatar}) {
  return (
    <>
        <PostHeader username = {username} avatar = {avatar}/>
            <Box borderRadius={6} overflow={"hidden"}>
                <Image src = {img} alt = "profile pic"/>
            </Box>
        <PostFooter/>
    </>
  )
}

export default FeedPost