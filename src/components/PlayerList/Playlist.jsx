import React from 'react'
import { HiChartBar, HiMicrophone, HiMusicNote, HiOutlineMusicNote } from 'react-icons/hi'

const Playlist = () => {
  return (
    <section className='absolute text-slate-200 md:left-28 left-3 top-[720px] right-3 bg-black  bg-opacity-30 p-4 rounded-xl flex flex-row'>
    <div className='flex  flex-row  font-dancing-bold text-lg mr-3 hover:border-b duration-500 border-lime-600 hover:text-lime-600 cursor-pointer rounded-lg p-2 '>
    <HiMusicNote siz={24} className="mt-1 mr-3"/>
    Popular
    </div>
    <div className='flex flex-row font-dancing-bold text-lg mr-3 hover:border-b duration-500 border-lime-600 hover:text-lime-600 cursor-pointer rounded-lg p-2 '>
    <HiChartBar siz={24} className="mt-1 mr-3"/>
    Albums
    </div>
    <div className='flex flex-row font-dancing-bold text-lg mr-3 hover:border-b duration-500 border-lime-600 hover:text-lime-600 cursor-pointer rounded-lg p-2 '>
    <HiMicrophone siz={24} className="mt-1 mr-3"/>
    Songs
    </div>
    </section>
   
  )
}

export default Playlist