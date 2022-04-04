import React, { useState } from 'react'
import { HiOutlineMenuAlt3, HiOutlineSun, HiOutlineUser } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import Player from '../Player/Player'
import SearchBar from '../SearchBar/SearchBar'
import Sidebar from '../Sidebar/Sidebar'
const AppLayout = ({ children }) => {

  const [toggle, setToggle] = useState(false)

  return (
    <main className='duration-700'>
      <Sidebar toggle={toggle} setToggle={setToggle} />
      <section className='absolute left-2 lg:left-32 top-3 right-2 select-none '>
        <div className='static flex flex-row'>
          <div className='bg-black/20 p-1 mr-2 block lg:hidden duration-1000  items-center justify-center rounded-lg cursor-pointer border border-slate-500'>
            <HiOutlineMenuAlt3 size={34} className="text-slate-200" />
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