import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEventStore } from "../store/useEventStore";
import {
  Calendar,
  MapPin,
  Languages,
  Layers2,
  IndianRupee,
  User,
  Twitter,
} from "lucide-react";
import { io } from "socket.io-client";
import { Accordion } from "../skeletons/Accordion";
import Events from "@/skeletons/Events";
import Navbar from "./Navbar";
import { axiosInstance } from "@/lib/axios";
import BouncingBall from "@/skeletons/BouncingBall";
import toast from "react-hot-toast";
import ShimmerUI from "@/skeletons/ShimmerUI";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";
const socket = io(BASE_URL);

const EventById = () => {
  const { id } = useParams();
  const { loadingEvents, eventWithId, getEventID } = useEventStore();
  const [attendees, setAttendees] = useState(0);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    if (id) {
      getEventID(id);
    }
  }, [id, getEventID]);

  useEffect(() => {
    if (eventWithId) {
      setAttendees(eventWithId.attendees || 0);
    }
  }, [eventWithId]);

  useEffect(() => {
    socket.on("attendeeCountUpdated", (data) => {
      if (data.eventId === id) {
        setAttendees(data.attendees);
        setRegistered(true);
      }
    });

    return () => {
      socket.off("attendeeCountUpdated");
    };
  }, [id]);

  const handleRegister = async () => {
    try {
      const response = await axiosInstance.post(`/events/register/${id}`);
      if (response.status === 200) {
        toast.success("Registered successfully!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  if (loadingEvents) return <ShimmerUI />;
  if (!eventWithId)
    return <p className="text-red-500 text-center mt-5">Event not found.</p>;

  return (
    <div>
      <Navbar />
      <div className="flex md:flex-row flex-col justify-between m-10">
        <div className="h-full w-full md:w-1/2 m-3 p-2">
          <img
            src={eventWithId.image}
            alt={eventWithId.eventname}
            className="w-full h-95 object-cover rounded-lg"
          />
          <div className="m-5 flex items-center">
            <BouncingBall />
            <p className="m-4 text-lg">No of people Registered:</p>
            <p>{attendees}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col m-5">
          <div className="border-2 border-gray-600 p-4 rounded-lg">
            <h1 className="text-2xl font-bold md:text-4xl m-5 text-center">
              {eventWithId.eventname}
            </h1>
            <div className="flex items-center m-3 ml-7 text-lg">
              <Calendar className="size-5 mr-3" /> {eventWithId.date}
            </div>
            <div className="flex items-center m-3 ml-7 text-lg">
              <MapPin className="size-5 mr-3" /> {eventWithId.venue}
            </div>
            <div className="flex items-center m-3 ml-7 text-lg">
              <Languages className="size-5 mr-3" /> {eventWithId.language}
            </div>
            <div className="flex items-center m-3 ml-7 text-lg">
              <Layers2 className="size-5 mr-3" /> {eventWithId.category}
            </div>
            <div className="flex items-center border-none rounded-lg p-3 justify-between m-5">
              <div className="flex items-center font-bold text-4xl text-white p-1 border-none rounded-lg">
                <IndianRupee className="size-8 mr-3" />
                {eventWithId.price}
              </div>
              {!registered ? (
                <button
                  onClick={handleRegister}
                  type="button"
                  className="text-white bg-red-700 hover:bg-red-800 cursor-pointer focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-3 text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Register
                </button>
              ) : (
                <button
                  type="button"
                  disabled
                  className="text-white bg-red-500 font-medium rounded-lg text-sm p-3 text-center inline-flex items-center me-2"
                >
                  Registered
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center m-2 mt-4 bg-gray-800 p-3 border-4 border-gray-600 rounded-lg justify-between">
            <div className="flex text-lg font-md">
              <User className="size-6 mr-3" /> <p>Invite your friends!</p>
            </div>
            <div className="flex text-lg font-md">
              <Twitter className="size-6 mr-3" />
              <a
                className="twitter-share-button"
                href={`https://twitter.com/intent/tweet?text=🚀 Join me at ${eventWithId.eventname}! 🎉 Don't miss out! Check it out here: https://events-kyyg.onrender.com/event/${id} &hashtags=Event,Party,Networking`}
                data-size="large"
              >
                Tweet
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="m-15">
        <h1 className="font-bold text-4xl">About the event</h1>
        <p>{eventWithId.description}</p>
        <div className="m-5 p-5">
          <Accordion />
        </div>
      </div>
      <div className="m-15">
        <h1 className="text-4xl font-bold">You May Also Like ❤️</h1>
        <div>
          <Events />
        </div>
      </div>
    </div>
  );
};

export default EventById;
