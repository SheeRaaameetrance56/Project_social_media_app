import React from 'react'
import SuggestedUser from './SuggestedUser'
import { Flex, VStack, Text, Box, Link } from '@chakra-ui/react'
import SuggestedHeader from './SuggestedHeader'

function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>

        <Flex alignItems={"center"} justifyContent={'space-between'} w={'full'}>
            <Text fontSize={13} color={"gray.500"} fontWeight={"bold"}>
                Suggested for you
            </Text>
            <Text fontSize={13} color={"white"} fontWeight={"bold"} _hover={{color:"gray.500"}} cursor={'pointer'}>
                See all
            </Text>
        </Flex>

        <SuggestedUser name="Tylor" followers={6701} avatar = "/profile_img2.jpg"/>
        <SuggestedUser name="Jshua" followers={223} avatar = ""/>
        <SuggestedUser name="Meed" followers={1267} avatar = ""/>
        <SuggestedUser name="Keen" followers={627} avatar = ""/>

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            © 2024 Built by {" "}
            <Link href='https://www.linkedin.com/in/shehan-wijerathne-66124120a' target='blank' color={"blue.500"} fontSize={12}>Shehan Wijerathna</Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers