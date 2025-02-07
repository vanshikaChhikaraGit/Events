import { Navigate, Route,Routes } from "react-router-dom"
import Landing from "./components/Landing"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import { Toaster } from "react-hot-toast"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"
import { Loader } from "lucide-react"
import EventById from "./components/eventById"
import FilterEvents from "./components/FilterEvents"
import Navbar from "./components/Navbar"
import AddEvent from "./components/AddEvent"
import RegisteredEvents from "./components/RegisteredEvents"

function App() {
  const{ authUser,checkAuth,ischeckingAuth } = useAuthStore()

  useEffect(()=>{
   checkAuth()
  },[checkAuth])

  if(ischeckingAuth&&!authUser){
    return (
     <div className="flex items-center justify-center h-screen">
       <Loader className="size-10 animate-spin"></Loader>
     </div>
    )
 }

  return (
  <div className="bg-[#0a070e] text-white min-h-screen">
  
    <Routes>
      
      <Route path="/" element={authUser?<Home></Home>:<Navigate to={"/signup"}></Navigate>}></Route>
      <Route path="/signup" element={!authUser?<Signup></Signup>:<Navigate to={"/"}></Navigate>}></Route>
      <Route path="/login" element={!authUser?<Login></Login>:<Navigate to={"/"}></Navigate>}></Route>
      <Route path="/event/:id" element={<EventById></EventById>}></Route>
      <Route path="/events/:category" element={<FilterEvents></FilterEvents>}></Route>
      <Route path="/listyourevent" element={<AddEvent></AddEvent>}></Route>
      <Route path="/yourregisteredevent" element={<RegisteredEvents></RegisteredEvents>}></Route>
    </Routes>
    <Toaster></Toaster>
  </div>
  )
}

export default App
