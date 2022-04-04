import React, { useState } from 'react'
import { HiOutlineChartBar, HiOutlineDotsHorizontal, HiOutlineHome, HiOutlineMicrophone, HiOutlineVideoCamera } from 'react-icons/hi'
import { IoCompassSharp } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { Audio, } from 'react-loader-spinner'



const Sidebar = ({ toggle, setToggle }) => {

  return (

    <section className={`fixed top-0 -left-28 xl:left-0  duration-500   flex flex-col p-4 bg-gradient-to-t  from-black to-lime-900/20 items-center w-[90px] h-screen space-y-8 border-r border-lime-500/50`}>

      <div className='mt-10 px-8  bg-none'>
        <Audio color="#1EB135" height="60" width="20" className="shadow-xl shadow-lime-600" />
      </div>
      <div className='flex flex-col space-y-8'>
        <NavLink to={'/music-app'}>
          <HiOutlineHome className='text-slate-200 hover:shadow-2xl shadow-lime-600  hover:text-lime-500 text-5xl hover:border-b-4  border-lime-600 hover:scale-125 duration-500 rounded-full p-2' />
        </NavLink>
        <NavLink to={'/'}>
          <IoCompassSharp className='text-slate-200 hover:text-lime-500 text-5xl hover:border-b-4 border-lime-600 duration-500  hover:scale-125 rounded-full p-2' />
        </NavLink>
        <NavLink to={'/artist'}>
          <HiOutlineMicrophone className='text-slate-200 hover:text-lime-500 text-5xl hover:border-b-4 duration-500 border-b-lime-600 hover:scale-125 rounded-full p-2' />
        </NavLink>
        <NavLink to={'/'}>
          <HiOutlineVideoCamera className='text-slate-200 hover:shadow-2xl shadow-lime-600  hover:text-lime-500 text-5xl hover:border-b-4  border-lime-600 hover:scale-125 duration-500 rounded-full p-2' />
        </NavLink>
        <NavLink to={'/favorites'}>
          <HiOutlineChartBar className='text-slate-200 hover:text-lime-500 text-5xl hover:border-b-4 border-lime-600 duration-500  hover:scale-125 rounded-full p-2' />
        </NavLink>

        <HiOutlineDotsHorizontal className='text-slate-200 hover:text-lime-500 text-5xl hover:border-b-4 duration-500 border-lime-600  hover:scale-125 rounded-full p-2' />
      </div>
    </section>
  )
}

export default Sidebar