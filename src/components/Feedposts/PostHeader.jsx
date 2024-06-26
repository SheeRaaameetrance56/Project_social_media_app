import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import { color } from 'framer-motion'
import React, { useState } from 'react'

function PostHeader( {username, avatar} ) {
    const[follow, setFollow] = useState(true);

    const followHandle = () =>{
        if(follow){
            setFollow(false);
        }else{
            setFollow(true)
        }
    }

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
        <Flex alignItems={"center"} gap={2} >
            <Avatar src={avatar} alt="profile pic" size={"sm"}/>
            <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                {username}
                <Box color={"gray.500"} mx={1}>
                    • 1W
                </Box>
            </Flex>
        </Flex>
        <Box  cursor={"pointer"}>
            <Text fontSize={14} fontWeight={"bold"} color={"blue.400"} _hover={{color:"white"}} transition={"0.2s ease-in-out"} onClick={followHandle}>
                {follow?"Unfollow":"Follow"}
            </Text>
        </Box>
    </Flex>
  )
}

export default PostHeader