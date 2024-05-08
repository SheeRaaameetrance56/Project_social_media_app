import { Box, Image, Button, Input, Text, InputGroup, InputRightElement, VStack, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);

  return (
    <>
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack>
                <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram'/>

                {isLogin? (<Login/>):(<Signup/>)}
                
                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>
                    <Text mx={1} color={"white"}>OR</Text>
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>
                </Flex>

                <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                    <Image src='/google.png' w={5} alt='Google Logo'/>
                    <Text mx={2} color={"blue.500"}>{isLogin ? " Log in":" Sign up"} with google</Text>
                </Flex>
            </VStack>
        </Box>

        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Box mx={2}>
                    {isLogin ? "Don't have an account?":"Already have an account?"}
                </Box>
                <Box color={"blue.500"} cursor={"pointer"} onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Sign up":"Log in"}
                </Box>
            </Flex>
        </Box>

    </>
  )
}

export default AuthForm