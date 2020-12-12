import React from "react"
import { navigate } from "gatsby"

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center py-4">
      <h1 className="text-lg font-semibold">Page Not Found</h1>
      <p>We couldn't find the page you are looking for</p>
      <div className="flex flex-col">
        <button
          onClick={() => navigate("/")}
          className="p-4 my-2 bg-red-400 shadow-md rounded-md"
        >
          <p className="text-gray-800 font-bold">Go Home</p>
        </button>
      </div>
    </div>
  )
}

export default NotFound
