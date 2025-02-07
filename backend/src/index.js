import http from 'http';
import { Server } from 'socket.io';
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './lib/connectDb.js';
import authRouter from './routes/auth.route.js';
import eventRouter from './routes/events.route.js';
import cookieparser from 'cookie-parser';
import cors from "cors"
import path from 'path';

dotenv.config();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve()
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // You can restrict this to specific domains if needed
  },
});

app.use(express.json());
app.use(cookieparser());
app.use(cors({
  origin:"http://127.0.0.1:5173",
  credentials:true
}))

connectDB();

app.use("/api/auth", authRouter);
app.use("/api/events", eventRouter);

io.on("connection", (socket) => {
  console.log("a user connected");
  
  // Testing if the socket emits events correctly
  socket.on("registerForEvent", (data) => {
    console.log("Registering for event", data);
    io.emit("attendeeCountUpdated", {
      eventId: data.eventId,
      attendees: data.attendees,
    });
    io.emit("newRegistration", {
      message: `${data.username} has registered for the event.`,
      eventId: data.eventId,
    });
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,"../frontend/dist")))

  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
  })
}
app.get('/ping', (req, res) => {
  res.send('Pong');
});

server.listen(PORT, () => {
  console.log("Server up on port", PORT);
});

export { io };
