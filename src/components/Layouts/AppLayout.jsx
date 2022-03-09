import React from 'react'
import Carousel from '../Carousel/Carousel'
import Header from '../Header/Header'
import MusicList from '../musicList/MusicList'
import Player from '../Player/Player'
import Playlist from '../PlayerList/Playlist'
import Sidebar from '../Sidebar/Sidebar'
const AppLayout = () => {
  return (
    <main className='font-montserrat-medium'>
        <Sidebar/>
        <Header/>
        <Carousel/>
        <Playlist/>
        <MusicList/>
        <Player/>
   
    </main>
  )
}

export default AppLayout