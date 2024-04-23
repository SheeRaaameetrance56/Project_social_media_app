import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Image, Box } from '@chakra-ui/react'

function FeedPost() {
  return (
    <>
        <PostHeader/>
            <Box>
                <Image src = "/profile_img.jpg" alt = "profile pic"/>
            </Box>
        <PostFooter/>
    </>
  )
}

export default FeedPost