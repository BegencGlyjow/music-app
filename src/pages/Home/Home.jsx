import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import AppLayout from '../../components/Layouts/AppLayout'
import MusicList from '../../components/musicList/MusicList'
import Playlist from '../../components/PlayerList/Playlist'

const Home = () => {
    
  return (
  <AppLayout>
      <Carousel/>
      <Playlist/>
      <MusicList/>
  </AppLayout>
  )
}

export default Home