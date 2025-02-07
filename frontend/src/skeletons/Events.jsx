import { useState, useEffect } from "react";
import { useEventStore } from "@/store/useEventStore";
import { Calendar,MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";

const Events = () => {
  const { events, loadingEvents, getAllEvents } = useEventStore();
// const events = [
//     {
//         "attendees": "3",
//     "category" :  "comedy",
//     "createdAt": "2025-02-05T20:18:18.726Z",
//     "createdBy" : "67a3a3eee4416661f18c02d7",
//     "date": "06/02/2025",
//     "description": "Standup show featuring Ravi Gupta",
//     "eventname" :  "Kal ki chinta nahi karta",
//     "image" : "https://res.cloudinary.com/dg881ug7n/image/upload/v1738786697/wdbvs0epwuctymnohslt.jpg",
//    "language" : "hindi",
//    "price" :  "799",
//    "updatedAt": "2025-02-05T20:38:32.898Z",
//    "venue" : "XO Club Dwarka, Delhi",
//     "_id" : "67a3c78afa536adb4d8adbbe"},
//     {"attendees": "3",
//         "category" :  "comedy",
//         "createdAt": "2025-02-05T20:18:18.726Z",
//         "createdBy" : "67a3a3eee4416661f18c02d7",
//         "date": "06/02/2025",
//         "description": "Standup show featuring Ravi Gupta",
//         "eventname" :  "Kal ki chinta nahi karta",
//         "image" : "https://res.cloudinary.com/dg881ug7n/image/upload/v1738786697/wdbvs0epwuctymnohslt.jpg",
//        "language" : "hindi",
//        "price" :  "799",
//        "updatedAt": "2025-02-05T20:38:32.898Z",
//        "venue" : "XO Club Dwarka, Delhi",
//         "_id" : "67a3c78afa536adb4d8adbbe"},
//         {"attendees": "3",
//             "category" :  "comedy",
//             "createdAt": "2025-02-05T20:18:18.726Z",
//             "createdBy" : "67a3a3eee4416661f18c02d7",
//             "date": "06/02/2025",
//             "description": "Standup show featuring Ravi Gupta",
//             "eventname" :  "Kal ki chinta nahi karta",
//             "image" : "https://res.cloudinary.com/dg881ug7n/image/upload/v1738786697/wdbvs0epwuctymnohslt.jpg",
//            "language" : "hindi",
//            "price" :  "799",
//            "updatedAt": "2025-02-05T20:38:32.898Z",
//            "venue" : "XO Club Dwarka, Delhi",
//             "_id" : "67a3c78afa536adb4d8adbbe"},
//             {"attendees": "3",
//                 "category" :  "comedy",
//                 "createdAt": "2025-02-05T20:18:18.726Z",
//                 "createdBy" : "67a3a3eee4416661f18c02d7",
//                 "date": "06/02/2025",
//                 "description": "Standup show featuring Ravi Gupta",
//                 "eventname" :  "Kal ki chinta nahi karta",
//                 "image" : "https://res.cloudinary.com/dg881ug7n/image/upload/v1738786697/wdbvs0epwuctymnohslt.jpg",
//                " language" : "hindi",
//                " price" :  "799",
//                " updatedAt": "2025-02-05T20:38:32.898Z",
//                " venue" : "XO Club Dwarka, Delhi",
//                 "_id" : "67a3c78afa536adb4d8adbbe"},
//                 {"attendees": "3",
//                     "category" :  "comedy",
//                     "createdAt": "2025-02-05T20:18:18.726Z",
//                     "createdBy" : "67a3a3eee4416661f18c02d7",
//                     "date": "06/02/2025",
//                     "description": "Standup show featuring Ravi Gupta",
//                     "eventname" :  "Kal ki chinta nahi karta",
//                     "image" : "https://res.cloudinary.com/dg881ug7n/image/upload/v1738786697/wdbvs0epwuctymnohslt.jpg",
//                    " language" : "hindi",
//                    " price" :  "799",
//                    " updatedAt": "2025-02-05T20:38:32.898Z",
//                    " venue" : "XO Club Dwarka, Delhi",
//                     "_id" : "67a3c78afa536adb4d8adbbe"},
//                     {"attendees": "3",
//                         "category" :  "comedy",
//                         "createdAt": "2025-02-05T20:18:18.726Z",
//                         "createdBy" : "67a3a3eee4416661f18c02d7",
//                         "date": "06/02/2025",
//                         "description": "Standup show featuring Ravi Gupta",
//                         "eventname" :  "Kal ki chinta nahi karta",
//                         "image" : "https://res.cloudinary.com/dg881ug7n/image/upload/v1738786697/wdbvs0epwuctymnohslt.jpg",
//                        " language" : "hindi",
//                        " price" :  "799",
//                        " updatedAt": "2025-02-05T20:38:32.898Z",
//                        " venue" : "XO Club Dwarka, Delhi",
//                         "_id" : "67a3c78afa536adb4d8adbbe"},
//                         {"attendees": "3",
//                             "category" :  "comedy",
//                             "createdAt": "2025-02-05T20:18:18.726Z",
//                             "createdBy" : "67a3a3eee4416661f18c02d7",
//                             "date": "06/02/2025",
//                             "description": "Standup show featuring Ravi Gupta",
//                             "eventname" :  "Kal ki chinta nahi karta",
//                             "image" : "https://res.cloudinary.com/dg881ug7n/image/upload/v1738786697/wdbvs0epwuctymnohslt.jpg",
//                            " language" : "hindi",
//                            " price" :  "799",
//                            " updatedAt": "2025-02-05T20:38:32.898Z",
//                            " venue" : "XO Club Dwarka, Delhi",
//                             "_id" : "67a3c78afa536adb4d8adbbe"},
//                             {"attendees": "3",
//                                 "category" :  "comedy",
//                                 "createdAt": "2025-02-05T20:18:18.726Z",
//                                 "createdBy" : "67a3a3eee4416661f18c02d7",
//                                 "date": "06/02/2025",
//                                 "description": "Standup show featuring Ravi Gupta",
//                                 "eventname" :  "Kal ki chinta nahi karta",
//                                 "image" : "https://res.cloudinary.com/dg881ug7n/image/upload/v1738786697/wdbvs0epwuctymnohslt.jpg",
//                                " language" : "hindi",
//                                " price" :  "799",
//                                " updatedAt": "2025-02-05T20:38:32.898Z",
//                                " venue" : "XO Club Dwarka, Delhi",
//                                 "_id" : "67a3c78afa536adb4d8adbbe"},
//                                 {"attendees": "3",
//                                     "category" :  "comedy",
//                                     "createdAt": "2025-02-05T20:18:18.726Z",
//                                     "createdBy" : "67a3a3eee4416661f18c02d7",
//                                     "date": "06/02/2025",
//                                     "description": "Standup show featuring Ravi Gupta",
//                                     "eventname" :  "Kal ki chinta nahi karta",
//                                     "image" : "https://res.cloudinary.com/dg881ug7n/image/upload/v1738786697/wdbvs0epwuctymnohslt.jpg",
//                                    " language" : "hindi",
//                                    " price" :  "799",
//                                    " updatedAt": "2025-02-05T20:38:32.898Z",
//                                    " venue" : "XO Club Dwarka, Delhi",
//                                     "_id" : "67a3c78afa536adb4d8adbbe"}

// ]
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
      <AnimatePresence mode="wait">
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


