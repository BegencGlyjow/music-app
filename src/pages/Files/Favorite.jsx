import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { HiHeart } from 'react-icons/hi';
import api from '../../common/api.service';
import AppLayout from '../../components/Layouts/AppLayout'

const Favorite = () => {
  const [allfiles, setFiles] = useState([]);

  const getFiles = async () => {
    try {
      await api.get('/mp3')
        .then(response => {
          console.log(response.data)
          setFiles(response.data.data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFiles()
  }, [])
  return (
    <AppLayout>
      <motion.h1 animate={{ opacity: 1, y: [-400, 0, 10, 0], }}
        transition={{ duration: 1 }}
        className='text-center font-indieflower-regular font-extrabold mt-3 text-2xl lg:text-4xl text-slate-50'>
        Halananlar
      </motion.h1>
      <main className='ml-4 mt-7 grid grid-cols-12 gap-x-5 gap-y-2 lg:gap-x-14 duration-500'>

        {
          allfiles.map((file, id) => {
            return (
              <aside key={id} className='flex items-center col-span-6 mb-7 md:col-span-4 lg:col-span-4 xl:col-span-3 2xl:col-span-2 bg-slate-900  shadow-xl shadow-lime-600/30  rounded-xl p-2 overflow-hidden group'>
                <img src={file.image} alt="" className='rounded-md object-cover w-20 h-20' />
                <div className="pt-4 px-3 flex flex-col text-gray-50  pb-2 w-full truncate font-montserrat-regular text-lg">
                  {file.artist_name}
                  <small>
                    {file.name}
                  </small>
                </div>
                <HiHeart className='text-red-600' size={42} />
              </aside>
            )
          })


        }

      </main>
    </AppLayout>
  )
}

export default Favorite