import React from 'react'
import {auth} from 'firebase/auth'
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'

const useSignupWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      
  return 
}

export default useSignupWithEmailAndPassword