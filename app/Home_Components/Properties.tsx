import React from 'react'
import Card from '../Components/UI/Card'

export default function Properties() {
    return (
        <section className='w-full bg-black h-fit flex items-center justify-start flex-col overflow-hidden  '>
            <div className="box w-[90%] flex-col items-center justify-center">
                <div className="left flex flex-row items-start justify-around h-[16vh] mt-20">
                    <div className='flex flex-col w-[80%] text-white items-start justify-between '>
                        <h2 className='text-5xl mb-4'>Selected properties</h2>
                        <p className='w-[60%]'>
                            A curated selection of homes and retreats that embody comfort, style, and thoughtful architecture — chosen for their unique charm and quality of living.
                        </p>
                    </div>

                    <div className="button mt-5 w-[15%]">
                        <button className='border-2 w-[100%] border-gray-300 border-3 bg-white text-black opacity-90 rounded-[50px] px-2 py-2 cursor-pointer text-[20px]'>See All Properties</button>
                    </div>
                </div>

                <div className="bg-white h-[2px] mt-4 ">

                </div>

                <div className="black flex flex-row gap-10 py-10">
                    <Card />
                    <Card />
                    <Card />
                </div>

                <div className="black flex flex-row gap-10 py-10">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>


        </section>
    )
}
