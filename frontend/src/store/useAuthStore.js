import{ create }from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast"

export const useAuthStore = create((set,get)=>({
    authUser:null,
    isSigningIn:false,
    isLoggingIn:false, 
    ischeckingAuth:true,

    checkAuth: async()=>{
        try {
           const res = await axiosInstance.get("/auth/checkauth")
           set({ authUser:res.data })
        } catch (error) {
           console.log("error in check auth component",error)
           set({ authUser:null })
       } finally{
           set({ ischeckingAuth:false })
       }
   },
   signup: async(data)=>{
    console.log('Signing in...');
    set({ isSigningIn:true })
   try {
    const res = await axiosInstance.post("/auth/signup",data)
    console.log('Signup successful', res.data); 
    set({ authUser:res.data })
    toast.success("Account Created Successfully")
    get().connectSocket()
   } catch (error) {
    toast.error(error.response.data.message)
   } finally{
    set({ isSigningIn:false })
   }
},
login: async(data)=>{
   set({ isLoggingIn:true })
   try {
    const res = await axiosInstance.post("/auth/login",data)
    set({ authUser:res.data })
    toast.success("Logged In Successfully")
    get().connectSocket()
   } catch (error) {
    toast.error(error.response.data.message)
   } finally{
    set({ isLoggingIn:false })
   }

},
}))