import React, { useState } from 'react'
import { HiOutlineChartBar, HiOutlineDotsHorizontal, HiOutlineHome, HiOutlineMenuAlt3, HiOutlineMicrophone, HiOutlineSun, HiOutlineUser, HiOutlineVideoCamera } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import Player from '../Player/Player'
import SearchBar from '../SearchBar/SearchBar'
import { IoCompassSharp } from 'react-icons/io5'
import { Audio } from 'react-loader-spinner'
const AppLayout = ({ children }) => {

  const [toggle, setToggle] = useState(false)

  return (
    <main className='duration-500'>
      {/* <Sidebar toggle={toggle} setToggle={setToggle} /> */}
      <section className={`absolute  top-0 ${toggle ? 'left-0' : '-left-28'} xl:left-0  duration-500   flex flex-col p-4 bg-gradient-to-t  from-black to-lime-900/20 items-center w-[90px] h-screen space-y-8 border-r border-lime-500/50`}>

        <div className='mt-10 px-8'>
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
      <section className='absolute left-2 lg:left-32 top-3 right-2 select-none '>
        <div className='static flex flex-row'>
          <div className='bg-black/20 p-1 mr-2 block lg:hidden duration-1000  items-center justify-center rounded-lg cursor-pointer border border-slate-500'>
            {!toggle ?
              (
                <HiOutlineMenuAlt3 onClick={() => setToggle(!toggle)} size={34} className="text-slate-200" />

              ) :
              (
                <AiOutlineClose size={34} className="text-slate-200" onClick={() => setToggle(!toggle)} />
              )
            }
          </div>
          <SearchBar />
          <div className='bg-black/20 p-1 flex items-center justify-center rounded-lg cursor-pointer border border-slate-500'>
            <HiOutlineSun size={34} className="text-slate-200" />
          </div>
          <NavLink to={'/login'} className='bg-black/20 p-1 flex justify-center items-center border border-slate-500 ml-2 rounded-lg cursor-pointer'>
            <HiOutlineUser size={34} className="text-slate-200" />
          </NavLink>
        </div>
        {children}
      </section>

      <Player />
    </main>
  )
}

export default AppLayout