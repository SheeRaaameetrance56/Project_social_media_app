import React from 'react'
import {auth, firestore} from '../firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import useShowToast from './useShowToast';

function useSignupWithEmailAndPassword() {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const showToast = useShowToast();

      const signup = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.fullName || !inputs.confirmPassword) {
            console.log("All fields are required");
            showToast("Empty fields", "Please enter your details on all fealds", "error")
            return ;
        }
        else if(inputs.password !== inputs.confirmPassword){
            console.log("Your password not match with confirmation");
            showToast("Password confirm error", "Your password not match with confirmation", "error")
            return ;
        }
    
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
    
            if (!newUser) {
                console.log("User creation failed");
                showToast("Error", "Failed to create new user", "error")
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
            showToast("Signup Account", "Your account created successfully", "success");
            return;

        } catch (error) {
            console.error("Signup error:", error.message);
            showToast("Signup error:", error.message, "error")
            return ;
        }
    };
  return {loading, error, signup}
  
}

export default useSignupWithEmailAndPassword