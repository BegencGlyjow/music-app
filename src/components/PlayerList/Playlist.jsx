import { motion } from 'framer-motion'
import React from 'react'
import { HiChartBar, HiHeart, HiMicrophone, HiMusicNote } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

const Playlist = () => {
  return (
    <section
      className=' text-slate-50 bg-gradient-to-l from-lime-600/5 to-black/75  bg-opacity-30 mt-3 mb-5 rounded-md flex flex-row justify-between md:justify-center'>
      <motion.div animate={{ opacity: 1, y: [-10, 0, 10, 0, -10, 0, 10, 0, -10, 0] }}
        transition={{ duration: 2 }}
        className="flex flex-row">
        <div className='flex  flex-row font-sans xl:text-2xl font-bold  md:text-lg text-sm mr-3 hover:border-b duration-500 border-lime-600 hover:text-lime-600 cursor-pointer rounded-lg p-2 '>
          <HiMusicNote siz={24} className="mt-1 mr-1" />
          Meşhur
        </div>
        <div className='flex flex-row font-sans xl:text-2xl font-bold md:text-lg text-sm mr-3 hover: hover:border-b duration-500 border-lime-600 hover:text-lime-600 cursor-pointer rounded-lg p-2 '>
          <HiChartBar siz={24} className="mt-1 mr-1" />
          Albomlar
        </div>
        <NavLink to={'/favorites'} className='flex flex-row font-sans xl:text-2xl font-bold md:text-lg text-sm mr-3 hover:border-b duration-500 border-lime-600 hover:text-lime-600 cursor-pointer rounded-lg p-2 '>
          <HiHeart siz={24} className="mt-1 mr-1" />
          Halananlar
        </NavLink>
      </motion.div>

    </section>

  )
}

export default Playlist