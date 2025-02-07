import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Categories } from '@/skeletons/Categories';
import { CloudCog } from 'lucide-react';
import { useEventStore } from '@/store/useEventStore';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { MapPin } from 'lucide-react';
import Navbar from './Navbar';
const FilterEvents = () => {
    const { events } = useEventStore()
    const { category } = useParams(); // Get category from URL
    const navigate = useNavigate()
    const categories = ["comedy","music","workshops","conference","adventure","festival","storytelling & poetry"]
    // Filter events by category
    const filteredEvents = events.filter(event => event.category === category.toLowerCase());

    return (
        <div className="container mx-auto p-6">
            {/* Category Section */}
            <Navbar></Navbar>
            <ul className='flex space-x-6 items-center justify-center'>
            <span className='text-gray-400 text-sm'>Genre:</span>
            {categories.map((item,index)=>{
                return (<li className={`border-2 border-red-700 rounded-lg p-2 cursor-pointer ${item==category.toLowerCase()?"bg-red-700":""}`} onClick={()=> navigate(`/events/${item.toLowerCase()}`)}> {item}</li>)
            })}
            </ul>

            {/* Filtered Events */}
            <div className="grid grid-cols-3 gap-6 mt-6">
                {filteredEvents.map((event, index) => (
                    <Link to={`/event/${event._id}`}> <div className="flex flex-col cursor-pointer rounded-2xl border-2 border-gray-700 p-4 w-full h-full">
              <img src={event.image} alt="event-image" className="w-full h-55 object-cover rounded-lg" />
              <h3 className="text-lg font-bold mt-4 text-white">{event.eventname}</h3>
              <div className="flex items-center mt-3">
                <Calendar className="size-5 mr-3 text-white" />
                <span className="text-gray-400">{event.date}</span>
              </div>
              <div className="flex items-center mt-3">
                <MapPin className="size-5 mr-3 text-white" />
                <span className="text-gray-400">{event.venue}</span>
              </div>
              <div className="bg-sky-500 p-2 mt-4 border rounded-lg flex justify-between">
                <h1 className="text-white font-semibold">₹{event.price} onwards</h1>
                <h1>
                  <span className="text-gray-400 mr-2">|</span>
                  {"Buy Now"}
                </h1>
              </div>
            </div>
            </Link> 
                ))}
            </div>
        </div>
    )
}

export default FilterEvents