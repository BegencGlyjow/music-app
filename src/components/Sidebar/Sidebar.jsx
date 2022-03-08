import React from 'react'
import {  HiOutlineChartBar, HiOutlineDotsHorizontal, HiOutlineHome, HiOutlineMicrophone } from 'react-icons/hi'
import {  IoCompassSharp } from 'react-icons/io5'
import hed from './hed.svg'
const Sidebar = () => {
  return (
    <section className='fixed top-0 z-40 flex flex-col p-4 bg-black items-center w-[90px] h-screen space-y-8'>
        <img src={hed} alt="" className='w-10' />
        <div className='flex flex-col space-y-8'>
            <HiOutlineHome className='text-slate-50 opacity-[0.85] text-5xl hover:bg-lime-600 hover:scale-110 rounded-xl p-2'/>
            <IoCompassSharp className='text-slate-50 opacity-[0.85] text-5xl hover:bg-lime-600  hover:scale-110 rounded-xl p-2'/>
            <HiOutlineMicrophone className='text-slate-50 opacity-[0.85] text-5xl hover:bg-lime-600 hover:scale-110 rounded-xl p-2'/>
            <HiOutlineChartBar className='text-slate-50 opacity-[0.85] text-5xl hover:bg-lime-300  hover:scale-110 rounded-xl p-2'/>
            <HiOutlineDotsHorizontal className='text-slate-50 opacity-[0.85] text-5xl hover:bg-lime-600  hover:scale-110 rounded-xl p-2'/>
        </div>
    </section>
  )
}

export default Sidebar