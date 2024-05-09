import React from 'react'
import { Input, InputGroup, InputRightElement, Button, Alert, AlertIcon } from '@chakra-ui/react'
import { useState } from 'react';
import useSignupWithEmailAndPassword from '../../hooks/useSignupWithEmailAndPassword';

function Signup() {
    const [show, setShow] = useState(false);
    const handleClick = () =>{
        setShow(!show);
    } 

    const [inputs, setInputs] = useState({
        email:'',
        password:'',
        fullName:'',
        confirmPassword:''
    });

    const {loading, error, signup} = useSignupWithEmailAndPassword()

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

        <Input placeholder={"Full Name"} type='text'
            value={inputs.fullName}
            onChange={(e) => setInputs({...inputs,fullName:e.target.value})}
        />

        <Input placeholder={"Confirm password"} type='password'
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}
        />

        {/* {error && (
            <Alert status='error' fontSize={13} borderRadius={4} w={"full"}>
                <AlertIcon fontSize={12}/>
                {error.message}
            </Alert>
        )} */}

        <Button w={"full"} colorScheme='blue' onClick={() => signup(inputs)} isLoading={loading}>
            Signup
        </Button>
    </>
  )
}

export default Signup