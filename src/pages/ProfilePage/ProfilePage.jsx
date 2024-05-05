import { Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ProfileHeader from '../../components/ProfileComponents/ProfileHeader/ProfileHeader'

function ProfilePage() {
  return (
    <Container maxW={Container.lg} py={5}>
        <Flex py={10} px={4} pl={{base:4,md:10}} w={"full"} mx={"auto"} flexDirection={"column"}>
            <ProfileHeader/>
        </Flex>
        <Flex>
            Profile post
        </Flex>
    </Container>
  )
}

export default ProfilePage