import React from "react";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
    const navigate = useNavigate()
    const categories = [
        { name: "Art", image: "/art.png" },
        { name: "Comedy", image: "/comedy.png" },
        { name: "Cost", image: "/cost.png" },
        { name: "Courses", image: "/courses.png" },
        { name: "Music", image: "/music.png" },
        { name: "Workshop", image: "/workshop.png" }
    ];
    // flex space-x-6 flex-col md:flex
    return (
        <div className="m-10">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
                {categories.map((category, index) => (
                    <li 
                        key={index} 
                        className="cursor-pointer m-2" 
                        onClick={() => navigate(`/events/${category.name.toLowerCase()}`)}
                    >
                        <img 
                            src={category.image} 
                            alt={category.name} 
                            className="w-full h-20 md:h-full object-cover rounded-lg"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
