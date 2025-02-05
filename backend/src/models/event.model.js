import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    eventname: { type: String},
    description: { type: String},
    date: { type: String},
    price:{type:String},
    venue:{type:String},
    language:{type:String},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    attendees: { type: Number, default: 0 },
    category: { type: String},
    image: {type:String}
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
