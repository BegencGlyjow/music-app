import { motion } from 'framer-motion'
import React from 'react'
import AppLayout from '../../components/Layouts/AppLayout'

const Favorite = () => {
  return (
    <AppLayout>
        <motion.h1 animate={{ opacity:1, y:[-400,0,10,0], }}
            transition={{ duration:1 }}
        className='text-center font-indieflower-regular font-extrabold mt-3 text-2xl lg:text-4xl text-slate-50'>
                Favorite songs
        </motion.h1>
        <main className='ml-4 mt-7 grid grid-cols-12 gap-x-5 gap-y-2 lg:gap-x-14 duration-500'>
            <aside className='lg:col-span-3 sm:col-span-6 col-span-12  w-full mx-auto'>
                  <div className='py-3 bg-blue-700'>
                      sdf
                    </div> 
            </aside>
            <aside className='lg:col-span-3 sm:col-span-6 col-span-12  w-full mx-auto'>
                  <div className='py-3 bg-blue-700'>
                      sdf
                    </div> 
            </aside>
            <aside className='lg:col-span-3 sm:col-span-6 col-span-12  w-full mx-auto'>
                  <div className='py-3 bg-blue-700'>
                      sdf
                    </div> 
            </aside>
            <aside className='lg:col-span-3 sm:col-span-6 col-span-12  w-full mx-auto'>
                  <div className='py-3 bg-blue-700'>
                      sdf
                    </div> 
            </aside>
        </main>
    </AppLayout>
  )
}

export default Favorite