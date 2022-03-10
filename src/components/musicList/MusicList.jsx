import React from 'react'
import { HiAcademicCap, HiFire, HiOutlineBell, HiOutlineFire } from 'react-icons/hi'
import { IoCloudDownloadOutline, IoHeart } from 'react-icons/io5'
import lost from '../../assets/img/3.jpeg'

const MusicList = () => {
  return (
    <main className='grid grid-cols-12 gap-x-5 lg:gap-x-14 font-calistoga-Regular font-light'>
        <main className="w-full mx-auto col-span-12 lg:col-span-6">
        <aside className='flex justify-between items-center text-3xl mt-3 mb-4 font-dancing-bold text-slate-50 border-r border-l border-lime-600 p-2 rounded-full'>
            <div className='flex flex-row text-4xl'>
            <HiOutlineBell className=' text-slate-50'/>
                New relases
            </div>
              new     
                </aside>
                <aside className='flex justify-between items-center text-3xl mt-3 mb-4 font-dancing-bold text-slate-50 border-r border-l border-lime-600 p-2 rounded-full'>
                    <img src={lost} alt="" className='h-10 w-10 rounded-full ml-5' />    
                </aside>
        </main>
        <main className="w-full mx-auto col-span-12 lg:col-span-6">
        <aside className='flex justify-between text-3xl items-center mt-3 mb-4 font-dancing-bold text-slate-50 border-r border-l border-lime-600 p-2 rounded-full'>
            <div className='flex flex-row text-4xl'>
            <HiOutlineFire className=' text-slate-50'/>
            Hot Hits
            </div>
                 new  
                </aside>
        </main>
    </main>
  )
}

export default MusicList