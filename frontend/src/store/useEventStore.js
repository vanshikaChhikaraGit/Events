import { axiosInstance } from "@/lib/axios"
import { create } from "zustand"

export const useEventStore = create((set)=>({
    events:null,
    loadingEvents:true,
    eventWithId:null,
    registeredEvents:null,
    getAllEvents:async()=>{
        try {
            const res = await axiosInstance.get("/events/getevents")
            set({events:res.data})
        } catch (error) {
            console.log("error in check get events component",error)
           set({ events:null })
        } finally{
            set({loadingEvents:false})
        }
    },
    getEventID: async (id) => {
        try {
            if (!id) return; // Prevent unnecessary API calls
    
            set({ loadingEvents: true });
    
            const res = await axiosInstance.get(`/events/geteventbyid/${id}`);
    
            set({ eventWithId: res.data });
        } catch (error) {
            console.error("Error in getEventID:", error);
            set({ eventWithId: null });
        } finally {
            set({ loadingEvents: false });
        }
    },
    getRegisteredEvents: async()=>{
      try {
        set({ loadingEvents: true });
        const res = await axiosInstance.get("events/userregisteredevents")
         set({registeredEvents: res.data})
      } catch (error) {
        console.error("Error in getRegisteredEvents :", error);
      } finally{
        set({ loadingEvents: false });
      }
    },
    
}))