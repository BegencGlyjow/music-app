import React from 'react'
import images from './images'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
const Carousel = () => {
    const [width, setWidth]=useState(0)
    const carousel =useRef();

    useEffect (() =>{ 
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])
  return (
    <motion.section ref={carousel} className='absolute left-3 md:left-28  right-3 top-[70px]  rounded-xl p-3 bg-black/75 cursor-grab overflow-hidden shadow-xl shadow-lime-600/25'>
        <motion.div className='flex' drag="x" 
        dragConstraints={{
            right:0,
            left:-width
        }}>
            {images.map(image => {
                return (
                    <motion.div className='min-w-[40rem]  p-3' key={image}>
                        <img src={image} alt="" className='w-[500px] h-[300px] pointer-events-none rounded-xl'/>
                    </motion.div>
                )
            })}
        </motion.div>
    </motion.section>
  )
}

export default Carousel