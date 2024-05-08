import React from 'react'
import {auth, firestore} from '../firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'

function useSignupWithEmailAndPassword() {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const signup = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.fullName || !inputs.confirmPassword) {
            console.log("All fields are required");
            return ;
        }
        else if(inputs.password !== inputs.confirmPassword){
            console.log("Your password not match with confirmation");
            return ;
        }
    
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
    
            if (!newUser) {
                console.log("User creation failed");
                return ;
            }
    
            const userDoc = {
                uid: newUser.user.uid,
                email: inputs.email,
                fullName: inputs.fullName,
                bio: "",
                profilePicUrl: "",
                followers: [],
                following: [],
                posts: [],
                createdAt: new Date().toISOString() 
            };
    
            await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
            localStorage.setItem("user-info", JSON.stringify(userDoc));
            return;

        } catch (error) {
            console.error("Signup error:", error.message);
            return ;
        }
    };
  return {loading, error, signup}
  
}

export default useSignupWithEmailAndPassword