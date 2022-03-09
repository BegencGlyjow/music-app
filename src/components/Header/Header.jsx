import React from 'react'
import {  HiOutlineSun, HiOutlineUser } from 'react-icons/hi'
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {
  return (
    <section className='md:ml-[90px] static shadow-xl shadow-lime-800  py-4  w-auto flex flex-row justify-between items-center mr-0 pl-16 pr-7'>
        <SearchBar/>     
        <div className='bg-black/20 p-1.5 rounded-lg cursor-pointer'>
          <HiOutlineSun size={34} className="text-slate-200"/>
        </div>
        <div className='bg-black/20 p-1.5 ml-2 rounded-lg cursor-pointer'>
          <HiOutlineUser size={34} className="text-slate-200"/>
        </div>
    </section>
  )
}

export default Header