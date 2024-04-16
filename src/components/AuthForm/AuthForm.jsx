import { Box, Image, Button, Input, Text, InputGroup, InputRightElement, VStack, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthForm() {

    const [show, setShow] = useState(false);
    const handleClick = () =>{
        setShow(!show);
    } 

    const [isLogin, setIsLogin] = useState(true);

    const [inputs, setInputs] = useState({
        email:'',
        password:'',
        fullName:'',
        confirmPassword:''
    });

    const handleAuthLog = () => {
        if(!inputs.email || !inputs.password){
            alert("Email and password required");
            return
        }
        navigate("/");
    }

    const handleAuthSign = () => {
        if(!inputs.email || !inputs.password || !inputs.fullName || !inputs.confirmPassword){
            alert("All credentials must required");
            return
        }
        navigate("/");
    }

    const navigate = useNavigate();

  return (
    <>
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack>
                <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram'/>
                <Input placeholder={"E-mail"} type='email'
                    value={inputs.email}
                    onChange={(e) => setInputs({...inputs,email:e.target.value})}
                />
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs,password:e.target.value})}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                {!isLogin ? (
                    <Input placeholder={"Full Name"} type='text'
                        value={inputs.fullName}
                        onChange={(e) => setInputs({...inputs,fullName:e.target.value})}
                    />
                ) : null}

                {!isLogin ? (
                    <Input placeholder={"Confirm password"} type='password'
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}
                    />
                ) : null}

                <Button w={"full"} colorScheme='blue' onClick={isLogin? (handleAuthLog):(handleAuthSign)}>
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