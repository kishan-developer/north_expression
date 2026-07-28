"use client";

import React, { useEffect, useState } from 'react'

export default function Card() {
  const [check, setcheck] = useState(false);

    const showButton = () => {
      setcheck(true);
    }

    const hideButton = () => {
      setcheck(false);
    }

  return (
    <div className='w-[33%] h-[70vh]'>
        <h1 className='text-white text-[18px]'>Title</h1>
        <p>Description</p>
        <div className="image w-full h-[90%]" onMouseOut={hideButton} onMouseEnter={showButton}>
            <img 
                src="./card_1.avif" 
                alt="north_logo" 
                className='w-[100%] h-[100%] relative z-0'
            />

            {check && 
              <button 
                className='flex flex-1 w-[33%] items-center justify-center text-center text-black border-2 border-white rounded-[50px] p-2 relative bottom-[50%] z-20 left-[33%] right-[33%] bg-white uppercase semibold'
              >
                See Property
              </button> 
            } 
        
        </div>
    </div>
  )
}
