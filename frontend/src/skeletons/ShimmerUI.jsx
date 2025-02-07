import React from 'react'

const ShimmerUI = () => {
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
        {Array.from({length:8}).map(()=>(
            <div className="animate-pulse p-4 border border-gray-200 rounded-3xl-lgbg-white shadow-md">
            <div className="h-40 border-2 border-gray-400 bg-gray-300 rounded-3xl">
            <div className="mt-4">
            <div className="h-5 border-2 border-gray-400 bg-gray-300 rounded-full w-3/4 flex justify-center items-center m-2 "></div>
            <div className="h-4 border-2 border-gray-400 bg-gray-300 rounded w-3/4 m-2 flex justify-center items-center"></div>
            <div className="flex flex-row justify-center items-center">
            <div className="h-6 border-2 border-gray-400 bg-gray-300 rounded-3xl w-1/4 m-2"></div>
            <div className="h-6 border-2 border-gray-400 bg-gray-300 rounded-3xl w-3/4 m-2"></div>
            </div>
          </div>
          <div className="">
            <div className="h-8 border-2 border-gray-400 bg-gray-300 rounded-3xl w-1/4 m-2 "></div>
          </div>
                </div>
            </div>
        ))}
      </div>
  )
}

export default ShimmerUI