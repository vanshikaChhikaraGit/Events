import { useState, useEffect } from "react";
import { useEventStore } from "@/store/useEventStore";
import { Calendar,MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";

const Events = () => {
  const { events, loadingEvents, getAllEvents } = useEventStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const eventsPerPage = 3;

  useEffect(() => {
    getAllEvents();
  }, []);

  const handleNavigation = (direction) => {
    if (!events || events.length === 0) return;

    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? events.length - eventsPerPage : prevIndex - 1;
      } else if (direction === "right") {
        return prevIndex >= events.length - eventsPerPage ? 0 : prevIndex + 1;
      }
      return prevIndex;
    });
  };

  if (loadingEvents) return <div><ShimmerUI></ShimmerUI></div>;
  if (!events || events.length === 0) return <div>No events found.</div>;

  const visibleEvents = events.slice(currentIndex, currentIndex + eventsPerPage);
 
  console.log(events)
  return (
    <div className="container w-full flex justify-center items-center">
    {/* Left Arrow Button */}
    <button className="arrow-button left m-3 text-3xl text-white font-bold cursor-pointer" onClick={() => handleNavigation("left")}>
      {"<"}
    </button>

    <div className="event-list w-screen flex items-center justify-center gap-5 overflow-hidden relative">
      <AnimatePresence>
        {visibleEvents.map((event, index) => (
          <motion.div
            key={event.eventname} // Unique key to ensure animation works correctly
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="event-card flex-1 m-3 p-5 min-w-[250px] max-w-[400px]"
          >
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
          </motion.div>
        ))}
      </AnimatePresence>
    </div>

    {/* Right Arrow Button */}
    <button className="arrow-button right m-3 text-3xl text-white font-bold cursor-pointer" onClick={() => handleNavigation("right")}>
      {">"}
    </button>
  </div>
  );
};

export default Events;


