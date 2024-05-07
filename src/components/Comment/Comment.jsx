import { Avatar, Flex, Text, VStack} from '@chakra-ui/react'
import React from 'react'

function Comment({createdAt, userName, profilePic, text}) {
  return (
    <Flex gap={4}>
        <Avatar src={profilePic} name={userName} size={"sm"}/>
        <Flex direction={"column"} >
            <Flex gap={2}>
                <VStack justifyContent={"center"} alignItems={"flex-start"}>
                    <Text fontWeight={"bold"} fontSize={12}>{userName}</Text>
                    <Text fontSize={14}>{text}</Text>
                    <Text fontSize={11} color={"gray"}>{createdAt}</Text>
                </VStack>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Comment