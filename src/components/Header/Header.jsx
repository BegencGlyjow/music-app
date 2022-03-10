import React from 'react'
import {  HiOutlineSun, HiOutlineUser } from 'react-icons/hi'
import Carousel from '../Carousel/Carousel'
import MusicList from '../musicList/MusicList'
import Playlist from '../PlayerList/Playlist'
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {
  return (
    <section className='absolute left-2 lg:left-32 top-3 right-3 select-none '>
            <SearchBar/>     
       <Carousel/>
       <Playlist/>
       <MusicList/>
    </section>
  )
}

export default Header