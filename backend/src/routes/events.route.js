import e from "express";
import { middleware } from "../middleware/middleware.js";
import { createEvent, deleteEvent, getEventById, getEvents, registerForEvent, userListedEvents, userRegisteredEvents } from "../controllers/events.controller.js";

const router = e.Router()


router.get("/getevents", getEvents); // ✅ Fetch all events (with optional filters)
router.get("/geteventbyid/:id", getEventById); // ✅ Fetch a single event by ID
router.post("/addevent", middleware, createEvent); // ✅ Create an event
router.post("/register/:id", middleware, registerForEvent); // ✅ Register a user for an event
router.delete("/deleteevent/:id", middleware, deleteEvent); // ✅ Delete an event
router.get("/registeredevents",middleware,userRegisteredEvents ); // ✅ Fetch real-time attendee count
router.get("/listedevents",middleware,userListedEvents)


export default router;