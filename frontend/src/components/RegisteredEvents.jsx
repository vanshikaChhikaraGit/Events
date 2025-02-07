import { useEventStore } from '@/store/useEventStore'
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { IndianRupee, MapPin } from 'lucide-react'
import Error from '@/skeletons/Error'

const RegisteredEvents = () => {
    const { registeredEvents,getRegisteredEvents,loadingEvents } = useEventStore()
    useEffect(()=>{
        getRegisteredEvents()
    },[])

    if(loadingEvents)return <div>Loading</div>
    if(!registeredEvents||registeredEvents.length==0)return <div><Error></Error></div>
  return (
    <div className='m-5'>
    <Navbar></Navbar>
    <ul className='m-15'>
    {registeredEvents.map((event,index)=>(
         <li className='border-2 rounded-lg border-gray-800 p-5'>
         <div className='flex justify-between'>
            <div>
            <h1 className='text-xl font-bold m-2'>{event.eventname}</h1>
           <div className='flex m-2'><MapPin></MapPin><h2>{event.venue}</h2></div>
           <div className='flex m-2'><IndianRupee></IndianRupee><h2 className='font-semibold text-xl'>{event.price} onwards</h2></div>
           
            </div>
            <div>
                <img src={event.image} className='w-full h-30 object-contain overflow-hidden rounded-lg'></img>
            </div>
         </div>
          
         </li>
         
         ))}
    </ul>
    </div>
  )
}

export default RegisteredEvents