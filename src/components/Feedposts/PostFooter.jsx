import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NotificationsLogo, UnlikeLogo, CommentLogo } from '../../assets/Constants'

function PostFooter({userName, isProfilePage}) {
    const [liked, setLiked] = useState(true)
    const [likes, setLikes] = useState(0)

    const likeHandle = () => {
        if(liked){
            setLiked(false)
            setLikes(likes +1)
        }
        else{
            setLiked(true)
            setLikes(likes -1)
        }
    }

  return (
    <Box mb={10} marginTop={"auto"}>
    <Flex w={"full"} gap={4} alignItems={"center"} pt={0} mb={2} mt={4} justifyContent={'space-between'}>
        <Box onClick={likeHandle} cursor={'pointer'} fontSize={18}>
            { liked ? (<NotificationsLogo/>) : (<UnlikeLogo/>) }
        </Box>

        <Box fontSize={18}>
            <Flex gap={2} alignItems={'center'}>
                <Text fontSize={12} fontWeight={700} color={"gray.500"}>0 Comments</Text>
                <Box cursor={'pointer'}>
                    <CommentLogo/>
                </Box>
            </Flex>
        </Box>
    </Flex>

    <Text fontSize={"sm"} fontWeight={600}>
        {likes} Likes
    </Text>

    <Text as={'span'} fontSize={"sm"} fontWeight={700}>
        Caption
    </Text>

    {!isProfilePage && (
        <>
        <Text fontSize={"sm"} color={"gray.500"} cursor={'pointer'}>
            View all comments
        </Text>

        <Flex alignItems={"center"} gap={2} w={"full"} justifyContent={"space-between"} my={2}>
            <InputGroup>
                <Input varient="flushed" placeholder={"Add a comment...."} fontSize={14}/>
                <InputRightElement>
                    <Button fontSize={14} color={"blue.500"} fontWeight={600} cursor={'pointer'} _hover={{color:"white"}} bg={"transparent"} mr={3}>Post</Button>
                </InputRightElement>
            </InputGroup>
        </Flex>
        </>
    )}

    </Box>
  )
}

export default PostFooter