
import React, { useState } from 'react'
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineMail } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'


const Login = () => {
    const [passwordType, setPasswordType] = useState('password')
    const [passwordIcon, setPasswordIcon] = useState(<HiOutlineEyeOff />)
    const handleToggle = () => {
        if (passwordType === 'password') {
            setPasswordType('text')
            setPasswordIcon(<HiOutlineEye />)
        } else {
            setPasswordType('password')
            setPasswordIcon(<HiOutlineEyeOff />)
        }
    }
    return (

        <motion.section
            animate={{ opacity: 1, y: [-400, 0, 40, 0], }}
            transition={{ duration: 2 }}
            className='flex justify-center mt-56 items-center'>
            <aside className='bg-black/40 font-sans p-16 rounded-3xl shadow-xl shadow-lime-800/50'>
                <header className='font-extrabold text-3xl text-center text-slate-50'>Ulgama giriş</header>
                <form action="" className="mt-5">
                    <div className='flex hover:scale-110 bg-slate-100 border-lime-500 border rounded-xl justify-center items-center duration-700'>
                        <input type="email" placeholder='Login' className='focus:outline-none text-xl w-full p-3 rounded-xl   placeholder:text-slate-500 font-extrabold text-slate-900' />
                        <div className=''>
                            <HiOutlineMail size={24} className='mr-3 mt-2 text-slate-800' />
                        </div>
                    </div>

                    <div className='flex hover:scale-110 duration-700'>
                        <input type={passwordType} placeholder='Parol' className='focus:outline-none text-xl w-full mt-5 rounded-l-xl p-3 bg-slate-200 placeholder:text-slate-500 font-extrabold text-slate-900' />
                        <div className='bg-slate-200 rounded-r-xl mt-5'>
                            <div onClick={handleToggle} className='mr-3 mt-2 text-2xl text-slate-800'>
                                {passwordIcon}
                            </div>
                        </div>
                    </div>
                    <div className='flex px-26 mt-6 justify-between items-center'>
                        <NavLink to={'/music-app'} className='flex justify-center items-center bg-lime-600 p-3 w-full text-xl rounded-xl hover:bg-lime-800 hover:translate-y-5 duration-700 font-extrabold text-slate-50'>Tassyklaň</NavLink>
                    </div>

                </form>
            </aside>

        </motion.section>

    )
}

export default Login