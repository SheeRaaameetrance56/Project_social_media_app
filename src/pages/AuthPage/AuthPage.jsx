import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'

export default function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>

            {/* left hand side */}
            <Box display={{base:"none", md:"block"}}>
                <Image src='/auth.png' h={650} alt='Phone img'/>
            </Box>

            {/* right hand side */}
            <VStack spacing={4} align={"stretch"}>
                <AuthForm/>
            </VStack>
        </Container>
    </Flex>
  )
}
