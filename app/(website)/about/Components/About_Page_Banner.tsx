import React from 'react'

export default function About_Page_Banner() {
    return (
        <div
            className="md:w-[95%] md:h-[97vh] h-[80vh] mx-2 my-3 pb-10 md:px-20 md:pt-30 flex flex-col items-center justify-between border-[1px] border-white  rounded-[20px] bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: "url('./1920/1920_16.jpeg')" }}
        >
            <div className="top ">
                <h1 className='md:text-5xl text-3xl md:w-[50%] w-[80%] mb-7 md:text-start text-center font-serif'>
                    Nordic Distinctive spaces, guided by insight and human connection.
                </h1>
            </div>
            <div className='w-[100%]'>
                <div className=" md:w-full w-[100%] flex md:flex-row flex-col items-center md:justify-between            justify-center w-full"
                >
                    <h1 className='md:text-1xl text-1xl md:w-[15%] w-[80%] mb-7 md:text-start text-center font-serif'>
                        Location-driven curation 
                        Market-oriented vision
                    </h1>

                    <h1 className='md:text-1xl text-1xl md:w-[40%] w-[80%] mb-7 md:text-start text-center font-serif'>
                        Market-oriented vision
                    </h1>

                    <button
                        className='ackdrop-blur-xl bg-white/20 border border-white/20
                        px-8 py-3 rounded-[40px] flex items-center justify-between 
                        md:w-[fit] rounded-full flex flex-col text-1xl mb-2 font-serif'
                    >
                        Explore Collection
                    </button>

                </div>
                <div className="w-full mt-10 md:mt-0">
                    <div className="h-[2px] bg-white line-animate"></div>
                </div>
            </div>


        </div>
    )
}
