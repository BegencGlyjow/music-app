import React from 'react'
import { HiAcademicCap } from 'react-icons/hi'
import { IoCloudDownloadOutline, IoHeart } from 'react-icons/io5'
import lost from '../../assets/img/3.jpeg'

const MusicList = () => {
  return (
    <main className='absolute grid grid-cols-12 grid-rows-6 gap-2 left-3 md:left-28  text-slate-50 right-3 top-[840px] h-[800px]  rounded-xl p-3 bg-black/25 backdrop-blur-lg  overflow-hidden shadow-xl shadow-lime-600/25'>
        <div className='bg-none col-span-12 md:col-span-6 text-center'>
            <div className='rounded-lg p-2 bg-lime-900/20 flex justify-between  items-center'>
                   
                   <div className='flex'>
                   <img src={lost} alt="" className='w-20 h-20 rounded-2xl' />
                   <div className='flex flex-col'>
                   <h1 className='ml-3 mt-4 text-xl'>XXXTENTACION</h1>
                    <p>moonlight</p>
                   </div>
                       </div> 
                   <div className=' hover:bg-lime-800/50 text-rose-700 duration-500 cursor-pointer rounded-xl p-2'>
                        <IoHeart size={34} className=""/>
                   </div>
              
            </div>
        </div>
        <div className='bg-none col-span-12 md:col-span-6 text-center'>
            <div className='rounded-lg p-2 bg-lime-900/20 flex justify-between  items-center'>
                   
                   <div className='flex'>
                   <img src={lost} alt="" className='w-20 h-20 rounded-2xl' />
                   <div className='flex flex-col'>
                   <h1 className='ml-3 mt-4 text-xl'>XXXTENTACION</h1>
                    <p>moonlight</p>
                   </div>
                       </div> 
                   <div className=' hover:bg-lime-800/50 text-yellow-400 duration-500 cursor-pointer rounded-xl p-2'>
                        <IoCloudDownloadOutline size={34} className=""/>
                   </div>
              
            </div>
        </div>
        
     
    </main>
  )
}

export default MusicList