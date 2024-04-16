import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'

export default function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            {/* left hand side */}
            <Box display={{base:"none", md:"block"}}>

            </Box>
        </Container>
    </Flex>
  )
}
