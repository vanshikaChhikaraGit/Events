import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { uploadImageToCloudinary } from "@/lib/cloudinary";
import {
  Calendar,
  FileImage,
  MapPin,
  DollarSign,
  Type,
  AlignLeft,
  Camera,
  IndianRupee,
  CaseSensitive,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "@/lib/axios";

const AddEvent = () => {
  const [formData, setFormData] = useState({
    eventname: "",
    description: "",
    date: "",
    price: "",
    venue: "",
    language: "",
    category: "",
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading,setIsUploading] = useState(false)
  const navigate = useNavigate();

  const validateForm = () => {
    if (!formData.eventname.trim())
      return toast.error("Event name is required");
    if (!formData.description.trim())
      return toast.error("Description is required");
    if (!formData.date.trim()) return toast.error("Date is required");
    if (!formData.venue.trim()) return toast.error("Venue is required");
    if (!formData.language.trim()) return toast.error("Language is required");
    if (!formData.category.trim()) return toast.error("Category is required");
    if (!formData.image) return toast.error("Image is required");

    return true;
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    setIsUploading(true); // Show loading indicator
  
    const uploadedImageUrl = await uploadImageToCloudinary(file); // Upload to Cloudinary
  
    if (uploadedImageUrl) {
      setPreviewImage(uploadedImageUrl); // Show preview
      setFormData({ ...formData, image: uploadedImageUrl }); // Store only URL
    } else {
      toast.error("Image upload failed!");
    }
  
    setIsUploading(false);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    setIsSubmitting(true);
  
    try {
      const response = await axiosInstance.post("/events/addevent", formData); // Image is now a URL
  
      if (response.status === 201) {
        toast.success("Event created successfully!");
        navigate("/");
      } else {
        toast.error("Failed to create event.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong.");
    }
  
    setIsSubmitting(false);
  };
  
  return (
    <div className="min-h-screen w-full">
      {/* Left Section - Form */}
      <div className="flex items-center justify-center flex-col p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">Create Event</h1>
            <p className="text-base-content/60">
              List your event details below
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Event Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Name</span>
              </label>
              <div className="relative">
                <CaseSensitive className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                <input
                  type="text"
                  placeholder="Enter event name"
                  className="input input-bordered pl-10 w-full p-3"
                  value={formData.eventname}
                  onChange={(e) =>
                    setFormData({ ...formData, eventname: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                placeholder="Describe your event"
                className="textarea textarea-bordered w-full"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            {/* Date */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                <input
                  type="date"
                  className="input input-bordered pl-10 w-full p-3"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price (in Ruppees)</span>
              </label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                <input
                  type="number"
                  placeholder="0.00"
                  className="input input-bordered pl-10 w-full p-3"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Venue */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Venue</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                <input
                  type="text"
                  placeholder="Event location"
                  className="input input-bordered pl-10 w-full p-3"
                  value={formData.venue}
                  onChange={(e) =>
                    setFormData({ ...formData, venue: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Language */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Language</span>
              </label>
              <input
                type="text"
                placeholder="Enter language"
                className="input input-bordered w-full p-3"
                value={formData.language}
                onChange={(e) =>
                  setFormData({ ...formData, language: e.target.value })
                }
              />
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="E.g. Tech, Music, Business"
                className="input input-bordered w-full p-3"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
            </div>

            {/* Image Upload */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Image</span>
              </label>
              <label
                htmlFor="event-image"
                className="relative flex items-center gap-2 cursor-pointer"
              >
                <Camera className="text-base-content/40 size-5" />
                <span className="text-sm text-gray-500">Click to upload</span>
              </label>
              <input
                type="file"
                id="event-image"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="mt-3 w-32 h-32 object-cover rounded"
                />
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full bg-white text-[#2290ff] font-bold p-4 rounded-lg text-lg cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Event"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
