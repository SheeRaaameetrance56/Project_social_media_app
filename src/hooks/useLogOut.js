import { useSignOut } from "react-firebase-hooks/auth"
import { auth } from "../firebase/firebase"
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

function useLogOut() {
    const [signOut, isLoggingOut, error] = useSignOut(auth);
    const showToast = useShowToast();
    const logOutUser = useAuthStore((state) => state.logout);

    const handleLogOut = async () =>{
        try{
            await signOut();
            localStorage.removeItem("user-info");
            logOutUser();
            console.log("loggedout");  
        }
        catch(error){
            showToast("Error", error.message, "error");
        }
    }

  return {handleLogOut, isLoggingOut, error}
}

export default useLogOut