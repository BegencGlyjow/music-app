import React from 'react'
import hand from '../../assets/audio/hand.mp3'
const Player = () => {
  return (
    <main className='translate-y-0 transform h-20 duration-500 
    flex items-center justify-between z-40 fixed bottom-0 left-0 
    right-0 w-full py-2 lg:py-2 px-2 lg:px-5
     bg-black shadow-lime-600 bg-opacity-70  backdrop-blur shadow-2xl'
     >
       <audio src={hand} className="bg-black p-5"></audio>
    </main>
  )
}

export default Player