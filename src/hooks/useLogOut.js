import { useSignOut } from "react-firebase-hooks/auth"
import { auth } from "../firebase/firebase"
import useShowToast from "./useShowToast";

function useLogOut() {
    const [signOut, isLoggingOut, error] = useSignOut(auth);
    const showToast = useShowToast();

    const handleLogOut = async () =>{
        try{
            await signOut();
            localStorage.removeItem("user-info");
            console.log("loggedout");
        }
        catch(error){
            showToast("Error", error.message, "error");
        }
    }

  return {handleLogOut, isLoggingOut, error}
}

export default useLogOut