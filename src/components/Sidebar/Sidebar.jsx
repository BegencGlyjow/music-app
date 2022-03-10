import React from 'react'
import {  HiChevronRight,HiOutlineChartBar, HiOutlineDotsHorizontal, HiOutlineHome, HiOutlineMicrophone } from 'react-icons/hi'
import { IoCompassSharp } from 'react-icons/io5'

import hed from './hed.svg'


const Sidebar = () => {
  return (
    <section className='fixed top-0 -left-28 lg:left-0 duration-500 rounded-r-full  flex flex-col p-4 bg-gradient-to-t  from-black to-lime-900/10 items-center w-[90px] h-screen space-y-8 border-r border-lime-500/50'>  
      <img src={hed} alt="" className='w-10 mt-28' />
      <div className='flex flex-col space-y-8'>
        <HiOutlineHome className='text-slate-200 hover:shadow-2xl shadow-lime-600  hover:text-lime-500 text-5xl hover:border-b-4  border-lime-600 hover:scale-125 duration-500 rounded-full p-2' />
        <IoCompassSharp className='text-slate-200 hover:text-lime-500 text-5xl hover:border-b-4 border-lime-600 duration-500  hover:scale-125 rounded-full p-2' />
        <HiOutlineMicrophone className='text-slate-200 hover:text-lime-500 text-5xl hover:border-b-4 duration-500 border-b-lime-600 hover:scale-125 rounded-full p-2' />
        <HiOutlineChartBar className='text-slate-200 hover:text-lime-500 text-5xl hover:border-b-4 border-lime-600 duration-500  hover:scale-125 rounded-full p-2' />
        <HiOutlineDotsHorizontal className='text-slate-200 hover:text-lime-500 text-5xl hover:border-b-4 duration-500 border-lime-600  hover:scale-125 rounded-full p-2' />
      </div>
    </section>
  )
}

export default Sidebar