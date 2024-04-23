import { Flex, Avatar, Box, Text, Link } from '@chakra-ui/react'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'


function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar name='as a programmer' src="/profile_img.jpg" alt="profile pic" size={"md"}/>
            <Text fontSize={16} fontWeight={"bold"}>
                Shehan
            </Text>
        </Flex>
        <Link as={RouterLink} to={"/auth"} fontSize={14} fontWeight={"medium"} color={"blue.600"} cursor={'pointer'} style={{textDecoration:"none"}}>
            Log out
        </Link>
    </Flex>
  )
}

export default SuggestedHeader