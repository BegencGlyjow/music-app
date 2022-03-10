import React from 'react'
import { HiChartBar, HiMicrophone, HiMusicNote, HiOutlineMusicNote } from 'react-icons/hi'

const Playlist = () => {
  return (
    <section className=' text-slate-200 bg-black  bg-opacity-30 mt-3 rounded-xl flex flex-row justify-between md:justify-center'>
    <div className='flex  flex-row font-dancing-bold xl:text-2xl font-extrabold  md:text-lg text-sm mr-3 hover:border-b duration-500 border-lime-600 hover:text-lime-600 cursor-pointer rounded-lg p-2 '>
    <HiMusicNote siz={24} className="mt-1 mr-1"/>
    Popular
    </div>
    <div className='flex flex-row font-dancing-bold xl:text-2xl font-extrabold md:text-lg text-sm mr-3 hover: hover:border-b duration-500 border-lime-600 hover:text-lime-600 cursor-pointer rounded-lg p-2 '>
    <HiChartBar siz={24} className="mt-1 mr-1"/>
    Albums
    </div>
    <div className='flex flex-row font-dancing-bold xl:text-2xl font-extrabold md:text-lg text-sm mr-3 hover:border-b duration-500 border-lime-600 hover:text-lime-600 cursor-pointer rounded-lg p-2 '>
    <HiMicrophone siz={24} className="mt-1 mr-1"/>
    Songs
    </div>
    </section>
   
  )
}

export default Playlist