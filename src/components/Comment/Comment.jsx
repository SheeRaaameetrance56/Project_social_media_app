import { Avatar, Flex, VStack } from '@chakra-ui/react'
import React from 'react'

function Comment() {
  return (
    <Flex>
        <Flex>
            <Avatar src='/profile_img.jpg' alt="profilefriend"/>
        </Flex>
    </Flex>
  )
}

export default Comment