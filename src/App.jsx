import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import PageLayout from "./layouts/PageLayout/PageLayout"
import useAuthStore from "./store/authStore"


function App() {

  const authUser = useAuthStore(state => state.user);

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={authUser ? <HomePage/> : <Navigate to="/auth"/>}/>
        <Route path="/auth" element={!authUser ? <AuthPage/> : <Navigate to="/"/>}/>
        <Route path="/:username" element={<ProfilePage/>}/>
      </Routes>
    </PageLayout>
  )
}

export default App
