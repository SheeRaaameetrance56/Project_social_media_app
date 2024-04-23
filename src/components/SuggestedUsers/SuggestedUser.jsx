import { Button, Flex, Avatar, VStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

function SuggestedUser({name, followers, avatar}) {
    const [isFollow, setIsFollow] = useState(false)
    const followHandle = () =>{
        if(!isFollow){
            setIsFollow(true)
        }
        else{
            setIsFollow(false)
        }
    }

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={'full'}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar src={avatar} name={name} size={"md"}/>
            <VStack spacing={2} alignItems={"flex-start"}>
                <Text fontSize={14} fontWeight={"bold"}>{name}</Text>
                <Text fontSize={11} color="gray.500" >{followers} followers</Text>
            </VStack>
        </Flex>
        <Button fontSize={13} bg={"transparent"} h={"max-content"} fontWeight={"medium"} cursor={'pointer'} color={"blue.400"} _hover={{color:"white"}} onClick={followHandle}>{isFollow ? "Unfollow":"Follow"}</Button>
    </Flex>
  )
}

export default SuggestedUser