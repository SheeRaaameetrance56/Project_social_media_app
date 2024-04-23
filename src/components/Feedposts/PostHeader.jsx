import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import { color } from 'framer-motion'
import React from 'react'

function PostHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
        <Flex alignItems={"center"} gap={2} >
            <Avatar src="/profile_img.jpg" alt="profile pic" size={"sm"}/>
            <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                Shehan
                <Box color={"gray.500"} mx={1}>
                    • 1W
                </Box>
            </Flex>
        </Flex>
        <Box  cursor={"pointer"}>
            <Text fontSize={14} fontWeight={"bold"} color={"blue.400"} _hover={{color:"white"}} transition={"0.2s ease-in-out"}>
                Unfollow
            </Text>
        </Box>
    </Flex>
  )
}

export default PostHeader