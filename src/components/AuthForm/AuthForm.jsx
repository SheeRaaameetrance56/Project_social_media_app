import { Box, Image, Button, Input, Text, Link, InputGroup, InputRightElement, VStack, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

function AuthForm() {

    const [show, setShow] = useState(false)
    const handleClick = () =>{
        setShow(!show)
    } 

    const [isLogin, setIsLogin] = useState(true)

  return (
    <>
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack>
                <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram'/>
                <Input placeholder={"E-mail"} type='email'/>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                {!isLogin ? (
                    <Input placeholder={"Full Name"} type='text'/>
                ) : null}

                {!isLogin ? (
                    <Input placeholder={"Confirm password"} type='password'/>
                ) : null}

                <Button w={"full"} colorScheme='blue'>
                    {isLogin ? "Log in" : "Sign up"}
                </Button>
                
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