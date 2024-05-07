import { Avatar, AvatarGroup, Button, Flex, VStack, Text } from '@chakra-ui/react'
import React from 'react'

function ProfileHeader() {
  return (
    <Flex gap={{base:4, sm:10}} py={10} direction={{base:"column", sm:"row"}}>

      <AvatarGroup size={{base:"xl", md:"2xl"}} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
        <Avatar name='shehan' src='/profile_img.jpg' />
      </AvatarGroup>

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>

        <Flex gap={4} direction={"column"} alignItems={{base:"center", sm:"start"}} w={"full"}>
          <Text size={{base:"sm", md:"lg"}}>@shehan</Text>

          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button bg={"white"} color={"black"} _hover={{bg:"whitleAlpha.800"}} size={{base:"xs", md:"sm"}}>
              Edit Profile
            </Button>
          </Flex>

          <Flex alignItems={"center"} gap={{base:2, sm:4}}>
            <Text>
              <Text as={"span"} fontWeight={"bold"} mr={1}>49</Text>
              Posts
            </Text>
            
            <Text>
              <Text as={"span"} fontWeight={"bold"} mr={1}>333</Text>
              Followers
            </Text>

            <Text>
              <Text as={"span"} fontWeight={"bold"} mr={1}>43</Text>
              Following
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={4}>
            <Text fontWeight={"bold"}>Shehan</Text>
            
          </Flex>
          <Text>This is a bio description</Text>
        </Flex>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader