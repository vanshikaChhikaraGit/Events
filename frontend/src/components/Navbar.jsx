import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      toast.success("Logged out successfully!");
      window.location.href="/login";
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
     // Ensure navigation happens no matter what
  };
  

  return (
    <div className="navbar bg-base-300 rounded-box px-4 flex justify-between m-2 mt-5 mb-5">
      {/* Left Side: Logo */}
      <div className="flex-1">
        <Link to={"/"} className="text-4xl font-bold">Events</Link>
      </div>

      {/* Right Side: Buttons */}
      <div className="flex items-center gap-4">
        {/* List Your Event Button */}
        <button
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
          onClick={() => navigate("/listyourevent")}
        >
          List Your Event
        </button>

        {/* Dropdown for Profile & Logout */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost rounded-btn"
          >
            <CircleUserRound className="size-8 cursor-pointer" />
          </button>

          {isOpen && (
            <ul
              className="absolute right-0 mt-2 w-48 shadow-lg rounded-lg overflow-hidden z-50 bg-gray-800"
              onMouseLeave={() => setIsOpen(false)}
            >
              <li>
                <button
                  className="block w-full text-left px-4 py-2 cursor-pointer"
                  onClick={() => navigate("/yourregisteredevent")}
                >
                  Registered Events
                </button>
              </li>
              <li>
                <button
                  onMouseDown={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 cursor-pointer"
                >
                  Log Out
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;