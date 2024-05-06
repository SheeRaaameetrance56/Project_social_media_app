import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";

function ProfileTabs() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} my={5} w={"full"} gap={{base:4, sm:10}} fontWeight={"bold"} textTransform={"uppercase"}>
        <Flex borderTop={"1px solid white"} alignItems={'center'} p="3" gap={1} cursor={'pointer'}>
            <Box fontSize={20}>
                <BsGrid3X3/>
            </Box>
            <Text fontSize={12} display={{base:"none", sm:"block"}}>Posts</Text>
        </Flex>
        
        <Flex borderTop={"1px solid white"} alignItems={'center'} p="3" gap={1} cursor={'pointer'}>
            <Box fontSize={20}>
                <BsBookmark/>
            </Box>
            <Text fontSize={12} display={{base:"none", sm:"block"}}>Saved</Text>
        </Flex>

        <Flex borderTop={"1px solid white"} alignItems={'center'} p="3" gap={1} cursor={'pointer'}>
            <Box fontSize={20}>
                <BsSuitHeart/>
            </Box>
            <Text fontSize={12} display={{base:"none", sm:"block"}}>Likes</Text>
        </Flex>
    </Flex>
  )
}

export default ProfileTabs