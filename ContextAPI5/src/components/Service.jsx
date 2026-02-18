import React from 'react'

const Service = () => {
  return (
    <div>
      <h1 className="text-5xl font-thin">Service</h1>
      <button 
      onClick={() => navigate(-1)}
      className="bg-white text-black px-4 py-2 rouded"
      >
        Go back
      </button>
    </div>
  )
}
  
export default Service;