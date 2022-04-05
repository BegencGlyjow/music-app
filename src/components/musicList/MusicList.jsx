import React, { useEffect, useState } from 'react'
import { HiOutlineBell, HiOutlineFire } from 'react-icons/hi'
import api from '../../common/api.service';

const MusicList = () => {
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
    <main className='grid grid-cols-12 gap-x-5 mb-28 lg:gap-x-14 font-calistoga-Regular font-light'>
      <main className="w-full mx-auto col-span-12 lg:col-span-6">
        <aside className='flex justify-between items-center text-3xl mt-3 mb-4 font-dancing-bold text-slate-50 border-r border-l border-lime-600 px-6 py-2 rounded-md bg-black/70'>
          <div className='flex flex-row text-4xl'>
            <HiOutlineBell className=' text-slate-50' />
            Täze aýdymlar
          </div>
        </aside>
        {
          allfiles.map((file, id) => {
            return (
              <aside key={id} className='flex-center justify-between text-3xl mt-3 mb-4 font-sans font-bold text-slate-50 border-r border-l border-lime-600 p-2 rounded-md bg-black/70'>
                <div className='flex justify-between items-center'>
                  <div className='flex'>
                    <img src={file.image} alt="" className='rounded-full ml-3 w-10 h-10 object-cover' />
                    <a href="" className='flex flex-col ml-3'>
                      <span className='text-sm mb-1'>{file.artist_name}</span>
                      <span className='text-xs'>{file.name}</span>
                    </a>
                  </div>
                  <audio controls className='opacity-5'>
                    <source src={file.file} type='audio/mpeg' />
                  </audio>
                </div>
                <div className='relative'>
                </div>
              </aside>
            )
          })
        }
      </main>
      <main className="w-full mx-auto col-span-12 lg:col-span-6">
        <aside className='flex justify-between text-3xl items-center mt-3 mb-4 font-dancing-bold text-slate-50 border-r border-l border-lime-600 p-2 rounded-md bg-black/70'>
          <div className='flex flex-row text-4xl'>
            <HiOutlineFire className=' text-slate-50' />
            Hoş owazlar
          </div>
          new
        </aside>
        {
          allfiles.map((file, id) => {
            return (
              <aside key={id} className='flex-center justify-between text-3xl mt-3 mb-4 font-sans font-bold text-slate-50 border-r border-l border-lime-600 p-2 rounded-md bg-black/70'>
                <div className='flex justify-between items-center'>
                  <div className='flex'>
                    <img src={file.image} alt="" className='rounded-full ml-3 w-10 h-10 object-cover' />
                    <a href="" className='flex flex-col ml-3'>
                      <span className='text-sm mb-1'>{file.artist_name}</span>
                      <span className='text-xs'>{file.name}</span>
                    </a>
                  </div>
                  <audio controls className='opacity-5'>
                    <source src={file.file} type='audio/mpeg' />
                  </audio>
                </div>
                <div className='relative'>

                </div>
              </aside>
            )
          })
        }
      </main>
    </main>
  )
}

export default MusicList