import React from 'react'
import hand from '../../assets/audio/hand.mp3'
import pol from '../../assets/img/1.jpeg'
const Player = () => {
  return (
    <main className='translate-y-0 transform h-28 duration-500 
    flex items-center justify-between z-40 fixed bottom-0 left-0 
    right-0 w-full py-2 lg:py-5 px-2 lg:px-5
     bg-black shadow-lime-600 bg-opacity-70  backdrop-blur shadow-2xl'
     >
    
       <aside className="items-center w-64 hidden sm:flex">
             <img src={pol} className="w-20 h-20 object-cover rounded-xl hidden md:block"/>
             <div className="flex flex-col ml-4 text-xl"><span className=" font-gilroy-bold text-gray-700 dark:text-white truncate">Khalid</span>
             <span className="text-md text-gray-400 font-gilroy-regular truncate">Sigaret</span></div>
             </aside>
             <aside className="flex items-center">
             <div className="flex items-center lg:ml-8">
               <button type="button" className="text-lime-600" aria-label="Previous">
                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="38" width="38" xmlns="http://www.w3.org/2000/svg">
                   <path d="m16 7-7 5 7 5zm-7 5V7H7v10h2z"></path></svg></button><button type="button" className=" dark:bg-slate-50  mx-2  flex-center rounded-full text-lime-800" aria-label="Play">
                     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="46" width="46" xmlns="http://www.w3.org/2000/svg">
                       <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                       </svg></button><button type="button" className="next" aria-label="Next" className="text-lime-600">
                         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="38" width="38" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7 7v10l7-5zm9 10V7h-2v10z"></path></svg></button></div>
                           <div className="relative w-64 lg:w-96 ml-3 lg:ml-8 flex flex-col ">
                             <aside className="flex flex-col sm:hidden"><span className="font-gilroy-bold text-gray-700 truncate">Gerek dal</span>
                             <span className="text-sm text-gray-600 font-gilroy-regular truncate">Dj Khalid</span></aside>
                             <input type="range" step="1" min="0" max="189.716938" className="w-full text-lime-600"/>
                             </div></aside>
    </main>
  )
}

export default Player