import React from 'react'
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { useState } from 'react';

function Login() {
    const [show, setShow] = useState(false);
    const handleClick = () =>{
        setShow(!show);
    } 

    const [inputs, setInputs] = useState({
        email:'',
        password:''
    });

  return (
    <>
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

        <Button w={"full"} colorScheme='blue'>
            Login
        </Button>
    </>
  )
}

export default Login