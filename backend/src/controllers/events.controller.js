import cloudinary from "../lib/cloudinary.js";
import Event from "../models/event.model.js"
import User from "../models/user.model.js";
import { io} from "../index.js"

export const getEvents = async (req, res) => {
    try {
      const events = await Event.find();
      return res.status(200).json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getEventById = async(req,res)=>{
    try {
        const { id } =req.params;
        const event = await Event.findById(id)
        return res.status(200).json(event);
      } catch (error) {
        console.error("Error fetching event by id:", error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
}

export const createEvent = async(req,res)=>{
    try {
        const { eventname,description,date,price,venue,language,category,image } = req.body;
        const eventCategory = category.toLowerCase()
        const createdBy = req.user._id;
        const uploadResponse = await cloudinary.uploader.upload(image);
        const uploadImageResponse = uploadResponse.secure_url
        const newEvent = new Event({
           eventname,
           description,
           date,
           price,
           venue,
           language,
           category:eventCategory,
           image:uploadImageResponse,
           createdBy
        })

        if(newEvent){
           await newEvent.save()
           res.status(201).json(newEvent)
        }else{
            res.status(400).json({message:"invalid event data input"})
        }

    } catch (error) {
        console.log("error in the add event controller "+ error)
        res.status(500).json({message:"internal server error"})
    }
}

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params; // Extract the event ID from URL params

    // Find the event by ID and delete it
    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    return res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const registerForEvent = async (req, res) => {
    try {
      const { id } = req.params; // Getting the event ID from the URL params
      const userId = req.user._id; // Assuming user ID is available in the `req.user` from middleware (JWT)
  
      // Find the event by ID
      const event = await Event.findById(id);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
  
      // Find the user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Check if the user has already registered for this event
      if (!user.registeredEvents.includes(id)) {
        // Add the event ID to the user's registeredEvents array
        user.registeredEvents.push(id);
        await user.save();
  
        // Increment the attendee count for the event
        event.attendees += 1;
        await event.save();
  
        // Emit an event to update the frontend with the new attendee count
        io.emit("attendeeCountUpdated", {
          eventId: id,
          attendees: event.attendees,
        });
  
        // Emit another event to notify about the new registration
        io.emit("newRegistration", {
          message: `${user.fullName} has registered for the event.`,
          eventId: id,
        });
  
        return res.status(200).json({ message: "User registered successfully" });
      } else {
        return res.status(400).json({ message: "User already registered for this event" });
      }
    } catch (error) {
      console.error("Error registering for event:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

export const userListedEvents = async(req,res)=>{
    try {
    const userId = req.user._id;
    const events = await Event.find({createdBy:userId})
    if (!events) {
        return res.status(404).json({ message: "No events found" });
      }
  
    return res.status(200).json(events);
    } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
    }
    
}

export const userRegisteredEvents = async (req, res) => {
    try {
      const userId = req.user._id; // Access userId from req.user._id
      const user = await User.findById(userId).populate({
        path: "registeredEvents", // Populating registered events with full event details
        select: "eventname description venue price language category image", // Select the fields you need
      });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const registeredEvents = user.registeredEvents; // This will now be the full event objects
  
      return res.status(200).json(registeredEvents);
    } catch (error) {
      console.error("Error fetching registered events:", error);
      return res.status(500).json({ message: "Server error" });
    }
  };