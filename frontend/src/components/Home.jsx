import { Carousel } from "@/skeletons/carousel2"
import { Categories } from "@/skeletons/Categories"
import Events from "@/skeletons/Events"
import { Flame } from "lucide-react"
import Navbar from "./Navbar"
const Home = () => {
  return (
    <div className="flex justify-center min-w-screen min-h-screen">
  <div className="relative rounded-lg shadow-lg w-full m-6 p-2">
  <Navbar></Navbar>
    {/* Carousel Component */}
    <div className="w-full h-auto mb-6">
      <Carousel></Carousel>
    </div>
    
    {/* Text Content */}
    <div className="text-center text-lg text-gray-700">
    <div className="flex ml-10 mt-3">
    <Flame className="text-white size-8 mr-5" /> <h1 className="text-[#2290ff] font-bold text-3xl">  Trending Events</h1>
    </div>
   <div>
    <Events></Events>
   </div>
    </div>
    <div>
      <Categories></Categories>
    </div>
  </div>
</div>

  )
}

export default Home